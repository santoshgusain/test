<template>
    <!-- Site footer -->
    <footer class="site-footer">
      <div class="">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify px-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><router-link :to="{name:'Home'}">Home</router-link></li>
              <li><a href="javascript:void(0)">Careers</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><router-link :to="{name:'Login'}">Login</router-link></li>
              <li><router-link :to="{name:'SignUp'}">SignUp</router-link></li>
              <li><a href="javascript:void(0)">Contact Us</a></li>
              <li><a href="javascript:void(0)">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12 m-auto">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
            <a href="javascript:void(0)">Santosh</a>.
            </p>
          </div>
        </div>
      </div>
</footer>
</template>
<script lang="ts" src="./footer.ts"></script>
<style lang="css" scoped src="./footer.css"></style>
