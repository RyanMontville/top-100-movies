import requests
from bs4 import BeautifulSoup
import json

URL = "https://www.empireonline.com/movies/features/best-movies-2/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

titles = soup.find_all("h3", class_="listicleItem_listicle-item__title__BfenH")
descriptions = soup.find_all("div", class_="listicleItem_listicle-item__content__Lxn1Y")
images = soup.findAll('img')
movies = []


def format_movie_title(title, output_type):
    words = title.split(" ")
    words.pop(0)
    movie_string = ""
    if output_type == 0:
        # return as a list
        return words
    else:
        # return as string
        for word in words:
            movie_string = movie_string + word + " "
        return movie_string


def format_url(title_list):
    url = "https://www.google.com/search?q=where+to+stream"
    for word in title_list:
        url = url + "+" + word
    return url


for i in range(len(titles)):
    movie_title = format_movie_title(titles[i].getText(), 1)
    movie_description = descriptions[i].find("p").getText()
    search_url = format_url(format_movie_title(titles[i].getText(), 0))
    image = images[i]
    img_src = image['src']
    img_alt = image['alt']

    movie_object = {
        "id": i,
        "title": str(movie_title),
        "description": str(movie_description),
        "searchURL": str(search_url),
        "imageSource": str(img_src),
        "imageAlt": str(img_alt)
    }

    movies.append(movie_object)

with open("data.json", "w") as write_file:
    json.dump(movies, write_file)






