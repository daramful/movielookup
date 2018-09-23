import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Grid } from 'semantic-ui-react'
import { Genres } from '../../assets/Genres.js'
import { SortTypes, DirectionTypes, PageTypes } from '../../assets/SortTypes.js'

class GallerySearchView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sortBy: 'popularity',
      genres: [],
      sortDirection: false,
      page: 1
    }

    this.props.OnDataChange(this.state)
  }
  
  render () {
    return (
      <div className='gallery-view'>
        <Grid columns={2} divided >
          <Grid.Row>
            <Grid.Column>
              <Dropdown defaultValue={'popularity'} fluid selection options={SortTypes} onChange={(event, data) => {
                this.setState({sortBy: data.value}, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
            <Grid.Column>
              <Dropdown placeholder='Genres' fluid multiple selection options={Genres} onChange={(event, data) => {
                this.setState({genres: data.value}, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Dropdown defaultValue='descending' fluid selection options={DirectionTypes} onChange={(event, data) => {
                this.setState({sortDirection: data.value === 'ascending'}, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
            <Grid.Column>
              <Dropdown search searchInput={{ type: 'number' }} defaultValue='1' fluid selection options={PageTypes} placeholder='Page' onChange={(event, data) => {
                this.setState({page: data.value}, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

GallerySearchView.PropTypes = {
  OnDataChange: PropTypes.func.isRequired
}

export default GallerySearchView
