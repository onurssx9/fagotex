import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import ProfileCard from './ProfileCard';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  render() {
    return <ProfileCard />;
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
