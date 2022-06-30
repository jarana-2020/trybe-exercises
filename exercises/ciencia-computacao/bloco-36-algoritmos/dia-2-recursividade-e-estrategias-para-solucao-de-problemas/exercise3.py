# Crie um algoritmo recursivo que encontre, em uma lista, o maior
# número inteiro.


def larger_num(list):
    size_list = len(list)
    if len(list) == 1:
        return list[0]

    else:
        max_num = larger_num(list[0:size_list - 1])
        if max_num > list[size_list - 1]:
            return max_num
        else:
            return list[size_list - 1]


print(larger_num([1, 8, 3, 22]))
