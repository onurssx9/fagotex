import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import login from 'horizon/login';
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
  Rank,
  Popularity,
  Profile,
  Logout,
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

  render() {
    return (
      <Bar>
        <Profile>
          <PictureContainer>
            <Link className="user" href to="/" />
            <ProfilePicture source={this.props.currentUser.photoURL} />
          </PictureContainer>
          {!this.props.loginStatus && (
            <Logout onClick={this.removeSessionId} className="logout">
              Logout
            </Logout>
          )}
        </Profile>
        <Stats>
          <Rating>
            <div>{this.props.currentUser.rating || 1}</div>
          </Rating>
          <Rank>
            <div>{this.props.currentUser.rank || '-'}</div>
          </Rank>
          <Popularity>
            <Link className="messages" href to="/messages" />
            <div>{this.props.currentUser.comments.length || '-'}</div>
          </Popularity>
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
