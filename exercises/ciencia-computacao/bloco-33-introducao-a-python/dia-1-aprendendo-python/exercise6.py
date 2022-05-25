# Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo
# formado ou "não é triangulo", caso não seja possível formar um triângulo.


def check_triangule(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side3 + side1 > side2
    )
    if not is_triangle:
        return "não é triangulo"
    elif side1 == side2 == side3:
        return "Equilátero"
    elif side1 == side2 or side2 == side3 or side3 == side1:
        return "Isósceles"
    else:
        return "Escaleno"


print(check_triangule(5, 3, 4))
