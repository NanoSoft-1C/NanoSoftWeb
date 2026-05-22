<template>
  <section class="bitrix-hero wrapper">

    <div class="bitrix-hero__content">

      <span class="bitrix-hero__badge">
        Интеграция CRM и 1С
      </span>

      <h1 class="bitrix-hero__title">
        ИНТЕГРАЦИЯ<br>
        БИТРИКС24
      </h1>

      <p class="bitrix-hero__text">
        Настроим обмен между Битрикс24 и 1С,
        автоматизируем продажи,<br>счета, сделки, документы и бизнес процессы
      </p>

      <div class="bitrix-hero__buttons">
        <button class="btn-primary">
          Связаться с нами и обсудить Ваш проект
        </button>

      </div>

    </div>

    <div class="bitrix-hero__image">
      <img
        src="/images/bitrix24/hero-bitrix.SVG"
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
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 60px;
}

.bitrix-hero__badge {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 198, 120, 0.12);
  color: #ffc678;
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

.btn-primary,
.btn-secondary {
  height: 60px;
  font-weight: 700;
  padding: 0 32px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #ffc678;
  color: #111;
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,.15);
  color: white;
}

.bitrix-hero__image img {
  width: 100%;
  border-radius: 32px;
}

@media (max-width: 992px) {
  .bitrix-hero {
    grid-template-columns: 1fr;
    padding-top: 120px;
    min-height: auto;
  }
}
</style>