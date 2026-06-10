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
  <section class="bitrix-cta wrapper">

    <div>

      <h2>
        Готовы автоматизировать бизнес?
      </h2>

      <p>
        Интегрируем 1С и Битрикс так,
        чтобы Ваши сотрудники забыли про Excel 😄
      </p>

    </div>

    <button class="btn-primary"
    @click="scrollToAnchor('callback')"
    >
      ОСТАВИТЬ ЗАЯВКУ
    </button>

  </section>
</template>

<style scoped lang="scss">
.wrapper {
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;
}

.bitrix-cta {
  margin-bottom: 120px;

  padding: 60px;

  border-radius: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  background:
    linear-gradient(
      135deg,
      rgba(255,198,120,.18),
      rgba(255,255,255,.03)
    );
}

.btn-primary {
  height: 64px;
  font-weight: 700;
  padding: 0 40px;
  border: none;
  border-radius: 18px;
  background: #ffc678;
  color: #111;
  cursor: pointer;
}

@media (max-width: 992px) {
  .bitrix-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

