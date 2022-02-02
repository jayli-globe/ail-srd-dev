<template>
  <div class="container">
    <b-navbar :fixed-top="true" class="topbar">
      <template slot="brand">
          <img src="~@/assets/images/special-risk-logo.png" class="logo" />
      </template>
      <template slot="end">
          <b-navbar-item href="#">
              Submit Activity
          </b-navbar-item>
          <b-navbar-item href="#">
              Quick Quote
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="'admin'">
              Admin
          </b-navbar-item>
      </template>
      <template slot="end">
          <b-navbar-item tag="div">
              <div class="buttons" style="margin-right: 20px;">
                  <a class="button is-success"><strong>Login</strong></a>
              </div>
          </b-navbar-item>
      </template>
    </b-navbar>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.topbar {
  padding: 2px;
}
.navbar.is-fixed-top {
  background: #2C863A;
}
a.navbar-item, .navbar-link {
  color: white;
}
.navbar-menu.is-active {
  background: bottom;
}
.logo {
  padding: 2px;
  margin-left: 10px;
}
.router-view {
  margin-top: 30px;
}
</style>
