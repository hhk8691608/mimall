<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  }
}
</script>
