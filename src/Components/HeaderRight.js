import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

class HeaderRight extends React.Component {
  render() {
    const { docUrl, codeUrl, navigation } = this.props
    return (
      <View style={styles.wrap}>
        {docUrl ? <TouchableOpacity onPress={() => navigation.navigate('DocViewer', { docUrl })}>
          <Image style={{ width: 25, height: 25 }} source={require('../images/icon_doc.png')} />
        </TouchableOpacity> : null}
        {codeUrl ? <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.navigate('CodeViewer', { codeUrl })}>
          <Image style={{ width: 25, height: 25 }} source={require('../images/icon_code.png')} />
        </TouchableOpacity> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20
  }
})

export default withNavigation(HeaderRight)
