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
    <tbody style="display:block;width:100%">
        <tr style="display:block;width:100%">
            <td style="display:block" width="20%">333</td>
            <td style="display:block" width="20%"><b>说明</b></td>
            <td style="display:block" width="20%"><b>类型</b></td>
            <td style="display:block" width="20%"><b>可选值</b></td>
            <td style="display:block" width="20%"><b>默认值</b></td>
        </tr>
    </tbody>
</table>

