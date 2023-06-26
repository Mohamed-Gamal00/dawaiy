<template>
  <!-- تواصل معنا -->
  <div class="container-fluid mt-5 d-flex justify-content-center">
    <div class="row justify-content-center">
      <div class="col-md-10 bg-img d-flex justify-content-center">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-lg-6 col-xl-6 rounded-3 my-3 order-lg-1 bg-white">
            <div
              class="card border-0 text-white text-end contact-Title bg-transparent"
              style="width: 100%"
            >
              <div class="card-body">
                <p
                  class="card-title text-black text-center lh-lg fs-20"
                  style="font-weight: 900 !important; font: 30px"
                >
                  <span class="text-yellow">اطلب</span> خدمتك الآن
                </p>
                <p
                  class="card-text text-center"
                  style="color: #000000; font-size: 18px; font-weight: 400"
                >
                  من الآن لا داعي للقلق بشأن الإنتظار لساعات طويلة في الطوابير . فقط املأ البيانات و
                  سنتولى الباقي .
                </p>
              </div>
            </div>
            <form class="mx-1 mx-md-4 input-icons" style="direction: rtl">
              <div class="row">
                <div class="col-md-6">
                  <!--  الاسم الاول -->
                  <div class="d-flex flex-row align-items-center">
                    <div class="form-outline flex-fill mb-0">
                      <FontAwesome icon="user" class="icon" />

                      <input
                        type="text"
                        placeholder="الاسم"
                        class="form-control"
                        v-model="contact.name"
                      />
                      <span class="erroe-feedbak" v-if="v$.contact.name.$error">{{
                        v$.contact.name.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <!-- رقم الهاتف -->
                  <div class="d-flex flex-row align-items-center">
                    <div class="form-outline flex-fill mb-0">
                      <FontAwesome icon="phone" class="icon" />
                      <input
                        type="number"
                        placeholder="رقم الجوال"
                        class="form-control"
                        v-model="contact.number"
                      />
                      <span class="erroe-feedbak" v-if="v$.contact.number.$error">{{
                        v$.contact.number.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <!-- البريد الالكتروني -->
                  <div class="d-flex flex-row align-items-center">
                    <div class="form-outline flex-fill mb-0">
                      <FontAwesome icon="envelope" class="icon" />
                      <input
                        type="email"
                        placeholder="البريد الالكتروني"
                        class="form-control"
                        v-model="contact.email"
                      />
                      <span class="erroe-feedbak" v-if="v$.contact.email.$error">{{
                        v$.contact.email.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex flex-row align-items-center">
                    <div class="form-outline flex-fill mb-0">
                      <FontAwesome icon="message" class="icon" />

                      <input
                        type="text"
                        placeholder="اترك رسالتك"
                        class="form-control"
                        v-model="contact.message"
                      />
                      <span class="erroe-feedbak" v-if="v$.contact.name.$error">{{
                        v$.contact.name.$errors[0].$message
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ارسال -->
              <div class="text-center mb-3 mt-4 mb-lg-4">
                <button
                  style="background: #9C2A64; border: none"
                  @click="contactus()"
                  type="button"
                  class="btn text-white text-center px-4"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  name: 'ContactUsCom',

  data() {
    return {
      loading: false,
      v$: useValidate(),
      contact: {
        name: '',
        email: '',
        number: '',
        message: ''
      }
    }
  },
  validations() {
    return {
      contact: {
        name: { required },
        email: { required, email },
        number: { required },
        message: { required }
      }
    }
  },
  async mounted() {
    this.loading = true
    this.loading = false
  },
  methods: {
    async contactus() {
      this.loading = true
      this.v$.$validate()
      if (!this.v$.$error) {
        await axios
          .post(`https://qrtas-dash.almona.host/api/contact`, this.contact)
          .then(() => {
            this.$swal.fire({
              icon: 'success',
              title: 'تم...',
              text: 'عملية تسجيل ناجحة',
              footer: '<p>تم تسجيل ردك بنجاح</p>',
              timer: 2000
            })
            setTimeout(() => {
              this.successMessage = ''
              this.contact.name = ''
              this.contact.number = ''
              this.contact.email = ''
              this.contact.message = ''
              ;(this.v$.contact.name.$errors[0].$message = ''),
                (this.v$.contact.number.$errors[0].$message = ''),
                (this.v$.contact.email.$errors[0].$message = ''),
                (this.v$.contact.message.$errors[0].$message = '')
            }, 2000)
          })
          .catch((err) => {
            console.log(err)
            this.$swal.fire(
              'تعذر الاتصال بالخادم ?',
              ' يرجي التأكد من الاتصال بالانترنت?',
              'question'
            )
          })
      } else {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'عملية تسجيل خاطئة',
          footer: '<p>املئ البيانات بطريقة صحيحة</p>',
          timer: 2000
        })
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 992px) {
  .bg-img {
    /* content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1; */
    background-image: url('@/assets/images/contact-img.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: all 2s ease-in-out;
  }
}
.form-control {
  border: none;
  border-radius: 5px !important;
  padding: 7px 35px !important;
  background-color: #ffffff;
  border: 1px solid #8585855e !important;
}
.form-control:focus {
  color: #000000;
  background-color: #e3e4e6;
  border-color: #85858577 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #00000000 !important;
}
::placeholder {
  color: #858585 !important;
  font-size: 14px !important;
}
.icon {
  position: relative !important;
  top: 32px !important;
  right: 10px !important;
  color: #858585 !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
