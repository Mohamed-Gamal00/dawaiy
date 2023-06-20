<script setup>
import axios from 'axios'
import ContactCom from '@/components/contact/ContactCom.vue'
import AboutCom from '@/components/about/AboutCom.vue'
import ArticlesCom from '@/components/articles/ArticlesCom.vue'
import ServicesCom from '@/components/services/ServicesCom.vue'
import { ref, onMounted } from 'vue'
const articles = ref([])
const fetchArticles = async () => {
  try {
    const response = await axios.get('https://qrtas.almona.host/api/articles')
    articles.value = response.data.articles
  } catch (error) {
    console.error(error)
  }
}

const links = ref([])
const fetchlinks = async () => {
  await axios.get('https://qrtas.almona.host/api/link').then((res) => {
    links.value = res.data.data
  })
}

onMounted(async () => {
  await Promise.all([fetchArticles(), fetchlinks()])
})
</script>
<template>
  <div class="home mt-4" style="direction: rtl" id="home">
    <!-- text and image -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row align-items-center justify-content-around mb-2">
            <div class="col-lg-4 fw-bold align-middle text-center text-lg-end">
              <p>دوائي</p>
              <h1 class="mb-4 fw-bold" style="font-weight: 900 !important">
                أسهل طريقة للحصول على أدويتك
              </h1>
              <p class="fs-14">
                نقدم لك مجموعة متنوعة من الحبوب والأدوية ومستحضرات التجميل ، ونقوم بتوصيلها لك
                بسهوله حتي باب منزلك . أعثر على ما تحتاجه من خلال محرك البحث الخاص بنا واحصل عليه
                بسرعة وبأقل مجهود .
              </p>
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
              <!-- google app store -->
              <div class="my-5">
                <p class="font_p_home" style="color: #1f1e1e">
                  حمل التطبيق من جوجل بلاي أو آب ستور
                </p>
                <!-- Google Play button -->
                <a v-if="links.google_play" class="market-btn google-btn" href="#" role="button">
                  <span class="market-button-subtitle">GET IT ON</span>
                  <span class="market-button-title">Google Play</span>
                </a>
                <!-- App Store button -->
                <a
                  v-if="links.app_store"
                  class="market-btn apple-btn"
                  href="#"
                  role="button"
                  style="width: 160.72px"
                >
                  <span class="market-button-subtitle">Download on the</span>
                  <span class="market-button-title">App Store</span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
              <img
                class="img-fluid rounded-3"
                src="@/assets/images/home-img.png"
                alt="img"
                width="460"
                height="460"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- about us 2 -->
    <div class="container-fluid py-3">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row mb-0 justify-content-center">
            <div class="col-md-6">
              <div>
                <h2 class="text-center">
                  <strong> من نحن </strong>
                </h2>
                <p class="text-center fw-bold fs-14" style="color: #858585">
                  نقدم لك جميع المستلزمات الطبية وبأسعار لا تقبل المنافسة
                </p>
              </div>
            </div>
          </div>
          <div class="row align-items-center justify-content-around mb-2">
            <AboutCom />
          </div>
        </div>
      </div>
    </div>
    <!-- خدماتنا 2 -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" style="background: rgba(132, 159, 35, 0.09)">
        <div class="col-md-11">
          <div class="row mb-0">
            <div>
              <h2 class="text-center mt-lg-2"><strong> خدمتنا </strong></h2>
              <p class="text-center fw-bold fs-14" style="color: #858585">
                دوائي سهلها عليك للحصول علي جميع ادويتك من منزلك
              </p>
            </div>
          </div>
          <div class="row align-items-center justify-content-around mb-2">
            <ServicesCom />
          </div>
        </div>
      </div>
    </div>
    <!-- section 3 banar-->
    <section class="py-3">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <!-- حمل التطبيق الآن  -->
            <div class="row align-items-center justify-content-center mb-2 mt-4">
              <!-- google app store -->
              <div class="text-center">
                <strong>
                  <h2 class="font_p_home" style="color: #1f1e1e; font-weight: 900 !important">
                    حمل التطبيق الآن
                  </h2>
                </strong>
                <!-- Google Play button -->
                <a v-if="links.google_play" class="market-btn google-btn" href="#" role="button">
                  <span class="market-button-subtitle">GET IT ON</span>
                  <span class="market-button-title">Google Play</span>
                </a>
                <!-- App Store button -->
                <a
                  v-if="links.app_store"
                  class="market-btn apple-btn"
                  href="#"
                  role="button"
                  style="width: 160.72px"
                >
                  <span class="market-button-subtitle">Download on the</span>
                  <span class="market-button-title">App Store</span>
                </a>
              </div>
              <div class="row justify-content-center text-center">
                <div>
                  <img
                    src="@/assets/images/frame.png"
                    alt="img"
                    width="926"
                    height="460"
                    class="img-thumbnail"
                    format="webp"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div class="row justify-content-center text-center">
              <div class="text-center">
                <h2 class="fw-bold bg-text fs-20">شاشات التطبيق</h2>
                <p class="fs-18">تعرف علي شاشات التطبيق لتتعرف علي ريح بوضوح</p>
              </div>
            </div>
            <div class="row justify-content-center text-center">
              <div>
                <img
                  src="@/assets/images/pannar.png"
                  alt="img"
                  width="926"
                  height="460"
                  class="img-thumbnail"
                  format="webp"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- articles 3 blog-->
    <section class="container-fluid py-3 mt-lg-5">
      <div class="row mb-3">
        <div>
          <strong>
            <h2 class="text-center">المدونة</h2>
          </strong>
          <p class="text-center">تعرف علي اخر اخبار تطبيق قرطاس</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <ArticlesCom
            class="col-md-6"
            v-for="article in articles.slice(-2)"
            :key="article.id"
            :article="article"
          />
          <div class="row text-center">
            <div class="mt-3 mt-lg-5">
              <router-link
                :to="{ name: 'articles' }"
                class="btn fw-bold text-white rounded-3 text-black ps-lg-4 pe-lg-4 px-5"
                style="
                  background: #9C2A64;
                  padding-top: 0.5rem !important;
                  padding-bottom: 0.8rem !important;
                "
                >مشاهدة الكل</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact us -->
    <ContactCom />
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.home {
  direction: rtl;
  color: #1f1e1e !important;
}
.form-control[data-v-570605e2],
.form-select[data-v-570605e2] {
  border-radius: 20px !important;
  padding: 7px 30px !important;
  background-color: #ffffff42 !important;
  border: 0 !important;
}
.form-select:focus {
  color: #212529;
  background-color: #fff;
  border-color: #ffffff !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ffffff42 !important;
}
.form-control,
.form-select {
  border-radius: 20px;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #ffffff42 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ffffff42 !important;
}
::placeholder {
  color: #ffffff42 !important;
  font-size: 14px;
}
.icon {
  position: relative !important;
  top: 32px !important;
  right: 10px !important;
  color: #ffffff !important;
}
/* app store */
.market-btn {
  display: inline-block;
  padding: 0.3125rem 0.875rem;
  padding-left: 2.8125rem;
  -webkit-transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border: 1px solid #e7e7e7;
  background-position: center left 0.75rem;
  background-color: #ebebec;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
  margin: 2px 2px;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
}
.market-btn .market-button-title {
  display: block;
  color: #222;
  font-size: 1.125rem;
}
.market-btn .market-button-subtitle {
  display: block;
  margin-bottom: -0.25rem;
  color: #888;
  font-size: 0.75rem;
}
.apple-btn {
  /* background-image: url('@/assets/images/apple.png'); */

  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
.google-btn {
  /* background-image: url('@/assets/images/google-play.png'); */
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
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
div .bg-text {
  position: relative;
  z-index: 1;
}
</style>
