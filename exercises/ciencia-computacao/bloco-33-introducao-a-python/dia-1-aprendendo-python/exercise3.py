# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def square(num):
    if num > 0:
        for row in range(num):
            print(num * "*")


square(5)
