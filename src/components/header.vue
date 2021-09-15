<template>
  <header>
    <div class="nav-wrap">
      <div class="nav-header">
        <router-link :to="{ name: 'home' }" class="nav-home f-left"
          >w.h heo's PortFolio</router-link
        >
        <ul class="nav-menu f-right mobile">
          <li :key="nav" v-for="nav in nav_list">
            <router-link :to="{ name: nav.toLowerCase() }">{{
              nav
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nav_list: ["About", "Skill", "Career", "Project"]
    };
  }
};
</script>

<style>
header {
  position: sticky;
  top: 0px;
  z-index: 99;
}
.nav-wrap {
  background: #000;
  width: 100%;
}
.nav-header {
  height: 50px;
  margin: 0 auto;
  max-width: 1200px;
}
.nav-header:after {
  display: block;
  content: "";
  clear: both;
}
.nav-header .nav-home {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
}
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}
.nav-header .nav-menu li {
  margin-left: 20px;
}
.nav-header .nav-menu li a {
  font-size: 25px;
  line-height: 50px;
  cursor: pointer;
  color: #fff;
}
@media (max-width: 768px) {
  .nav-header {
    padding: 0 10px;
  }
}
</style>
