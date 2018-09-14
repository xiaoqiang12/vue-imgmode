# description
``` bash
这是一个简单的针对图片显示的组件，模仿了微信小程序组件<image/>的思路，让图片按照你的配置显示
```
## 安装
``` bash
npm install vue-imgmode --save
```
## Usage
### 步骤一
``` bash
在 main.js 入口文件引入

import VueImgmode from 'vue-imgmode'
Vue.use(VueImgmode)
```
### 步骤二
``` bash
在组件中即可使用
<vue-imgmode :mode="imgmode" :width="`300px`" :height="`200px`"  :src="require('@/assets/logo.png')"></vue-imgmode>
```

## Attributes:
<table style="width:100%;display:block">
    <thead width="100%">
        <tr width="100%">
            <td style="display:block" width="20%"><b>参数</b></td>
            <td style="display:block" width="20%"><b>说明</b></td>
            <td style="display:block" width="20%"><b>类型</b></td>
            <td style="display:block" width="20%"><b>可选值</b></td>
            <td style="display:block" width="20%"><b>默认值</b></td>
        </tr>
    </thead>
    <tbody width="100%">
        <tr width="100%">
            <td style="display:block" width="20%">src</td>
            <td style="display:block" width="20%">要显示的图片路径></td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%"></td>
            <td style="display:block" width="20%">空</td>
        </tr>
        <tr width="100%">
            <td style="display:block" width="20%">alt</td>
            <td style="display:block" width="20%">要显示的图片alt信息</td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%"></td>
            <td style="display:block" width="20%">空</td>
        </tr>
        <tr width="100%">
            <td style="display:block" width="20%">title</td>
            <td style="display:block" width="20%">要显示的图片title信息</td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%"></td>
            <td style="display:block" width="20%">空</td>
        </tr>
        <tr width="100%">
            <td style="display:block" width="20%">width</td>
            <td style="display:block" width="20%">要显示的图片容器div的宽度</td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%"></td>
            <td style="display:block" width="20%">300px</td>
        </tr>
        <tr width="100%">
            <td style="display:block" width="20%">height</td>
            <td style="display:block" width="20%">要显示的图片容器div的高度</td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%"></td>
            <td style="display:block" width="20%">200px</td>
        </tr>
        <tr width="100%">
            <td style="display:block" width="20%">mode</td>
            <td style="display:block" width="20%">要显示的图片的显示方式</td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%">scaleToFill、aspectFit、top等</td>
            <td style="display:block" width="20%">widthFix</td>
        </tr>
        <tr width="100%">
            <td style="display:block" width="20%">vclass</td>
            <td style="display:block" width="20%">需要给图片容器添加的类名</td>
            <td style="display:block" width="20%">String</td>
            <td style="display:block" width="20%"></td>
            <td style="display:block" width="20%">空</td>
        </tr>
    </tbody>
</table>

### mode 可选值:
<table style="width:100%;display:block">
    <thead width="100%">
        <tr width="100%">
            <td style="display:block" width="20%"><b>参数</b></td>
            <td style="display:block" width="20%"><b>说明</b></td>
        </tr>
    </thead>
    <tbody width="100%">
      <tr>
          <td style="display:block" width="20%">scaleToFill</td>
          <td style="display:block" width="20%">缩放：不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 img 元素</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">aspectFit</td>
          <td style="display:block" width="20%">缩放：保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">aspectFill</td>
          <td style="display:block" width="20%">缩放：保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">widthFix</td>
          <td style="display:block" width="20%">缩放：保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">top</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的顶部区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">bottom</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的底部区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">center</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的中间区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">left</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的左边区域</td>
      </tr>
       <tr>
          <td style="display:block" width="20%">right</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的右边区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">topLeft</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的左上边区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">topRight</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的右上边区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">bottomLeft</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的左下边区域</td>
      </tr>
      <tr>
          <td style="display:block" width="20%">bottomRight</td>
          <td style="display:block" width="20%">裁剪：不缩放图片，只显示图片的右下边区域</td>
      </tr>
    </tbody>
</table>

## example
``` bash
组件里面加入插槽 可以用来添加小图标等

<template>
    <vue-imgmode :mode="imgmode" :width="`300px`" :height="`200px`"  :src="src">
       <div style="width: 10px;height: 10px;background: red;position: absolute;left: 0;top:0;z-index: 9">小图标</div>
    </vue-imgmode>
</template>

<script>
    export default {
        name: 'DoImgmode',
        data () {
            return {
                imgmode: 'aspectFit',
                src: require('@/assets/logo.png')
            }
        }
    }
</script>
``` bash
