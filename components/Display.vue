<script>
    import {getCount} from '../vuex/store/getters';
    export default {

        vuex : {
            getters : {
                // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
                counterValue : getCount
            }
        }

    }
</script>

<template>
    <div>
        <h3>Count is {{ counterValue }}</h3>
    </div>
</template>

