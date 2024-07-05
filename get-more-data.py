import requests
from genres import genres
from olddata import olddata
import json

base_url = "https://api.themoviedb.org/3/search/movie?query="

headers = {
    "accept": "application/json",
    "Authorization": redacted
}
movies = []
for movie in olddata:
    movie_id = movie.get("id")
    movie_title = movie.get("title")
    url = base_url + movie_title
    empire_description = movie.get("description")
    search_url = movie.get("searchURL")
    movie_image = movie.get("imageSource")
    movie_image_alt = movie.get("imageAlt")

    response = requests.get(url, headers=headers)
    data = response.json()
    results = data.get("results")
    genre_ids = results[0].get("genre_ids")
    release_date = results[0].get("release_date")
    movie_genres = []
    movie_overview = results[0].get("overview")
    for genre_id in genre_ids:
        genre_id_string = str(genre_id)
        movie_genres.append(genres[genre_id_string])

    movie_object = {
        "id": movie_id,
        "title": str(movie_title),
        "empireDescription": str(empire_description),
        "movieOverview": str(movie_overview),
        "releaseDate": str(release_date),
        "genres": movie_genres,
        "searchURL": str(search_url),
        "imageSource": str(movie_image),
        "imageAlt": str(movie_image_alt)
    }

    movies.append(movie_object)

with open("data.json", "w") as write_file:
    json.dump(movies, write_file)

