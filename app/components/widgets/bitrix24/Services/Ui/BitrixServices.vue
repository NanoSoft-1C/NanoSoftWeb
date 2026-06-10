<template>
  <section class="bitrix-services wrapper">

    <div class="bitrix-services__content">

      <span class="bitrix-subtitle">
        Наши услуги
      </span>

      <h2 class="bitrix-title">
        Что можем внедрить
      </h2>

      <div class="bitrix-services__items">

        <div class="service-item">

          <div class="service-item__icon">
            CRM
          </div>

          <div>
            <h3>Внедрение CRM:</h3>

            <p>
              Внедрим CRM, которая отражает реальные процессы вашей компании 
              и помогает увеличить управляемость продаж, дисциплину менеджеров 
              и качество работы с клиентами.
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
              и повысить скорость работы компании без потери контроля.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            ???
          </div>

          <div>
            <h3>Настройка аналитики и отчётов:</h3>

            <p>
              Настроим отчёты и дашборды под задачи вашей компании, 
              чтобы ключевые показатели бизнеса всегда были доступны для контроля 
              и принятия решений.
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
             и информация будут работать как единая система.
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
             Настроим интеграцию 1С и Битрикс24, обеспечив актуальность данных во всех подразделениях компании 
             и сократив количество ручных операций.
            </p>
          </div>

        </div>
        

      </div>

    </div>

    <div class="bitrix-services__image">

      <img
        src="/images/bitrix24/crm-sync.png"
        alt="CRM"
      >

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
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  align-items: center;

  padding-bottom: 120px;
}

.bitrix-subtitle {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 198, 120, 0.12);
  color: #ffc678;
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

  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
}

.service-item__icon {
  min-width: 70px;
  height: 70px;

  border-radius: 20px;

  background: #ffc678;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #111;
  font-weight: 700;
}

.bitrix-services__image img {
  width: 85%;
  border-radius: 32px;
}

@media (max-width: 992px) {
  .bitrix-services {
    grid-template-columns: 1fr;
  }
}
</style>