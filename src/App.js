import React from 'react';
import Input from './Input'


export const App = () => (
    <Input>
      {({ value, onChange, onSubmit }) => (
          <div>
          <input
              value={value}
              onChange={onChange}
              style={{ border: "2px solid red" }}
          />
            <button onClick={onSubmit}>Click Me</button>
          </div>
      )}
    </Input>
);

