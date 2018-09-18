import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserObject, getLoginStatus } from '../App/selectors';
import { setUserObject, deleteComment } from '../App/actions';
import {
  RecievedMessages,
  Comments,
  Comment,
  Title,
  Delete,
  Block,
} from './styles';
import Header from '../../components/Header';

class Messages extends React.PureComponent {
  componentWillMount() {
    if (!this.props.login) {
      this.props.history.push('/login');
    }
    this.props.setUserObject({});
  }

  static propTypes = {
    setUserObject: PropTypes.func,
    userObject: PropTypes.object,
    deleteComment: PropTypes.func,
    history: PropTypes.any,
    login: PropTypes.bool,
  };

  deleteCommentEvent = event => {
    this.props.deleteComment({
      userId: this.props.userObject.googleId,
      commentId: event.target.id,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header userObject={this.props.userObject} login={this.props.login} />
        <RecievedMessages>
          <Title>Recieved Comments</Title>
          <Comments>
            {Object.keys(this.props.userObject.comments.recieved).map(
              (key, index) => {
                const { text } = Object.values(
                  this.props.userObject.comments.recieved,
                )[index];
                return (
                  <Comment key={key}>
                    <Delete
                      id={key}
                      onClick={event => this.deleteCommentEvent(event)}
                    >
                      -
                    </Delete>
                    <Block>{text}</Block>
                  </Comment>
                );
              },
            )}
          </Comments>
        </RecievedMessages>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userObject: getUserObject(),
  login: getLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserObject, deleteComment }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Messages));
