<template>
    <div style="position: relative">
        <div class="main">
            <slot></slot>
        </div>
        <div class="tip" :style="{width: width + 'px'}" v-show="isShow">
            <div class="arrow"></div>
            <slot name="content"></slot>
        </div>     
    </div>
</template>
<script>
export default {
    name: "myToolTip",
    data() {
        return {
        }
    },
    props: {
        width: {
            type: Number
        },
        isShow: {
            type: Boolean,         
        }
    }
}
</script>
<style scoped>
.main {
    position: absolute;
    left: 50%;
}
.tip {
    position: absolute;
    left: 41%;
    width: 30px;
    height: 50px;
    top: -60px;
    background: gray;
}
.arrow{
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.5);
    transform: rotate(180deg);
    -webkit-transform:rotate(180deg);
    position: absolute;
    bottom: -20px;
    left: 46%;
}
</style>
