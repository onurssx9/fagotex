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
    this.props.addComment({
      text: this.state.comment,
      userId: this.props.userId,
    });
  };

  render() {
    return (
      <React.Fragment>
        <CommentInput
          onChange={event => this.updateComment(event)}
          placeholder="Enter your comment"
        />
        <SendComment onClick={this.sendComment}>Send</SendComment>
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
