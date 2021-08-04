<template>
  <div v-if="loaded" class='dashboard text-center'>
    <h2>Welcome To Dashboard</h2>
    <p>{{welcomeMsg}}</p>
    <button v-on:click="logout" class="btn btn-danger rounded-0 my-3">Log Out</button>
  </div>
</template>
<script lang="ts" src="./dashboard.ts"></script>
<style lang="css" scoped src="./dashboard.css"></style>
