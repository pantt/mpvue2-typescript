<!-- page.vue -->
<template>
  <div class="counter-warp">
    <p>Mpvue</p>
    <p>ts value {{ ver }}</p>
    <card text="card component"></card>
    <comp-b text="card component"></comp-b>
     <a href="../logs/main" class="home">点击去往logs界面</a>
    <!-- <a :href="AppUrls.COUNTER" class="home">去往vuex</a> -->
    <a :href="AppUrls.COUNTER" class="home">去往vuex</a>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>
<style>
 /* @import "./index"; */
 .counter-warp {
    text-align: center;
    margin-top: 100px;
  }
  .home {
    display: block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }


 </style>
