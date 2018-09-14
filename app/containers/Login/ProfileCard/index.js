import React from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserName } from '../selectors';
import { setUserName } from '../actions';
import { Login, Form, Title, Motto, Wrapper, ProfilePicture } from './styles';

class ProfileCard extends React.PureComponent {
  static propTypes = {
    source: PropTypes.string,
    setUserName: PropTypes.func,
    userName: PropTypes.string,
    // imageUrl: PropTypes.string,
    // googleId: PropTypes.string,
    // email: PropTypes.string,
  };

  updateName = event => {
    this.props.setUserName(event.target.value);
  };

  responseGoogle = response => {
    console.log(response);
    const { profileObj } = response;
    this.props.setUserName(profileObj.name);
  };

  render() {
    return (
      <React.Fragment>
        <Login>
          <Form>
            <ProfilePicture
              source={
                this.props.source ||
                'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
              }
            />
            <Title>{this.props.userName || 'Fagotex'}</Title>
            <Motto>
              To keep your secret is wisdom; but to expect others to keep it is
              folly.
            </Motto>
            <Wrapper>
              <GoogleLogin
                clientId="903355575028-58hse89u1r0s9d0fr9aoelht2jrcq1cj.apps.googleusercontent.com"
                buttonText="Login"
                className="googleLogin"
                onSuccess={response => this.responseGoogle(response)}
                onFailure={response => this.responseGoogle(response)}
              />
            </Wrapper>
          </Form>
        </Login>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userName: getUserName(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserName }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCard);
