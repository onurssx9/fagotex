import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CommentInput, SendComment } from './styles';

class CommentSender extends React.PureComponent {
  static propTypes = {};

  state = {
    comment: '',
  };

  updateComment = event => {
    console.log(this.state.comment);
    this.setState({ comment: event.target.value });
  };

  sendComment = () => {
    console.log(this.state.comment);
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
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentSender);
