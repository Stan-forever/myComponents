<template>
    <div>
        <myToolTip style="margin-top: 100px"
                   :width='toolWidth' 
                   @sonToFather="test"
                   :isShow="isShow1">
            <span @mouseenter="setShow()"
                  @mouseleave="removeShow()">{{mainName}}</span>
            <div slot="content" style="color: white;line-height: 50px;text-align: center">
                {{toolName}}
            </div>
        </myToolTip>    
    </div>
</template>
<script>
import myToolTip from '../components/myToolTip.vue'
export default {
    name: "tooltip",
    components: {
        myToolTip,
    },
    data() {
        return {
            toolWidth: 300,
            toolName: 'hhh',
            mainName: 'test',
            isShow1: false
        }
    },
    methods: {
        test(e) {
            this.toolName = e
        },
        setShow() {
            this.isShow1 = true
        },
        removeShow() {
            this.isShow1 = false
        }
    }
}
</script>
<style scoped>

</style>
