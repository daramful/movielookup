import Axios from 'axios'
import { MYAPIKEY, BASEURL, LANGUAGE } from "./Settings";

class MovieRequest {
  constructor (apiKey = MYAPIKEY) { 
    this.params = {
      api_key: apiKey,
      language: LANGUAGE
    }

    this.configuration = {
      baseURL: BASEURL
    }
  }

    method (method) {
      this.configuration.method = method
      return this
    }
  
    headers (headers) {
      this.configuration.headers = headers
      return this
    }
  
    data (data) {
      this.configuration.data = data
      return this
    }
  
    timeout (timeout) {
      this.configuration.timeout = timeout
      return this
    }
  
    responseType (responseType) {
      this.configuration.responseType = responseType
      return this
    }
  
    maxContentLength (maxContentLength) {
      this.configuration.maxContentLength = maxContentLength
      return this
    }
  
    maxRedirects (maxRedirects) {
      this.configuration.maxRedirects = maxRedirects
      return this
    }
  
    searchMovies (params) {
      return this._makeRequest(params, '/search/movie')
    }
  
    discoverMovies (params) {
      return this._makeRequest(params, '/discover/movie')
    }
  
    getMovieById (id) {
      return this._makeRequest({}, `/movie/${id}`)
    }
  
    _makeRequest (params, url) {
      let config = this.configuration
      config.params = this._mergeParams(params)
      config.url = url
      return Axios(config)
    }
  
    _mergeParams (toMerge) {
      let newParams = this.params
      for (let key in toMerge) {
        if (toMerge.hasOwnProperty(key)) {
          newParams[key] = toMerge[key]
        }
      }
      return newParams
    }
  }

  export default MovieRequest