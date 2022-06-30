# Crie um algoritmo não recursivo para contar quantos números pares existem
# em uma sequência numérica (1 a n).


def count_even(n):
    sum = 0
    for num in range(1, n + 1):
        if num % 2 == 0:
            sum += 1
    return sum


print(count_even(10))
