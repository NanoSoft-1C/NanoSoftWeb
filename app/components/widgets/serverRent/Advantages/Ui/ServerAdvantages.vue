<script setup>
const advantages = [
  {
    title: 'Высокая производительность',
    text: 'Современные CPU, NVMe и быстрые каналы связи',
  },
  {
    title: 'Масштабирование',
    text: 'Увеличение ресурсов без остановки проекта',
  },
  {
    title: 'Защита данных',
    text: 'Резервные копии и защита инфраструктуры',
  },
  {
    title: 'Поддержка 24/7',
    text: 'Помощь специалистов в любое время',
  },
]
</script>

<template>
  <section class="server-advantages wrapper">

    <div class="server-advantages__head">

      <span class="server-hero__badge">
        Почему выбирают нас
      </span>

      <h2>
        Надежная серверная
        инфраструктура
      </h2>

    </div>

    <div class="server-advantages__grid">

      <article
        v-for="item in advantages"
        :key="item.title"
        class="server-advantages__card"
      >

        <h3>
          {{ item.title }}
        </h3>

        <p>
          {{ item.text }}
        </p>

      </article>

    </div>

  </section>
</template>

<style scoped lang="scss">
.server-advantages {
  width: min(1400px, calc(100% - 40px));
  margin: 140px auto;
}

.server-advantages__head {
  margin-bottom: 60px;
}

.server-advantages__head span {
  color: #ffc678;
}

.server-advantages__head h2 {
  margin-top: 20px;
  font-size: 48px;
  max-width: 700px;
}

.server-advantages__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.server-advantages__card {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 28px;
  padding: 32px;
  backdrop-filter: blur(12px);
}

.server-advantages__card h3 {
  margin-bottom: 16px;
  font-size: 22px;
}

.server-advantages__card p {
  opacity: .75;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .server-advantages__grid {
    grid-template-columns: 1fr;
  }

  .server-advantages__head h2 {
    font-size: 36px;
  }
}

.server-hero__badge {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 198, 120, 0.12);
  color: #ffc678;
  margin-bottom: 24px;
}
</style>

