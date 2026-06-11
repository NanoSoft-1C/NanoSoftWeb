<script setup>
const scrollToAnchor = (id) => {
    const element = document.getElementById(id)

    if (element) {

        const offset = 120

        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset

        const offsetPosition = elementPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        })
    }
}
</script>

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

      <!-- <div class="server-hero__buttons">

        <button class="btn-primary">
          ПОДОБРАТЬ СЕРВЕР ИЛИ ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ               
        </button>
        
      </div> -->

      <div
       id="server-btn"
       class="advantages__block-image advantages__block--grid-6 border"
       @click="scrollToAnchor('callback')"
      >
       <h2 class="advantages__block-image-text title-h3">
         Подобрать сервер <br>или<br> получить консультацию
       </h2>
     </div>

    </div>

    <div class="server-hero__image">
      <img
        src="/images/server-rent/server-hero.png"
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
  background: rgba(var(--color-accent-rgb), 0.12);
  color: var(--color-accent);
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
  background: var(--color-accent);
  color: var(--color-illustration-dark);
}

.btn-primary:hover {
  transform: translateY(-2px);
}


.btn-secondary {
  background: transparent;
  border: 1px solid rgba(var(--color-white-rgb), 0.15);
  color: var(--color-white);
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