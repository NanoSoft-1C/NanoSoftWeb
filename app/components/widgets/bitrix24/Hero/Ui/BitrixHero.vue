<script setup>
const scrollToAnchor = (id) => {
    const element = document.getElementById(id)

    if (element) {

        const offset = 120

        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset

        const offsetPosition = elementPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        })
    }
}
</script>

<template>
  <section class="bitrix-hero wrapper">

    <div class="bitrix-hero__content">

      <span class="bitrix-hero__badge">
        Интеграция CRM и 1С
      </span>

      <h1 class="bitrix-hero__title">
        ВНЕДРЕНИЕ<br>
        БИТРИКС 24
      </h1>

      <p class="bitrix-hero__text">
        Внедрим Битрикс24 под любые задачи вашего бизнеса,<br>
        от базовой настройки до комплексной автоматизации и интеграций с внешними сервисами.

      </p>

      <div class="bitrix-hero__buttons">
        <button class="btn-primary"
         @click="scrollToAnchor('footer')"
        >
          ОБСУДИТЬ ПРОЕКТ
        </button>

      </div>

    </div>

    <div class="bitrix-hero__image">
      <img
        src="/images/bitrix24/hero-bitrix.png"
        alt="Интеграция Битрикс24"
      >
    </div>

  </section>
</template>

<style scoped lang="scss">
.bitrix-hero {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;

  min-height: 100vh;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
}

.bitrix-hero__badge {
  display: inline-flex;
  padding: 12px 24px;
  border-radius: 999px;
  background: rgba(var(--color-accent-rgb), 0.12);
  border: 1px solid rgba(var(--color-accent-rgb), 0.2);
  color: var(--color-accent);
  font-size: clamp(18px, 1.5vw, 22px);
  font-weight: 600;
  margin-bottom: 24px;
}


.bitrix-hero .bitrix-hero__title {
  font-size: 48px !important;
  line-height: 1;
  margin-bottom: 28px;
}

.bitrix-hero__text {
  font-size: 18px;
  line-height: 1.7;
  opacity: .8;
  margin-bottom: 40px;
}

.bitrix-hero__buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary {
  height: 60px;
  font-weight: 700;
  padding: 0 32px;
  border-radius: 18px;
  border: none;
  cursor: pointer;

  background: var(--color-accent);
  color: var(--color-black);

  transition: background .3s ease;
}

.btn-primary:hover {
  background: var(--color-accent-light);
}

.bitrix-hero__image {
  display: flex;
  justify-content: flex-end;
}

.bitrix-hero__image img {
  width: 100%;
  max-width: 480px;
  border-radius: 32px;
}

@media (max-width: 992px) {
  .bitrix-hero {
    grid-template-columns: 1fr;
    padding-top: 120px;
    min-height: auto;
  }

  .bitrix-hero__image {
    justify-content: center;
  }
}
</style>
