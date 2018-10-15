<template>
    <div class="singer">
      <div class="singer_title">
        <h2>热门</h2>
      </div>
    </div>
</template>

<script>
import axios from "axios";
  export default{
      data:function(){
        return{

        }
      },
      creater(){

      },
      methods:{
        
      }
  }    
</script>

<style lang="less" scoped>
@import '~@/assets/less/variable.less';
  .singer_title{
    background-color:@color-highlight-background;
    height:32px;
    h2{
      line-height:32px;
      margin-left:12px;
      font-size:14px;
      color:@color-text-l;
    }
  }
</style>
