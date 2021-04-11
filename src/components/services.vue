<template>
  <section class="container mt-6" id="services">
    <p class="title has-text-centered">OUR SERVICES</p>
    <div class="columns is-flex-wrap-wrap">
      <div class="column is-5 is-offset-1">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-justify-content-center">
              Vulnerability Assessment & Penetration Testing
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-3by2">
              <img
                src="../assets/card-media.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.<br> <br>
            </div>
          </div>
          <footer class="card-footer">
            <router-link to="/service-page/service1" class="card-footer-item"
              >Learn More</router-link
            >
          </footer>
        </div>
      </div>
      <div class="column is-5">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-justify-content-center">Compromised Assessment</p>
          </header>
          <div class="card-image">
            <figure class="image is-3by2">
              <img
                src="../assets/card-media.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
          <footer class="card-footer">
            <router-link to="/service-page/service2" class="card-footer-item"
              >Learn More</router-link
            >
          </footer>
        </div>
      </div>
      <div class="column is-5 is-offset-1">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-justify-content-center">Vendor Risk Assessment</p>
          </header>
          <div class="card-image">
            <figure class="image is-3by2">
              <img
                src="../assets/card-media.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
          <footer class="card-footer">
            <router-link to="/service-page/service3" class="card-footer-item"
              >Learn More</router-link
            >
          </footer>
        </div>
      </div>
      <div class="column is-5">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-justify-content-center">ISO-27001 Gap Assessment</p>
          </header>
          <div class="card-image">
            <figure class="image is-3by2">
              <img
                src="../assets/card-media.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.

            </div>
          </div>
          <footer class="card-footer">
            <router-link to="/service-page/service4" class="card-footer-item"
              >Learn More</router-link
            >
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
</style>