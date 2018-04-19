import React, { Component } from 'react'
import { View, Text, Styles } from 'reactxp'

import { Page } from '../components/page/Page'
import { Todo } from '../components/Todo'
import { TextInput } from '../components/TextInput'

import { bindActionCreators } from 'redux'
import { connectViewModel } from 'resolve-redux'
import actions from '../actions'

const styles = {
  view: Styles.createViewStyle({
    flex: 1,
    alignItems: 'center'
  }),

  title: Styles.createTextStyle({
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20
  }),

  list: Styles.createViewStyle({})
}

const viewModelName = 'Todos'
const aggregateId = 'root-id'

export class App extends Component {
  createTodo = text => {
    this.props.createItem(aggregateId, { id: Date.now(), text })
  }

  toggleTodo = id => {
    this.props.toggleItem(aggregateId, { id })
  }

  removeTodo = id => {
    this.props.removeItem(aggregateId, { id })
  }

  sortTodos = todos => {
    const arrTodos = Object.keys(todos).map(id => ({ id, ...todos[id] }))
    arrTodos.sort((a, b) => a.checked - b.checked)
    return arrTodos
  }

  render() {
    const { todos } = this.props
    return (
      <Page style={styles.view}>
        <Text style={styles.title}>TODO List</Text>
        <View style={styles.list}>
          {todos &&
            this.sortTodos(todos).map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={this.toggleTodo}
                onRemove={this.removeTodo}
              />
            ))}
          <TextInput
            key="add-todo"
            placeholder="New TODO"
            onSubmit={this.createTodo}
          />
        </View>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  viewModelName,
  aggregateId,
  todos: state[viewModelName] && state[viewModelName][aggregateId]
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connectViewModel(mapStateToProps, mapDispatchToProps)(App)
