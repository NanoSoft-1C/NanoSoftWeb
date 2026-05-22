<template>
  <section class="cases">
    <div
      id="casesSlider"
      class="DTScroll slider casesSlider-slider cases__slider"
      points='{"0":1}'
      direction="vertical"
      touche="true"
      anchor="true"
    >
      <div class="casesSlider-line cases__line">
        <div
          class="casesSlider-item cases__item-wrapper"
          v-for="(organization, key) in organizations"
          :key="key"
        >
          <div class="cases__item">
            <div class="cases__item-organization">
              <img
                class="cases__item-organization-img"
                :src="`/images/companys/${organization.name}.png`"
                :alt="'organization-' + organization.name + '-case'"
              >
              <p class="cases__item-organization-desc" v-html="organization.textCompany"></p>

              <div class="cases__item-organization-count">
                <span
                  :class="`cases__item-organization-count-line ${keyLine == key ? 'cases__item-organization-count-line--active' : ''}`"
                  v-for="(organizationLine, keyLine) in organizations"
                  :key="keyLine"
                ></span>
              </div>
            </div>

            <div
              :id="`casesSlider-${key}`"
              :class="`DTScroll slider casesSlider-${key}-slider cases__item-case-slider`"
              points='{"0":1}'
              direction="horizontal"
              touche="true"
              anchor="true"
            >
              <div :class="`casesSlider-${key}-line cases__item-case-line`">
                <div
                  :class="`casesSlider-${key}-item cases__item-case-item`"
                  v-for="item in organization.cases"
                  :key="item"
                >
                  <p
                    v-html="item.title"
                    class="cases__item-case-item-title"
                  ></p>
                  <p
                    v-html="item.description"
                    class="cases__item-case-item-desc"
                  ></p>
                </div>
              </div>

              <button :class="`cases__item-case-btn cases__item-case-btn-prev casesSlider-${key}-btn-prev`">
                <img 
                  class="cases__item-case-btn-corner cases__item-case-btn-prev-corner" 
                  src="@/assets/sprites/arrowCorner.svg" 
                  alt="Corner"
                >
              </button>
              <button :class="`cases__item-case-btn cases__item-case-btn-next casesSlider-${key}-btn-next`">
                <img 
                  class="cases__item-case-btn-corner cases__item-case-btn-next-corner" 
                  src="@/assets/sprites/arrowCorner.svg" 
                  alt="Corner"
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { DTScroll } from "@/assets/scripts/slider";
import organizations from "@/assets/data/organizations.json";

onMounted(() => {
  DTScroll.initScroll("casesSlider");

  for (const key in organizations) {
    DTScroll.initScroll("casesSlider-" + key);
  }
})
</script>