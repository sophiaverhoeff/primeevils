import numpy as np


class Polynomial:
    def __init__(self, coefficients):
        self.coefficients = np.array(coefficients)

    def __repr__(self):
        return f"Polynomial({list(self.coefficients)})"

    def get_degree(self):
        return len(self.coefficients) - 1

    def get_roots(self) -> []:
        return np.roots(self.coefficients)


class Fraction:
    def __init__(self, numerator: Polynomial, denominator: Polynomial):
        pass


class Limit:
    def __init__(self, from_data, to_data):
        self.from_data = from_data
        self.to_data = to_data

    def get_data(self):
        return {'from': self.from_data, 'to': self.to_data}

    @staticmethod
    def sanity():
        print('sanity check')
