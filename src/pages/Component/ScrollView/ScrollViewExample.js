import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native'

exports.displayName = 'ScrollViewExample'
exports.title = '<ScrollView>'
exports.description =
  'Component that enables scrolling through child components'
exports.examples = [
  {
    title: '<ScrollView>',
    description:
      'To make content scrollable, wrap it within a <ScrollView> component',
    render: function() {
      let _scrollView
      return (
        <View>
          <ScrollView
            ref={scrollView => {
              _scrollView = scrollView
            }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => {
              console.log('onScroll!')
            }}
            scrollEventThrottle={200}
            style={styles.scrollView}
          >
            {THUMB_URLS.map(createThumbRow)}
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              _scrollView.scrollTo({ y: 0 })
            }}
          >
            <Text>Scroll to top</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              _scrollView.scrollToEnd({ animated: true })
            }}
          >
            <Text>Scroll to bottom</Text>
          </TouchableOpacity>
        </View>
      )
    }
  },
  {
    title: '<ScrollView> (horizontal = true)',
    description:
      "You can display <ScrollView>'s child components horizontally rather than vertically",
    render() {
      function renderScrollView(title, addtionalStyles) {
        let _scrollView
        return (
          <View style={addtionalStyles}>
            <Text style={styles.text}>{title}</Text>
            <ScrollView
              ref={scrollView => {
                _scrollView = scrollView
              }}
              automaticallyAdjustContentInsets={false}
              horizontal={true}
              style={[styles.scrollView, styles.horizontalScrollView]}
            >
              {THUMB_URLS.map(createThumbRow)}
            </ScrollView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                _scrollView.scrollTo({ x: 0 })
              }}
            >
              <Text>Scroll to start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                _scrollView.scrollToEnd({ animated: true })
              }}
            >
              <Text>Scroll to end</Text>
            </TouchableOpacity>
          </View>
        )
      }

      return (
        <View>
          {renderScrollView('LTR layout', { direction: 'ltr' })}
          {renderScrollView('RTL layout', { direction: 'rtl' })}
        </View>
      )
    }
  }
]

class Thumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    return (
      <View style={styles.thumb}>
        <Image style={styles.img} source={this.props.source} />
      </View>
    )
  }
}

let THUMB_URLS = [
  require('../../../images/Thumbnails/like.png'),
  require('../../../images/Thumbnails/dislike.png'),
  require('../../../images/Thumbnails/call.png'),
  require('../../../images/Thumbnails/fist.png'),
  require('../../../images/Thumbnails/bandaged.png'),
  require('../../../images/Thumbnails/flowers.png'),
  require('../../../images/Thumbnails/heart.png'),
  require('../../../images/Thumbnails/liking.png'),
  require('../../../images/Thumbnails/party.png'),
  require('../../../images/Thumbnails/poke.png'),
  require('../../../images/Thumbnails/superlike.png'),
  require('../../../images/Thumbnails/victory.png')
]

THUMB_URLS = THUMB_URLS.concat(THUMB_URLS) // double length of THUMB_URLS

const createThumbRow = (uri, i) => <Thumb key={i} source={uri} />

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300
  },
  horizontalScrollView: {
    height: 106
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  },
  button: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 3
  },
  thumb: {
    margin: 5,
    padding: 5,
    backgroundColor: '#cccccc',
    borderRadius: 3,
    minWidth: 96
  },
  img: {
    width: 64,
    height: 64
  }
})
