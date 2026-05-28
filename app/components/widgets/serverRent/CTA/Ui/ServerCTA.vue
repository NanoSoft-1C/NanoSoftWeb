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

      <button>
        Получить консультацию
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
</style>
