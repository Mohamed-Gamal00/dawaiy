<template>
  <div>
    <!-- خدماتنا 2 -->
    <div class="container-fluid py-3" dir="rtl">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row align-items-center justify-content-around mb-2">
            <div class="col-lg-6 fw-bold align-middle text-center text-lg-end">
              <h1 class="mb-4 fw-bold " style="font-weight: 900 !important">
                نتيح لك إمكانية البحث عن الأدوية والمستلزمات الطبية المختلفة
              </h1>
              <p class="fs-14">
                دوائي يقدم لك مجموعه متنوعه من الأدوية ومستحضرات التجميل المختلفة ويتيح لك امكانية
                التصفح بسهولة ويسر . ويقدم لك عروض رائعة على المستلزمات الطبية واسعارنا التقبل
                المنافسه
              </p>
              <p class="fs-14">الآن احصل علي افضل الادوية من خلال تطبيق دوائي .</p>
              <button class="btn m-lg-0 m-md-0 p-0 mb-3">
                <router-link
                  :to="{ name: 'contact' }"
                  class="btn fw-bold text-white rounded-3 mb-2 text-black ps-lg-4 pe-lg-4 px-5"
                  style="
                    background: #9C2A64;
                    padding-top: 0.5rem !important;
                    padding-bottom: 0.8rem !important;
                  "
                  >تواصل معنا</router-link
                >
              </button>
            </div>
            <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
              <img class="img-fluid rounded-3" src="@/assets/images/service.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
