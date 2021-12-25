<template>
  <div class="home">
    <headerAgus />
    <heroAgus />
    <womanAgus />
    <instagramAgus />
    <partnerAgus />
    <footerAgus />
    <!-- Hero Section Begin -->

    <!-- Hero Section End -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import headerAgus from "@/components/headerAgus.vue";
import heroAgus from "@/components/heroAgus.vue";
import womanAgus from "@/components/womanAgus.vue";
import instagramAgus from "@/components/instagramAgus.vue";
import partnerAgus from "@/components/partnerAgus.vue";
import footerAgus from "@/components/footerAgus.vue";

export default {
  name: "Home",
  components: {
    headerAgus,
    heroAgus,
    womanAgus,
    instagramAgus,
    partnerAgus,
    footerAgus,
  },
};
</script>
