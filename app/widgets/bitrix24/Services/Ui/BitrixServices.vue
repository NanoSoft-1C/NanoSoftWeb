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
            <h3>Внедрение CRM</h3>

            <p>
              Прозрачный контроль продаж и единая система работы для команды.
              CRM помогает не терять клиентов и сделки, соблюдать договоренности, 
              увеличивать конверсию, средний чек и повторные продажи.
              Руководитель в любой момент видит полную картину по продажам, менеджерам и выручке.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            HR
          </div>
           <div>
            <h3>Автоматизация HR-направления</h3>

            <p>
              Системный подбор сотрудников, контроль адаптации, обучение и развитие в едином пространстве.
              HR-процессы становятся прозрачными, а новые сотрудники быстрее выходят на результат.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            ???
          </div>

          <div>
            <h3>Внедрение Корпоративных порталов</h3>

            <p>
              Единое пространство для общения, задач, документов и совместной работы.
              Сотрудники быстрее взаимодействуют между отделами, а информация больше не теряется в чатах и почте.
            </p>
          </div>

        </div>

        <div class="service-item">

          <div class="service-item__icon">
            ???
          </div>

          <div>
            <h3>Внедрение системы работы с проектами</h3>

            <p>
              Контроль сроков, бюджета, ресурсов и этапов проекта в одной системе.
              Руководство видит полную картину по проектам и может оперативно управлять загрузкой команды.
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
  width: 100%;
  border-radius: 32px;
}

@media (max-width: 992px) {
  .bitrix-services {
    grid-template-columns: 1fr;
  }
}
</style>