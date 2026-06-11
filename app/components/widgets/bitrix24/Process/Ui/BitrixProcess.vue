<template>
  <section class="bitrix-process wrapper">

    <div class="bitrix-process__head">

      <span>
        Этапы работы
      </span>

      <h1>
        Как происходит внедрение
      </h1>

    </div>

    <div class="bitrix-process__grid">

      <div class="process-card">
        <span>01</span>
        <h2>Аналитика:</h2>
        <p>
          Изучаем процессы компании и определяем задачи, которые должно решать внедрение.
        </p>
      </div>

      <div class="process-card">
        <span>02</span>
        <h2>Проектирование:</h2>
        <p>
          Разрабатываем структуру системы, сценарии работы и план реализации проекта внедрения.
        </p>
      </div>

      <div class="process-card">
        <span>03</span>
        <h2>Внедрение:</h2>
        <p>
          Настраиваем Битрикс24, автоматизацию и интеграции в соответствии с задачами бизнеса.
        </p>
      </div>

      <div class="process-card">
        <span>04</span>
        <h2>Запуск и поддержка:</h2>
        <p>
          Тестируем решение, обучаем сотрудников и сопровождаем работу системы после запуска.
        </p>
      </div>

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

.bitrix-process__head span {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(var(--color-accent-rgb), 0.12);
  color: var(--color-accent);
  margin-bottom: 24px;
}

.bitrix-process__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.process-card {
  padding: 36px;

  border-radius: 28px;

  background: rgba(var(--color-white-rgb), 0.03);
  border: 1px solid rgba(var(--color-white-rgb), 0.06);
}

.process-card span {
  display: block;

  margin-bottom: 20px;

  font-size: 48px;
  font-weight: 700;

  color: var(--color-accent);
}

@media (max-width: 992px) {
  .bitrix-process__grid {
    grid-template-columns: 1fr;
  }
}
</style>
