import styled from 'styled-components';
import { Title, Attributes } from '../../theme';

export const Card = styled.div`
  flex-direction: column;
  width: 250px;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

export const Block = styled.div`
  flex: ${props => props.flex || 1};
  width: 100%;
  align-items: center;
  justify-content: center;

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
  }
`;

export const Picture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

export const UserTitle = Title;

export const Stat = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  &[type='rating'] {
    &:before {
      content: '⭐';
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    div {
      align-items: center;
      justify-content: center;
      color: ${Attributes.grey};
      font-size: 20px;
    }
  }

  &[type='rank'] {
    &:before {
      content: '#';
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    div {
      align-items: center;
      justify-content: center;
      color: ${Attributes.grey};
      font-size: 20px;
    }
  }

  &[type='popularity'] {
    &:before {
      content: '💬';
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    div {
      align-items: center;
      justify-content: center;
      color: ${Attributes.grey};
      font-size: 20px;
    }
  }
`;

export const Comments = styled.div`
  flex: 1;
  height: 180px;
  overflow-y: auto;
  flex-direction: column;
  width: 100%;
  margin-top 5px;
  border-top: ${Attributes.blockSeperator};
`;

export const Comment = styled.div`
  min-height: 30px;
  width: 100%;
  border-bottom: ${Attributes.blockSeperator};
`;
