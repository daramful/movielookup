class SearchParamsBuilder {
  constructor () {
    this.params = {
      'include_adult': false
    }
  }

  query (query) {
    this.params['query'] = query
    if(this.params['query'].length < 1){
      this.params['query'] = "A"
    }
    //console.log(this.params['query])
    return this
  }
}

export default SearchParamsBuilder
