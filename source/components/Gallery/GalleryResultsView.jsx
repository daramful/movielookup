import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import MovieRequest from '../../assets/MovieRequest.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class GalleryResultsView extends Component {
  constructor (props) {
    super(props)

    this.cardsFromMovies(this.props.Movies)
    this.state = {
      cards: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.Ids !== this.props.Ids) {
      this.cardsFromIds(this.props.Ids)
    }
  }

  cardsFromMovies (movies) {
    return movies.map((movie) => {
      return (
        <Card key={movie.id} as={Link} to={`/detail/${movie.id}`}>
          <Image src={movie.img} />
          <Card.Content>
            <Card.Header>
              {movie.title}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Released in {movie.date}
              </span>
            </Card.Meta>
            <Card.Description>
              {movie.overview}
            </Card.Description>
          </Card.Content>
        </Card>
      )
    })
  }

  render () {
    return (
      <Card.Group>
        {this.cardsFromMovies(this.props.Movies)}
      </Card.Group>
    )
  }
}

GalleryResultsView.PropTypes = {
  Movies: PropTypes.array.isRequired
}

export default GalleryResultsView
