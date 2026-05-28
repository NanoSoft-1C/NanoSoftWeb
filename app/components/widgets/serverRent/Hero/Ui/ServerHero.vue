<template>
  <section class="server-hero wrapper">

    <div class="server-hero__content">

      <span class="server-hero__badge">
        Облачная инфраструктура
      </span>

      <h1 class="server-hero__title">
        АРЕНДА<br>
        СЕРВЕРОВ
      </h1>

      <p class="server-hero__text">
        Выделенные серверы и VPS для бизнеса,
        1С, CRM, сайтов и высоконагруженных проектов
      </p>

      <div class="server-hero__buttons">

        <button class="btn-primary">
          Подобрать сервер или получить консультацию        
        
        </button>
        
      </div>

    </div>

    <div class="server-hero__image">
      <img
        src="/images/server-rent/server-hero.webp"
        alt="Аренда серверов"
      >
    </div>

  </section>
</template>


<style scoped lang="scss">
.server-hero {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;

  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 60px;
}

.server-hero__badge {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 198, 120, 0.12);
  color: #ffc678;
  margin-bottom: 24px;
}

.server-hero .server-hero__title {
  font-size: 54px !important;
  line-height: 1;
  margin-bottom: 28px;
}

.server-hero__text {
  font-size: 18px;
  line-height: 1.7;
  opacity: .8;
  margin-bottom: 40px;
  max-width: 640px;
}

.server-hero__buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  height: 60px;
  font-weight: 700;
  padding: 0 32px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  transition: .25s ease;
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
  border: 1px solid rgba(255,255,255,.15);
  color: white;
}

.server-hero__image img {
  width: 100%;
  border-radius: 32px;
}

@media (max-width: 992px) {
  .server-hero {
    grid-template-columns: 1fr;
    padding-top: 120px;
    min-height: auto;
  }

  .server-hero .server-hero__title {
    font-size: 42px !important;
  }
}
</style>