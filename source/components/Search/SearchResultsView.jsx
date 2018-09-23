import React, { Component } from 'react'
import { Button, Item, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import MovieRequest from '../../assets/MovieRequest.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class SearchResultsView extends Component {
  constructor(props) {
    super(props)

    this.itemsFromMovies(this.props.Movies)
    this.state = {
      cards: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.Ids !== this.props.Ids) {
      this.cardsFromIds(this.props.Ids)
    }
  }

  itemsFromMovies(movies) {
    return movies.map((movie) => {
      return (
        <Item as={Link} key={movie.id} to={`/detail/${movie.id}`}>
          <Item.Image size='tiny' src={movie.img} />
          <Item.Content>
            <Item.Header>{movie.title}</Item.Header>
            <Item.Description>
              <p>{movie.overview}</p>
            </Item.Description>
            <Item.Extra>{movie.date}</Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  render() {
    return (
      <Item.Group>
        {this.itemsFromMovies(this.props.Movies)}
      </Item.Group>
    )
  }
}

SearchResultsView.PropTypes = {
  Movies: PropTypes.array.isRequired
}

export default SearchResultsView
