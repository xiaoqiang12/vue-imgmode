<template>
    <div class="imgmode" :style="{height:height,width:width,lineHeight:height}" :class="vclass">
        <slot></slot>
        <img v-show="loadCompulete" ref="img" @load="_loadimg" :src="src" :alt="alt" :title="title"/>
    </div>
</template>

<script>
// scaleToFill     缩放：不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
// aspectFit       缩放：保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
// aspectFill      缩放：保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
// widthFix        缩放：宽度不变，高度自动变化，保持原图宽高比不变
// top             裁剪：不缩放图片，只显示图片的顶部区域
// bottom          裁剪：不缩放图片，只显示图片的底部区域
// center          裁剪：不缩放图片，只显示图片的中间区域
// left            裁剪：不缩放图片，只显示图片的左边区域
// right           裁剪：不缩放图片，只显示图片的右边区域
// topLeft         裁剪：不缩放图片，只显示图片的左上边区域
// topRight        裁剪：不缩放图片，只显示图片的右上边区域
// bottomLeft      裁剪：不缩放图片，只显示图片的左下边区域
// bottomRight     裁剪：不缩放图片，只显示图片的右下边区域
    export default {
        name: 'Imgmodel',
        data () {
            return {
                loadCompulete: false
            }
        },
        props: {
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            styles: {
                type: Object,
                default () {
                    return {}
                }
            },
            width: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: ''
            },
            mode: {
                type: String,
                default: ''
            },
            vclass: {
                type: String,
                default: ''
            }
        },
        methods: {
            _loadimg () {
                const imgobj = this.$refs.img
                const imgparent = this.$refs.img.parentNode
                const imgw = imgobj.width
                const imgh = imgobj.height
                const parentW = imgparent.clientWidth
                const parentH = imgparent.clientHeight
                switch (this.mode) {
                case 'scaleToFill':
                    imgobj.style.width = '100%'
                    imgobj.style.height = '100%'
                    break
                case 'aspectFit':
                    if (imgw / imgh > parentW / parentH) {
                        imgobj.style.width = '100%'
                        imgobj.style.height = 'auto'
                    } else {
                        imgobj.style.width = 'auto'
                        imgobj.style.height = '100%'
                    }
                    break
                case 'aspectFill':
                    if (imgw > imgh) {
                        imgobj.style.width = 'auto'
                        imgobj.style.height = '100%'
                    } else {
                        imgobj.style.width = '100%'
                        imgobj.style.height = 'auto'
                    }
                    break
                case 'widthFix':
                    imgobj.style.width = '100%'
                    imgobj.style.height = 'auto'
                    break
                case 'top':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.verticalAlign = 'top'
                    break
                case 'bottom':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.left = '0'
                    imgobj.style.bottom = '0'
                    break
                case 'center':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.left = '50%'
                    imgobj.style.top = '50%'
                    imgobj.style.marginLeft = -imgw / 2 + 'px'
                    imgobj.style.marginTop = -imgh / 2 + 'px'
                    break
                case 'left':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    break
                case 'right':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.right = '0'
                    imgobj.style.top = '0'
                    break
                case 'topRight':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.right = '0'
                    imgobj.style.top = '0'
                    break
                case 'topLeft':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.left = '0'
                    imgobj.style.top = '0'
                    break
                case 'bottomLeft':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.left = '0'
                    imgobj.style.bottom = '0'
                    break
                case 'bottomRight':
                    imgobj.style.width = 'auto'
                    imgobj.style.height = 'auto'
                    imgobj.style.position = 'absolute'
                    imgobj.style.right = '0'
                    imgobj.style.bottom = '0'
                    break
                default:
                    imgobj.style.width = '100%'
                    imgobj.style.height = 'auto'
                }
                this.loadCompulete = true
            }
        }
    }
</script>

<style scoped>
    .imgmode{
        position: relative;
        text-align: center;
        margin: 20px;
        border:1px solid #000000;
        overflow: hidden;
        font-size: 0;
    }
    .imgmode img{
        vertical-align: middle;
        z-index: 9;
    }
</style>
