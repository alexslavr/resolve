import React from 'react'
import RX from 'reactxp'
import { Provider } from 'react-redux'
import createStore from './store'

import App from './containers/App'

RX.App.initialize(true, true)
RX.UserInterface.setMainView(
  <Provider store={createStore()}>
    <App />
  </Provider>
)
