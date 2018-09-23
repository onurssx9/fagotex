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
  position: relative;
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

export const HashtagTitle = Title;

export const HashtagInput = styled.input`
  width: 100%;
  height: 57px;
  outline: none;
  font-size: 25px;
  text-align: center;
  color: ${Attributes.secondaryDark};
  padding: 0px 30px 0px 0px;
  border-bottom: ${Attributes.blockSeperator};
  transition: all 0.5s ease;
  font-weight: bolder;

  &:focus {
    border-color: ${Attributes.green};
  }
`;

export const HashtagAdd = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${Attributes.grey};
  justify-content: center;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  padding: 0px;
  transition: all 0.5s ease;
  position: absolute;
  right: 0px;

  &:hover {
    color: ${Attributes.green};
  }

  svg {
    pointer-events: none;
  }
`;

export const Stat = styled.div`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;

  &[type='rating'] {
    cursor: pointer;
    [data-icon='star'] {
      margin: 5px;
      color: ${Attributes.yellow};
    }

    div {
      align-items: center;
      justify-content: center;
      color: ${Attributes.grey};
      font-size: 20px;
    }

    &:hover {
      > div {
        max-height: 500px;
      }
    }
  }

  &[type='rank'] {
    [data-icon='comments'] {
      margin: 5px;
      color: ${Attributes.blue};
    }

    div {
      align-items: center;
      justify-content: center;
      color: ${Attributes.grey};
      font-size: 20px;
    }
  }

  &[type='popularity'] {
    [data-icon='fire'] {
      margin: 5px;
      color: ${Attributes.red};
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
  display: block;
  width: 100%;
  border-bottom: ${Attributes.blockSeperator};
  height: fit-content;
  padding: 5px 0px 5px 0px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Delete = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${Attributes.red};
  align-items: center;
  color: white;
  justify-content: center;
  border-radius: 5px;
  margin: 0px 10px 0px 0px;
  outline: none;
  cursor: pointer;
  font-size: 10px;
  padding: 0px;

  svg {
    pointer-events: none;
  }
`;
