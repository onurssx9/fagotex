/* eslint-disable */
import styled from 'styled-components';
import { Attributes } from '../../../theme';

export const RatingBox = styled.div`
  display: flex;
  position: absolute;
  transition: all 0.5s ease;
  background: white;
  border-radius: 0px 0px 5px 5px;
  left: 0px;
  top: calc(100% + 6px);
  max-height: 0px;
  overflow: hidden;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const Rate = styled.button`
  flex: 1;
  position: relative;
  border-right: ${Attributes.blockSeperator};
  font-size: 25px;
  cursor: pointer;
  transition: all .5s ease;
  padding: 0px;
  outline: none;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${Attributes.greenHighlight};
  }

  &:after {
    content: "${props => props.value}";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
  }
`;
