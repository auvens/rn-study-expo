import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class UIExplorerBlock extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }

  render() {
    let description
    if (this.props.description) {
      description = (
        <Text style={styles.descriptionText}>{this.props.description}</Text>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.title}</Text>
          {description}
        </View>
        <View style={styles.children}>
          {
            // $FlowFixMe found when converting React.createClass to ES6
            this.props.children
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden'
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500'
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 10
  },
  disclosure: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  },
  disclosureIcon: {
    width: 12,
    height: 8
  },
  children: {
    margin: 10
  }
})

export default UIExplorerBlock
