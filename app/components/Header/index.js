import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { setLogoutCurrentUser } from '../../containers/App/actions';
import {
  Bar,
  PictureContainer,
  ProfilePicture,
  Stats,
  Rating,
  Rank,
  Popularity,
  Profile,
} from './styles';
import login from 'horizon/login';
import {
  selectCurrentUser,
  selectLoginStatus,
} from '../../containers/App/selectors';

class Header extends React.PureComponent {
  static propTypes = {
    currentUser: PropTypes.object,
    login: PropTypes.any,
    setLogoutCurrentUser: PropTypes.func,
  };

  removeSessionId = () => {
    login.signOut(() => {
      this.props.setLogoutCurrentUser();
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
          {!this.props.login ? (
            <Link href to="/login">
              Login
            </Link>
          ) : (
            <Link
              onClick={this.removeSessionId}
              className="logout"
              href
              to="/login"
            >
              Logout
            </Link>
          )}
        </Profile>
        <Stats>
          <Rating>
            <div>{this.props.currentUser.rating || '-'}</div>
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
  return bindActionCreators({ setLogoutCurrentUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
