import React from 'react'
import galaxy from '../../images/galaxy.jpg'

const MovieCard = (props) =>{
    const {title, poster_path, vote_average, release_date, original_name, first_air_date} = props.carditem;
    return (
        <div className='cardItem'>
       
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='galaxy'/>
            <h5>{title === undefined ? original_name : title}</h5>
            <div>
                <p>{release_date===undefined ? first_air_date : release_date}</p>
                <ul>
                    <li><i className="fas fa-heart fa-xs" style={{color:'red'}}></i></li>
                    <li><i className="fas fa-eye fa-xs" style={{color:'red'}}></i></li>
                    <li><i className="fas fa-star fa-xs" style={{color:'rgb(253, 151, 64)'}}></i><h6>{vote_average}</h6></li>
                </ul>
            </div>
        </div>
    )
}
export default MovieCard;
