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
        Оставьте заявку, мы разберем ваши задачи и предложим оптимальное решение на базе Битрикс24.
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
      rgba(var(--color-accent-rgb), 0.18),
      rgba(var(--color-white-rgb), 0.03)
    );
}

.btn-primary {
  height: 64px;
  font-weight: 700;
  padding: 0 40px;
  border: none;
  border-radius: 18px;
  background: var(--color-accent);
  color: var(--color-illustration-dark);
  cursor: pointer;
}

@media (max-width: 992px) {
  .bitrix-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

