import { StyleSheet } from 'react-native'

// 样式常量
export const constant = {
  /**
   * 常规样式
   */
  screenColor: '#f2f2f2', // 页面背景颜色
  themeColor: '#05c160' // 主题色
}

// 全局公共 class
export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: constant.screenColor
  }
})
