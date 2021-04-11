<template>
  <div>
    <section class="hero is-light is-medium servicepage-banner">
      <div class="hero-head"><Menu /></div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-dark is-size-1">Faustian Loop</h1>
          <h2 class="subtitle has-text-light is-size-3">
            Cyber Security Consultancy Services
          </h2>
          <h4 class="is-size-4 has-text-weight-bold">
            Secure your Organization
          </h4>
          <p class="is-size-5 has-text-light">
            Next-generation security solutions and customized trainings to help
            protect against
            <strong class="is-size-4 has-text-white"> Cyber attacks.</strong>
          </p>
        </div>
      </div>
    </section>
    <ServiceDetails :service-name="service"/>
    <Footer />
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import Footer from "../components/footer.vue";
import ServiceDetails from "../components/serviceDetail.vue";
export default {
  name: "ServicePage",

  data: function () {
    return {
      service: this.$route.params.slug,
    };
  },

  components: { Menu, Footer, ServiceDetails }
  
};
</script>

<style scoped>
.servicepage-banner {
  background: url("./../assets/background.png");
  background-size: cover;
}
</style>
