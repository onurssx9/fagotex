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
  Card,
  HashtagTitle,
  Block,
  Stat,
  Comments,
  Comment,
  Delete,
  HashtagInput,
  HashtagAdd,
} from './styles';
import {
  getCurrentUser,
  setCurrentUser,
} from '../../../containers/App/actions';
import { selectCurrentUser, selectLoginStatus } from '../../App/selectors';

class Profile extends React.PureComponent {
  state = {
    hashtag: '',
  };

  static propTypes = {
    currentUser: PropTypes.object,
    setCurrentUser: PropTypes.func,
    hashtag: PropTypes.object,
  };

  deleteCommentEvent = event => {
    const tagIndex = this.props.currentUser.hashtags.findIndex(
      hashtag => hashtag.name === event.target.dataset.tag,
    );

    this.props.currentUser.hashtags[tagIndex].comments.splice(
      event.target.id,
      1,
    );

    this.props.setCurrentUser(this.props.currentUser);

    user.deleteComment({
      comments: this.props.currentUser.hashtags[tagIndex].comments,
      email: login.auth.currentUser.email,
      id: event.target.id,
      hashtag: event.target.dataset.tag,
      popularity:
        event.target.dataset.rating *
        this.props.currentUser.hashtags[tagIndex].comments.length,
    });
  };

  calculateRating = ratings => {
    let sum = 0;

    ratings.forEach(rating => {
      sum += rating.rate;
      return sum;
    });

    if (sum > 0) {
      return sum / ratings.length;
    }
    return 0;
  };

  validateHashtag = event => {
    /* eslint-disable-next-line */
    event.target.value = `#${event.target.value
      .replace(/[^a-z0-9 ]/g, '')
      .trim()}`;

    this.setState({ hashtag: event.target.value });
  };

  addNewHashtag = async () => {
    if (this.state.hashtag.length > 1) {
      const response = await user.addHashtag({
        email: login.auth.currentUser.email,
        hashtag: this.state.hashtag,
      });

      if (response) {
        console.log('Success!');
      } else {
        console.log('Exists!');
      }
    }
  };

  render() {
    return (
      <Card>
        <Block flex="3" className="column">
          <Block flex="2">
            {this.props.hashtag.name.length ? (
              <HashtagTitle>
                #{this.props.hashtag.name || 'hashtag'}
              </HashtagTitle>
            ) : (
              [
                <HashtagAdd key="addButton" onClick={this.addNewHashtag}>
                  <FontAwesomeIcon icon="tag" />
                </HashtagAdd>,
                <HashtagInput
                  key="hashtagInput"
                  placeholder="hashtag"
                  onChange={this.validateHashtag}
                />,
              ]
            )}
          </Block>
          <Block flex="1" className="row stats">
            <Stat type="rating">
              <FontAwesomeIcon icon="star" />
              {this.calculateRating(this.props.hashtag.ratings) || '-'}
            </Stat>
            <Stat type="popularity">
              <FontAwesomeIcon icon="fire" />
              {this.calculateRating(this.props.hashtag.ratings) *
                this.props.hashtag.comments.length || '-'}
            </Stat>
            <Stat type="rank">
              <FontAwesomeIcon icon="comments" />
              {this.props.hashtag.comments.length || 0}
            </Stat>
          </Block>
        </Block>
        <Block flex="3" className="column">
          <Comments>
            {this.props.hashtag.comments.map((comment, index) => {
              const id = index;
              return (
                <Comment key={id}>
                  <Delete
                    id={id}
                    data-tag={this.props.hashtag.name}
                    data-rating={this.calculateRating(
                      this.props.hashtag.ratings,
                    )}
                    onClick={this.deleteCommentEvent}
                  >
                    <FontAwesomeIcon icon="trash-alt" />
                  </Delete>
                  {comment.text}
                </Comment>
              );
            })}
          </Comments>
        </Block>
      </Card>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser(),
  loginStatus: selectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCurrentUser, setCurrentUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Profile));
