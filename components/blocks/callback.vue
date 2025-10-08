<template>
  <section class="callback wrapper">
    <h2 class="callback__title title-h2">Обратная связь</h2>
    <p class="callback__text text-big">
      Мы свяжемся с вами в течение <span class="text-bodily">15 минут</span>!
    </p>

    <div class="callback-container">
      <div class="callback__image">
        <div class="callback__image-mask">
          <img
            class="callback__image-img"
            src="@/assets/sprites/woman-call.svg"
            alt="woman-star.svg"
          >
        </div>
      </div>

      <form class="callback__form" @submit.prevent>

        <!-- ФИО -->
        <div class="callback__form-input-wrapper">
          <input
            v-model.trim="form.name"
            class="callback__form-input"
            type="text"
            placeholder="ФИО"
            :class="{ 'error': errors.name }"
          >
          <span class="required-star" title="">
            *
            <span class="required-star__tooltip">Поле является обязательным для заполнения</span>
          </span>
        </div>
        <span v-if="errors.name" class="callback__error">{{ errors.name }}</span>

        <!-- Телефон -->
        <div class="callback__form-input-wrapper">
          <input
            v-model="form.phone"
            class="callback__form-input"
            type="text"
            placeholder="Телефон"
            @input="maskPhone"
            maxlength="18"
            :class="{ 'error': errors.phone }"
          >
          <span class="required-star">
            *
            <span class="required-star__tooltip">Поле является обязательным для заполнения</span>
          </span>
        </div>
        <span v-if="errors.phone" class="callback__error">{{ errors.phone }}</span>

        <!-- Почта -->
        <div class="callback__form-input-wrapper">
          <input
            v-model.trim="form.email"
            class="callback__form-input"
            type="email"
            placeholder="Почта"
            :class="{ 'error': errors.email }"
          >
          <span class="required-star">
            *
            <span class="required-star__tooltip">Поле является обязательным для заполнения</span>
          </span>
        </div>
        <span v-if="errors.email" class="callback__error">{{ errors.email }}</span>

        <!-- Организация -->
        <input
          v-model.trim="form.company"
          class="callback__form-input"
          type="text"
          placeholder="Организация"
        >

        <!-- Кнопки -->
        <div class="callback__form-buttons">
          <button
            class="callback__form-button"
            @click.prevent="openPopup('tel')"
          >
            Позвоните мне
          </button>
          <button
            class="callback__form-button"
            @click.prevent="openPopup('sms')"
          >
            Напишите мне
          </button>
        </div>

        <div class="callback__form-agreement">
          Отправляя форму Вы соглашаетесь с <a href="./files/policy.docx">Политикой конфиденциальности</a> и даёте <a href="./files/agreement.docx">согласие на обработку персональных данных</a> компанией "Нано Софт"
        </div>
      </form>
    </div>

    <div v-if="popup.visible" class="popup-overlay" @click.self="closePopup">
      <div class="popup">
        <h3 class="popup__title title-h3">Задайте вопрос эксперту</h3>
        <textarea
          v-model.trim="popup.comment"
          class="popup__textarea text-small"
          placeholder="Чем мы можем вам помочь?"
        ></textarea>

        <div class="popup__buttons">
          <button class="popup__button" @click="submitPopup">Отправить заявку</button>
        </div>
      </div>
    </div>

    <div v-if="popupStatusOk" class="popup-overlay" @click.self="popupStatusOk = false">
      <div class="popup popup-ok">
        <h3 class="popup__title title-h3">Данные получили <br>скоро свяжемся!</h3>
        <button class="popup__button" @click.self="popupStatusOk = false">жду обратной связи</button>
      </div>
    </div>
  </section>
</template>


<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: ''
})

const errors = reactive({
  name: '',
  phone: '',
  email: ''
})

const popup = reactive({
  visible: false,
  comment: '',
  communication: ''
})

const popupStatusOk = ref(false)
// const agreement = ref(false)

// Маска для телефона +7 (XXX) XXX-XX-XX
function maskPhone(e) {
  let x = e.target.value.replace(/\D/g, '').substring(0, 11)
  let formatted = '+7'

  if (x.startsWith('7')) x = x.substring(1)
  if (x.startsWith('8')) x = x.substring(1)

  if (x.length > 0) formatted += ' (' + x.substring(0, 3)
  if (x.length >= 4) formatted += ') ' + x.substring(3, 6)
  if (x.length >= 7) formatted += '-' + x.substring(6, 8)
  if (x.length >= 9) formatted += '-' + x.substring(8, 10)

  form.phone = formatted
}

function validate() {
  let valid = true
  errors.name = ''
  errors.phone = ''
  errors.email = ''

  if (!form.name) {
    errors.name = 'Введите ФИО'
    valid = false
  }

  const phoneDigits = form.phone.replace(/\D/g, '')
  if (phoneDigits.length < 11) {
    errors.phone = 'Введите корректный номер телефона'
    valid = false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email || !emailPattern.test(form.email)) {
    errors.email = 'Введите корректный email'
    valid = false
  }

  return valid
}

function openPopup(type) {
  if (!validate()) return
  popup.communication = type
  popup.visible = true
}

function closePopup() {
  popup.visible = false
  popup.comment = ''
}

async function submitPopup() {
  await sendCallback(popup.communication, popup.comment)
  closePopup()
}

async function sendCallback(communication, comment) {
  const webhookURL = 'https://nanosoft.bitrix24.ru/rest/15/l0y3bw0s7a3erwwi/crm.lead.add.json'

  const payload = {
    fields: {
      TITLE: `Обратная связь с сайта (${communication === 'tel' ? 'Звонок' : 'Сообщение'})`,
      NAME: form.name,
      PHONE: [{ VALUE: form.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: form.email, VALUE_TYPE: 'WORK' }],
      COMPANY_TITLE: form.company,
      SOURCE_ID: 'WEB',
      COMMENTS: comment
    }
  }

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const result = await response.json()

    if (result.result) {
      form.name = ''
      form.phone = ''
      form.email = ''
      form.company = ''
      
      popupStatusOk.value = true
      setTimeout(() => {
        popupStatusOk.value = false
      }, 2000);
    } else {
      console.error('Ошибка при добавлении лида:', result)
    }
  } catch (error) {
    console.error('Ошибка сети:', error)
  }
}
</script>

<style scoped>
.callback__form-input.error {
  border-color: #e74c3c;
}
.callback__error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
}
</style>
