<script setup>
const tariffs = [
  {
    name: 'VPS Start',
    price: '29€/мес',
    features: [
      '2 vCPU',
      '4 GB RAM',
      '80 GB NVMe',
      'Подходит для CRM и сайтов',
    ],
  },
  {
    name: 'Business',
    price: '79€/мес',
    features: [
      '6 vCPU',
      '16 GB RAM',
      '250 GB NVMe',
      'Подходит для 1С и Bitrix24',
    ],
  },
  {
    name: 'Enterprise',
    price: '149€/мес',
    features: [
      '12 vCPU',
      '32 GB RAM',
      '1 TB NVMe',
      'Высоконагруженные проекты',
    ],
  },
]

// ======Временно, для кнопок Заказать сервер перемещение к форме обратной связи. 
// В дальнейшем нужно будет сделать переход на страницу оплаты и поправить класс на самих кнопках.
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
  <section class="server-tariffs wrapper">

    <div class="server-tariffs__head">

      <span class="server-hero__badge">
        Тарифы
      </span>

      <h2>
        Выберите подходящий
        сервер
      </h2>

    </div>

    <div class="server-tariffs__grid">

      <article
        v-for="item in tariffs"
        :key="item.name"
        class="server-tariffs__card"
      >

        <h3>
          {{ item.name }}
        </h3>

        <div class="server-tariffs__price">
          {{ item.price }}
        </div>

        <ul>
          <li
            v-for="feature in item.features"
            :key="feature"
          >
            {{ feature }}
          </li>
        </ul>

        <button
         class="server-cta__button"
         @click="scrollToAnchor('callback')"
        >
          ЗАКАЗАТЬ СЕРВЕР
        </button>

      </article>

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

.server-tariffs {
  width: min(1400px, calc(100% - 40px));
  margin: 140px auto;
}

.server-tariffs__head {
  margin-bottom: 60px;
}

.server-tariffs__head span {
  color: var(--color-accent);
}

.server-tariffs__head h2 {
  margin-top: 20px;
  font-size: 48px;
}

.server-tariffs__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.server-tariffs__card {
  padding: 40px;
  border-radius: 32px;
  background: rgba(var(--color-white-rgb), 0.03);
  border: 1px solid rgba(var(--color-white-rgb), 0.08);
}

.server-tariffs__card h3 {
  font-size: 28px;
  margin-bottom: 20px;
}

.server-tariffs__price {
  font-size: 42px;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 30px;
}

.server-tariffs__card ul {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
}

.server-tariffs__card li {
  opacity: .8;
}

.server-tariffs__card button {
  width: 100%;
  height: 58px;
  border-radius: 18px;
  border: none;
  background: var(--color-accent);
  color: var(--color-illustration-dark);
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 992px) {
  .server-tariffs__grid {
    grid-template-columns: 1fr;
  }

  .server-tariffs__head h2 {
    font-size: 36px;
  }
}
</style>
