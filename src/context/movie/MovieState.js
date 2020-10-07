import React, { useReducer } from "react";
import axios from "axios";
import movieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import {
  CLEAR_EPISODE_LIST,
  SET_DETAILS,
  SET_CASTS,
  SET_MOVIE_LIST,
  SET_TRENDING,
  SET_LOADING,
  SET_MOVIES,
  SET_RELATED,
  SET_SHOWPREVIEW,
  SET_TVSHOWS,
  SET_EPISODE_LIST,
  LOAD_MORE_MOVIES,
} from "../types";

const MovieState = (props) => {
  const initialState = {
    trending: [],
    tvShows: [],
    casts: [],
    episodeList: {},
    movieDetails: {},
    featured: {},
    movies: [],
    movieList: [],
    tvList: [],
    relateditems: [],
    preview: "",
    featuredVideo: "",
    loading: false,
    showPreview: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  //set trending
  const setTrending = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=5a8d140617ee0ca7ca93b93e2c039a50`
    );
    dispatch({ type: SET_TRENDING, payload: res.data.results });
  };

  //set TvShows
  const setTvshows = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_year=2020`
    );
    dispatch({ type: SET_TVSHOWS, payload: res.data.results });
  };

  //get movie details
  const getMovieDetails = async (id, movietype) => {
    setLoading();
    let details;
    if (movietype === "tv") {
      const getdetails = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
      );
      details = {
        ...getdetails.data,
        seasons: getdetails.data.seasons.filter(
          (season) => season.season_number !== 0
        ),
      };
    } else {
      const getdetails = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
      );
      details = getdetails.data;
    }

    const getVideo = await axios.get(
      `https://api.themoviedb.org/3/${movietype}/${id}/videos?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
    );
    let videoUrl;
    if (getVideo.data.results.length < 1) {
      videoUrl = null;
    } else {
      if (getVideo.data.results[0].site === "Vimeo") {
        videoUrl = `https://vimeo.com/${getVideo.data.results[0].key}`;
      } else {
        videoUrl = `https://www.youtube.com/watch?v=${getVideo.data.results[0].key}`;
      }
    }

    dispatch({ type: SET_DETAILS, payload: { one: details, two: videoUrl } });

    setRelated(id, movietype);
  };

  //set movies
  const setMovies = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_year=2020`
    );
    const item = Math.floor(Math.random() * res.data.results.length);
    const idd = res.data.results[item].id;
    const resSecond = await axios.get(
      `https://api.themoviedb.org/3/movie/${idd}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
    );
    const getVideo = await axios.get(
      `https://api.themoviedb.org/3/movie/${idd}/videos?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
    );

    let videoUrl;
    if (getVideo.data.results.length < 1) {
      videoUrl = null;
    } else {
      videoUrl = `https://www.youtube.com/watch?v=${getVideo.data.results[0].key}`;
    }

    dispatch({
      type: SET_MOVIES,
      payload: { one: res.data.results, two: resSecond.data, three: videoUrl },
    });
  };
  //set TV relatedItems

  //set Movie RelatedItems
  const setRelated = async (id, movietype) => {
    if (movietype === "tv") {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1`
      );
      dispatch({
        type: SET_RELATED,
        payload: { result: res.data.results, movietype: movietype },
      });
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1`
      );
      dispatch({
        type: SET_RELATED,
        payload: { result: res.data.results, movietype: movietype },
      });
    }
  };

  //setloading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //clear Episode list
  const clearEpisodeList = () => {
    dispatch({ type: CLEAR_EPISODE_LIST });
  };

  //showPreview
  const setShowPreview = (value) => {
    if (value == null) {
      dispatch({ type: SET_SHOWPREVIEW, payload: true });
    } else {
      dispatch({ type: SET_SHOWPREVIEW, payload: value });
    }
  };

  //set episode list
  const setEpisodeList = async (tv_id, season_num) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${tv_id}/season/${season_num}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
    );
    dispatch({
      type: SET_EPISODE_LIST,
      payload: {
        data: res.data.episodes.filter(
          (episode) => episode.season_number !== 0
        ),
        seasonNumber: season_num,
      },
    });
  };

  //set Casts
  const setCasts = async (tvId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
    );
    dispatch({ type: SET_CASTS, payload: res.data });
  };

  //set moviesList
  const setMovieList = async (movie_type) => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/${movie_type}/popular?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1`
    );
    dispatch({
      type: SET_MOVIE_LIST,
      payload: { result: res.data.results, moveType: movie_type },
    });
  };

  //loadMore
  const loadMore = async (page, media_type) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/popular?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=${page}`
    );

    dispatch({
      type: LOAD_MORE_MOVIES,
      payload: res.data.results,
    });
  };

  return (
    <movieContext.Provider
      value={{
        trending: state.trending,
        featured: state.featured,
        tvShows: state.tvShows,
        movieList: state.movieList,
        casts: state.casts,
        movies: state.movies,
        preview: state.preview,
        loading: state.loading,
        relateditems: state.relateditems,
        movieDetails: state.movieDetails,
        showPreview: state.showPreview,
        featuredVideo: state.featuredVideo,
        episodeList: state.episodeList,
        tvList: state.tvList,
        loadMore,
        setLoading,
        setTrending,
        setMovies,
        setRelated,
        getMovieDetails,
        setShowPreview,
        setTvshows,
        setEpisodeList,
        setCasts,
        setMovieList,
        clearEpisodeList,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;
