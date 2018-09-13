import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { setName } from './actions';
import { getUserName } from './selectors';
import reducer from './reducers';
import saga from './sagas';
import ProfileCard from './ProfileCard';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  componentDidMount() {
    this.props.setName('Kaze');
  }

  render() {
    return (
      <div>
        <ProfileCard />
        {this.props.userName}
      </div>
    );
  }
}

Login.propTypes = {
  setName: PropTypes.func,
  userName: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setName,
    },
    dispatch,
  );
}

const mapStateToProps = createStructuredSelector({
  userName: getUserName(),
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
