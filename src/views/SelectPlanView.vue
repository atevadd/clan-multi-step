<template>
  <div class="form">
    <div class="form__plan">
      <Header
        heading="Select Plan"
        subtitle="You have the option of monthly or yearly billing." />

      <form class="form__plans" @submit.prevent="formStore.submitPlan">
        <div class="form__plan-group">
          <div class="input" v-for="plan in plans">
            <input
              type="radio"
              :id="plan.name"
              name="plan"
              :value="plan"
              v-model="selectedPlan.plan"
              hidden />
            <label :for="plan.name">
              <img :src="plan.imgurl" :alt="`${plan.name} icon`" />

              <div>
                <h3>{{ plan.name }}</h3>
                <p>
                  &dollar;{{
                    !selectedPlan.duration ? plan.price[0] : plan.price[1]
                  }}/{{ !selectedPlan.duration ? "mo" : "yr" }}
                </p>
                <span v-show="selectedPlan.duration">2 months free</span>
              </div>
            </label>
          </div>
        </div>

        <div class="form__date">
          <span :class="{ active: !selectedPlan.duration }">Monthly</span>
          <label class="toggle" :class="{ active: isActive }">
            <input
              type="checkbox"
              v-model="selectedPlan.duration"
              class="toggle-input"
              hidden />
            <span class="toggle-slider"></span>
          </label>
          <span :class="{ active: selectedPlan.duration }">Yearly</span>
        </div>
        <span class="error" v-show="planError"
          ><i class="uil uil-exclamation-octagon"></i> {{ planError }}</span
        >

        <div class="form__cta">
          <button class="btn" type="button" @click="router.back()">
            Go Back
          </button>
          <button class="btn primary">Next Step</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/form";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advanceImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

const formStore = useFormStore();
const { selectedPlan, planError } = storeToRefs(formStore);
const isActive = ref(false);
const router = useRouter();

const plans = ref([
  {
    name: "Arcade",
    price: [9, 90],
    imgurl: arcadeImg,
  },
  {
    name: "Advance",
    price: [12, 120],
    imgurl: advanceImg,
  },
  {
    name: "Pro",
    price: [15, 150],
    imgurl: proImg,
  },
]);
</script>

<style lang="scss" scoped>
.form {
  width: 50%;

  @include sm {
    width: 90%;
  }
  @include md {
    width: 80%;
  }
  @include lg {
    width: 50%;
  }

  &__plan {
    width: 100%;

    &-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-block: 2rem;

      @include sm {
        flex-direction: column;
        gap: 1rem;
      }
      @include md {
        flex-direction: column;
        gap: 1rem;
      }
      @include lg {
        flex-direction: row;
        gap: 1rem;
      }

      .input {
        @include sm {
          width: 100%;
        }
        @include md {
          width: 100%;
        }
        @include sm {
          width: 100%;
        }
        input:checked ~ label {
          border-color: $color-purplish-blue;
          background-color: #f8f9ff;
        }

        label {
          display: flex;
          cursor: pointer;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          border: 1px solid $color-light-gray;
          background: $color-white;
          padding: 1rem;

          &:hover {
            border-color: $color-purplish-blue;
          }

          @include sm {
            width: 100%;
            flex-direction: row;
            height: auto;
            gap: 1rem;
            align-items: center;
          }
          @include md {
            width: 100%;
            flex-direction: row;
            height: auto;
            gap: 1rem;
            align-items: center;
          }
          @include lg {
            flex-direction: column;
            align-items: flex-start;
            width: 138px;
            height: 160px;
            flex-shrink: 0;
          }
        }

        img {
          width: 40px;
          height: 40px;
        }
        div {
          margin-top: auto;
        }
        h3 {
          margin-top: auto;
          font-weight: 500;
          font-size: 1rem;
          color: $color-marine-blue;
        }
        p {
          font-size: 0.875rem;
          color: $color-cool-gray;
        }
        span {
          color: $color-marine-blue;
          font-size: 0.8rem;
        }
      }
    }
  }

  &__date {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8f9ff;
    border-radius: 8px;

    span {
      font-size: 0.875rem;
      font-weight: 700;
      color: $color-cool-gray;

      &.active {
        color: $color-marine-blue;
      }
    }
  }

  &__cta {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    outline: none;
    border: none;

    .btn {
      background-color: transparent;
      font-weight: 500;
      border-radius: 8px;
      outline: none;
      // border: none;
      color: $color-cool-gray;
      padding: 0;

      &.primary {
        background-color: $color-marine-blue;
        color: $color-white;
        padding: 0.7rem 1.5rem;
      }
    }
  }
}

.toggle {
  display: inline-block;
  position: relative;
  width: 43px;
  height: 23px;
  background-color: $color-marine-blue;
  border-radius: 14px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.toggle.active {
  background-color: $color-marine-blue;
}

.toggle-slider {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.toggle-input:checked + .toggle-slider {
  transform: translateX(20px);
}
</style>
