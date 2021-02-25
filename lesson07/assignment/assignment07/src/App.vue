<template>
  <div id="app">
    <a href="#main-content" class="hidden">Skip to main content</a>
    <div class="container-fluid">
      <div id="nav">
        <div class="row">
           <!-- JUMBOTRON AND NAV -->
          <header class="col-sm-12 col-12 jumbotron jumbotron-fluid background-image">
            <nav class="navbar navbar-expand-lg d-flex flex-row justify-content-between align-items-start">
              <div class="navbar-brand text-white text-uppercase d-flex flex-column align-items-center">
                <h1 class="display-1">Ten Ton</h1>
                <h1 class="display-3">Coffee</h1>
              </div>
              <ul class="navbar-nav text-uppercase">
                <li class="nav-item"><router-link class="text-white nav-link" to="/">Home</router-link></li> 
                <li class="nav-item"><router-link class="text-white nav-link" to="/about">About</router-link></li> 
                <li class="nav-item"><router-link class="text-white nav-link" to="/menu">Menu</router-link></li> 
                <li class="nav-item"><router-link class="text-white nav-link" to="/contact">Contact</router-link></li>
              </ul>
            </nav>
          </header>
        </div>
        <router-view/>
      </div>

      <!-- FOOTER -->
        <footer class="text-white pt-4 pb-1 px-4">
          <div class="row">
            <form class="form-col col-md-7 col-lg-6">
              <legend>
                <h4>Find out what's brewing at Ten Ton Coffee</h4>
                <p>Sign up for our mailing list and receive 15% off your next order</p>
              </legend>
              <!-- TOOLTIPS -->
              <div class="form-inline">
                <input id="input" class="w-75 form-control form-control-lg rounded-sm border border-0" type="email" name="email" placeholder="Enter your email" aria-label="Email" data-toggle="tooltip" data-placement="bottom" title="Enter email to subscribe!">
                <!-- ONCLICK AND IF/ELSE -->
                <button v-on:click="isEmpty" @submit.prevent="isEmpty" class="subscribe text-uppercase rounded-sm py-2 px-2" type="submit" data-toggle="tooltip" data-placement="bottom" title="Subscribe here!">Subscribe</button>
              </div>
              <div id="isEmptyText" v-if="isEmpty"></div>
            </form>
            <address class="col-md-5 col-lg-6">
              <h4>Location and Hours</h4>
              <p>Open daily, 7:30am - 2pm</p>
              <p>216 Main St, Waitsburg, WA 99361</p>
              <p><a class="contact-email" href="mailto:tentoncoffeebar@gmail.com">tentoncoffeebar@gmail.com</a></p>
              <p><a href="tel:555-555-5555">555-555-5555</a></p>
            </address>
          </div>
          <div class="col-12 text-center display-4">
            <a class="mr-3" href="https://www.facebook.com/tentoncoffee" target="_blank"><i class="fab fa-facebook-square social"></i></a>
            <a href="https://www.instagram.com/tentoncoffee/" target="_blank"><i class="fab fa-instagram-square social"></i></a>
          </div>
          <p class="text-center mt-3">&copy;2021 Ten Ton Coffee</p>
        </footer>
      </div>
  </div>
</template>

<script>
export default {
  methods: {

    // IF ELSE
    isEmpty() {
      let input = document.getElementById('input');
      let text = input.value;
      let emptyText = document.getElementById('isEmptyText');
      if (text === "") {
        emptyText.innerText = 'Please enter email above';
        console.log(emptyText);
      } else {
        emptyText.innerText = "Thanks for joining!";
      }
    }
  }
}

</script>

<style lang="scss">

</style>