import React from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'

class GroupBlock extends React.Component {
  render() {
    const { group } = this.props
    return (
      <View style={styles.wrap}>
        <View style={styles.mainBox}>
          <View style={[styles.linePd]}>
            <Text style={styles.blockTitle}>{group.title}</Text>
          </View>
          {group.list.map((item, index) => (
            <TouchableHighlight
              key={index}
              underlayColor={'#f2f2f2'}
              onPress={() => item.route ? this.props.navigation.navigate(item.route) : null}
            >
              <View style={[styles.linePd, styles.comLink]}>
                <Text style={styles.comLinkText}>{item.label}</Text>
                <Image
                  style={styles.comLinkArrow}
                  source={require('../images/icon-right.png')}
                />
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  mainBox: {
    backgroundColor: '#fff'
  },
  linePd: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  comLink: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  comLinkText: {
    flex: 1,
    fontSize: 16
  },
  comLinkArrow: {
    width: 20,
    height: 20
  }
})

export default withNavigation(GroupBlock)