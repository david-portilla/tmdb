import { Movie } from '../interfaces';

interface MovieItemProps {
    movie: Movie;
}

export const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {

    const { id, title, vote_average, release_date, poster_path: image } = movie;

    return (
        <>
            <div key={id}>
                <h2>{title}</h2>
                <p><b>Release date: </b>{vote_average}</p>
                <p><b>Rate: </b>{release_date}</p>
                <img src={`https://image.tmdb.org/t/p/w200/${image}.jpg`} alt={title} />
            </div>
        </>
    )
}
