import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import user from 'horizon/user';
import login from 'horizon/login';
import { CommentInput, SendComment } from './styles';
import { updateUserComments } from '../../../App/actions';

class CommentSender extends React.PureComponent {
  static propTypes = {
    userId: PropTypes.string,
  };

  state = {
    comment: '',
  };

  updateComment = event => {
    this.setState({ comment: event.target.value });
  };

  sendComment = () => {
    this.setState({ comment: '' });
    user.comment({
      email: this.props.userId,
      comment: {
        sender: login.auth.currentUser.email,
        text: this.state.comment,
      },
    });
  };

  handleKeyPress = event => {
    if (
      event.charCode === 13 &&
      (this.state.comment.replace(/\s/g, '').length !== 0 &&
        this.state.comment.length < 140)
    ) {
      this.sendComment();
    }
  };

  render() {
    return (
      <React.Fragment>
        <CommentInput
          value={this.state.comment}
          onChange={event => this.updateComment(event)}
          placeholder="Enter your comment"
          onKeyPress={event => this.handleKeyPress(event)}
        />
        <SendComment
          length={this.state.comment.replace(/\s/g, '').length}
          onClick={this.sendComment}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserComments }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentSender);
