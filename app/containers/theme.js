import styled from 'styled-components';

export const Attributes = {
  primaryDark: '#252525',
  primaryLight: '#353535',
  secondaryDark: '#454545',
  secondaryLight: '#555555',
  grey: '#dedede',
  yellow: '#f9c53f',
  blue: '#58b6ff',
  red: '#ff585c',
  green: '#76b985',
  greenHighlight: '#85ce95',

  seperator: `1px #353535 solid`,
  blockSeperator: `1px #dedede solid`,
};

export const Title = styled.h1`
  padding: 0px;
  margin: 10px 0px 10px 0px;
  color: ${Attributes.secondaryLight};
  text-align: center;
  font-size: 25px;
`;
