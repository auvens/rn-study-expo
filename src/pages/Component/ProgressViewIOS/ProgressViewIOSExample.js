import React from 'react'
import { ProgressViewIOS, StyleSheet, View } from 'react-native'

class ProgressViewExample extends React.Component {
  state = {
    progress: 0
  }

  componentDidMount() {
    this.updateProgress()
  }

  updateProgress() {
    var progress = this.state.progress + 0.01
    this.setState({ progress })
    requestAnimationFrame(() => this.updateProgress())
  }

  getProgress(offset) {
    var progress = this.state.progress + offset
    return Math.sin(progress % Math.PI) % 1
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS
          style={styles.progressView}
          progress={this.getProgress(0)}
        />
        <ProgressViewIOS
          style={styles.progressView}
          progressTintColor="purple"
          progress={this.getProgress(0.2)}
        />
        <ProgressViewIOS
          style={styles.progressView}
          progressTintColor="red"
          progress={this.getProgress(0.4)}
        />
        <ProgressViewIOS
          style={styles.progressView}
          progressTintColor="orange"
          progress={this.getProgress(0.6)}
        />
        <ProgressViewIOS
          style={styles.progressView}
          progressTintColor="yellow"
          progress={this.getProgress(0.8)}
        />
      </View>
    )
  }
}

exports.displayName = ''
exports.framework = 'React'
exports.title = 'ProgressViewIOS'
exports.description = 'ProgressViewIOS'
exports.examples = [
  {
    title: 'ProgressViewIOS',
    render() {
      return <ProgressViewExample />
    }
  }
]

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    backgroundColor: 'transparent'
  },
  progressView: {
    marginTop: 20
  }
})
