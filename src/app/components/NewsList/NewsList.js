import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%',
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive',
};
const NewsItem = ({ article }) => (
  article ? (
    <article style={articleStyle}>
      <div>
        <h1>{article.title}</h1>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h4>{article.description}</h4>
        <a href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>
      </div>
    </article>
  ) : null
);
const mapStateToProps = state => (
  {
    article: state.newsReducer.news,
  }
);

NewsItem.propTypes = {
  article: PropTypes.arrayOf(PropTypes.object),
};

NewsItem.defaultProps = {
  article: null,
};

export default connect(mapStateToProps, null)(NewsItem);
