import React from 'react';
import Input from '../src/StyledComponents/customInput'
import {Button, NewButton} from '../src/StyledComponents/button'
import In from '../src/StyledComponents/input'

export const App = () => (
    <Input >
      {({ value, onChange, onSubmit, className }) => (
          <div className={className}>
          <In primary
              value={value}
              onChange={onChange}
          />
            <Button primary onClick={onSubmit}>Click Me</Button>
            <NewButton   onClick={onSubmit}>Click Me</NewButton>

          </div>
      )}
    </Input>
);

