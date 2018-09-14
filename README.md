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
            <td style="display:block" width="20%">scaleToFill、aspectFit、top登</td>
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

### mode 类型:
