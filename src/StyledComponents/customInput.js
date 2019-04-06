import styled from 'styled-components'
import Input from '../Input'

export default styled(Input)`
  background-color: ${props => props.primary ? 'red' : 'blue' };
  border: solid black;
  padding: 14px;
  margin-left: 3px;

`;
