<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </router-link>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/time-entries">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">

      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Home from './components/Home'

  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
