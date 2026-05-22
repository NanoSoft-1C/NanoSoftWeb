<script setup>
import { ref } from 'vue'

const activeCard = ref(null)

const toggleCard = (index) => {
  activeCard.value =
    activeCard.value === index
      ? null
      : index
}
</script>

<template>
  <section class="bitrix-advantages wrapper">

    <div class="bitrix-section-head">
      <span class="bitrix-badge">
        Что вы получите
      </span>

      <h2 class="bitrix-title">
        Автоматизация без хаоса
      </h2>
    </div>

    <div class="bitrix-advantages__grid">

      <div
        class="bitrix-card"
        :class="{ active: activeCard === 1 }"
        @click="toggleCard(1)"
      >

        <div class="bitrix-card__top">

          <div class="bitrix-card__number">
            01
          </div>

          <div class="bitrix-card__icon">
            {{ activeCard === 1 ? '−' : '+' }}
          </div>


        </div>

        <h3>Интеграция с 1С любой сложности</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 1 }"
        >
          <p>
            Автоматический обмен данными между подразделениями компании без двойного
            ввода информации. Финансы, продажи, склад и документы
            всегда синхронизированы и работают как единая система.
          </p>
        </div>

      </div>

      <div
        class="bitrix-card"
        :class="{ active: activeCard === 2 }"
        @click="toggleCard(2)"
      >

        <div class="bitrix-card__top">

          <div class="bitrix-card__number">
            02
          </div>

          <div class="bitrix-card__icon">
            {{ activeCard === 2 ? '−' : '+' }}
          </div>


        </div>

        <h3>Настройка аналитики и отчетов</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 2 }"
        >
          <p>
            Понятные цифры для принятия решений: от эффективности менеджеров до окупаемости рекламы.
            Руководитель получает актуальную аналитику в реальном времени без ручных таблиц. 
          </p>
        </div>

      </div>

      <div
        class="bitrix-card"
        :class="{ active: activeCard === 3 }"
        @click="toggleCard(3)"
      >

        <div class="bitrix-card__top">

          <div class="bitrix-card__number">
            03
          </div>

          <div class="bitrix-card__icon">
            {{ activeCard === 3 ? '−' : '+' }}
          </div>


        </div>

        <h3>Подключение каналов коммуникаций</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 3 }"
        >
          <p>
            Все обращения клиентов — звонки, мессенджеры, соцсети и почта — собираются в одном окне.
            Менеджеры отвечают быстрее, а компания не теряет ни одной заявки.
          </p>
        </div>

      </div>

      <div
        class="bitrix-card"
        :class="{ active: activeCard === 4 }"
        @click="toggleCard(4)"
      >

        <div class="bitrix-card__top">

          <div class="bitrix-card__number">
            04
          </div>

          <div class="bitrix-card__icon">
            {{ activeCard === 4 ? '−' : '+' }}
          </div>


        </div>

        <h3>Автоматизация бизнес-процессов</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 4 }"
        >
          <p>
            Сокращение ручной работы, снижение ошибок сотрудников и ускорение внутренних процессов.
            Компания работает быстрее, сотрудники занимаются важными задачами вместо рутины.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.wrapper {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;
}

.bitrix-advantages {
  padding: 120px 0;
}

.bitrix-badge {
  display: inline-flex;

  padding: 10px 18px;

  border-radius: 999px;

  background: rgba(255, 198, 120, 0.12);

  border: 1px solid rgba(255, 198, 120, 0.2);

  color: #ffc678;

  margin-bottom: 24px;
}

.bitrix-title {
  font-size: clamp(32px, 4vw, 52px);
  margin-bottom: 40px;
}

.bitrix-advantages__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  align-items: start;
}

.bitrix-card {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 28px;
  padding: 36px;

    cursor: pointer;

  transition:
    background .4s ease,
    border-color .4s ease,
    transform .4s ease;
}

.bitrix-card:hover {
  transform: translateY(-4px);
}

.bitrix-card.active {
  border-color: #ffc678;
  background: rgba(255,198,120,.08);
}

.bitrix-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bitrix-card__number {
  font-size: 48px;
  font-weight: 700;
  color: #ffc678;
}

.bitrix-card__icon {
  font-size: 32px;
  color: #ffc678;
}

.bitrix-card__content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;

  will-change: max-height;

  transition:
    max-height .6s cubic-bezier(0.4, 0, 0.2, 1),
    opacity .35s ease,
    margin-top .35s ease;
}

.bitrix-card__content.open {
  max-height: 300px;
  opacity: 1;
  margin-top: 20px;
}

@media (max-width: 992px) {
  .bitrix-advantages__grid {
    grid-template-columns: 1fr;
  }
}
</style>
