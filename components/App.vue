/**
 * Created by Administrator on 2016/8/11.
 */
<template>
 <div>
  <Display></Display>
  <Increment></Increment>
 </div>
</template>

<script>
  import Display from './Display.vue';
  import Increment from './Increment.vue';
  import store from '../vuex/store/store';

  export default {
     methods:{

     },
     events : {
        "add" : function(msg){
           this.$broadcast('addNum',msg);
        }
     },
     components: {
        Display: Display,
        Increment: Increment
     },
     store : store // 在根组件加入 store，让它的子组件和 store 连接

  }
</script>