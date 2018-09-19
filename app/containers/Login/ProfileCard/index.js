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

import { setCurrentUser } from '../../App/actions';

class ProfileCard extends React.PureComponent {
  static propTypes = {
    setCurrentUser: PropTypes.func,
  };

  componentDidMount() {
    login.isSignIn(user => {
      if (user) {
        const { displayName, email, photoURL } = user;
        this.props.setCurrentUser({
          displayName,
          email,
          photoURL,
        });
      }
    });
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

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentUser,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfileCard));
