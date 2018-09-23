import React, { Component } from 'react'
import { Button, Divider, Segment } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import DetailView from '../Detail/DetailView.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'
import SearchView from '../Search/SearchView.jsx'

class Home extends Component {
  constructor (props) {
    super(props)

    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
    this.onNewIds = this.onNewIds.bind(this)
  }

  onNext (id) {
    
  }

  onPrevious (id) {
    
  }

  onNewIds (ids) {
    this.setState({
      movieIdList: ids
    })
  }

  render () {
    return (
      <Router>
        <div className='Home'>

          <Segment>
            <Button.Group labeled fluid>
              <Button content='Search' size='massive' as={Link} to={'/search'} />
              <Button content='Gallery' size='massive' as={Link} to={'/gallery'} />
            </Button.Group>

            <Route path='/search' render={() => { return <SearchView /> }} />
            <Route path='/gallery' render={() => { return <GalleryView OnNewIds={this.onNewIds} /> }} />
            <Route path='/detail/:id' render={({ match }) => {
              return <DetailView MovieId={match.params.id} OnPrevious={this.onPrevious} OnNext={this.onNext} />
            }} />
          </Segment>
        </div>
      </Router>
    )
  }
}

export default Home
