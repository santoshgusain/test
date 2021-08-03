<template>
  <div class="login-form">
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
            />
          </div>
          <div class="col-md-12">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary rounded-0 w-100">
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