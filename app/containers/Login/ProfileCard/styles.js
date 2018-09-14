import styled from 'styled-components';
import theme from '../../theme';

export const Login = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${theme.primaryDark};
`;

export const Form = styled.div`
  position: relative;
  width: 300px;
  min-width: 300px;
  height: 435px;
  background: white;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  [type*='login-submit'] {
    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 50%;
      left: 0px;
      top: 0px;
      border-radius: 5px;
      background: ${theme.red};
      transition: all 0.5s ease;
    }
  }

  [type*='register-submit'] {
    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 50%;
      left: 50%;
      top: 0px;
      border-radius: 5px;
      background: ${theme.green};
      transition: all 0.5s ease;
    }
  }

  &[type='login'] {
    [label='Name'] {
      display: none;
    }
  }

  > div:last-child button {
    color: white;

    &[type='login'] {
      background: ${theme.red};
    }

    &[type='register'] {
      background: ${theme.green};
    }
  }
`;

export const Title = styled.h1`
  padding: 0px;
  margin: 0px;
  color: ${theme.secondaryLight};
  margin-bottom: 10px;
`;

export const Motto = styled.span`
  color: ${theme.grey};
  border-bottom: 1px ${theme.grey} solid;
  padding-bottom: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  color: ${theme.secondaryLight};
  outline: none;
  width: 100%;
  border-radius: 2px;
  background: #efefef;
  transition: all 0.5s ease;
  padding: 10px;

  &:focus {
    border-radius: 5px;
    background: #ececec;
  }
`;

export const Seperator = styled.div`
  flex: ${props => props.flex};
  padding: 0px 10px 0px 10px;
`;

export const Wrapper = styled.div`
position: relative;
  width: 100%;
  margin: 10px;
  margin-bottom: 10px;

  &:before {
    content: "${props => props.label}";
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: baseline;
  }

  &[type="login-submit"] {
    [type="login"] {
      color: white;
    }
  }

  &[type="register-submit"] {
    [type="register"] {
      color: white;
    }
  }
`;

export const Group = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  outline: none;
  color: ${theme.green};
  z-index: 9;

  &[type='login'] {
    color: ${theme.red};
  }

  &:hover {
    border-radius: 2px;
  }
`;

export const PictureContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 5px white solid;
  background: ${theme.primaryDark};
  overflow: hidden;
  cursor: pointer;
  transform: translate(0%, -80%);
  box-sizing: border-box;
`;

export const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  background: url(${props => props.source});
  background-size: contain;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;

  &:after {
    content: '+';
    width: 100%;
    height: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    font-size: 35px;
    text-align: center;
    line-height: 60px;
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;
