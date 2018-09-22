import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import login from 'horizon/login';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducers';
import saga from './sagas';
import Header from '../../components/Header';
import UserCard from './UserCard';
import { People } from './styles';
import { selectUserCards, selectLoginStatus } from '../App/selectors';
import { getCurrentUser, getAllUsers } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class Homepage extends React.PureComponent {
  componentWillMount() {
    this.props.getAllUsers();
  }

  static propTypes = {
    userCards: PropTypes.array,
    getAllUsers: PropTypes.func,
  };

  getUserCards = () => {
    const cards = this.props.userCards.map(user => {
      const key = user.email;
      return (
        <UserCard
          key={key}
          user={user}
          currentUserEmail={(login.auth.currentUser || {}).email || ''}
        />
      );
    });

    return cards;
  };

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
)(Homepage);
