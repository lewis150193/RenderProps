import styled from 'styled-components'
import Input from '../Input'

export default styled(Input)`
  background-color:  ${props => props.primary ? 'beige' : 'blanchedalmond' };
  border: solid darkgray;
  padding: 14px;
  margin-left: 3px;
  flex: fit-content;

`;
