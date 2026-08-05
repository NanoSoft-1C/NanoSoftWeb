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

        <h3>CRM и продажи</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 1 }"
        >
          <p>
            Вся работа с клиентами в одной системе: лиды, 
            сделки, счета, документы и история коммуникаций. 
            <br>Ничего не теряется, а продажи становятся прозрачными и управляемыми.
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

        <h3>Задачи и проекты</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 2 }"
        >
          <p>
            Контролируйте работу команды, распределяйте задачи, 
            отслеживайте сроки и загруженность сотрудников. 
            <br>Все проекты находятся в едином рабочем пространстве.
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

        <h3>Корпоративный портал</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 3 }"
        >
          <p>
            Чаты, видеозвонки, календари, документы 
            и корпоративная лента объединяют сотрудников в единой цифровой среде 
            и ускоряют взаимодействие между отделами.
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

        <h3>Бизнес-процессы</h3>

         <div
          class="bitrix-card__content"
          :class="{ open: activeCard === 4 }"
        >
          <p>
            Освободите сотрудников от рутины: система автоматически распределяет задачи, 
            отправляет уведомления, запускает согласования и контролирует выполнение процессов.
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

  padding: 12px 24px;

  border-radius: 999px;

  background: rgba(var(--color-accent-rgb), 0.12);

  border: 1px solid rgba(var(--color-accent-rgb), 0.2);

  color: var(--color-accent);

  font-size: clamp(18px, 1.5vw, 22px);
  font-weight: 600;

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
  background: rgba(var(--color-white-rgb), 0.03);
  border: 1px solid rgba(var(--color-white-rgb), 0.06);
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
  border-color: var(--color-accent);
  background: rgba(var(--color-accent-rgb), 0.08);
}

.bitrix-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bitrix-card__number {
  font-size: 48px;
  font-weight: 700;
  color: var(--color-accent);
}

.bitrix-card__icon {
  font-size: 32px;
  color: var(--color-accent);
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
