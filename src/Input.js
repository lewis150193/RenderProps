import React from "react";

export class Input extends React.Component {
    state = {
        value: ""
    };

    onChange = e => {
        this.setState({ value: e.target.value }, () => {
            console.log("Current Input state:", this.state.value);
        });
    };

    onSubmit = e => {
      console.log(this.state.value);
    }

    render() {
        const { value } = this.state;
        const { onChange, onSubmit } = this;

        return this.props.children({ value, onChange, onSubmit });
    }
}

export default Input;
