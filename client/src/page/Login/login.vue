<template>
  <div class="login-form mt-2">
    <div v-if='error' class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Invalid Credentials!</strong> Please login with valid credentials
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div class="login-main card">
      <form>
        <div class="card-header">
          <h2 class="mt-5 text-center">MansaInfoTech</h2>
        </div>
        <div class="row card-body">
          <div class="col-md-12">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="form.email"
            />
          </div>
          <div class="col-md-12">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="form.password"
            />
          </div>
          <div class="col-md-12">
            <button
              v-on:click="login"
              type="submit"
              class="btn btn-primary rounded-0 w-100"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="card signup-link">
      <div class="card-body">
        Dont't have an account?
        <router-link to="/signup">SignUp</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./login.ts"></script>