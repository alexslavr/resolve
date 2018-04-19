import React, { Component } from 'react'
import { View, Button, Text, Styles } from 'reactxp'

const styles = {
  todo: Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  }),

  text: Styles.createTextStyle({
    fontSize: 16
  }),

  button: Styles.createViewStyle({
    marginLeft: 10,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4c4c4',
    borderRadius: 4
  }),

  close: Styles.createTextStyle({
    fontSize: 18
  })
}

export class Todo extends Component {
  onToggle = () => {
    const { id, onToggle } = this.props
    onToggle(id)
  }

  onRemove = () => {
    const { id, onRemove } = this.props
    onRemove(id)
  }

  render() {
    const { text } = this.props
    return (
      <View style={styles.todo}>
        <Text style={styles.text}>{text}</Text>
        <Button style={styles.button} onPress={this.onRemove}>
          <Text style={styles.close}>{String.fromCharCode(0x00d7)}</Text>
        </Button>
      </View>
    )
  }
}
