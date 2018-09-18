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

/* eslint-disable react/prefer-stateless-function */
export class Homepage extends React.PureComponent {
  componentWillMount() {}

  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <Header userObject={this.props.userObject} login={this.props.login} />
        <People>
          {Object.values(this.props.userCards).map((user, index) => {
            const key = index;
            return (
              <UserCard
                key={key}
                user={user}
                gid={this.props.userObject.googleId}
              />
            );
          })}
        </People>
      </React.Fragment>
    );
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

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withRouter(Homepage));
