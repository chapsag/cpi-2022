from Battleship import GRID_SIZE, HitStatus, BattleshipBoard
from random import randint
from typing import List
from collections import Counter


class vector:
    def __init__(self, x: tuple):
        self.vec = x

    def __add__(self, other):
        return vector(tuple([i + j for i, j in zip(self.vec, other.vec)]))

    def __mul__(self, other: int):
        return vector(tuple([other * j for j in self.vec]))

    def __str__(self):
        return str(self.vec)


class Bot:
    __last_turn_status = HitStatus.NONE
    __my_hit_list = [[False for _ in range(GRID_SIZE)] for _ in range(GRID_SIZE)]

    already_made: List[tuple] = []

    def make_random_board(
        self, ships_left: List[int], hit_grid
    ):  # makes random board for simulation
        oris = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        all_spaces_used = []
        for ship_length in ships_left:
            coords = vector((randint(0, 9), randint(0, 9)))
            ori = vector(oris[randint(0, 3)])
            spaces_used: List[tuple] = [
                (coords + (ori * i)).vec for i in range(ship_length)
            ]
            all_spaces_used += spaces_used
        # now check that this board is valid
        # del this

        # 1 : all ships are inside board
        for space in all_spaces_used:
            if not (0 <= space[0] < 10) or not (0 <= space[1] < 10):
                return False
        # 2 : no ships are overlapping
        counted = Counter(all_spaces_used)
        for key in counted:
            if counted[key] != 1:
                return False
        # 3 : no ships are on ms
        for x, y in all_spaces_used:
            if hit_grid[y][x].value == "m":
                return False

        return all_spaces_used

    def make_valid_board(self, ships_left: List[int], hit_grid):
        current = self.make_random_board(ships_left, hit_grid)
        while not (current):
            current = self.make_random_board(ships_left, hit_grid)
        return current

    def disp_grid(self, hit_grid):
        hit = []
        for i, r in enumerate(hit_grid):
            temp = []
            for j, c in enumerate(hit_grid):
                temp.append(hit_grid[i][j].value)
            hit.append(temp)
        return hit

    def make_decision(self, ships_left: List[int], hit_grid, n, invalid):
        all_places_where_ship = []
        for i, r in enumerate(self.disp_grid(hit_grid)):
            for j, c in enumerate(self.disp_grid(hit_grid)):
                if hit_grid[j][i] == "h":
                    for i in range(10):
                        all_places_where_ship.append((i, j + 1))
                        all_places_where_ship.append((i + 1, j))
                        all_places_where_ship.append((i, j - 1))
                        all_places_where_ship.append((i - 1, j))

        for i in range(n):
            all_places_where_ship += self.make_valid_board(ships_left, hit_grid)
        l = len(all_places_where_ship)
        prob_dict = {k: (v / l) for k, v in Counter(all_places_where_ship).items()}
        sorted_prob_dict = {
            k: v for k, v in sorted(prob_dict.items(), key=lambda x: x[1])
        }
        for coords in sorted_prob_dict:
            x, y = coords
            if hit_grid[y][x] != "h" and coords not in invalid:
                return (x, y), sorted_prob_dict[coords], prob_dict
        return (randint(0, 10), randint(0, 10)), 0

    def convert_to_coords(self, x):
        return "ABCDEFGHIJK"[x[0]], x[1]

    def do_turn(self, hit_grid, last_turn_status) -> (str, int):
        self.__last_turn_status = last_turn_status
        # self.make_random_board([1, 2, 3])

        print_hit_board(hit_grid)
        print(self.__last_turn_status)
        # TODO Do something clever
        move, prob, dict = self.make_decision(
            [2, 3, 3, 4, 5],
            hit_grid,
            1,
            self.already_made,
        )
        self.already_made.append(move)
        print(move, prob, dict)
        # TODO Must return a tuple (colLetter, rowNumber)
        return self.convert_to_coords(move)


def print_hit_board(hit_grid):
    board_str = (
        "#  "
        + "".join(
            [f"{letter}  " for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[:GRID_SIZE]]
        )
        + "#\n"
    )

    for row_index, row in enumerate(hit_grid):
        board_str += f"{row_index}  "
        for col_index, tile in enumerate(row):
            board_str += hit_grid[row_index][col_index].value
            board_str += "  "
        board_str += "#\n"

    board_str += "#  " + "#  " * GRID_SIZE + "#\n"
    print(board_str)
