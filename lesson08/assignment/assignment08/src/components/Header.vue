<!-- HEADER COMPONENT -->

<template>

  <div class="Header">
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
      </div>
  </div>
  
</template>

<script>
export default {
  name: "Header"
}
</script>