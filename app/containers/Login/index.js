import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoginStatus } from '../App/selectors';
import { changeLoginStatus } from '../App/actions';

import ProfileCard from './ProfileCard';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  componentWillMount() {
    const userSession = localStorage.getItem('user-session');
    this.props.changeLoginStatus(userSession);
  }

  static propTypes = {
    changeLoginStatus: PropTypes.func,
    login: PropTypes.any,
  };

  render() {
    if (this.props.login) {
      return <Redirect to="/" />;
    }
    return <ProfileCard />;
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLoginStatus }, dispatch);
}

const mapStateToProps = createStructuredSelector({ login: getLoginStatus() });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
