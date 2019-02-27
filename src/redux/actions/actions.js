/*
 * action types
 */
export const GET_NEWS = 'GET_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

/*
 * action creators
 */

/*
 * function to generate action creator
 */

const makeActionCreator = (type, ...argNames) => (
  (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  }
);

export const getNews = makeActionCreator(GET_NEWS);
// export const getNews = () => ({
//   type: 'GET_NEWS',
// });
