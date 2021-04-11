<template>
  <!-- <nav class="navbar is-white" role="navigation" aria-label="main navigation">
        <div class="menu-bar is-flex is-justify-content-space-between is-align-items-center">
            <div class="navbar-brand left-burger">
                <a
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="true"
                    @click="isOpen = !isOpen"
                    v-bind:class="{ 'is-active': isOpen }"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <a class="navbar-item has-text-weight-bold" href="#">
                Suklaarasia
            </a>
        </div>

        <div class="navbar-menu menu-list" :class="{ 'is-active': isOpen }">
            <div class="navbar-end">
                <a class="navbar-item menu-item">
                    Takaisin valikoimaan
                </a>
                <a class="navbar-item menu-item">
                    Ifolor Oy
                </a>
            </div>
        </div>
    </nav> -->
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item is-size-4 is-italic" href="/">
            <!-- <img src="../assets/logo.gif" alt="Logo" /> -->
            <span>Faustian Loop Corp.</span>
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="true"
            @click="isOpen = !isOpen"
            :class="{ 'is-active': isOpen }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarMenu"
          class="navbar-menu"
          :class="{ 'is-active': isOpen }"
        >
          <div class="navbar-end is-size-5">
            <a class="navbar-item has-text-weight-bold" href="/"> Home </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link has-text-weight-bold" href="#">
                Services
              </a>

              <div class="navbar-dropdown">
                <router-link to="/service-page/service1" class="navbar-item"
                  >Vulnerability Assessment</router-link
                >
                <router-link to="/service-page/service2" class="navbar-item"
                  >Compromised Assessment</router-link
                >
                <router-link to="/service-page/service3" class="navbar-item"
                  >Vendor Risk Assessment</router-link
                >
                <router-link to="/service-page/service4" class="navbar-item"
                  >ISO_27001 Gap Assessment</router-link
                >
              </div>
            </div>
            <a class="navbar-item has-text-weight-bold" href="#products">
              Products
            </a>
            <a
              class="navbar-item has-text-weight-bold"
              @click="openModal = true"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="modal" :class="{ 'is-active': openModal }" id="modal-form">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Contact Us</p>
          <button
            class="delete"
            aria-label="close"
            id="modal-close"
            @click="openModal = false"
          ></button>
        </header>
        <div class="card">
          <div class="card-content">
              <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "./contact-form.vue";
export default {
  name: "menu",

  props: {},

  components: { ContactForm },

  data: function () {
    return {
      isOpen: false,
      openModal: false,
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal-card-title {
  font-size: 20px;
}
.hero.is-light a.navbar-item:hover{
    color: lightgray !important;
    background-color: transparent !important;
}
.hero.is-light .navbar-link:hover{
    color: lightgray !important;
    background-color: transparent !important;
}
.navbar-link:not(.is-arrowless)::after{
    display: none;
}
.navbar-link:not(.is-arrowless) {
    padding-right: 0.75rem;
}
</style>
