import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
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
    login: PropTypes.bool,
  };

  render() {
    return (
      <Bar>
        <Profile>
          <PictureContainer>
            <ProfilePicture
              source={
                this.props.userObject.imageUrl ||
                'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
              }
            />
          </PictureContainer>
          {!this.props.login && (
            <Link href to="/login">
              Login
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
            <div>{this.props.userObject.popularity || '-'}</div>
          </Popularity>
        </Stats>
      </Bar>
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
)(Header);
