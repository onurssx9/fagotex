/* eslint-disable */
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
  padding: 0px;
  color: white;
  cursor: pointer;
  position: relative;
  pointer-events: ${props =>
    props.length > 140 || props.length === 0 ? 'none' : 'unset'};

  &:after {
    content: "${props => (props.length > 0 ? `${props.length}/140` : 'Send')}";
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 2px;
    justify-content: center;
    padding: 5px;
    transition: all 0.5s ease;
    background: ${props =>
      props.length > 140 || props.length === 0
        ? Attributes.grey
        : Attributes.green};
  }

  &:hover {
    &:after {
      content: "Send";
      transition: all 0.5s ease;
      background: ${Attributes.greenHighlight};
      border-radius: 5px;
    }
  }
`;
