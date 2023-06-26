<script setup>
import PageLoder from '../../components/pageloader/PageLoder.vue'
import NavBarCom from '../../components/layout/NavBarCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
import ArticlesCom from '@/components/articles/ArticlesCom.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const router = useRouter()

const loading = ref('false')

const articles = ref([])
const fetchArticles = async () => {
  await axios
    .get('https://qrtas-dash.almona.host/api/articles')
    .then((res) => {
      loading.value = true
      articles.value = res.data.articles
      loading.value = false
    })
    .catch((err) => {
      console.log(err)
      router.push({ name: 'servererror' })
    })
}

onMounted(fetchArticles)
</script>

<template>
  <NavBarCom />
  <!-- المدونة 2 -->
  <div class="container-fluid">
    <div
      class="row text-dark d-flex justify-content-center text-center my-lg-3 py-lg-3 banner-header"
    >
      <strong>
        <h2 class="fw-900" style="font-size: 30px">المدونة</h2>
        <p>تعرف علي اخر اخبار تطبيق دوائي</p>
      </strong>
    </div>
  </div>
  <div class="articles">
    <!-- اخر الاخبار -->
    <div v-if="loading">
      <PageLoder />
    </div>
    <div class="container-fluid pt-lg-5">
      <div v-if="!articles" class="alert alert-danger text-center" role="alert">
        لاتوجد مقالات !
      </div>
      <div class="container">
        <div class="row">
          <ArticlesCom
            class="col-md-6"
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
  <FooterCom />
</template>
<style>
.articles {
  direction: rtl;
  color: #1f1e1e;
}
/* phone */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .articles .article_img {
    width: 100%;
    height: 235px;
  }
  .articles .article_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .articles .description p {
    font-size: 10px;
  }
}
</style>
