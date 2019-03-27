import i18n from 'i18n-js'
import { Localization } from 'expo'

const zh_CN = {
  ep1: {
    title: '普通网络图片',
    description:
      '如果 `source` 的 `uri` 属性的前缀是 "http"，那么它将从网络上下载。'
  },
  ep2: {
    title: '普通静态图片',
    description:
      '静态资源应该放在源代码中，并且以 JavaScript 模块的方式 `require` 进来'
  },
  ep3: {
    title: '图片加载事件'
  },
  ep4: {
    title: '监听加载失败'
  },
  ep5: {
    title: '图片加载进度'
  },
  ep6: {
    title: '占位图片',
    description:
      '加载网络图片时显示的占位图片，注意：在 Android 的 debug 版本上本属性不会生效（但在 release 版本中会生效）。'
  },
  ep7: {
    title: '缓存策略',
    description: '下面第一张图片没有加载过，并且缓存中没有存在，则不显示出来，显示的是占位图片。第二张图片则不管缓存中有没有存在，都会强制加载。'
  },
  ep8: {
    title: '边框颜色'
  },
  ep9: {
    title: '边框宽度'
  },
  ep10: {
    title: '边框圆角'
  },
  ep11: {
    title: '背景颜色'
  },
  ep12: {
    title: '透明度'
  },
  ep13: {
    title: '在 <ImageBackground> 组件内嵌套内容， <Image> 组件以前支持嵌套，但是现在不支持了'
  },
  ep14: {
    title: '色调',
    description: '`tintColor` 为所有非透明的像素指定一个颜色。',
    content1: '也适用于网络图片：'
  },
  ep15: {
    title: '图片裁剪、缩放的模式',
    description: '`resizeMode` 控制图片的显示方式'
  },
  ep16: {
    title: 'GIF图'
  },
  ep17: {
    title: 'Base64 图片'
  },
  ep18: {
    description: '当图片被缩放的时候，capInsets 指定的角上的尺寸会被固定而不进行缩放，而中间和边上其他的部分则会被拉伸。这在制作一些可变大小的圆角按钮、阴影、以及其它资源的时候非常有用。'
  },
  ep19: {
    title: '获取图片尺寸',
    content1: '实际尺寸：'
  },
  ep20: {
    title: 'source 数组模式',
    description: '"source" 属性允许传入一个 uri 数组，以便本机根据目标图像的大小选择要显示的图像。',
    content1: '减少图片大小',
    content2: '增加图片大小',
    content3: '图片容器大小'
  },
  ep21: {
    title: '传统本地图片',
    description: '不由JS Packager管理的原生图片资源'
  },
  ep22: {
    title: '模糊半径'
  }
}

const en = {
  ep1: {
    title: 'Plain Network Image',
    description:
      'If the `source` prop `uri` property is prefixed with "http", then it will be downloaded from the network.'
  },
  ep2: {
    title: 'Plain Static Image',
    description:
      'Static assets should be placed in the source code tree, and required in the same way as JavaScript modules.'
  },
  ep3: {
    title: 'Image Loading Events'
  },
  ep4: {
    title: 'Error Handler'
  },
  ep5: {
    title: 'Image Download Progress'
  },
  ep6: {
    title: 'defaultSource',
    description:
      'Show a placeholder image when a network image is loading. On Android, the default source prop is ignored on debug builds.'
  },
  ep7: {
    title: 'Cache Policy',
    description:
      'First image has never been loaded before and is instructed not to load unless in cache. Placeholder image from above will stay. Second image is the same but forced to load regardless of local cache state.'
  },
  ep8: {
    title: 'Border Color'
  },
  ep9: {
    title: 'Border Width'
  },
  ep10: {
    title: 'Border Radius'
  },
  ep11: {
    title: 'Background Color'
  },
  ep12: {
    title: 'Opacity'
  },
  ep13: {
    title: 'Nesting content inside <ImageBackground> component'
  },
  ep14: {
    title: 'Tint Color',
    description: 'The `tintColor` style prop changes all the non-alpha pixels to the tint color.',
    content1: 'It also works with downloaded images:'
  },
  ep15: {
    title: 'Resize Mode',
    description: 'The `resizeMode` style prop controls how the image is rendered within the frame.'
  },
  ep16: {
    title: 'Animated GIF'
  },
  ep17: {
    title: 'Base64 image'
  },
  ep18: {
    description: 'When the image is resized, the corners of the size specified by capInsets will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets.'
  },
  ep19: {
    title: 'Image Size',
    content1: 'Actual dimensions:'
  },
  ep20: {
    title: 'MultipleSourcesExample',
    description: 'The `source` prop allows passing in an array of uris, so that native to choose which image to diplay based on the size of the of the target image',
    content1: 'Decrease image size',
    content2: 'Increase image size',
    content3: 'Container image size'
  },
  ep21: {
    title: 'Legacy local image',
    description: 'Images shipped with the native bundle, but not managed by the JS packager'
  },
  ep22: {
    title: 'Blur Radius'
  }
}

i18n.fallbacks = true
i18n.translations = { 'zh-CN': zh_CN, en }
i18n.locale = 'zh-CN'

export default i18n
