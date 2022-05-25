#  Escreva um programa que receba vários números naturais e calcule
#  a soma desses valores. Caso algum valor da entrada seja inválido,
#  por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros,
#  no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido".
#  Ao final, você deve imprimir a soma dos valores válidos.


num = input("Informe os valores separados por espaço")
numsArray = num.split(" ")
sum = 0

for number in numsArray:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} não é um digito")
    else:
        sum += int(number)
print(f"A soma dos valores é: {sum}")
