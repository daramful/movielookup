import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchSearchView from './SearchSearchView.jsx'
import SearchParamsBuilder from '../../assets/SearchParamsBuilder.js'
import MovieRequest from '../../assets/MovieRequest.js'
import SearchResultsView from './SearchResultsView.jsx'

class SearchView extends Component {
  constructor(props) {
    super(props)

    this.state = { movies: [] }
    this.changedSearch = this.changedSearch.bind(this)
  }

  changedSearch(searchData) {
    let paramBuilder = new SearchParamsBuilder()

    let params = paramBuilder.query(searchData.text).params

    let movieRequest = new MovieRequest()
    movieRequest.searchMovies(params).then((response) => {
      let results = response.data.results.map((elem) => {
      var imgPath = `https://image.tmdb.org/t/p/original${elem.poster_path}`
        if (elem.poster_path == null){
          imgPath = `https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg`
        }
        return {
          id: elem.id,
          img: imgPath,
          title: elem.original_title,
          date: elem.release_date,
          overview: elem.overview,
          popularity: elem.popularity
        }
      })
      
      results = results.sort((a, b) => {
        let diff = 0
        switch (searchData.sortBy) {
          case 'popularity':
            diff =  a.popularity - b.popularity
          case 'release_date': 
            diff = Date.parse(a.date) < Date.parse(b.date) ? -1 : 1
          case 'original_title': 
            diff = a.title < b.title ? -1 : 1
        }
        return diff * ((searchData.sortDirection) ? 1 : -1) 
      })

      this.setState({
        movies: results
      })
    })
  }

  render() {
    return (
      <div className='search-view'>
        <SearchSearchView OnDataChange={this.changedSearch} />
        <SearchResultsView Movies={this.state.movies} />
      </div>
    )
  }
}

SearchView.PropTypes = {
  OnNewIds: PropTypes.func.isRequired,
  MovieIds: PropTypes.array.isRequired
}

export default SearchView
