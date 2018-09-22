import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
import { selectLoginStatus } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  componentWillMount() {}

  static propTypes = {
    loginStatus: PropTypes.bool,
  };

  render() {
    if (this.props.loginStatus) {
      return <Redirect to="/" />;
    }
    return <ProfileCard />;
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = createStructuredSelector({
  loginStatus: selectLoginStatus(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
