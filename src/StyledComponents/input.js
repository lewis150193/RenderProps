import styled from 'styled-components'

export default styled.input`
  background-color:  ${props => props.primary ? 'honeydew' : 'blue' };
  border: solid darkgray thin;
  padding: 4px;
  margin-left: 3px;

`;
