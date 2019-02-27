import {
  GET_NEWS,
  NEWS_RECEIVED,
} from '../actions/actions';


export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      return { ...state, news: action.json[0], loading: false };
    default:
      return state;
  }
};

export const otherObject = {};
