<script setup>
import NavBarCom from '../components/layout/NavBarCom.vue';
import FooterCom from '../components/layout/FooterCom.vue';
import ContactCom from '@/components/contact/ContactCom.vue'
</script>

<template>
  <NavBarCom />
  <div>
    <div class="container-fluid">
      <div class="row text-dark d-flex justify-content-center text-center my-lg-3 py-lg-3 banner-header">
        <strong>
          <h2 class="fw-900" style="font-size: 30px">تواصل معنا</h2>
          <p>أرسل طلبك وسيتم الرد عليك بأقصى سرعة ممكنة</p>
        </strong>
      </div>
    </div>
    <ContactCom />
  </div>
  <FooterCom />
</template>

<style scoped></style>
