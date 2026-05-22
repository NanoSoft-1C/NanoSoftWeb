<template>
  <section class="bitrix-process wrapper">

    <div class="bitrix-process__head">

      <span>
        Этапы работы
      </span>

      <h2>
        Как проходит внедрение
      </h2>

    </div>

    <div class="bitrix-process__grid">

      <div class="process-card">
        <span>01</span>
        <h3>Анализ</h3>
        <p>Изучаем бизнес-процессы компании.</p>
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
        <p>Тестируем и запускаем систему.</p>
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
  background: rgba(255, 198, 120, 0.12);
  color: #ffc678;
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

  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
}

.process-card span {
  display: block;

  margin-bottom: 20px;

  font-size: 48px;
  font-weight: 700;

  color: #ffc678;
}

@media (max-width: 992px) {
  .bitrix-process__grid {
    grid-template-columns: 1fr;
  }
}
</style>
