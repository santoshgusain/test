<template>
  <div v-if="loaded" class='dashboard text-center'>
    <div v-if="welcome" class="d-inline-block mt-3 alert alert-success alert-dismissible fade show" role="alert">
      <strong>Success!</strong> Loggin success
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="hideWelcome"
      ></button>
    </div>
    <h2>Welcome To Dashboard</h2>
    <p>{{welcomeMsg}}</p>
    <button v-on:click="logout" class="btn btn-danger rounded-0 my-3">Log Out</button>
  </div>
</template>
<script lang="ts" src="./dashboard.ts"></script>
<style lang="css" scoped src="./dashboard.css"></style>
