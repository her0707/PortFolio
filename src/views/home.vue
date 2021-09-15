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

<style></style>
