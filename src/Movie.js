import PropTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';


// class MoviePoster extends Component {
//     render() {
//         return (
//             <img src={this.props.poster} />
//         );
//     }
// }

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    /> 
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes ={
    title: PropTypes.string.isRequired,
    poster:  PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis:  PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
}

MoviePoster.propTypes={
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenres.propTypes={
    genre: PropTypes.string.isRequired,
}


export default Movie;