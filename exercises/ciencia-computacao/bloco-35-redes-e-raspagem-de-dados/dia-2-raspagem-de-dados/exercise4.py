# Baseando-se em uma página contendo detalhes sobre um livro
# (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
# faça a extração dos campos título, preço, descrição e url
# contendo a imagem de capa do livro.
# O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76.
# A descrição deve ter o sufixo "more..." removido quando existir.
# Os campos extraídos devem ser apresentados separados por vírgula.
# Ex: título,preço,descrição,capa

import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(
  "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
  )
selector = Selector(text=response.text)
title = selector.css(".product_main h1::text").get()
price = selector.css(
  ".product_main .price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css(
  "#product_description ~ p::text").get()
description_without_sufix = description.replace('...more', '')
cover = URL_BASE + selector.css(".active img::attr(src)").get()
print(title, price, description_without_sufix, cover, sep=",")
