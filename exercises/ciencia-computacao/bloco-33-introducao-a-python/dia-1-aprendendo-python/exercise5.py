# Considere que a cobertura da tinta é de 1 litro para cada 3 metros
# quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede(em m²).


def calculate_spent(length):
    can_price = 80
    spent_ink = length / 3
    cans_ink = spent_ink // 18
    if spent_ink % 18:
        cans_ink += 1
    total = cans_ink * can_price
    return (cans_ink, total)


print(calculate_spent(54))
