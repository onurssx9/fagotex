import React from 'react';
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
} from './styles';

class ProfileCard extends React.PureComponent {
  state = {
    register: '',
  };

  updateForm(isRegister) {
    this.setState({ register: isRegister });
  }

  render() {
    return (
      <React.Fragment>
        <Login>
          <Form>
            <Title>Fagotex</Title>
            <Motto>
              To keep your secret is wisdom; but to expect others to keep it is
              folly.
            </Motto>
            <Wrapper display={this.state.register} label="Name">
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
            <Button onClick={() => this.updateForm('none')} type="login">
              Login
            </Button>
            <Button onClick={() => this.updateForm('flex')} type="register">
              Register
            </Button>
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
