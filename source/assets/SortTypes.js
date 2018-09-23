var sortTypes = [
  { key: 'popularity', text: 'Popularity', value: 'popularity' },
  { key: 'release_date', text: 'Release Date', value: 'release_date' },
  { key: 'revenue', text: 'Revenue', value: 'revenue' },
  { key: 'original_title', text: 'Alphabetically by Title', value: 'original_title' },
  { key: 'vote_average', text: 'Vote Average', value: 'vote_average' },
  { key: 'vote_count', text: 'Vote Count', value: 'vote_count' }
]

var smallerSortTypes = [
  { key: 'popularity', text: 'Popularity', value: 'popularity' },
  { key: 'release_date', text: 'Release Date', value: 'release_date' },
  { key: 'original_title', text: 'Alphabetically by Title', value: 'original_title' }
]

var directionTypes = [
  {key: 'ascending', text: 'Ascending', value: 'ascending'},
  {key: 'descending', text: 'Descending', value: 'descending'}
]

var pageTypes = [
  {key: 1, text: '1', value: 1},
  {key: 2, text: '2', value: 2},
  {key: 3, text: '3', value: 3},
  {key: 4, text: '4', value: 4},
  {key: 5, text: '5', value: 5},
  {key: 6, text: '6', value: 6},
  {key: 7, text: '7', value: 7},
  {key: 8, text: '8', value: 8},
  {key: 9, text: '9', value: 9},
  {key: 10, text: '10', value: 10}
]

module.exports = {
  SortTypes: sortTypes,
  DirectionTypes: directionTypes,
  PageTypes: pageTypes,
  SmallSortTypes: smallerSortTypes
}
