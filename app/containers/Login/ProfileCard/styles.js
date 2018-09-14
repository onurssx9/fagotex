import styled from 'styled-components';
import theme from '../../theme';

export const Login = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${theme.primaryDark};
`;

export const Form = styled.div`
  width: 300px;
  min-width: 300px;
  background: white;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
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
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  &:before {
    content: "${props => props.label}";
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: baseline;
  }

  &[label="Name"] {
    display: ${props => props.display};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    border-radius: 2px;
  }

  &[type='login'] {
    background: ${theme.yellow};
  }

  &[type='register'] {
    color: ${theme.yellow};
  }
`;
