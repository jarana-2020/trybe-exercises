# Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random

words = []

with open("words.txt", mode="r") as file:
    for line in file:
        word = line
        words.append(word.rstrip("\n"))


def random_word():
    word = random.choice(words)
    return word


def scramble_word():
    word = random_word()
    scrambled_word = "".join(random.sample(word, len(word)))
    return word, scrambled_word


def guess_game():
    total_attemps = 1
    word, scrambled_word = scramble_word()
    while total_attemps <= 3:
        print(f"Palavra embaralhada: {scrambled_word}")
        choice = input("Tente adivinhar qual é a palavra")
        if choice == word:
            return print("Você acertou")
        elif total_attemps < 3:
            print("Tente novamente")
            total_attemps += 1
        else:
            return print("Você perdeu")


guess_game()
