<template>
    <header-component></header-component>
    <menu-component></menu-component>
    <div class="main-panel">
        <div class="main-panel-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="less">
    @import "Main.less";
</style>
<script>
    import {redirect} from "../../widgets/Auth";
    import HeaderComponent from '../Header/Header.vue';
    import MenuComponent from '../Menu/Menu.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'header-component': HeaderComponent,
            'menu-component': MenuComponent
        },
        route:{
//            activate(transition){
//                redirect('main');
//                transition.next()
//            }
        }
    }
</script>
