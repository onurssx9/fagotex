import React from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserObject } from '../../App/selectors';
import { setUserObject } from '../../App/actions';
import { Login, Form, Title, Motto, Wrapper, ProfilePicture } from './styles';

class ProfileCard extends React.PureComponent {
  static propTypes = {
    setUserObject: PropTypes.func,
    userObject: PropTypes.object,
    history: PropTypes.any,
  };

  responseGoogle = response => {
    if (response.error) {
      if (response.error === 'popup_closed_by_user') return;
      throw new Error(response.error);
    }

    const userSession =
      localStorage.getItem('user-session') ||
      Math.floor(Math.random() * 10 ** 20);
    localStorage.setItem('user-session', userSession);

    const { profileObj } = response;

    this.props.setUserObject(profileObj);

    this.props.history.push('/');
  };

  render() {
    return (
      <React.Fragment>
        <Login>
          <Form>
            <ProfilePicture
              source={
                this.props.userObject.imageUrl ||
                'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
              }
            />
            <Title>{this.props.userObject.name || 'Fagotex'}</Title>
            <Motto>
              To keep your secret is wisdom; but to expect others to keep it is
              folly.
            </Motto>
            <Wrapper>
              <GoogleLogin
                clientId="903355575028-58hse89u1r0s9d0fr9aoelht2jrcq1cj.apps.googleusercontent.com"
                buttonText="Enter"
                className="googleLogin"
                onSuccess={response => this.responseGoogle(response)}
                onFailure={response => this.responseGoogle(response)}
                isSignedIn
              />
            </Wrapper>
          </Form>
        </Login>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userObject: getUserObject(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserObject }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfileCard));
