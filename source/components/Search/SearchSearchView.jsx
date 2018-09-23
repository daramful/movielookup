import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Grid, Input } from 'semantic-ui-react'
import { Genres } from '../../assets/Genres.js'
import { SortTypes, DirectionTypes, PageTypes, SmallSortTypes } from '../../assets/SortTypes.js'

class SearchSearchView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sortBy: 'popularity',
      sortDirection: false,
      text: ''
    }
  }

  render () {
    return (
      <div className='search-search-view'>
        <Input fluid placeholder='Search...' onChange={(event, data) => {
          this.setState({text: data.value}, this.props.OnDataChange.bind(this, this.state))
        }} />

        <Grid columns={2} divided >
          <Grid.Row>
            <Grid.Column>
              <Dropdown defaultValue={'popularity'} fluid selection options={SmallSortTypes} onChange={(event, data) => {
                this.setState({ sortBy: data.value }, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
            <Grid.Column>
              <Dropdown defaultValue='descending' fluid selection options={DirectionTypes} onChange={(event, data) => {
                this.setState({sortDirection: data.value === 'ascending'}, this.props.OnDataChange.bind(this, this.state))
              }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

SearchSearchView.PropTypes = {
  OnDataChange: PropTypes.func.isRequired
}

export default SearchSearchView
