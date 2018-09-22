import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import login from 'horizon/login';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Login, Form, Title, Motto, Wrapper, ProfilePicture } from './styles';
import BlankPhoto from './blankProfile.png';

import { getCurrentUser } from '../../App/actions';
import { selectLoginStatus } from '../../App/selectors';

class ProfileCard extends React.PureComponent {
  static propTypes = {
    getCurrentUser: PropTypes.func,
    loginStatus: PropTypes.bool,
  };

  componentDidMount() {
    if (!this.props.loginStatus && login.auth.currentUser) {
      this.props.getCurrentUser(login.auth.currentUser.email);
    } else {
      login.isSignIn(user => {
        if (user) {
          const { email, photoURL, displayName } = user;
          this.props.getCurrentUser({
            email,
            photoURL,
            displayName,
          });
        }
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Login>
          <Form>
            <ProfilePicture source={BlankPhoto} />
            <Title>Fagotex</Title>
            <Motto>
              To keep your secret is wisdom; but to expect others to keep it is
              folly.
            </Motto>
            <Wrapper>
              <StyledFirebaseAuth
                uiConfig={login.uiConfigs}
                firebaseAuth={login.auth}
              />
            </Wrapper>
          </Form>
        </Login>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginStatus: selectLoginStatus(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCurrentUser,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfileCard));
