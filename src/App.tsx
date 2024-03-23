import "./App.css";
import { Movie } from './interfaces';
import { useFetchMovies } from "./hooks/useFetchMovies";
import { MovieItem } from "./components/MovieItem";

const API_KEY = "a9adbb7c63f6a5f419c988ed135423f2";
const MOVIE_LIST = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function App() {
  const { isLoading, data, hasError } = useFetchMovies(`${MOVIE_LIST}`);
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <p>Loading...</p>
        ) : hasError ? (
          <p>Error: {hasError}</p>
        ) : (
          <>
            {data && data.map((item: Movie) => (
              <MovieItem key={item.id} movie={item} />
            ))}
          </>
        )}
        {/* <pre>{data && JSON.stringify(data[0], null, 1)}</pre> */}
      </header>
    </div>
  );
}

export default App;
