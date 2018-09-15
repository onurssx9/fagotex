import styled from 'styled-components';
import { Attributes } from '../../../theme';

export const CommentInput = styled.input`
  width: 70%;
  height: 100%;
  outline: none;
  color: ${Attributes.primaryDark};
  padding: 5px;
  margin-right: 5px;
  border-bottom: ${Attributes.blockSeperator};
  transition: all 0.5s ease;

  &:focus {
    border-color: ${Attributes.green};
  }
`;

export const SendComment = styled.button`
  width: 30%;
  height: 100%;
  outline: none;
  padding: 5px;
  border-radius: 2px;
  background: ${Attributes.green};
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background: ${Attributes.greenHighlight};
    border-radius: 5px;
  }
`;
