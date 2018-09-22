import styled from 'styled-components';
import { Attributes } from '../theme';

export const RecievedMessages = styled.div`
  background: ${Attributes.secondaryDark};
  -webkit-overflow-scrolling: touch;
  max-height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  background: white;
  align-items: center;
  padding: 5px;
  color: ${Attributes.green};
`;

export const Block = styled.div`
  display: inline-block;
  align-items: center;
  padding: 10px;
  width: ${props => props.grow}%;
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
  margin: 10px;
  outline: none;
  cursor: pointer;
  font-size: 10px;
  padding: 0px;

  svg {
    pointer-events: none;
  }
`;

export const Comments = styled.div`
  overflow-y: auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  border-top: ${Attributes.blockSeperator};
`;

export const Comment = styled.div`
  display: inline-block;
  width: 100%;
  border-bottom: ${Attributes.blockSeperator};
  height: fit-content;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 5px 0px 5px 0px;

  &:last-child {
    border-bottom: none;
  }
`;
