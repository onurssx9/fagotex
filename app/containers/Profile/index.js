import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Hashtags } from './styles';
import Header from '../../components/Header';
import { getCurrentUser, setCurrentUser } from '../../containers/App/actions';
import { selectCurrentUser, selectLoginStatus } from '../App/selectors';
import HashtagCard from './HashtagCard';

class Profile extends React.PureComponent {
  static propTypes = {
    currentUser: PropTypes.object,
  };

  getUserHashtags = () => {
    const cards = this.props.currentUser.hashtags.map(hashtag => {
      const key = hashtag.name;
      return <HashtagCard key={key} hashtag={hashtag} />;
    });

    return cards;
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Hashtags>
          <HashtagCard
            key="addHashtag"
            hashtag={{
              name: '',
              comments: [],
              ratings: [],
              popularity: 0,
            }}
          />
          {this.props.currentUser.hashtags.length > 0 && this.getUserHashtags()}
        </Hashtags>
      </React.Fragment>
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
