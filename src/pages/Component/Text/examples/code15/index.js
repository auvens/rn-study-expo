import React from 'react'
import Main from './main'

export default {
  title: 'Nested',
  desc:
    'Nested text components will inherit the styles of their ' +
    'parents (only backgroundColor is inherited from non-Text parents).  ' +
    '`<Text>` only supports other `<Text>` and raw text (strings) as children.',
  render() {
    return <Main />
  },
  code: [
    {
      name: 'main.js',
      url: 'src/pages/Component/Text/examples/code15/main.js'
    }
  ]
}
