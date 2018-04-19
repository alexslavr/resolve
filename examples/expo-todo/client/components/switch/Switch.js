import React, { Component } from 'react'
import { View, Text, Styles } from 'reactxp'

const styles = {
  box: Styles.createViewStyle({
    width: 30,
    height: 30,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#828282',
    borderWidth: 1
  }),

  mark: Styles.createTextStyle({
    fontSize: 16,
    color: '#828282'
  })
}

export class Switch extends Component {
  onToggle = () => {
    const { value, onValueChange } = this.props
    onValueChange(!value)
  }

  render() {
    const { value } = this.props
    return (
      <View style={styles.box} onPress={this.onToggle}>
        {value && (
          <Text style={styles.mark}>{String.fromCharCode(0x2713)}</Text>
        )}
      </View>
    )
  }
}
