import styled from 'styled-components';
import { Attributes } from '../../theme';

export const Login = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${Attributes.primaryDark};

  .googleLogin {
    width: 100%;
    padding: 10px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    outline: none;
    color: white;
    background: ${Attributes.green};

    &:hover {
      border-radius: 2px;
    }
  }
`;

export const Form = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: white;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.h1`
  padding: 0px;
  margin: 10px 0px 10px 0px;
  color: ${Attributes.secondaryLight};
  text-align: center;
  font-size: 25px;
`;

export const Motto = styled.span`
  color: ${Attributes.grey};
  border-bottom: 1px ${Attributes.grey} solid;
  padding-bottom: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Seperator = styled.div`
  flex: ${props => props.flex};
  padding: 0px 10px 0px 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ProfilePicture = styled.div`
  width: 96px;
  height: 96px;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;
  background: url(${props => props.source});
  background-size: contain;
  border-radius: 100%;
`;
