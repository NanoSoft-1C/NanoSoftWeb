<template>
  <section v-if="serviceData" class="wrapper service">
    <div class="service-container">
      <h1
        v-if="serviceData.title"
        class="service__title tag"
        v-html="serviceData.title"
      ></h1>

      <div
        v-if="serviceData.description"
        class="service__description"
        v-html="serviceData.description"
      ></div>

      <div v-if="serviceData.image" class="service__image-container">
        <img
          class="service__image"
          :src="'/images/services/' + serviceData.image"
          alt="Изображение услуги"
        />
      </div>
    </div>

    <div v-if="serviceData.howHelp" class="service__howHelp">
      <div class="service__howHelp-tag tag">Чем поможем</div>
      
      <h2 class="service__howHelp-title title-h2">
        ЧЕМ {{ route.params.service }} МОЖЕТ ВАМ ПОМОЧЬ?
      </h2>

      <div class="service__howHelp-items">
        <div
          class="service__howHelp-item border"
          v-for="item in serviceData.howHelp"
          :key="item"
        >
          <img
            v-if="item.image"
            class="service__howHelp-item-plug"
            src="/images/vectors/side-plug.svg"
            alt="Изображение боковой заглушки"
          />

          <img
            v-if="item.image"
            class="service__howHelp-item-image"
            :src="item.image.slice(0, 4) == 'http' ? item.image : '/images/services/' + item.image"
            alt="Изображение описания помощи"
          />

          <p
            v-if="item.text"
            class="service__howHelp-item-text text-medium"
            v-html="item.text"
          ></p>
        </div>
      </div>
    </div>

    <div v-if="serviceData.benefits" class="service__reasonsTry">
      
      <div class="service__reasonsTry-tag tag">Почему мы</div>

      <h2 class="service__reasonsTry-title title-h2">Все пункты, почему стоит брать именно у нас:</h2>

      <div class="service__reasonsTry-items">
        <div class="service__reasonsTry-item">
          <div class="service__reasonsTry-item-index-container">
            <span class="service__reasonsTry-item-index">1</span>
          </div>
          <ul class="service__reasonsTry-item-list text-medium">
            <li
              class="service__reasonsTry-item-list-item"
              v-for="item in serviceData.whatIncluded" :key="item"
              v-html="item"
            ></li>
          </ul>
        </div>

        <div class="service__reasonsTry-item">
          <div class="service__reasonsTry-item-index-container">
            <span class="service__reasonsTry-item-index">2</span>
          </div>
          <ul class="service__reasonsTry-item-list text-medium">
            <li
              class="service__reasonsTry-item-list-item"
              v-for="item in serviceData.steps" :key="item"
              v-html="item"
            ></li>
          </ul>
        </div>

        <div class="service__reasonsTry-item">
          <div class="service__reasonsTry-item-index-container">
            <span class="service__reasonsTry-item-index">3</span>
          </div>
          <ul class="service__reasonsTry-item-list text-medium">
            <li
              class="service__reasonsTry-item-list-item"
              v-for="item in serviceData.whyUs" :key="item"
              v-html="item"
            ></li>
          </ul>
        </div>
      </div>
    </div>

    <BlocksTheSeller
      v-if="serviceData.promo"
      :title="serviceData.promo.title"
      :text="serviceData.promo.text"
      :image="serviceData.promo.image"
    ></BlocksTheSeller>

    <div v-if="serviceData.reasonsTry" class="service__reasonsTry">
      <div class="service__reasonsTry-tag tag">Причины попробовать</div>

      <h2 class="service__reasonsTry-title title-h2">
        {{ serviceData.reasonsTry.length }} причины попробовать тестовый доступ
        к {{ route.params.service }} уже сегодня:
      </h2>

      <div class="service__reasonsTry-items">
        <div
          class="service__reasonsTry-item"
          v-for="(item, index) in serviceData.reasonsTry"
          :key="item"
        >
          <div class="service__reasonsTry-item-index-container">
            <span class="service__reasonsTry-item-index">{{ index+1 }}</span>
          </div>
          <p
            v-if="item"
            class="service__reasonsTry-item-text text-medium"
            v-html="item"
          ></p>
        </div>
      </div>
    </div>

    <div v-if="serviceData.products" class="service__products">
      <div class="service__reasonsTry-tag tag">Продукты</div>

      <h2 class="service__products-title title-h2">Продукты</h2>

      <div class="service__products-items">
        <div 
          class="service__products-item"
          v-for="product in serviceData.products" :key="product"
        >
          <div class="service__products-item-info">
            <h3 
              class="service__products-item-info-title title-h3" 
              v-if="product.title" 
              v-html="product.title"
            ></h3>

            <p
              class="service__products-item-info-description text-medium"
              v-if="product.description"
              v-html="product.description"
            ></p>
          </div>

          <div class="service__products-item-buy">
            <p
              class="service__products-item-buy-price text-small"
              v-if="product.price"
              v-html="product.price + ' руб.'"
            ></p>

            <button
              class="service__products-item-buy-button text-small"
              @click="openModal(modalServices, {
                article: product.article,
                content: 123,
              })"
            >Заказать</button>

            <p
              class="service__products-item-buy-article text-small"
              v-if="product.article"
              v-html="product.article"
            ></p>
          </div>

          <img
            class="service__products-item-plug"
            src="/images/vectors/side-plug.svg"
            alt="Изображение боковой заглушки"
          />
        </div>
      </div>
    </div>

    <div
      v-if="serviceData.frequentQuestions"
      class="service__frequentQuestions list"
    >
      <div class="service__frequentQuestions-tag tag">Ответы</div>

      <h2 class="service__frequentQuestions-title title-h2">
        Часто задаваемые вопросы:
      </h2>

      <ol class="list__list">
        <li
          v-for="(item, index) in serviceData.frequentQuestions"
          :key="item"
          @click="toggleItem(index)"
          :class="[
            'list__list-item text-medium',
            { 'list__list-item--active': activeIndex === index },
          ]"
        >
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>

          <svg class="list__list-item-plus">
            <use xlink:href="@/assets/sprites/sprite.svg#plus"></use>
          </svg>
        </li>
      </ol>
    </div>

    <div v-if="modalState.isOpen" class="modal-overlay" @click.self="closeModal">
      <component 
        :is="modalState.component" 
        v-bind="modalState.props"
        :closeModal="closeModal"
      />
    </div> 
  </section>

  <BlocksCases></BlocksCases>
