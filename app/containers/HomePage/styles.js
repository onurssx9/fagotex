import styled from 'styled-components';
import { Attributes } from '../theme';

export const People = styled.div`
  background: ${Attributes.secondaryDark};
  flex-wrap: wrap;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: fit-content;
  height: fit-content;
  max-height: 100%;
  justify-content: space-around;
  align-items: flex-start;
`;
