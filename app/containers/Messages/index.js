import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import login from 'horizon/login';
import user from 'horizon/user';

import {
  RecievedMessages,
  Comments,
  Comment,
  Title,
  Delete,
  Block,
} from './styles';
import Header from '../../components/Header';
import { getCurrentUser } from '../../containers/App/actions';
import { selectCurrentUser, selectLoginStatus } from '../App/selectors';

class Messages extends React.PureComponent {
  componentDidMount() {
    if (!this.props.loginStatus && login.auth.currentUser) {
      this.props.getCurrentUser(login.auth.currentUser.email);
    } else {
      login.isSignIn(userInfo => {
        if (userInfo) {
          const { email, displayName, photoURL } = userInfo;
          this.props.getCurrentUser({ email, displayName, photoURL });
        }
      });
    }
  }

  static propTypes = {
    currentUser: PropTypes.object,
    loginStatus: PropTypes.bool,
    getCurrentUser: PropTypes.func,
  };

  deleteCommentEvent = event => {
    user.deleteComment({
      comments: this.props.currentUser.comments,
      email: login.auth.currentUser.email,
      id: event.target.id,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <RecievedMessages>
          <Title>Recieved Comments</Title>
          <Comments>
            {this.props.currentUser.comments.map((comment, index) => {
              const { text } = comment;
              const key = index;
              return (
                <Comment key={key}>
                  <Delete
                    id={key}
                    onClick={event => this.deleteCommentEvent(event)}
                  >
                    <FontAwesomeIcon icon="trash-alt" />
                  </Delete>
                  <Block>{text}</Block>
                </Comment>
              );
            })}
          </Comments>
        </RecievedMessages>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser(),
  loginStatus: selectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCurrentUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Messages));
