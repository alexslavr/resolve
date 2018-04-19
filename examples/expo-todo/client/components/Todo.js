import React, { Component } from 'react'
import { View, Button, Text, Styles } from 'reactxp'
import { Switch } from './switch/Switch'

const styles = {
  todo: Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  }),

  item: Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center'
  }),

  text: Styles.createTextStyle({
    fontSize: 16,
    marginLeft: 10,
    marginRight: 20
  }),

  checked: Styles.createTextStyle({
    color: '#828282',
    textDecorationLine: 'line-through'
  }),

  button: Styles.createViewStyle({
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
    const {
      todo: { id },
      onToggle
    } = this.props
    onToggle(id)
  }

  onRemove = () => {
    const {
      todo: { id },
      onRemove
    } = this.props
    onRemove(id)
  }

  render() {
    const {
      todo: { text, checked }
    } = this.props
    return (
      <View style={styles.todo}>
        <View style={styles.item}>
          <Switch value={checked} onValueChange={this.onToggle} />
          <Text style={[styles.text, checked && styles.checked]}>{text}</Text>
        </View>
        <Button style={styles.button} onPress={this.onRemove}>
          <Text style={styles.close}>{String.fromCharCode(0x00d7)}</Text>
        </Button>
      </View>
    )
  }
}
