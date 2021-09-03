
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/assets/css/common.css'
export default {
  components: { Header, Footer }
}
</script>



<template>
<div>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</div>
</template>
