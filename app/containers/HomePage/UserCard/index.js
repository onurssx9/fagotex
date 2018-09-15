import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  componentDidMount() {
    this.commentBox.scrollTop = this.commentBox.scrollHeight;
  }

  componentDidUpdate() {
    this.commentBox.scrollTop = this.commentBox.scrollHeight;
  }

  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    return (
      <Card>
        <Block flex="3" className="column">
          <Block flex="3">
            <Picture
              src={
                this.props.user.imageUrl ||
                'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
              }
            />
          </Block>
          <Block flex="2">
            <UserTitle>{this.props.user.name || 'John Doe'}</UserTitle>
          </Block>
          <Block flex="1" className="row stats">
            <Stat type="rating">{this.props.user.rating || '-'}</Stat>
            <Stat type="rank">{this.props.user.rank || '-'}</Stat>
            <Stat type="popularity">
              {Object.keys(this.props.user.comments.recieved).length *
                this.props.user.rating || '-'}
            </Stat>
          </Block>
        </Block>
        <Block flex="3" className="column">
          <Comments
            innerRef={elem => {
              this.commentBox = elem;
            }}
          >
            {Object.values(this.props.user.comments.recieved).map(
              (comment, index) => {
                const key = index;
                return <Comment key={key}>{comment.text}</Comment>;
              },
            )}
          </Comments>
        </Block>
        <Block flex="1" className="row">
          <Block flex="3" className="row">
            <CommentSender userId={this.props.user.googleId} />
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
