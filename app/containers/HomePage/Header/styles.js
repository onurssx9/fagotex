import styled from 'styled-components';
import { Attributes } from '../../theme';

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

  a {
    color: white;
    width: 100%;
    background: ${Attributes.green};
    text-decoration: none;
    text-align: center;
    align-self: flex-start;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80px;
  height: 80px;
  background: ${Attributes.primaryLight};
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

  &:hover {
    ${ProfilePicture} {
      transform: scale(1.7);
      border-radius: 0%;
    }
  }
`;

export const Rating = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;

  &:before {
    content: '⭐';
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  div {
    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
  }
`;

export const Rank = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;

  &:before {
    content: '#';
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: ${Attributes.yellow};
  }

  div {
    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
  }
`;

export const Popularity = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;

  &:before {
    content: '💬';
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  div {
    align-items: center;
    justify-content: center;
    color: ${Attributes.grey};
    font-size: 20px;
  }
`;

export const Stats = styled.div`
  width: 100%;
  justify-content: flex-start;

  > div {
    width: 100%;
    height: 80px;
    border-bottom: ${Attributes.seperator};
    padding-top: 5px;
    padding-bottom: 5px;
    background: ${Attributes.primaryDark};

    &:first-child {
      border-top: ${Attributes.seperator};
    }
  }
`;
