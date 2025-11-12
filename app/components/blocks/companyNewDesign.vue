<template>
    <div class="wrapper">
  <div class="company">
    <div class="company-container">
      <div class="company__svg-container">
        <svg class="company__svg" viewBox="0 0 582 252" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <clipPath id="company-clip" clipPathUnits="userSpaceOnUse">
              <path
                d="M165.5 40.5272C119.5 40.5272 46.3257 68.8322 10.8752 126.042C-24.5753 183.252 35.0746 206.557 69.3308 211.057C88 213.51 155.456 208.845 200.856 234.561C244 259 534.147 269.068 572.332 178.552C610.516 88.0356 529.433 1.02024 437.035 0.0200596C344.638 -0.980117 282.867 35.7324 273.454 40.5272C247 54.0018 183.008 40.5272 165.5 40.5272Z"
              />
            </clipPath>

            <linearGradient id="paint0_linear_1334_458" x1="0" y1="125.741" x2="582" y2="125.741" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFD488"/>
              <stop offset="1" stop-color="#FFBC6C"/>
            </linearGradient>
          </defs>

          <path
            d="M165.5 40.5272C119.5 40.5272 46.3257 68.8322 10.8752 126.042C-24.5753 183.252 35.0746 206.557 69.3308 211.057C88 213.51 155.456 208.845 200.856 234.561C244 259 534.147 269.068 572.332 178.552C610.516 88.0356 529.433 1.02024 437.035 0.0200596C344.638 -0.980117 282.867 35.7324 273.454 40.5272C247 54.0018 183.008 40.5272 165.5 40.5272Z"
            fill="url(#paint0_linear_1334_458)"
          />
        </svg>
      </div>

      <div class="company__text white">
        <!-- <h1 class="company__text-title text-h2">Компания "Нано Софт"</h1> -->
        <svg viewbox="0 0 10 2">
            <text x="3" y="1" text-anchor="middle" font-size="1" font-weight="bold" fill="#fffefd" stroke-width=".015" stroke="#494949" font-family="Noto Sans SC, sans-serif">Эксперт в разработке и сопровождении индивидуальных программных решений на платформе 1С, создании CRM-систем и интеграций, а также технической поддержке.</text>
        </svg>
        <span class="company-line"></span>
        <h2 class="company__text-text text-big">
          Эксперт в разработке и сопровождении индивидуальных программных решений на платформе 1С, создании CRM-систем и интеграций, а также технической поддержке.
        </h2>
      </div>

      <!-- <div class="company__text black">
        <h1 class="company__text-title text-h2">Компания "Нано Софт"</h1>
        <span class="company-line"></span>
        <h2 class="company__text-text text-big">
          Эксперт в разработке и сопровождении индивидуальных программных решений на платформе 1С, создании CRM-систем и интеграций, а также технической поддержке.
        </h2>
      </div> -->
    </div>
  </div>
</div>

</template>

<script setup>

</script>

<style scoped lang="scss">
.company{
    &__svg {
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        // inset: 0;

        width: 75%;
        height: 120%;
    }

    &-container{
        position: relative;
        height: 200px;
        width: 100%;
        max-width: 800px;
    }

    &__text {
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        pointer-events: none;

        *{
            webkit-text-stroke: 1px color-black();
            text-transform: uppercase;
            font-family: 'Aerial', sans-serif;
        }
    }

    .white {
        color: color-white();
        z-index: 2;
    }

    .black {
        color: color-black();
        z-index: 3;
        /* Применяем clip-path */
        clip-path: url(#company-clip);
        -webkit-clip-path: url(#company-clip);
    }
}
</style>
