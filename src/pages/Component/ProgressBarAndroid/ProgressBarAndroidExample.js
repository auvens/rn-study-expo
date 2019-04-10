import React from 'react'
import { ProgressBarAndroid } from 'react-native'

class MovingBar extends React.Component {
  state = {
    progress: 0
  }

  componentDidMount() {
    this._timer = setInterval(() => {
      var progress = (this.state.progress + 0.02) % 1
      this.setState({ progress: progress })
    }, 50)
  }

  componentWillUnmount() {
    clearTimeout(this._timer)
  }

  render() {
    return <ProgressBarAndroid progress={this.state.progress} {...this.props} />
  }
}

exports.title = '<ProgressBarAndroid>'
exports.description = 'Horizontal bar to show the progress of some operation.'

exports.examples = [
  {
    title: 'Horizontal Indeterminate ProgressBar',
    render() {
      return <ProgressBarAndroid styleAttr="Horizontal" />
    }
  },
  {
    title: 'Horizontal ProgressBar',
    render() {
      return <MovingBar styleAttr="Horizontal" indeterminate={false} />
    }
  },
  {
    title: 'Horizontal Black Indeterminate ProgressBar',
    render() {
      return <ProgressBarAndroid styleAttr="Horizontal" color="black" />
    }
  },
  {
    title: 'Horizontal Blue ProgressBar',
    render() {
      return (
        <MovingBar styleAttr="Horizontal" indeterminate={false} color="blue" />
      )
    }
  }
]
