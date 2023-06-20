<script setup>
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
// import router from '../../router'
// const handelSignOut = () => {
//   signOut(auth).then(()=>{
//     router.push("/");
//   })
// }
// const isLoggedIn = ref('false')
const links = ref([])
const fetchlinks = async () => {
  await axios.get('https://qrtas.almona.host/api/link').then((res) => {
    links.value = res.data.data
  })
}
// let auth
onMounted(async () => {
  // auth = getAuth
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     isLoggedIn.value = true
  //   } else {
  //     isLoggedIn.value = false
  //   }
  // })
  await Promise.all([fetchlinks()])
})

const route = useRoute()

const scroll = () => {
  window.scrollTo(0, 0)
}

watch(
  () => route.path,
  () => {
    scroll() // Scroll to top when the router path changes
  }
)
</script>

<template>
  <!-- Navbar & Hero Start -->
  <div class="style sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img :src="links.logo" width="50" height="50" alt="img" />
          <!-- <p class="fs-10">تطبيق ريح للتوصيل</p> -->
        </router-link>
        <button
          class="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          role="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- <span
          class="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          role="button"
        >
          <span class="navbar-toggler-icon"></span>
        </span> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav nav mx-auto mb-2 mb-lg-0 p-0">
            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'home' }" exact
              ><span class="fw-bold">الرئيسة</span></router-link
            >

            <!-- <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'join' }"
              ><span class="fw-bold">انضم الينا</span></router-link
            > -->

            <!-- <router-link class="m-2 ms-lg-4 me-lg-4" to="/services"
              ><span class="fw-bold">الخدمات</span></router-link
              > -->

            <router-link class="m-2 ms-lg-4 me-lg-4" to="/about"
              ><span class="fw-bold">من نحن</span></router-link
            >
            <router-link class="m-2 ms-lg-4 me-lg-4" to="/services"
              ><span class="fw-bold">خدمتنا</span></router-link
            >
            <router-link class="m-2 ms-lg-4 me-lg-4" to="/articles"
              ><span class="fw-bold">المدونة</span></router-link
            >
          </div>
          <router-link
            :to="{ name: 'contact' }"
            class="btn fw-bold text-white rounded-3 text-black ps-lg-4 pe-lg-4 px-5"
            style="
              background: #9C2A64;
              padding-top: 0.5rem !important;
              padding-bottom: 0.8rem !important;
            "
            >تواصل معنا</router-link
          >
          <!-- <button @click="handelSignOut" v-if="isLoggedIn" class="btn">sign up</button> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.style {
  direction: rtl;
}

.nav a {
  text-decoration: none;
  color: #353536;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
}
.nav a:hover {
  color: #9C2A64 !important;
}
.nav .router-link-exact-active {
  color: #9C2A64 !important;
}
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: rgba(0, 0, 0, 0.55);
  background-color: transparent;
  background-color: #08080800;
  border: none !important;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 !important;
}
</style>
