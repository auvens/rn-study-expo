import React from 'react'
import Main from './main'

export default {
  title: 'Adjusted color',
  desc:
    'Adjusts the color in a way that looks standard on each ' +
    'platform. On iOS, the color prop controls the color of the text. On ' +
    'Android, the color adjusts the background color of the button.',
  render() {
    return <Main />
  },
  code: [
    {
      name: 'main.js',
      url: 'src/pages/Component/Button/examples/code02/main.js'
    }
  ]
}
