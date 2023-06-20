<script setup>
import PageLoder from '../../components/pageloader/PageLoder.vue'
import NavBarCom from '../../components/layout/NavBarCom.vue';
import FooterCom from '../../components/layout/FooterCom.vue';
const loading = ref('false')

import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const route = useRoute()
const id = route.params.id
const article = ref([])
const fetchArticle = async () => {
  loading.value = true
  await axios.get(`https://qrtas.almona.host/api/article/${id}`).then((res) => {
    article.value = res.data.article
    loading.value = false
  })
}
onMounted(fetchArticle)
</script>
<template>
  <NavBarCom />
  <div v-if="loading">
    <PageLoder />
  </div>
  <div class="container-fluid my-5 py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-4">
        <div class="row">
          <header class="header">
            <img :src="article.banner" style="object-fit: cover" class="img-fluid" alt="img" />
          </header>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row mb-2 align-items-center">
          <div class="container">
            <article style="direction: rtl">
              <div class="my-3">
                <span
                  ><FontAwesome :icon="['far', 'clock']" class="ps-2 text-yellow" />
                  <span class="text-yellow"> {{ article.date }}</span>
                </span>
                <!-- <span class="pub-date text-yellow">تاريخ النشر.{{ article.date }}</span> -->
              </div>
              <h1 class="my-3">
                {{ article.title }}
              </h1>

              <div class="row" style="direction: rtl">
                <div class="col-md-12">
                  <div v-html="article.desc"></div>
                </div>
                <!-- <div class="col-md-4 border-end">
                  <div
                    class="blog-side"
                    v-for="article in articles"
                    :key="article"
                  >
                    <router-link
                      class="text-decoration-none"
                      :to="{ name: 'article', params: { id: article.id } }"
                    >
                      <div class="media">
                        <img :src="article.image" alt="img" />
                        <div class="media-body">
                          <div>
                            <strong>{{ article.title }}</strong>
                          </div>
                          <span>{{ article.date }}</span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div> -->
              </div>
            </article>
          </div>
        </div>
        <!-- <h1>post article {{ id }}</h1> -->
      </div>
    </div>
  </div>
  <FooterCom />
</template>
<style scoped>
.header {
  width: 100%;
}
.header img {
  width: 100%;
  border-radius: 15px;
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .header {
    width: 100%;
    height: 394px;
  }
  .header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 36px;
  }
}
.media {
  display: flex;
  align-items: flex-start;
}
.blog-side .media {
  padding-bottom: 15px;
  margin-top: 15px;
  align-items: center;
}
.blog-side .media img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
}
.blog-side .media .media-body {
  margin-right: 10px;
  margin-left: 0;
}
.blog-side .media .media-body h4 {
  font-size: 15px;
  transition: 0.5s;
  color: #2a398c;
  color: var(--main-color);
  line-height: 27px;
}
</style>
