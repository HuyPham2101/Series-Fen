import React, { Component } from 'react'
import Aux from '../hoc/UAX'
import Movie from '..//Components/Movie/Movie'
import axios from 'axios'
import "./MoviesContainers.css"
 
class Moviescontainers extends Component {
    state = {
        series : []
    }
    componentDidMount () {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2e3c4a94c1657ecbda2df2936291e602&language=en-US&page=1').
        then(response => {
            const series = response.data.results
            const Updatedseries = series.map(post =>{
                return {
                    ...post,
                }
            })
            this.setState({series : Updatedseries})
            console.log(Updatedseries)
            console.log(response)
        }
        )
    }
    
    render(){
        const movieposts = this.state.series.map(post => {
            return <Movie title = {post.original_title} key = {post.id} overview = {post.overview} poster = {post.poster_path}/>
        }) 
        return(
        <Aux>
        <div className = "MoviesContainers">
        {movieposts}
        </div>
        </Aux>
        )
    }
}

export default Moviescontainers;