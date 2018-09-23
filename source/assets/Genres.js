/*
 * Alphabetically ordered in standard of text
 */

var genreDict = {
  'Action': 28,
  'Adventure': 12,
  'Animation': 16,
  'Comedy': 35,
  'Crime': 80,
  'Documentary': 99,
  'Drama': 18,
  'Family': 10751,
  'Fantasy': 14,
  'History': 36,
  'Horror': 27,
  'Music': 10402,
  'Mystery': 9648,
  'Romance': 10749,
  'Science Fiction': 878,
  'TV Movie': 10770,
  'Thriller': 53,
  'War': 10752,
  'Western': 37
}

var genres = [
  {key: 28, text: 'Action', value: 28},
  {key: 12, text: 'Adventure', value: 12},
  {key: 16, text: 'Animation', value: 16},
  {key: 35, text: 'Comedy', value: 35},
  {key: 80, text: 'Crime', value: 80},
  {key: 99, text: 'Documentary', value: 99},
  {key: 18, text: 'Drama', value: 18},
  {key: 10751, text: 'Family', value: 10751},
  {key: 14, text: 'Fantasy', value: 14},
  {key: 36, text: 'History', value: 36},
  {key: 27, text: 'Horror', value: 27},
  {key: 10402, text: 'Music', value: 10402},
  {key: 9648, text: 'Mystery', value: 9648},
  {key: 10749, text: 'Romance', value: 10749},
  {key: 878, text: 'Science Fiction', value: 878},
  {key: 10770, text: 'TV Movie', value: 10770},
  {key: 53, text: 'Thriller', value: 53},
  {key: 10752, text: 'War', value: 10752},
  {key: 37, text: 'Western', value: 37}
]
module.exports = {
  Genres: genres,
  GenresDict: genreDict
}
