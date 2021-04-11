<template>
  <div>
    <section class="hero is-light is-fullheight-with-navbar homepage-banner">
      <div class="hero-head"><Menu /></div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-dark is-size-1">Faustian Loop Corp.</h1>
          <h2 class="subtitle has-text-light is-size-3">Simple.Secure</h2>
          <h4 class="is-size-4 has-text-weight-bold">
            Secure your Organization
          </h4>
          <p class="is-size-5 has-text-light">
            <strong class="is-size-4 has-text-white"></strong>
          </p>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <p class="mt-6 px-2 has-text-justified subtitle">
            Faustian Loop provides cyber security consultancy services by
            assessing the overall security posture of your organization or its
            services. FL Corp. provides the next-generation security solutions,
            and customized trainings to help protect against cyber attacks.
          </p>
        </div>
      </div>
    </div>

    <Services />
    <p class="title mt-6 has-text-centered" id="products">Products</p>
    <Products />

   
    <div class="container is-max-desktop">
        <p class="title mt-6 has-text-centered">Contact Us</p>
        <ContactForm />
    </div>

    <Footer />

  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import Services from "../components/services.vue";
import Products from "../components/products.vue";
import Footer from "../components/footer.vue";
import ContactForm from "../components/contact-form.vue";
export default {
  name: "HomePage",
  components: { Menu, Services, Products, Footer, ContactForm },
};
</script>

<style scoped>
.homepage-banner {
  background: url("./../assets/bg1.png");
  background-size: cover;
}
</style>
