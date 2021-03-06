export default [
  {
    title: '基础组件',
    list: [
      { label: 'View', route: 'View' },
      { label: 'Text', route: 'Text' },
      { label: 'ScrollView', route: 'ScrollView' },
      { label: 'Image', route: 'Image' },
      { label: 'SafeAreaView' }
    ]
  },
  {
    title: '视图容器',
    list: [
      { label: 'DrawerLayoutAndroid', platform: 'android' },
      { label: 'Modal', route: 'Modal' },
      { label: 'ViewPagerAndroid', platform: 'android' },
      { label: 'WebView' }
    ]
  },
  {
    title: '操作反馈',
    list: [
      { label: 'ActivityIndicator', route: 'ActivityIndicator' },
      { label: 'ProgressBarAndroid', platform: 'android', route: 'ProgressBarAndroid' },
      { label: 'ProgressViewIOS', platform: 'ios', route: 'ProgressViewIOS' },
      { label: 'RefreshControl' },
      { label: 'Touchable*' }
    ]
  },
  {
    title: '列表组件',
    list: [
      { label: 'FlatList' },
      { label: 'SectionList' },
      { label: 'VirtualizedList' },
    ]
  },
  {
    title: '表单组件',
    list: [
      { label: 'Button', route: 'Button' },
      { label: 'Picker', route: 'Picker' },
      { label: 'PickerIOS', platform: 'ios', route: 'PickerIOS' },
      { label: 'DatePickerIOS', platform: 'ios', route: 'DatePickerIOS' },
      { label: 'Slider', route: 'Slider' },
      { label: 'Switch', route: 'Switch' },
      { label: 'TextInput' },
    ]
  },
  {
    title: '导航',
    list: [
      { label: 'NavigatorIOS', platform: 'ios' },
    ]
  },
  {
    title: '布局辅助',
    list: [
      { label: 'SegmentedControlIOS', platform: 'ios' },
      { label: 'TabBarIOS', platform: 'ios' },
      { label: 'TabBarIOS.Item', platform: 'ios' },
      { label: 'ToolbarAndroid', platform: 'android' },
    ]
  },
  {
    title: '特殊组件',
    list: [
      { label: 'KeyboardAvoidingView' },
      { label: 'MaskedViewIOS', platform: 'ios' },
      { label: 'SnapshotViewIOS', platform: 'ios' },
      { label: 'StatusBar' },
    ]
  }
]
