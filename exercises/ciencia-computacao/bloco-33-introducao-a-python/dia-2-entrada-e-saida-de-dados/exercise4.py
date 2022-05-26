# Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a
# porcentagem de livros em cada categoria em relação ao número total de
# livros. O resultado deve ser escrito em um arquivo no
# formato CSV como o exemplo abaixo.

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import csv
import json


def receive_books(file):
    return json.load(file)


def books_by_category(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def porcentage_books(books_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in books_category.items()
    ]


with open("books.json") as file:
    books = receive_books(file)


total_books = len(books)
books_category = books_by_category(books)
porcentage_books_category = porcentage_books(books_category, total_books)
header = ["categoria", "porcentagem"]

with open("report.csv", mode="w") as file:
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(porcentage_books_category)
