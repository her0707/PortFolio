<template>
  <div class="home">
    <About></About>
    <Skill></Skill>
    <Career></Career>
    <Project></Project>
  </div>
</template>

<script>
import About from "@/components/about";
import Skill from "@/components/skill";
import Career from "@/components/career";
import Project from "@/components/project";

export default {
  name: "home",
  components: { About, Skill, Career, Project }
};
</script>

<style>
.home {
  background-image: url(../assets/img/bg.jpg);
}
.sec {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
.sec.about h2 {
  color: #03464f;
}
.sec-wrap {
  position: relative;
  border-radius: 2rem;
  background-color: rgb(238, 238, 238);
}
</style>
