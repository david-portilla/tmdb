import { useEffect, useState } from "react";
import { fetchData } from "../services/fetch";

export const useFetchMovies = (url: string) => {
    const [movies, setMovies] = useState({
        isLoading: false,
        data: [],
        hasError: null,
    });

    useEffect(() => {
        console.log("useEffect");
        fetchData(url).then((res) => {
            setMovies({
                isLoading: res.isLoading,
                data: res.data,
                hasError: res.error,
            });
        });
    }, [url]);

    return movies;
};