import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import UIExplorerTitle from './UIExplorerTitle'

class UIExplorerPage extends React.Component {
  static propTypes = {
    noScroll: PropTypes.bool,
    noSpacer: PropTypes.bool
  }

  render() {
    let ContentWrapper
    const wrapperProps = {}
    if (this.props.noScroll) {
      ContentWrapper = View
    } else {
      ContentWrapper = ScrollView
      // $FlowFixMe found when converting React.createClass to ES6
      wrapperProps.automaticallyAdjustContentInsets = !this.props.title
      wrapperProps.keyboardShouldPersistTaps = 'handled'
      wrapperProps.keyboardDismissMode = 'interactive'
    }
    var title = this.props.title ? (
      <UIExplorerTitle title={this.props.title} />
    ) : null
    var spacer = this.props.noSpacer ? null : <View style={styles.spacer} />
    return (
      <View style={styles.container}>
        {title}
        <ContentWrapper style={styles.wrapper} {...wrapperProps}>
          {
            // $FlowFixMe found when converting React.createClass to ES6
            this.props.children
          }
          {spacer}
        </ContentWrapper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1
  },
  spacer: {
    height: 270
  },
  wrapper: {
    flex: 1,
    paddingTop: 10
  }
})

export default UIExplorerPage
