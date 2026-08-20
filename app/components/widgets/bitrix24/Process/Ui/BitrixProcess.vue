<script setup>
const steps = [
  {
    title: 'Аналитика',
    text: 'Изучаем процессы компании и&nbsp;определяем задачи, которые должно решать внедрение.',
  },
  {
    title: 'Проектирование',
    text: 'Разрабатываем структуру системы, сценарии работы и&nbsp;план реализации проекта внедрения.',
  },
  {
    title: 'Внедрение',
    text: 'Настраиваем Битрикс24, автоматизацию и&nbsp;интеграции в соответствии с задачами бизнеса.',
  },
  {
    title: 'Запуск и&nbsp;поддержка',
    text: 'Тестируем решение, обучаем сотрудников и&nbsp;сопровождаем работу системы после запуска.',
  },
]
</script>

<template>
  <section class="bitrix-process wrapper">

    <div class="bitrix-process__head">

      <span class="bitrix-badge">
        Этапы работы
      </span>

      <h2 class="bitrix-title">
        Как происходит внедрение
      </h2>

    </div>

    <div class="bitrix-process__flow">

      <template
        v-for="(step, index) in steps"
        :key="step.title"
      >

        <div class="process-card">

          <h3 class="process-card__title" v-html="step.title"> </h3>

          <p class="process-card__text" v-html="step.text"></p>

        </div>

        <span
          v-if="index < steps.length - 1"
          class="process-arrow"
          aria-hidden="true"
        >
          <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12h26M20 4l8 8-8 8"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

      </template>

    </div>

  </section>
</template>

<style scoped lang="scss">
.wrapper {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;
}

.bitrix-process {
  padding-bottom: 120px;
}

.bitrix-process__head {
  text-align: center;
  margin-bottom: 60px;
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
}

.bitrix-process__flow {
  display: flex;
  align-items: stretch;
  gap: 12px;
}

.process-card {
  flex: 1 1 0;

  padding: 36px 32px;

  border-radius: 28px;

  background: rgba(var(--color-white-rgb), 0.03);
  border: 1px solid rgba(var(--color-white-rgb), 0.06);

  transition:
    background .4s ease,
    border-color .4s ease,
    transform .4s ease;
}

.process-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--color-accent-rgb), 0.4);
  background: rgba(var(--color-accent-rgb), 0.06);
}

.process-card__title {
  display: flex;
  height: 70px;
  align-items: center;
  margin-bottom: 14px;

  color: var(--color-accent);
  font-size: 24px;
}

.process-card__text {
  line-height: 1.6;
  opacity: .8;
}

.process-arrow {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-accent);
}

.process-arrow svg {
  width: 42px;
  height: 32px;
}

@media (max-width: 1224px) {
  .bitrix-process__flow {
    flex-direction: column;
    gap: 8px;
  }

  .process-arrow {
    transform: rotate(90deg);
  }

  .process-arrow svg {
    width: 34px;
    height: 26px;
  }
}
</style>
