# Modifique o exercício anterior para retornar também quantos livros
# estão disponíveis apresentando como último campo no retorno.

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
stock_book = selector.css(".product_main .availability::text").re_first(r"\d")
print(title, price, description_without_sufix, cover, stock_book, sep=",")
