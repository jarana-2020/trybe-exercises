#  Faça um programa que receba um nome e imprima
# o mesmo na vertical em escada invertida.


def vertical_iverted(name):
    word_length = len(name)
    for index in range(len(name)):
        print(name[0 : word_length - index])


def vertical_name(name):
    for delete_letter in range(len(name)):
        for index in range(len(name) - delete_letter):
            print(name[index], end="")
        print()


# vertical_name("ana")
# vertical_iverted("julio")

name = input("Informe o nome")
vertical_iverted(name)
