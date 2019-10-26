import React from 'react'
import { Text, View, LayoutAnimation } from 'react-native'

export default class Example extends React.Component {
  state = { dynamicText: '', shouldRender: true }

  reset = () => {
    LayoutAnimation.easeInEaseOut()
    this.setState({
      shouldRender: false
    })
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut()
      this.setState({
        dynamicText: '',
        shouldRender: true
      })
    }, 300)
  }
  addText = () => {
    this.setState({
      dynamicText:
        this.state.dynamicText +
        (Math.floor((Math.random() * 10) % 2) ? ' foo' : ' bar')
    })
  }
  removeText = () => {
    this.setState({
      dynamicText: this.state.dynamicText.slice(
        0,
        this.state.dynamicText.length - 4
      )
    })
  }
  render() {
    if (!this.state.shouldRender) {
      return <View />
    }
    return (
      <View>
        <Text
          lineBreakMode="tail"
          numberOfLines={1}
          style={{ fontSize: 36, marginVertical: 6 }}
        >
          Truncated text is baaaaad.
        </Text>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          style={{ fontSize: 40, marginVertical: 6 }}
        >
          Shrinking to fit available space is much better!
        </Text>

        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{ fontSize: 30, marginVertical: 6 }}
        >
          {'Add text to me to watch me shrink!' + ' ' + this.state.dynamicText}
        </Text>

        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={4}
          style={{ fontSize: 20, marginVertical: 6 }}
        >
          {'Multiline text component shrinking is supported, watch as this reeeeaaaally loooooong teeeeeeext grooooows and then shriiiinks as you add text to me! ioahsdia soady auydoa aoisyd aosdy ' +
            ' ' +
            this.state.dynamicText}
        </Text>

        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{ marginVertical: 6 }}
        >
          <Text style={{ fontSize: 14 }}>
            {'Differently sized nested elements will shrink together. '}
          </Text>
          <Text style={{ fontSize: 20 }}>
            {'LARGE TEXT! ' + this.state.dynamicText}
          </Text>
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
            marginVertical: 6
          }}
        >
          <Text style={{ backgroundColor: '#ffaaaa' }} onPress={this.reset}>
            Reset
          </Text>
          <Text
            style={{ backgroundColor: '#aaaaff' }}
            onPress={this.removeText}
          >
            Remove Text
          </Text>
          <Text style={{ backgroundColor: '#aaffaa' }} onPress={this.addText}>
            Add Text
          </Text>
        </View>
      </View>
    )
  }
}
