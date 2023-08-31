<template>
  <div class="form">
    <div class="form__add">
      <Header
        heading="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience." />

      <form class="form__add-form" @submit.prevent="formStore.submitAddons">
        <div class="add-ons">
          <label
            :for="`add-on-${index}`"
            v-for="(offer, index) in addOns"
            class="add-on">
            <input
              type="checkbox"
              name="adds"
              :id="`add-on-${index}`"
              :value="offer"
              v-model="addOnsList" />
            <div class="label-text">
              <h4>{{ offer.title }}</h4>
              <p>{{ offer.sub }}</p>
            </div>
            <span>+${{ offer.price }}/mo</span>
          </label>
        </div>

        <span class="error" v-show="addsError"
          ><i class="uil uil-exclamation-octagon"></i> {{ addsError }}</span
        >

        <!-- buttons -->
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

const formStore = useFormStore();
const { addOnsList, addsError } = storeToRefs(formStore);
const addOns = ref([
  {
    title: "Online service",
    sub: "Access to multiplayer games",
    price: 1,
  },
  {
    title: "Larger storage",
    sub: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable profile",
    sub: "Custom theme on your profile",
    price: 2,
  },
]);

const router = useRouter();
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

  &__add-form {
    width: 100%;
    margin-top: 2rem;

    .add-ons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .add-on {
      display: flex;
      align-items: center;
      border: 1px solid $color-light-gray;
      padding: 1rem;
      border-radius: 8px;
      cursor: pointer;

      &:has(input:checked) {
        border-color: $color-purplish-blue;
      }

      input {
        width: 17px;
        height: 17px;
        margin-inline: 1rem 2rem;
        opacity: 0.4;

        @include sm {
          margin-inline: 0 1rem;
        }

        &:checked {
          opacity: 1;
        }
      }
      .label-text {
        margin-right: auto;

        h4 {
          font-size: 1rem;
          color: $color-marine-blue;
        }
        p {
          color: $color-cool-gray;
          font-size: 0.875rem;

          @include sm {
            font-size: 0.75rem;
          }
        }
      }
      span {
        font-size: 0.875rem;
        color: $color-purplish-blue;

        @include sm {
          font-size: 0.75rem;
        }
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
</style>