</template>

<script setup>
import { onMounted } from "vue";
import servicesData from "./../../assets/data/services.json";
import modalServices from '@/components/modal/modalServices.vue'

const modalState = reactive({
  isOpen: false,
  component: null,
  props: {}
})

function openModal(component, props = {}) {
  modalState.component = markRaw(component)
  modalState.props = props
  modalState.isOpen = true
}

function closeModal() {
  modalState.isOpen = false
}

const route = useRoute();
const serviceData = servicesData[route.params.service];

const activeIndex = ref(null);

function toggleItem(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

onMounted(() => {
  svgAnimator();
})

function svgAnimator() {
  const colorBlack = "#211715";
  const colorWhite = "#FFFEFD";
  const colorOrange = "#FFC678";

  const svgs = document.querySelectorAll("svg.svg-animate");
  if (!svgs.length) return;

  const svgData = new WeakMap();

  svgs.forEach((svg) => {
    const elements = svg.querySelectorAll(
      "path, line, circle, rect, polyline, polygon"
    );
    const data = [];

    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const strokeComputed =
        style.stroke && style.stroke !== "none" ? style.stroke : null;
      const fillComputed =
        style.fill && style.fill !== "none" ? style.fill : null;

      const orig = {
        el,
        hadStroke: !!strokeComputed,
        origStrokeAttr: el.getAttribute("stroke"),
        origFillAttr: el.getAttribute("fill"),
        origStrokeComputed: strokeComputed,
        origFillComputed: fillComputed,
      };

      if (orig.hadStroke) {
        if (orig.origStrokeAttr === null)
          el.setAttribute("data-orig-stroke", orig.origStrokeComputed || "");
        el.style.stroke = colorWhite;
        if (typeof el.getTotalLength === "function") {
          const length = el.getTotalLength();
          el.style.strokeDasharray = length;
          el.style.strokeDashoffset = length;
        }
      }

      if (orig.origFillComputed) {
        if (orig.origFillAttr === null)
          el.setAttribute("data-orig-fill", orig.origFillComputed);
        el.style.fill = "transparent";
      }

      if (orig.hadStroke || orig.origFillComputed) data.push(orig);
    });

    svgData.set(svg, data);
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const svg = entry.target;
          animateSvg(svg);
          obs.unobserve(svg);
        }
      });
    },
    { threshold: 1.0 }
  );

  svgs.forEach((svg) => observer.observe(svg));

  function animateSvg(svg) {
    const data = svgData.get(svg);
    if (!data || !data.length) return;

    const strokeDuration = 1500;
    const fillDuration = 1500;

    data.forEach((item) => {
      const el = item.el;
      const fillColor = item.origFillAttr || item.origFillComputed || "";
      const isSpecialColor =
        /#?ffc678/i.test(fillColor) ||
        /rgb\s*\(\s*255\s*,\s*198\s*,\s*120\s*\)/i.test(fillColor);

      if (item.hadStroke && typeof el.getTotalLength === "function") {
        const length = el.getTotalLength();

        el.style.transition = "none";
        el.getBoundingClientRect();

        el.style.transition = `stroke-dashoffset ${strokeDuration}ms ease`;
        el.style.strokeDashoffset = "0";

        setTimeout(() => {
          const transitions = [];
          if (item.origFillComputed)
            transitions.push(`fill ${fillDuration}ms ease`);
          if (item.hadStroke) transitions.push(`stroke ${fillDuration}ms ease`);
          if (transitions.length) el.style.transition = transitions.join(", ");

          if (item.origFillComputed) {
            const fillTo =
              item.origFillAttr !== null
                ? item.origFillAttr
                : item.origFillComputed;
            el.style.fill = fillTo;
          }

          // если fill = FFC678, то stroke становится тем же цветом
          if (item.hadStroke) {
            el.style.stroke = isSpecialColor ? colorOrange : colorBlack;
          }

          if (el.hasAttribute("data-orig-fill"))
            el.removeAttribute("data-orig-fill");
          if (el.hasAttribute("data-orig-stroke"))
            el.removeAttribute("data-orig-stroke");
        }, strokeDuration);
      } else {
        if (item.origFillComputed) {
          setTimeout(() => {
            el.style.transition = `fill ${fillDuration}ms ease`;
            const fillTo =
              item.origFillAttr !== null
                ? item.origFillAttr
                : item.origFillComputed;
            el.style.fill = fillTo;
            if (el.hasAttribute("data-orig-fill"))
              el.removeAttribute("data-orig-fill");
          }, strokeDuration);
        }
      }
    });
  }
}
</script>