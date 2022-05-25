# Dado um arquivo contendo estudantes e suas respectivas notas,
#  escreva um programa que:
# 1. lê todas essas informações;
# 2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3. escreva seus nomes em outro arquivo.

students_rec = []

with open("arquivo.txt", mode="r") as file:
    for line in file:
        student = line
        student = line.split(" ")
        if int(student[1]) < 6:
            students_rec.append(student[0] + "\n")

with open("students-recuperation.txt", mode="w") as students_file:
    print(students_rec)
    students_file.writelines(students_rec)
