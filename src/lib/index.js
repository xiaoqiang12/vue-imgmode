
/**
 * Created by LQ on 2018/9/13.
 */
import imgmodeComponent from './Vuecomponent.vue'

const VueImgmode = {
    install: function (Vue) {
        Vue.component('vue-imgmode', imgmodeComponent)
    }
}

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(VueImgmode) 
}
export default VueImgmode
