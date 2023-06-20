<script setup>
import { reactive } from 'vue'
const aboutus = reactive([
  {
    id: 1,
    title:
      'تطبيق دوائي يسهل لك الحصول على أدويتك في كل الأوقات بطريقه سهله و سريعه ومباشره الى باب منزلك.'
  },
  {
    id: 2,
    title:
      'تطبيق دوائي هو الأكثر تقدماً وشمولاً في الممكلة العربية السعودية حيث نجعل شراء الأدوية والمستلزمات الطبية اسهل واسرع من اي وقت مضى.'
  },
  {
    id: 3,
    title: 'معنا قل وداعاً للإنتظار في الطابور و وفر الوقت بإستخدماتك للتطبيق. '
  },
  {
    id: 4,
    title: 'نتيح لك إمكانية البحث عن الادوية والمستلزمات الطبية المختلفة.'
  }
  // Add more articles as needed
])
</script>
<template>
  <div class="container-fluid py-lg-3" dir="rtl">
    <div class="row d-flex justify-content-center">
      <div class="col-md-11">
        <div class="row align-items-center justify-content-around mb-2">
          <div class="col-lg-6 text-center mt-sm-4">
            <img
              format="webp"
              loading="lazy"
              class="img-fluid rounded-3"
              src="@/assets/images/about.png"
              alt="img"
            />
          </div>
          <div class="col-lg-6 fw-bold align-middle text-center text-lg-end">
            <ul class="p-0">
              <li class="my-3" v-for="item in aboutus" :key="item.id" style="list-style: none">
                <div class="row">
                  <div class="col-1 align-middle align-self-center">
                    <span>
                      <img src="../../assets/images/icon.png" alt="" />
                      <!-- <FontAwesome :icon="['fas', 'tag']" class="text-yellow" />  -->
                    </span>
                  </div>
                  <div class="col-11">
                    <span class="text-muted fs-14"> {{ item.title }} </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
