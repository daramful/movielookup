import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Details extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='movie-detail-box' style={{ fontSize: '15px', textAlign: 'center'}}>
        <div>
          <h2 className='movie-detail-title'>{this.props.MovieTitle}</h2>
        </div>
        <div>
          <img src={this.props.MovieImageSrc}/>
        </div>
        <div>
          <p className='movie-detail-description'>{this.props.MovieDescription}</p>
        </div>
      </div>
    )
  }
}

Details.PropTypes = {
  MovieDescription: PropTypes.string.isRequired,
  MovieTitle: PropTypes.string.isRequired,
  MovieImadngeSrc: PropTypes.string.isRequired
}

export default Details
