<!-- page.vue -->
<template>
  <div class="counter-warp">
    <p>Mpvue</p>
    <p>ts value {{ ver }}</p>
    <card text="card component"></card>
    <comp-b text="card component"></comp-b>
    <!-- <a :href="AppUrls.COUNTER" class="home">去往vuex</a> -->
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>
<style></style>
