import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Login,
  Form,
  Title,
  Motto,
  Wrapper,
  FormInput,
  Seperator,
  Button,
  Group,
  ProfilePicture,
  PictureContainer,
} from './styles';

class ProfileCard extends React.PureComponent {
  static propTypes = {
    source: PropTypes.string,
  };

  state = {
    formType: 'login',
  };

  updateFormType(type) {
    this.setState({ formType: type });
  }

  sendForm() {
    alert(this.state.formType);
  }

  render() {
    return (
      <React.Fragment>
        <Login>
          <Form type={this.state.formType}>
            <PictureContainer>
              <ProfilePicture
                source={
                  this.props.source ||
                  'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
                }
              />
            </PictureContainer>
            <Title>Fagotex</Title>
            <Motto>
              To keep your secret is wisdom; but to expect others to keep it is
              folly.
            </Motto>
            <Group>
              <Wrapper label="Name">
                <Seperator flex="2">
                  <FormInput type="text" />
                </Seperator>
              </Wrapper>
              <Wrapper label="Email">
                <Seperator flex="2">
                  <FormInput type="email" />
                </Seperator>
              </Wrapper>
              <Wrapper label="Password">
                <Seperator flex="2">
                  <FormInput type="password" />
                </Seperator>
              </Wrapper>
            </Group>
            <Wrapper type={`${this.state.formType}-submit`} switch="test">
              <Button onClick={() => this.updateFormType('login')} type="login">
                Login
              </Button>
              <Button
                onClick={() => this.updateFormType('register')}
                type="register"
              >
                Register
              </Button>
            </Wrapper>
            <Wrapper>
              <Button
                onClick={() => this.sendForm()}
                type={this.state.formType}
              >
                {"Let's go!"}
              </Button>
            </Wrapper>
          </Form>
        </Login>
      </React.Fragment>
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
)(ProfileCard);
