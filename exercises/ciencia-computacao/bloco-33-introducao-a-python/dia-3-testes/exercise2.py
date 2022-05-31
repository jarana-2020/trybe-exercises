# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por
# letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.
# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9


def convert_expression(expression):
    number = ""
    if not 1 < len(expression) <= 30:
        raise ValueError('Expression with invalid length"')
    for char in expression:
        if char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQR":
            number += "7"
        elif char in "STU":
            number += "8"
        elif char in "WXZY":
            number += "9"
        elif char in "-01":
            number += char
        else:
            raise ValueError("Invalid Character")
    return number
