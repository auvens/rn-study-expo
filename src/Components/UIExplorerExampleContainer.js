import React from 'react'
import { Platform } from 'react-native'

import UIExplorerBlock from './UIExplorerBlock'
import UIExplorerPage from './UIExplorerPage'

class UIExplorerExampleContainer extends React.Component {
  renderExample(example, i) {
    // Filter platform-specific examples
    const { title, description, platform } = example
    if (platform) {
      if (Platform.OS !== platform) {
        return null
      }
      title += ' (' + platform + ' only)'
    }
    return (
      <UIExplorerBlock key={i} title={title} description={description}>
        {example.render()}
      </UIExplorerBlock>
    )
  }

  render() {
    if (!this.props.module.examples) {
      return <this.props.module />
    }

    return (
      <UIExplorerPage title={this.props.title}>
        {this.props.module.examples.map(this.renderExample)}
      </UIExplorerPage>
    )
  }
}

export default UIExplorerExampleContainer
