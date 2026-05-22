<script setup>
useSeoMeta({
  title: 'Интеграция Битрикс24 и 1С — NanoSoft',
  description: 'Настройка и интеграция Битрикс24 с 1С. Автоматизация CRM, обмен данными и бизнес-процессов.',
  ogTitle: 'Интеграция Битрикс24',
  ogDescription: 'Интеграция CRM Битрикс24 с 1С и автоматизация бизнеса.',
})
</script>


<template>
  <main class="bitrix-page">
    <!-- HERO -->
    <section class="bitrix-hero wrapper">
      <div class="bitrix-hero__content">
        <span class="bitrix-hero__badge">
          Интеграция CRM и 1С
        </span>

        <h1 class="bitrix-hero__title title-h1">
          Интеграция <br />
          Битрикс24
        </h1>

        <p class="bitrix-hero__text">
          Настроим обмен между Битрикс24 и 1С, автоматизируем продажи,
          счета, сделки, документы и бизнес‑процессы.
        </p>

        <div class="bitrix-hero__buttons">
          <button class="btn-primary">
            Обсудить проект
          </button>

          <button class="btn-secondary">
            Получить консультацию
          </button>
        </div>
      </div>

      <div class="bitrix-hero__image">
        <img
          src="/images/bitrix24/hero-bitrix.svg"
          alt="Интеграция Битрикс24"
        />
      </div>
    </section>

    <!-- ADVANTAGES -->
    <section class="bitrix-advantages wrapper">
      <div class="bitrix-section-head">
        <span class="bitrix-section-head__subtitle">
          Что вы получите
        </span>

        <h2 class="title-h2">
          Автоматизация без хаоса
        </h2>
      </div>

      <div class="bitrix-advantages__grid">
        <div class="bitrix-card">
          <div class="bitrix-card__number">01</div>
          <h3>Интеграция с 1С</h3>
          <p>
            Синхронизация контрагентов, счетов, товаров,
            заказов и документов.
          </p>
        </div>

        <div class="bitrix-card">
          <div class="bitrix-card__number">02</div>
          <h3>Автоматизация продаж</h3>
          <p>
            Роботы, триггеры, воронки и контроль менеджеров.
          </p>
        </div>

        <div class="bitrix-card">
          <div class="bitrix-card__number">03</div>
          <h3>Скорость работы</h3>
          <p>
            Меньше ручного ввода и ошибок. Больше времени на продажи.
          </p>
        </div>

        <div class="bitrix-card">
          <div class="bitrix-card__number">04</div>
          <h3>Поддержка</h3>
          <p>
            Помогаем после запуска и сопровождаем систему.
          </p>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="bitrix-services wrapper">
      <div class="bitrix-services__content">
        <span class="bitrix-section-head__subtitle">
          Наши услуги
        </span>

        <h2 class="title-h2">
          Что можем внедрить
        </h2>

        <div class="bitrix-services__items">
          <div class="service-item">
            <div class="service-item__icon">CRM</div>
            <div>
              <h3>Внедрение CRM</h3>
              <p>
                Настройка воронок, карточек сделок,
                автоматизаций и аналитики.
              </p>
            </div>
          </div>

          <div class="service-item">
            <div class="service-item__icon">1C</div>
            <div>
              <h3>Интеграция с 1С</h3>
              <p>
                Обмен между Битрикс24 и 1С:Бухгалтерией,
                УТ, УНФ, ERP и другими конфигурациями.
              </p>
            </div>
          </div>

          <div class="service-item">
            <div class="service-item__icon">API</div>
            <div>
              <h3>Разработка API</h3>
              <p>
                Кастомные интеграции и нестандартные бизнес‑процессы.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bitrix-services__image">
        <img
          src="/images/bitrix24/crm-sync.webp"
          alt="CRM и 1С"
        />
      </div>
    </section>


    <!-- PROCESS -->
    <section class="bitrix-process wrapper">
      <div class="bitrix-section-head center">
        <span class="bitrix-section-head__subtitle">
          Этапы работы
        </span>

        <h2 class="title-h2">
          Как проходит внедрение
        </h2>
      </div>

      <div class="bitrix-process__grid">
        <div class="process-card">
          <span>01</span>
          <h3>Анализ</h3>
          <p>Изучаем текущие процессы компании.</p>
        </div>

        <div class="process-card">
          <span>02</span>
          <h3>Проектирование</h3>
          <p>Продумываем архитектуру интеграции.</p>
        </div>

        <div class="process-card">
          <span>03</span>
          <h3>Разработка</h3>
          <p>Настраиваем CRM и обмен данными.</p>
        </div>

        <div class="process-card">
          <span>04</span>
          <h3>Запуск</h3>
          <p>Тестируем, обучаем и запускаем систему.</p>
        </div>
      </div>
    </section>


    <!-- CTA -->
    <section class="bitrix-cta wrapper">
      <div class="bitrix-cta__content">
        <h2>
          Готовы автоматизировать бизнес?
        </h2>

        <p>
          Подключим Битрикс24 так, чтобы менеджеры
          перестали жить в Excel‑таблицах 😄
        </p>
      </div>

      <button class="btn-primary large">
        Оставить заявку
      </button>
    </section>
  </main>
</template>

<style scoped lang="scss">
.bitrix-page {
  padding-top: 120px;
  overflow: hidden;
}

.wrapper {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;
}

.bitrix-hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 60px;
  padding-bottom: 120px;
}

.bitrix-hero__badge,
.bitrix-section-head__subtitle {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 198, 120, 0.12);
  border: 1px solid rgba(255, 198, 120, 0.2);
  color: #ffc678;
  font-size: 14px;
  margin-bottom: 24px;
}

.bitrix-hero__title {
  margin-bottom: 28px;
  line-height: 1;
}

.bitrix-hero__text {
  font-size: 18px;
  line-height: 1.7;
  opacity: 0.8;
  max-width: 600px;
  margin-bottom: 40px;
}

.bitrix-hero__buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  height: 58px;
  padding: 0 32px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: 600;
}

.btn-primary {
  background: #ffc678;
  color: #111;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
}

.bitrix-hero__image img,
.bitrix-services__image img {
  width: 100%;
  border-radius: 32px;
  object-fit: cover;
}

.bitrix-advantages,
.bitrix-services,
.bitrix-process {
  padding-bottom: 120px;
}

.bitrix-advantages__grid,
.bitrix-process__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.bitrix-card,
.process-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 28px;
  padding: 36px;
  backdrop-filter: blur(10px);
}

.bitrix-card__number,
.process-card span {
  font-size: 48px;
  font-weight: 700;
  color: #ffc678;
  display: block;
  margin-bottom: 20px;
}

.bitrix-services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  align-items: center;
}

.bitrix-services__items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
}

.service-item {
  display: flex;
  gap: 20px;
  padding: 28px;
  border-radius: 24px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
}

.service-item__icon {
  min-width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffc678;
  color: #111;
  font-weight: 700;
}

.bitrix-cta {
  margin-bottom: 120px;
  padding: 60px;
  border-radius: 40px;
  background: linear-gradient(
    135deg,
    rgba(255,198,120,0.18),
    rgba(255,255,255,0.03)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.large {
  height: 68px;
  padding: 0 40px;
}

.center {
  text-align: center;
}

@media (max-width: 992px) {
  .bitrix-hero,
  .bitrix-services,
  .bitrix-advantages__grid,
  .bitrix-process__grid,
  .bitrix-cta {
    grid-template-columns: 1fr;
  }

  .bitrix-cta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .bitrix-page {
    padding-top: 80px;
  }
}

</style>