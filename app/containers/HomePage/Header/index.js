import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../App/actions';
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

class Header extends React.PureComponent {
  static propTypes = {
    userObject: PropTypes.object,
    login: PropTypes.any,
    logoutUser: PropTypes.func,
  };

  removeSessionId = () => {
    this.props.logoutUser(localStorage.getItem('user-session'));
    localStorage.removeItem('user-session');
  };

  render() {
    return (
      <Bar>
        <Profile>
          <PictureContainer>
            <ProfilePicture source={this.props.userObject.imageUrl} />
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
            <div>{this.props.userObject.rating || '-'}</div>
          </Rating>
          <Rank>
            <div>{this.props.userObject.rank || '-'}</div>
          </Rank>
          <Popularity>
            <div>
              {Object.keys(this.props.userObject.comments.recieved).length ||
                '-'}
            </div>
          </Popularity>
        </Stats>
      </Bar>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
