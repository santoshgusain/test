<template>
  <div class="row signup-form">
    <h2 class="mt-5">SignUp</h2>
    <form>
      <div class="row my-3">
        <div class="col-md-6">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="firstName"
          />
        </div>
        <div class="col-md-6">
          <label for="exampleInputEmail1">Last Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="lastName"
          />
        </div>
        <div class="col-md-12">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>
        <div class="col-md-12">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <div class="col-md-12">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="col-md-12">
          <button @click="registerUser" type="submit" class="btn btn-primary">SignUp</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts" src="./signup.ts"></script>