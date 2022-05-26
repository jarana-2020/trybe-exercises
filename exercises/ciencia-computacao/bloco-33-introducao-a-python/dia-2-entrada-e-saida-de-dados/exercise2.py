# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
#  tenha que adivinhar uma palavra que será mostrada com as letras
# embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
# Ao final, a palavra deve ser mostrada na tela, informando
#  se a pessoa ganhou ou perdeu o jogo.

import random


words = ["abacate", "carro", "batman"]


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
