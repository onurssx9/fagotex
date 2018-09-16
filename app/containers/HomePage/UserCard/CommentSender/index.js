import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CommentInput, SendComment } from './styles';
import { addComment } from '../../../App/actions';

class CommentSender extends React.PureComponent {
  static propTypes = {
    userId: PropTypes.string,
    addComment: PropTypes.func,
  };

  state = {
    comment: '',
  };

  updateComment = event => {
    this.setState({ comment: event.target.value });
  };

  sendComment = () => {
    this.setState({ comment: '' });
    this.props.addComment({
      text: this.state.comment,
      userId: this.props.userId,
    });
  };

  handleKeyPress = event => {
    if (
      event.charCode === 13 &&
      (this.state.comment.length !== 0 && this.state.comment.length < 140)
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
          length={this.state.comment.length}
          onClick={this.sendComment}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentSender);
