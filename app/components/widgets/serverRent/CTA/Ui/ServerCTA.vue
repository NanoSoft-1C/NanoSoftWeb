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
  <section class="server-cta wrapper">

    <div class="server-cta__box">

      <h2>
        Нужен сервер
        под ваш проект?
      </h2>

      <p>
        Подберем конфигурацию под 1С,
        Bitrix24, CRM, сайты или внутреннюю инфраструктуру.
      </p>

      <button
       class="server-cta__button"
       @click="scrollToAnchor('callback')"
      >
        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
      </button>

    </div>

  </section>
</template>

<style scoped lang="scss">
.server-cta {
  width: min(1400px, calc(100% - 40px));
  margin: 140px auto;
}

.server-cta__box {
  padding: 80px;
  border-radius: 40px;
  text-align: center;

  background: linear-gradient(
    135deg,
    rgba(255, 198, 120, 0.18),
    rgba(255,255,255,.03)
  );

  border: 1px solid rgba(255,255,255,.08);
}

.server-cta__box h2 {
  font-size: 52px;
  margin-bottom: 24px;
}

.server-cta__box p {
  max-width: 760px;
  margin: 0 auto 40px;
  opacity: .8;
  line-height: 1.7;
}

.server-cta__box button {
  height: 60px;
  padding: 0 36px;
  border-radius: 18px;
  border: none;
  background: #ffc678;
  color: #111;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 992px) {
  .server-cta__box {
    padding: 50px 30px;
  }

  .server-cta__box h2 {
    font-size: 38px;
  }
}

.server-cta__button {
    height: 60px;

    padding: 0 36px;

    border-radius: 18px;
    border: 1px solid transparent;

    background: color-orange();
    color: color-black();

    font-weight: 700;

    transition: .4s ease;

    cursor: pointer;

    &:hover{
        background: transparent;

        color: color-white();

        border: 1px solid color-orange();

        transform: translateY(-2px);
    }
}
</style>
