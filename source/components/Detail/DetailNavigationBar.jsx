import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

import {
  HashRouter as Router,
  Link,
} from 'react-router-dom'

class DetailNavigationBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='navbar-detail-arrow'>
        <Button content='Previous' labelPosition='left' floated='left' onClick={this.props.OnPrevious} size='big' as={Link} to={`/detail/${Math.max(parseInt(this.props.MovieId) - 1, 0)}`} />
        <Button content='Next' labelPosition='right' floated='right' onClick={this.props.OnNext} size='big' as={Link} to={`/detail/${parseInt(this.props.MovieId) + 1}`} />
      </div>
    )
  }
}

DetailNavigationBar.PropTypes = {
  OnPrevious: PropTypes.func.isRequired,
  OnNext: PropTypes.func.isRequired
}

export default DetailNavigationBar
