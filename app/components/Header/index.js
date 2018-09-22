import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import login from 'horizon/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  setLogoutCurrentUser,
  getCurrentUser,
} from '../../containers/App/actions';
import {
  Bar,
  PictureContainer,
  ProfilePicture,
  Stats,
  Rating,
  Comments,
  Popularity,
  Profile,
  Logout,
  Navigation,
} from './styles';
import {
  selectCurrentUser,
  selectLoginStatus,
} from '../../containers/App/selectors';

class Header extends React.PureComponent {
  componentDidMount() {
    if (!this.props.loginStatus && login.auth.currentUser) {
      this.props.getCurrentUser(login.auth.currentUser.email);
    } else {
      login.isSignIn(user => {
        if (user) {
          const { email, displayName, photoURL } = user;
          this.props.getCurrentUser({ email, displayName, photoURL });
        } else {
          this.props.history.push('/login');
        }
      });
    }
  }

  static propTypes = {
    currentUser: PropTypes.object,
    setLogoutCurrentUser: PropTypes.func,
    loginStatus: PropTypes.bool,
    getCurrentUser: PropTypes.func,
    history: PropTypes.any,
  };

  removeSessionId = () => {
    login.signOut(() => {
      this.props.setLogoutCurrentUser();
      this.props.history.push('/login');
    });
  };

  calculateRating = rating => {
    const sum = rating.reduce((a, b) => a + b, 0);
    if (sum > 0) {
      return sum / rating.length;
    }
    return 0;
  };

  render() {
    const path = window.location.pathname;
    return (
      <Bar>
        <Profile>
          <PictureContainer>
            <Link className="user" href to="/" />
            <ProfilePicture source={this.props.currentUser.photoURL} />
          </PictureContainer>
        </Profile>
        <Navigation>
          <button active={(path === '/').toString()}>
            <Link href to="/" />
            <FontAwesomeIcon icon="home" />
          </button>
          <button active={(path === '/messages').toString()}>
            <Link href to="/messages" />
            <FontAwesomeIcon icon="comments" />
          </button>
          <Logout onClick={this.removeSessionId} className="logout">
            <FontAwesomeIcon icon="sign-out-alt" />
          </Logout>
        </Navigation>
        <Stats>
          <Rating>
            <div>
              <FontAwesomeIcon icon="star" />
            </div>
            <div>
              {this.calculateRating(this.props.currentUser.rating).toFixed(2) ||
                '-'}
            </div>
          </Rating>
          <Popularity>
            <div>
              <FontAwesomeIcon icon="fire" />
            </div>
            <div>
              {Math.round(
                this.calculateRating(this.props.currentUser.rating) *
                  this.props.currentUser.comments.length,
              ) || '-'}
            </div>
          </Popularity>
          <Comments>
            <div>
              <FontAwesomeIcon icon="comments" />
            </div>
            <div>{this.props.currentUser.comments.length || 0}</div>
          </Comments>
        </Stats>
      </Bar>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser(),
  login: selectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLogoutCurrentUser, getCurrentUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Header));
