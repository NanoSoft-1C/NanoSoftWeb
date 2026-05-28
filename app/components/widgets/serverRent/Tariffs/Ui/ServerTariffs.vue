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

        <button>
          Заказать сервер
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
  background: rgba(255, 198, 120, 0.12);
  color: #ffc678;
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
  color: #ffc678;
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
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
}

.server-tariffs__card h3 {
  font-size: 28px;
  margin-bottom: 20px;
}

.server-tariffs__price {
  font-size: 42px;
  font-weight: 700;
  color: #ffc678;
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
  background: #ffc678;
  color: #111;
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
