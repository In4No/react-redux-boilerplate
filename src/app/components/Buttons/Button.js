import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNews } from '../../../redux/actions/actions';

const Button = ({ getNewsAction }) => (
  <button onClick={getNewsAction} type="submit">Press to see news</button>
);
const mapDispatchToProps = {
  getNewsAction: getNews,
};

Button.propTypes = {
  getNewsAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Button);
