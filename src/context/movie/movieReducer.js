import {
  CLEAR_EPISODE_LIST,
  SET_MOVIE_LIST,
  SET_CASTS,
  SET_TRENDING,
  SET_LOADING,
  SET_MOVIES,
  SET_RELATED,
  SET_DETAILS,
  SET_SHOWPREVIEW,
  SET_TVSHOWS,
  SET_EPISODE_LIST,
  LOAD_MORE_MOVIES,
  LOAD_MORE_TVS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_TRENDING:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload.one,
        featured: action.payload.two,
        featuredVideo: action.payload.three,
        loading: false,
      };
    case SET_TVSHOWS:
      return {
        ...state,
        tvShows: action.payload.map((item) => ({ ...item, movie_type: "tv" })),
        loading: false,
      };
    case SET_RELATED:
      return {
        ...state,
        relateditems: action.payload.result.map((item) => ({
          ...item,
          movie_type: action.payload.movietype,
        })),
        loading: false,
      };
    case SET_DETAILS:
      return {
        ...state,
        movieDetails: action.payload.one,
        preview: action.payload.two,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_SHOWPREVIEW:
      return {
        ...state,
        showPreview: action.payload,
      };
    case SET_EPISODE_LIST:
      return {
        ...state,
        episodeList: {
          ...state.episodeList,
          [action.payload.seasonNumber]: action.payload.data,
        },
      };

    case CLEAR_EPISODE_LIST:
      return {
        ...state,
        episodeList: [],
      };
    case SET_CASTS:
      return {
        ...state,
        casts: action.payload,
      };
    case SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload.result.map((item) => ({
          ...item,
          media_type: action.payload.moveType,
        })),
        loading: false,
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movieList: [...state.movieList, ...action.payload],
      };
    case LOAD_MORE_TVS:
      return {
        ...state,
        movieList: [...state.movieList, ...action.payload],
      };

    default:
      return state;
  }
};
