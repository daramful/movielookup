import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Details from './Details.jsx'
import DetailNavigationBar from './DetailNavigationBar.jsx'
import MovieRequest from '../../assets/MovieRequest'

class DetailView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      posterSrc: ''
    }

    this.updateMovieId(this.props.MovieId)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.MovieId !== this.props.MovieId) {
      this.updateMovieId(nextProps.MovieId)
    }
  }

  updateMovieId (movieId) {
    let m = new MovieRequest()

    m.getMovieById(movieId).then((response) => {
      var posterImgSrc = `https://image.tmdb.org/t/p/w300${response.data.poster_path}`
      if (response.data.poster_path == null){
        posterImgSrc = `https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg`
      }
      this.setState({
        title: response.data.original_title,
        description: response.data.overview,
        posterSrc: posterImgSrc
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className='movie-detail-view'>
        <DetailNavigationBar MovieId={this.props.MovieId}  OnNext={() => { this.props.OnNext(this.props.MovieId) }} OnPrevious={() => { this.props.OnPrevious(this.props.MovieId) }} />
        <Details MovieDescription={this.state.description} MovieTitle={this.state.title} MovieImageSrc={this.state.posterSrc} />
      </div>
    )
  }
}

DetailView.PropTypes = {
  MovieId: PropTypes.number.isRequired,
  OnNext: PropTypes.func.isRequired,
  OnPrevious: PropTypes.func.isRequired
}

export default DetailView
