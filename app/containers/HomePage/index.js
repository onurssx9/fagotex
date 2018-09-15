import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getUserObject, getLoginStatus } from '../App/selectors';
import { changeLoginStatus } from '../App/actions';
import reducer from './reducers';
import saga from './sagas';
import Header from './Header';
import UserCard from './UserCard';
import { People } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  static propTypes = {
    userObject: PropTypes.object,
    login: PropTypes.bool,
  };

  render() {
    return (
      <React.Fragment>
        <Header userObject={this.props.userObject} login={this.props.login} />
        <People>
          <UserCard user={this.props.userObject} />
          <UserCard user={this.props.userObject} />
          <UserCard user={this.props.userObject} />
        </People>
      </React.Fragment>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLoginStatus }, dispatch);
}

const mapStateToProps = createStructuredSelector({
  userObject: getUserObject(),
  login: getLoginStatus(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
