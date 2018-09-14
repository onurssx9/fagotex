import styled from 'styled-components';
import theme from '../../theme';

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80px;
  height: 100%;
  background: ${theme.primaryLight};

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: url(${props => props.source});
  background-size: contain;
  transition: all 0.5s ease;
`;

export const PictureContainer = styled.div`
  justify-content: center;
  width: 100%;
  height: 80px;
  background: ${theme.primaryDark};
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
    color: ${theme.grey};
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
    color: ${theme.yellow};
  }

  div {
    align-items: center;
    justify-content: center;
    color: ${theme.grey};
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
    color: ${theme.grey};
    font-size: 20px;
  }
`;

export const Stats = styled.div`
  width: 100%;
  justify-content: flex-start;

  > div {
    width: 100%;
    height: 80px;
    border-bottom: ${theme.seperator};
    padding-top: 5px;
    padding-bottom: 5px;
    background: ${theme.primaryDark};

    &:first-child {
      border-top: ${theme.seperator};
    }
  }
`;
