<template>
  <section class="server-infrastructure wrapper">

    <div class="server-infrastructure__content">

      <span class="server-hero__badge">
        Инфраструктура
      </span>

      <h2>
        Серверы для
        современных проектов
      </h2>

      <p>
        Размещаем CRM, 1С, базы данных,
        корпоративные порталы и веб-проекты
        на производительных серверах
        с гарантией стабильной работы.
      </p>

    </div>

    <div class="server-infrastructure__image">
      <img
        src="/images/server-rent/server-room.webp"
        alt="Инфраструктура"
      >
    </div>

  </section>
</template>

<style scoped lang="scss">
.server-hero__badge {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(var(--color-accent-rgb), 0.12);
  color: var(--color-accent);
  margin-bottom: 24px;
}

.server-infrastructure {
  width: min(1400px, calc(100% - 40px));
  margin: 140px auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 60px;
}

.server-infrastructure span {
  color: var(--color-accent);
}

.server-infrastructure h2 {
  font-size: 48px;
  margin: 20px 0 30px;
}

.server-infrastructure p {
  line-height: 1.8;
  opacity: .8;
  max-width: 600px;
}

.server-infrastructure__image img {
  width: 100%;
  border-radius: 32px;
}

@media (max-width: 992px) {
  .server-infrastructure {
    grid-template-columns: 1fr;
  }

  .server-infrastructure h2 {
    font-size: 36px;
  }
}
</style>
