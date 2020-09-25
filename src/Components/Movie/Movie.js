import React from 'react'
import Aux from '../../hoc/UAX'
import "./Movie.css"

const movie = (props) => {
    let imgurl = "http://image.tmdb.org/t/p/w185/" + props.poster
    console.log(imgurl)
    return(
        <Aux >
            <div className = "Movie">
                <img src = {imgurl}/>
                <h4>{props.title}</h4>
                <p>{props.overview}</p>
            </div>
        </Aux>
    )
}

export default movie;