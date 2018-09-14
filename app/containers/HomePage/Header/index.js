import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Bar,
  PictureContainer,
  ProfilePicture,
  Stats,
  Rating,
  Rank,
  Popularity,
} from './styles';

class Header extends React.PureComponent {
  static propTypes = {
    profilePicture: PropTypes.string,
    rating: PropTypes.float,
    rank: PropTypes.number,
    popularity: PropTypes.number,
  };
  render() {
    return (
      <Bar>
        <PictureContainer>
          <ProfilePicture
            source={
              this.props.profilePicture ||
              'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
            }
          />
        </PictureContainer>
        <Stats>
          <Rating>
            <div>{this.props.rating || '4.7'}</div>
          </Rating>
          <Rank>
            <div>{this.props.rank || '539'}</div>
          </Rank>
          <Popularity>
            <div>{this.props.popularity || '92'}</div>
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
