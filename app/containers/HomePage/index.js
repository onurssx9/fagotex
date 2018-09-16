import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getUserObject, getLoginStatus, getUserCards } from '../App/selectors';
import { changeLoginStatus, getUsers } from '../App/actions';
import reducer from './reducers';
import saga from './sagas';
import Header from './Header';
import UserCard from './UserCard';
import { People } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  componentDidMount() {
    this.props.getUsers();
  }

  static propTypes = {
    userObject: PropTypes.object,
    getUsers: PropTypes.func,
    login: PropTypes.any,
    userCards: PropTypes.object,
  };

  render() {
    return (
      <React.Fragment>
        <Header userObject={this.props.userObject} login={this.props.login} />
        <People>
          {Object.values(this.props.userCards).map((user, index) => {
            const key = index;
            return <UserCard key={key} user={user} />;
          })}
        </People>
      </React.Fragment>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLoginStatus, getUsers }, dispatch);
}

const mapStateToProps = createStructuredSelector({
  userObject: getUserObject(),
  login: getLoginStatus(),
  userCards: getUserCards(),
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
