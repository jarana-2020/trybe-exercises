# Calcule a média aritmética dos valores contidos em uma lista.

LIST = [1, 6, 10, 100]


def calc_average(list):
    sum = 0
    length_list = len(list)

    for number in list:
        sum += number
    return sum / length_list


print(calc_average(LIST))
