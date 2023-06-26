<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const links = ref([])

const fetchlinks = async () => {
  // Corrected spelling of "async"
  await axios.get('https://qrtas-dash.almona.host/api/link').then((res) => {
    links.value = res.data.data
  })
}
onMounted(fetchlinks)
</script>
<template>
  <div
    class="container-fluid mt-5"
    style="background: #9C2A64; direction: rtl"
  >
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-white" style="margin-top: 6rem">
              <div class="container-fluid">
                <div class="row d-flex justify-content-lg-around">
                  <!--qurtas-->
                  <div class="col-md-6 col-lg-4 text-center text-lg-end">
                    <div style="position: relative; bottom: 30px">
                      <span class="">
                        <img loading="lazy" :src="links.logo" width="100" height="100" alt="img" />
                      </span>
                      <p class="mt-lg-3">
                        عليك الآن أن تختار من بين مجموعة متنوعة من أنواع الحيوانات سواء أن كانت ماعز
                        أو ابقار متنوعه من خلال خدمة التوصيل السريع مع فريق من المختصين .
                      </p>
                    </div>
                    <div class="d-flex justify-content-center justify-content-lg-start pt-2">
                      <a
                        v-if="links.facebook"
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="facebook"
                        :href="links.facebook"
                        ><FontAwesome :icon="['fab', 'facebook']"
                      /></a>
                      <a
                        v-if="links.twitter"
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="Twitter"
                        :href="links.twitter"
                        ><FontAwesome :icon="['fab', 'twitter']"
                      /></a>
                      <a
                        v-if="links.snapchat"
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="snapchat"
                        :href="links.snapchat"
                        ><FontAwesome :icon="['fab', 'snapchat']"
                      /></a>
                      <a
                        v-if="links.instagram"
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="instagram"
                        :href="links.instagram"
                        ><FontAwesome :icon="['fab', 'instagram']"
                      /></a>
                      <a
                        v-if="links.linkedin"
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="linkedin"
                        :href="links.linkedin"
                        ><FontAwesome :icon="['fab', 'linkedin']"
                      /></a>
                      <a
                        v-if="links.tiktok"
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        aria-label="linkedin"
                        :href="links.tiktok"
                        ><FontAwesome :icon="['fab', 'tiktok']"
                      /></a>
                    </div>
                  </div>
                  <!-- أقسام الموقع -->
                  <div class="col-md-6 col-lg-2 text-lg-end">
                    <p class="text-black text-center text-lg-end mb-4 fs-20 fw-900">أقسام الموقع</p>
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'home' }"
                      >الرئيسية</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'services' }"
                      >خدمتنا</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'articles' }"
                      >المدونة</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'about' }"
                    >
                      من نحن
                    </router-link>
                  </div>
                  <!-- تواصل معنا -->
                  <div class="col-md-6 col-lg-2 text-lg-end text-center">
                    <p class="text-black text-center text-lg-end mb-4 fs-20 fw-900">تواصل معنا</p>

                    <div
                      class="card border-0 rounded-5"
                      style="width: 100%; background-color: transparent"
                    >
                      <div class="card-body text-white">
                        <p class="card-title fs-16 fw-bold mb-0">
                          <FontAwesome class="ms-2" :icon="['far', 'envelope']" />البريد الالكتروني
                        </p>
                        <p class="card-text fs-14 p-0" style="color: #c2c2c2 !important">
                          {{ links.email }}
                        </p>
                        <p class="card-title fs-16 fw-bold mb-0">
                          <FontAwesome class="ms-2 fs-16" icon="phone-volume" />
                          رقم الجوال
                        </p>
                        <p class="card-text fs-14" style="color: #c2c2c2 !important">
                          {{ links.number }}
                        </p>
                        <p class="card-title fs-16 fw-bold mb-0">
                          <FontAwesome class="ms-2 fs-16" icon="location-dot" />
                          العنوان
                        </p>
                        <p class="card-text fs-14" style="color: #c2c2c2 !important">
                          {{ links.address }}
                        </p>
                      </div>
                    </div>

                    <!-- <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p> -->
                  </div>
                  <!-- زر التواصل -->
                  <div class="col-md-6 text-center col-lg-2">
                    <div
                      class="border-0 rounded-5 mt-2"
                      style="width: 100%; background-color: #ffffff00"
                    >
                      <div class="border-0 text-black">
                        <div class="d-grid justify-content-center justify-content-lg-end pt-2">
                          <div class="d-block">
                            <a
                              class="btnn btn-outline-light btn-social"
                              target="_blank"
                              aria-label="facebook"
                              href="#"
                              style="background-color: #2e9ae8; color: white !important"
                              ><FontAwesome icon="phone-volume"
                            /></a>
                          </div>
                          <div class="d-block">
                            <a
                              v-if="links.whatsapp"
                              class="btnn btn-outline-light btn-social my-2"
                              target="_blank"
                              aria-label="whatsapp"
                              :href="links.whatsapp"
                              style="background-color: #5BA1AB
"
                              ><FontAwesome :icon="['fab', 'whatsapp']"
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p> -->
                  </div>
                </div>
              </div>
              <div class="container mt-3 mt-lg-4">
                <div class="row">
                  <div class="col-md-12 fs-14 text-center mb-3 mb-md-0">
                    <p>جميع الحقوق محفوظة لموقع &copy; Almona 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Footer End -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a[data-v-8838cd3c],
p[data-v-8838cd3c] {
  color: #ffffff !important;
}
a,
p {
  color: #ffffff !important;
}
:root {
  --primary: #2380be;
  --light: #05121b;
  --dark: #0e2e50;
}
.btnn.btn-social {
  margin-right: 5px;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0 0 0 / 10%) !important;
  transition: 0.5s;
}

.btnn.btn-social:hover {
  background-color: #5BA1AB
;
  color: black;
}
.btnn.btn-social:focus {
  background-color: #5BA1AB
;
}

.btn_btn_link {
  display: block;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  color: var(--light);
  font-weight: normal;
  transition: 0.3s;
  color: white;
}
.btn_btn_link:hover {
  letter-spacing: 0.5px;
  box-shadow: none;
  color: #0099ff;
}

.btn_btn_link::before {
  position: relative;
  content: '';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
}
</style>
