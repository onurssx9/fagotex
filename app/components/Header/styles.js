import styled from 'styled-components';
import { Attributes } from '../../containers/theme';

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80px;
  height: 100%;
  background: ${Attributes.primaryLight};

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-height: 330px) {
    > div:first-child {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80px;
  height: fit-content;
  background: ${Attributes.primaryLight};
  position: relative;
`;

export const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: url(${props => props.source}), ${Attributes.primaryLight};
  background-size: contain;
  transition: all 0.5s ease;
`;

export const PictureContainer = styled.div`
  justify-content: center;
  width: 100%;
  height: 80px;
  min-height: 80px;
  background: ${Attributes.primaryDark};
  overflow: hidden;
  cursor: pointer;
`;

export const Rating = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;

  div {
    &:first-child {
      color: ${Attributes.yellow};
    }

    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
    flex: 1;
  }
`;

export const Popularity = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;

  div {
    &:first-child {
      color: ${Attributes.red};
    }

    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
    flex: 1;
  }
`;

export const Comments = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;

  div {
    &:first-child {
      color: ${Attributes.blue};
    }

    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
    flex: 1;
  }
`;

export const Stats = styled.div`
  width: 100%;
  justify-content: flex-start;
  min-height: fit-content;

  a {
    background: transparent;
    height: 100%;
    position: absolute;
  }

  > div {
    width: 100%;
    border-bottom: ${Attributes.seperator};
    padding: 5px;
    background: ${Attributes.primaryDark};
    flex-direction: row;
    height: 43px;

    &:first-child {
      border-top: ${Attributes.seperator};
    }
  }
`;

export const Navigation = styled.div`
  flex: 1;
  width: 80px;
  justify-content: flex-start;
  color: white;
  min-height: fit-content;

  button {
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
    padding: 10px;
    background: ${Attributes.primaryDark};
    border-bottom: ${Attributes.seperator};

    &[active='true'] {
      background: ${Attributes.primaryLight};
      color: ${Attributes.yellow};
    }

    &:first-child {
      border-top: ${Attributes.seperator};
    }

    &:last-child {
      border-bottom: none;
      background: ${Attributes.red};
    }

    a {
      background: transparent;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  width: 100%;
  height: 30px;
  text-decoration: none;
  text-align: center;
  align-self: flex-start;
  z-index: 999;
  background: ${Attributes.red};
  border-radius: 0px 0px 10px 10px;
`;
