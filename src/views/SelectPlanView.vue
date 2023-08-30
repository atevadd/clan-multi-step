<template>
  <div class="form">
    <div class="form__plan">
      <Header
        heading="Select Plan"
        subtitle="You have the option of monthly or yearly billing." />

      <form class="form__plans">
        <div class="form__plan-group">
          <div class="input">
            <input type="radio" id="arcade" name="plan" hidden />
            <label for="arcade">
              <img src="@/assets/images/icon-arcade.svg" alt="arcade icon" />

              <h3>Arcade</h3>
              <p>&dollar;9/mo</p>
            </label>
          </div>
          <div class="input">
            <input type="radio" id="advance" name="plan" hidden />
            <label for="advance">
              <img src="@/assets/images/icon-advanced.svg" alt="arcade icon" />

              <h3>Advance</h3>
              <p>&dollar;12/mo</p>
            </label>
          </div>
          <div class="input">
            <input type="radio" id="pro" name="plan" hidden />
            <label for="pro">
              <img src="@/assets/images/icon-pro.svg" alt="arcade icon" />

              <h3>Pro</h3>
              <p>&dollar;15/mo</p>
            </label>
          </div>
        </div>

        <div class="form__date">
          <span :class="{ active: !isActive }">Monthly</span>
          <label class="toggle" :class="{ active: isActive }">
            <input
              type="checkbox"
              v-model="isActive"
              class="toggle-input"
              hidden />
            <span class="toggle-slider"></span>
          </label>
          <span :class="{ active: isActive }">Yearly</span>
        </div>

        <div class="form__cta">
          <button class="btn" @click="router.back()">Go Back</button>
          <button class="btn primary">Next Step</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const isActive = ref(false);
const router = useRouter();
</script>

<style lang="scss" scoped>
.form {
  width: 50%;
  // border: 1px solid red;

  &__plan {
    width: 100%;

    &-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-block: 2rem;

      .input {
        input:checked ~ label {
          border-color: $color-purplish-blue;
          background-color: #f8f9ff;
        }

        label {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          width: 100%;
          height: 100%;
          width: 138px;
          height: 160px;
          flex-shrink: 0;
          border-radius: 8px;
          border: 1px solid $color-light-gray;
          background: $color-white;
          padding: 1rem;
        }

        img {
          width: 40px;
          height: 40px;
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
  width: 50px;
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
  transform: translateX(28px);
}
</style>
