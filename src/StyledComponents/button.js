import styled from 'styled-components'

export default styled.button`
  background-color: ${props => props.primary ? 'red' : 'blue' };
  border: solid black;
  padding: 14px;
  margin-left: 3px;

`;


