import React from 'react'
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native'
import i18n from './i18n'

const base64Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg=='

const ImageCapInsetsExample = require('./ImageCapInsetsExample')
const IMAGE_PREFETCH_URL =
  'http://origami.design/public/images/bird-logo.png?r=1&t=' + Date.now()
const prefetchTask = Image.prefetch(IMAGE_PREFETCH_URL)

class NetworkImageCallbackExample extends React.Component {
  state = {
    events: [],
    startLoadPrefetched: false,
    mountTime: new Date()
  }

  componentWillMount() {
    this.setState({ mountTime: new Date() })
  }

  render() {
    const { mountTime } = this.state

    return (
      <View>
        <Image
          source={this.props.source}
          style={[styles.base, { overflow: 'visible' }]}
          onLoadStart={() =>
            this._loadEventFired(`✔ onLoadStart (+${new Date() - mountTime}ms)`)
          }
          onLoad={event => {
            // Currently this image source feature is only available on iOS.
            if (event.nativeEvent.source) {
              const url = event.nativeEvent.source.url
              this._loadEventFired(
                `✔ onLoad (+${new Date() - mountTime}ms) for URL ${url}`
              )
            } else {
              this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms)`)
            }
          }}
          onLoadEnd={() => {
            this._loadEventFired(`✔ onLoadEnd (+${new Date() - mountTime}ms)`)
            this.setState({ startLoadPrefetched: true }, () => {
              prefetchTask.then(
                () => {
                  this._loadEventFired(
                    `✔ Prefetch OK (+${new Date() - mountTime}ms)`
                  )
                },
                error => {
                  this._loadEventFired(
                    `✘ Prefetch failed (+${new Date() - mountTime}ms)`
                  )
                }
              )
            })
          }}
        />
        {this.state.startLoadPrefetched ? (
          <Image
            source={this.props.prefetchedSource}
            style={[styles.base, { overflow: 'visible' }]}
            onLoadStart={() =>
              this._loadEventFired(
                `✔ (prefetched) onLoadStart (+${new Date() - mountTime}ms)`
              )
            }
            onLoad={event => {
              // Currently this image source feature is only available on iOS.
              if (event.nativeEvent.source) {
                const url = event.nativeEvent.source.url
                this._loadEventFired(
                  `✔ (prefetched) onLoad (+${new Date() -
                    mountTime}ms) for URL ${url}`
                )
              } else {
                this._loadEventFired(
                  `✔ (prefetched) onLoad (+${new Date() - mountTime}ms)`
                )
              }
            }}
            onLoadEnd={() =>
              this._loadEventFired(
                `✔ (prefetched) onLoadEnd (+${new Date() - mountTime}ms)`
              )
            }
          />
        ) : null}
        <Text style={{ marginTop: 20 }}>{this.state.events.join('\n')}</Text>
      </View>
    )
  }

  _loadEventFired(event) {
    this.setState(state => {
      return (state.events = [...state.events, event])
    })
  }
}

class NetworkImageExample extends React.Component {
  state = {
    error: false,
    loading: false,
    progress: 0
  }

  render() {
    const loader = this.state.loading ? (
      <View style={styles.progress}>
        <Text>{this.state.progress}%</Text>
        <ActivityIndicator style={{ marginLeft: 5 }} />
      </View>
    ) : null
    return this.state.error ? (
      <Text>{this.state.error}</Text>
    ) : (
      <ImageBackground
        source={this.props.source}
        style={[styles.base, { overflow: 'visible' }]}
        onLoadStart={e => this.setState({ loading: true })}
        onError={e =>
          this.setState({ error: e.nativeEvent.error, loading: false })
        }
        onProgress={e =>
          this.setState({
            progress: Math.round(
              (100 * e.nativeEvent.loaded) / e.nativeEvent.total
            )
          })
        }
        onLoad={() => this.setState({ loading: false, error: false })}
      >
        {loader}
      </ImageBackground>
    )
  }
}

class ImageSizeExample extends React.Component {
  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    Image.getSize(this.props.source.uri, (width, height) => {
      this.setState({ width, height })
    })
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'transparent',
            marginRight: 10
          }}
          source={this.props.source}
        />
        <Text>
          {i18n.t('ep19.content1')}{'\n'}
          Width: {this.state.width}, Height: {this.state.height}
        </Text>
      </View>
    )
  }
}

class MultipleSourcesExample extends React.Component {
  state = {
    width: 30,
    height: 30
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.touchableText} onPress={this.decreaseImageSize}>
            {i18n.t('ep20.content1')}
          </Text>
          <Text style={styles.touchableText} onPress={this.increaseImageSize}>
            {i18n.t('ep20.content2')}
          </Text>
        </View>
        <Text>
          {i18n.t('ep20.content3')}: {this.state.width}x{this.state.height}{' '}
        </Text>
        <View style={{ height: this.state.height, width: this.state.width }}>
          <Image
            style={{ flex: 1 }}
            source={[
              {
                uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/100x100.png',
                width: 100,
                height: 100
              },
              {
                uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/200x200.png',
                width: 200,
                height: 200
              }
            ]}
          />
        </View>
      </View>
    )
  }

  increaseImageSize = () => {
    if (this.state.width >= 100) {
      return
    }
    this.setState({
      width: this.state.width + 10,
      height: this.state.height + 10
    })
  }

  decreaseImageSize = () => {
    if (this.state.width <= 10) {
      return
    }
    this.setState({
      width: this.state.width - 10,
      height: this.state.height - 10
    })
  }
}

exports.displayName = 'ImageExample'
exports.framework = 'React'
exports.title = '<ImageBackground>'
exports.description = 'Base component for displaying different types of images.'

exports.examples = [
  {
    title: i18n.t('ep1.title'),
    description: i18n.t('ep1.description'),
    render() {
      return (
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/200x200.png' }}
          style={styles.base}
        />
      )
    }
  },
  {
    title: i18n.t('ep2.title'),
    description: i18n.t('ep2.description'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image
            source={require('./uie_thumb_normal.png')}
            style={styles.icon}
          />
          <Image
            source={require('./uie_thumb_selected.png')}
            style={styles.icon}
          />
          <Image
            source={require('./uie_comment_normal.png')}
            style={styles.icon}
          />
          <Image
            source={require('./uie_comment_highlighted.png')}
            style={styles.icon}
          />
        </View>
      )
    }
  },
  {
    title: i18n.t('ep3.title'),
    render() {
      return (
        <NetworkImageCallbackExample
          source={{
            uri:
              'http://origami.design/public/images/bird-logo.png?r=1&t=' +
              Date.now()
          }}
          prefetchedSource={{ uri: IMAGE_PREFETCH_URL }}
        />
      )
    }
  },
  {
    title: i18n.t('ep4.title'),
    render() {
      return (
        <NetworkImageExample
          source={{
            uri: 'https://TYPO_ERROR_facebook.github.io/react/img/logo_og.png'
          }}
        />
      )
    },
    platform: 'ios'
  },
  {
    title: i18n.t('ep5.title'),
    render() {
      return (
        <NetworkImageExample
          source={{
            uri: 'http://origami.design/public/images/bird-logo.png?r=1'
          }}
        />
      )
    },
    platform: 'ios'
  },
  {
    title: i18n.t('ep6.title'),
    description: i18n.t('ep6.description'),
    render() {
      return (
        <Image
          defaultSource={require('./bunny.png')}
          source={fullImage}
          style={styles.base}
        />
      )
    }
  },
  {
    title: i18n.t('ep7.title'),
    description: i18n.t('ep7.description'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image
            defaultSource={require('./bunny.png')}
            source={{
              uri: smallImage.uri + '?cacheBust=notinCache' + Date.now(),
              cache: 'only-if-cached'
            }}
            style={styles.base}
          />
          <Image
            defaultSource={require('./bunny.png')}
            source={{
              uri: smallImage.uri + '?cacheBust=notinCache' + Date.now(),
              cache: 'reload'
            }}
            style={styles.base}
          />
        </View>
      )
    },
    platform: 'ios'
  },
  {
    title: i18n.t('ep8.title'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image
            source={smallImage}
            style={[
              styles.base,
              styles.background,
              { borderWidth: 3, borderColor: '#f099f0' }
            ]}
          />
        </View>
      )
    }
  },
  {
    title: i18n.t('ep9.title'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image
            source={smallImage}
            style={[
              styles.base,
              styles.background,
              { borderWidth: 5, borderColor: '#f099f0' }
            ]}
          />
        </View>
      )
    }
  },
  {
    title: i18n.t('ep10.title'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image
            style={[styles.base, { borderRadius: 5 }]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, { borderRadius: 19 }]}
            source={fullImage}
          />
        </View>
      )
    }
  },
  {
    title: i18n.t('ep11.title'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image source={smallImage} style={styles.base} />
          <Image
            style={[
              styles.base,
              styles.leftMargin,
              { backgroundColor: 'rgba(0, 0, 100, 0.25)' }
            ]}
            source={smallImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, { backgroundColor: 'red' }]}
            source={smallImage}
          />
          <Image
            style={[
              styles.base,
              styles.leftMargin,
              { backgroundColor: 'black' }
            ]}
            source={smallImage}
          />
        </View>
      )
    }
  },
  {
    title: i18n.t('ep12.title'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image style={[styles.base, { opacity: 1 }]} source={fullImage} />
          <Image
            style={[styles.base, styles.leftMargin, { opacity: 0.8 }]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, { opacity: 0.6 }]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, { opacity: 0.4 }]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, { opacity: 0.2 }]}
            source={fullImage}
          />
          <Image
            style={[styles.base, styles.leftMargin, { opacity: 0 }]}
            source={fullImage}
          />
        </View>
      )
    }
  },
  {
    title: i18n.t('ep13.title'),
    render() {
      return (
        <ImageBackground
          style={{ width: 60, height: 60, backgroundColor: 'transparent' }}
          source={fullImage}
        >
          <Text style={styles.nestedText}>React</Text>
        </ImageBackground>
      )
    }
  },
  {
    title: i18n.t('ep14.title'),
    description: i18n.t('ep14.description'),
    render() {
      return (
        <View>
          <View style={styles.horizontal}>
            <Image
              source={require('./uie_thumb_normal.png')}
              style={[styles.icon, { borderRadius: 5, tintColor: '#5ac8fa' }]}
            />
            <Image
              source={require('./uie_thumb_normal.png')}
              style={[
                styles.icon,
                styles.leftMargin,
                { borderRadius: 5, tintColor: '#4cd964' }
              ]}
            />
            <Image
              source={require('./uie_thumb_normal.png')}
              style={[
                styles.icon,
                styles.leftMargin,
                { borderRadius: 5, tintColor: '#ff2d55' }
              ]}
            />
            <Image
              source={require('./uie_thumb_normal.png')}
              style={[
                styles.icon,
                styles.leftMargin,
                { borderRadius: 5, tintColor: '#8e8e93' }
              ]}
            />
          </View>
          <Text style={styles.sectionText}>{ i18n.t('ep14.content1') }</Text>
          <View style={styles.horizontal}>
            <Image
              source={{ uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/200x200.png' }}
              style={[styles.base, { borderRadius: 5, tintColor: '#5ac8fa' }]}
            />
            <Image
              source={{ uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/200x200.png' }}
              style={[
                styles.base,
                styles.leftMargin,
                { borderRadius: 5, tintColor: '#4cd964' }
              ]}
            />
            <Image
              source={{ uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/200x200.png' }}
              style={[
                styles.base,
                styles.leftMargin,
                { borderRadius: 5, tintColor: '#ff2d55' }
              ]}
            />
            <Image
              source={{ uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/200x200.png' }}
              style={[
                styles.base,
                styles.leftMargin,
                { borderRadius: 5, tintColor: '#8e8e93' }
              ]}
            />
          </View>
        </View>
      )
    }
  },
  {
    title: i18n.t('ep15.title'),
    description: i18n.t('ep15.description'),
    render() {
      return (
        <View>
          {[smallImage, fullImage].map((image, index) => {
            return (
              <View key={index}>
                <View style={styles.horizontal}>
                  <View>
                    <Text style={[styles.resizeModeText]}>contain</Text>
                    <Image
                      style={styles.resizeMode}
                      resizeMode={'contain'}
                      source={image}
                    />
                  </View>
                  <View style={styles.leftMargin}>
                    <Text style={[styles.resizeModeText]}>cover</Text>
                    <Image
                      style={styles.resizeMode}
                      resizeMode={'cover'}
                      source={image}
                    />
                  </View>
                </View>
                <View style={styles.horizontal}>
                  <View>
                    <Text style={[styles.resizeModeText]}>stretch</Text>
                    <Image
                      style={styles.resizeMode}
                      resizeMode={'stretch'}
                      source={image}
                    />
                  </View>
                  <View style={styles.leftMargin}>
                    <Text style={[styles.resizeModeText]}>repeat</Text>
                    <Image
                      style={styles.resizeMode}
                      resizeMode={'repeat'}
                      source={image}
                    />
                  </View>
                  <View style={styles.leftMargin}>
                    <Text style={[styles.resizeModeText]}>center</Text>
                    <Image
                      style={styles.resizeMode}
                      resizeMode={'center'}
                      source={image}
                    />
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      )
    }
  },
  {
    title: i18n.t('ep16.title'),
    render() {
      return (
        <Image
          style={styles.gif}
          resizeMode='contain'
          source={{
            uri:
              'http://img.soogif.com/GQXZEnfHHINCpTZIgbdpXZpPLPtcubrS.gif'
          }}
        />
      )
    },
    // platform: 'ios'
  },
  {
    title: i18n.t('ep17.title'),
    render() {
      return (
        <Image style={styles.base64} source={{ uri: base64Icon, scale: 3 }} />
      )
    },
    // platform: 'ios'
  },
  {
    title: 'capInsets',
    description: i18n.t('ep18.description'),
    render() {
      return <ImageCapInsetsExample />
    },
    platform: 'ios'
  },
  {
    title: i18n.t('ep19.title'),
    render() {
      return <ImageSizeExample source={fullImage} />
    }
  },
  {
    title: i18n.t('ep20.title'),
    description: i18n.t('ep20.description'),
    render() {
      return <MultipleSourcesExample />
    }
  },
  /* {
    title: i18n.t('ep21.title'),
    description: i18n.t('ep21.description'),
    render() {
      return <Image source={{ uri: 'legacy_image', width: 120, height: 120 }} />
    }
  }, */
  /* {
    title: 'Bundled images',
    description: 'Images shipped in a separate native bundle',
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{
              url: 'ImageInBundle',
              bundle: 'UIExplorerBundle',
              width: 100,
              height: 100
            }}
            style={{ borderColor: 'yellow', borderWidth: 4 }}
          />
          <Image
            source={{
              url: 'ImageInAssetCatalog',
              bundle: 'UIExplorerBundle',
              width: 100,
              height: 100
            }}
            style={{ marginLeft: 10, borderColor: 'blue', borderWidth: 4 }}
          />
        </View>
      )
    },
    platform: 'ios'
  }, */
  {
    title: i18n.t('ep22.title'),
    render() {
      return (
        <View style={styles.horizontal}>
          <Image style={[styles.base]} source={fullImage} blurRadius={0} />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={5}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={10}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={15}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={20}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={25}
          />
        </View>
      )
    }
  }
]

const fullImage = { uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/600x600.png' }
const smallImage = {
  uri: 'https://raw.githubusercontent.com/auven/rn-study-expo/master/src/images/100x100.png'
}

const styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38
  },
  progress: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: 100
  },
  leftMargin: {
    marginLeft: 10
  },
  background: {
    backgroundColor: '#222222'
  },
  sectionText: {
    marginVertical: 6
  },
  nestedText: {
    marginLeft: 12,
    marginTop: 20,
    backgroundColor: 'transparent',
    color: 'red'
  },
  resizeMode: {
    width: 90,
    height: 60,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  resizeModeText: {
    fontSize: 11,
    marginBottom: 3
  },
  icon: {
    width: 15,
    height: 15
  },
  horizontal: {
    flexDirection: 'row'
  },
  gif: {
    flex: 1,
    height: 200
  },
  base64: {
    flex: 1,
    height: 50,
    resizeMode: 'contain'
  },
  touchableText: {
    fontWeight: '500',
    color: 'blue'
  }
})
