<template>
  <nav class="navbar">
    <ul>
      <li v-for="step in stepLinks">
        <router-link :to="{ name: step.url }">
          <span class="navbar__step-number"> {{ step.stepNumber }} </span>
          <div class="navbar__link-info">
            <span>Step {{ step.stepNumber }}</span>
            <span>{{ step.stepName }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const stepLinks = ref([
  { stepNumber: 1, stepName: "YOUR INFO", url: "info" },
  { stepNumber: 2, stepName: "SELECT PLAN", url: "plan" },
  { stepNumber: 3, stepName: "ADD-ONS", url: "add-on" },
  { stepNumber: 4, stepName: "SUMMARY", url: "summary" },
]);
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @include sm {
    background-image: url("@/assets/images/bg-sidebar-mobile.svg");
    background-position: 50%;
    border-radius: 0;
    height: 200px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  ul {
    list-style: none;
    margin-block: 2rem 0;

    @include sm {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      margin-top: 3rem;
    }

    li {
      margin-bottom: 2rem;

      a {
        display: flex;
        align-items: center;
        gap: 1rem;

        &.router-link-exact-active {
          .navbar__step-number {
            background-color: $color-pastel-blue;
            color: $color-marine-blue;
            font-weight: 700;
            border: none;
          }
        }
      }
    }
  }
  &__step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid $color-white;
    color: $color-white;
    border-radius: 50%;
  }
  &__link-info {
    display: flex;
    flex-direction: column;

    @include sm {
      display: none;
    }

    span:first-child {
      text-transform: uppercase;
      color: $color-pastel-blue;
      font-weight: 400;
      font-size: 0.9rem;
    }
    span:last-child {
      color: $color-white;
      font-weight: 500;
    }
  }
}
</style>
