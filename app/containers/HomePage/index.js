import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducers';
import saga from './sagas';
import Header from '../../components/Header';
import UserCard from './UserCard';
import { People } from './styles';
import { selectUserCards, selectLoginStatus } from '../App/selectors';
import { getCurrentUser, getAllUsers } from '../App/actions';
import login from 'horizon/login';

/* eslint-disable react/prefer-stateless-function */
export class Homepage extends React.PureComponent {
  componentWillMount() {
    this.props.getAllUsers();
  }

  static propTypes = {
    userCards: PropTypes.object,
    loginStatus: PropTypes.bool,
    getCurrentUser: PropTypes.func,
    getAllUsers: PropTypes.func,
  };

  componentDidMount() {
    if (!this.props.loginStatus && login.auth.currentUser) {
      this.props.getCurrentUser(login.auth.currentUser.email);
    }
  }

  getUserCards = () =>
    this.props.userCards.map(user => {
      const key = user.email;
      return <UserCard key={key} user={user} />;
    });

  render() {
    return (
      <React.Fragment>
        <Header />
        <People>{!!this.props.userCards.length && this.getUserCards()}</People>
      </React.Fragment>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCurrentUser, getAllUsers }, dispatch);
}

const mapStateToProps = createStructuredSelector({
  userCards: selectUserCards(),
  loginStatus: selectLoginStatus(),
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
)(withRouter(Homepage));
