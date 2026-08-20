<template>
  <section class="bitrix-services wrapper">

    <div class="bitrix-services__content">

      <span class="bitrix-subtitle">
        Наши услуги
      </span>

      <!-- <h2 class="bitrix-title">
        Что можем внедрить
      </h2> -->

      <div class="bitrix-services__items">

        <div class="service-item">

          <div class="service-item__icon">
            CRM
          </div>

          <div>
            <h3>Внедрение CRM:</h3>

            <p>
              Внедрим CRM, которая отражает реальные процессы вашей компании 
              и&nbsp;помогает увеличить управляемость продаж, дисциплину менеджеров 
              и&nbsp;качество работы с клиентами.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            ???
          </div>
           <div>
            <h3>Автоматизация бизнес-процессов:</h3>

            <p>
              Поможем выстроить эффективные бизнес-процессы, сократить количество ручных операций 
              и&nbsp;повысить скорость работы компании без потери контроля.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            ???
          </div>

          <div>
            <h3>Настройка аналитики и&nbsp;отчётов:</h3>

            <p>
              Настроим отчёты и дашборды под задачи вашей компании, 
              чтобы ключевые показатели бизнеса всегда были доступны для контроля 
              и&nbsp;принятия решений.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            www
          </div>

          <div>
            <h3>Внедрение Корпоративного портала:</h3>

            <p>
             Создадим единое цифровое пространство для сотрудников, 
             где все рабочие процессы, коммуникации 
             и&nbsp;информация будут работать как единая система.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            ???
          </div>

          <div>
            <h3>Интеграция с 1С любой сложности:</h3>

            <p>
             Настроим интеграцию 1С и&nbsp;Битрикс24, обеспечив актуальность данных во всех подразделениях компании 
             и&nbsp;сократив количество ручных операций.
            </p>
          </div>

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

.bitrix-services {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;

  padding-bottom: 120px;
}

.bitrix-subtitle {
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

.bitrix-services__items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-item {
  display: flex;
  gap: 20px;

  padding: 28px;

  border-radius: 24px;

  background: rgba(var(--color-white-rgb), 0.03);
  border: 1px solid rgba(var(--color-white-rgb), 0.06);
}

.service-item h3 {
  margin-bottom: 8px;

  color: var(--color-accent);
  font-size: 22px;
}

.service-item__icon {
  min-width: 70px;
  height: 70px;

  border-radius: 20px;

  background: var(--color-accent);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-illustration-dark);
  font-weight: 700;
}

.bitrix-services__image {
  display: flex;
  justify-content: flex-end;
}

.bitrix-services__image img {
  width: 100%;
  max-width: 480px;
}

@media (max-width: 992px) {
  .bitrix-services {
    grid-template-columns: 1fr;
  }

  .bitrix-services__image {
    justify-content: center;
  }
}
</style>