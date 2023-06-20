<script setup>
import NavBarCom from '../components/layout/NavBarCom.vue';
import FooterCom from '../components/layout/FooterCom.vue';
import AboutCom from '@/components/about/AboutCom.vue'
</script>
<template>
  <NavBarCom />
  <div>
    <!-- about us 2 -->
    <div class="container-fluid">
      <div class="row text-dark d-flex justify-content-center text-center my-lg-3 py-lg-3 banner-header">
        <strong>
          <h2 class="fw-900" style="font-size: 30px">من نحن</h2>
          <p>نقدم لك جميع المستلزمات الطبية وبأسعار لا تقبل المنافسة</p>
        </strong>
      </div>
    </div>
    <AboutCom />
  </div>
  <FooterCom />
</template>
