import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySearchView from './GallerySearchView.jsx'
import DiscoverParamsBuilder from '../../assets/DiscoverParamsBuilder.js'
import MovieRequest from '../../assets/MovieRequest.js'
import GalleryResultsView from './GalleryResultsView.jsx'

class GalleryView extends Component {
  constructor (props) {
    super(props)

    this.state = {movies: []}
    this.changedSearch = this.changedSearch.bind(this)
  }

  changedSearch (searchData) {
    let paramBuilder = new DiscoverParamsBuilder()
    let params = paramBuilder.page(searchData.page)
                             .withGenres(searchData.genres)
                             ._sortBy(searchData.sortBy, searchData.sortDirection)
                             .includeAdult(false)
                             .params

    let movieRequest = new MovieRequest()
    movieRequest.discoverMovies(params).then((response) => {
      let results = response.data.results

      this.setState({
        movies: results.map((elem) => {
          var imgPath = `https://image.tmdb.org/t/p/original${elem.poster_path}`
          if (elem.poster_path == null){
            imgPath = `https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg`
          }
          return {
            id: elem.id,
            img: imgPath,
            title: elem.original_title,
            date: elem.release_date,
            overview: elem.overview
          }
        })
      })
    })
  }

  render () {
    return (
      <div className='gallery-view'>
        <GallerySearchView OnDataChange={this.changedSearch} />
        <GalleryResultsView Movies={this.state.movies} />
      </div>
    )
  }
}

GalleryView.PropTypes = {
  OnNewIds: PropTypes.func.isRequired,
  MovieIds: PropTypes.array.isRequired
}

export default GalleryView
