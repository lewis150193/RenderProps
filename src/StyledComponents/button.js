import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.primary ? 'firebrick' : 'lightgreen' };
  border: solid darkgray thin;
  padding: 4px;
  margin-left: 3px;

`;

export const NewButton = styled.button`
  background-color:   ${props => props.primary ? 'darkblue' : 'darkgray'};
  border: dot-dot-dash lightgreen medium;
  padding: 9px;
  margin-left: 3px;
`;


