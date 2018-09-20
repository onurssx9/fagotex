import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  Block,
  Picture,
  UserTitle,
  Stat,
  Comments,
  Comment,
} from './styles';
import CommentSender from './CommentSender';

class UserCard extends React.PureComponent {
  state = {
    commentCount: (() => this.props.user.comments.length)(),
  };

  componentDidMount() {
    this.commentBox.scrollTop = this.commentBox.scrollHeight;
  }

  componentDidUpdate() {
    const updatedCount = this.props.user.comments.length;
    if (this.state.commentCount !== updatedCount) {
      this.commentBox.scrollTop = this.commentBox.scrollHeight;
      this.updateLocalCount(updatedCount);
    }
  }

  static propTypes = {
    user: PropTypes.object,
  };

  updateLocalCount = updatedCount => {
    this.setState({ commentCount: updatedCount });
  };

  calculatePopularity = () =>
    this.props.user.comments.length * this.props.user.rating;

  render() {
    return (
      <Card>
        <Block flex="3" className="column">
          <Block flex="3">
            <Picture src={this.props.user.photoURL} />
          </Block>
          <Block flex="2">
            <UserTitle>{this.props.user.displayName || 'John Doe'}</UserTitle>
          </Block>
          <Block flex="1" className="row stats">
            <Stat type="rating">{this.props.user.rating || '-'}</Stat>
            <Stat type="rank">{this.props.user.rank || '-'}</Stat>
            <Stat type="popularity">
              <FontAwesomeIcon icon="fire" />
              {this.calculatePopularity() || '-'}
            </Stat>
          </Block>
        </Block>
        <Block flex="3" className="column">
          <Comments
            innerRef={elem => {
              this.commentBox = elem;
            }}
          >
            {this.props.user.comments.map((comment, index) => {
              const key = index;
              return <Comment key={key}>{comment.text}</Comment>;
            })}
          </Comments>
        </Block>
        <Block flex="1" className="row">
          <Block flex="3" className="row">
            <CommentSender userId={this.props.user.email} />
          </Block>
        </Block>
      </Card>
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
)(UserCard);
