import styled from 'styled-components'

export default styled.button`
  background-color: ${props => props.primary ? 'firebrick' : 'lightgreen' };
  border: solid darkgray thin;
  padding: 4px;
  margin-left: 3px;

`;


