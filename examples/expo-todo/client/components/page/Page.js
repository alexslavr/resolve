import React from 'react'
import { View } from 'reactxp'

import { Helmet } from 'react-helmet'

export const Page = ({ style, children }) => (
  <View style={style}>
    <Helmet>
      <link rel="stylesheet" href="/style.css" />
      <title>TODO List</title>
    </Helmet>
    {children}
  </View>
)
