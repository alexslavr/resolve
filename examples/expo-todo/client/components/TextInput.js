import React, { Component } from 'react'
import { TextInput as RXTextInput, Styles } from 'reactxp'

const styles = {
  input: Styles.createViewStyle({
    borderRadius: 4,
    borderColor: '#333333',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  })
}

export class TextInput extends Component {
  state = {
    value: ''
  }

  onChange = value => {
    this.setState({ value })
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.value)
    this.onBlur()
  }

  onBlur = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <RXTextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChangeText={this.onChange}
        onSubmitEditing={this.onSubmit}
        onBlur={this.onBlur}
      />
    )
  }
}
