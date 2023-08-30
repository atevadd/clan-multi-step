<template>
  <div class="form">
    <div class="form__summary">
      <Header
        heading="Finshing up"
        subtitle="Double-check everything looks OK before confirming" />

      <div class="form__summary-group">
        <div class="summary__plan">
          <div class="left">
            <h3>Arcade (Monthly)</h3>
            <router-link to="/">Change</router-link>
          </div>
          <span>$9/mo</span>
        </div>
        <hr />
        <div class="summary__add-on">
          <p><span>online Service</span><span>+$1/mo</span></p>
          <p><span>Larger Storage</span><span>+$2/mo</span></p>
        </div>
      </div>
      <div class="form__summary-total">
        <p>
          <span>Total(per month)</span>
          <span>+$12/mo</span>
        </p>
      </div>
    </div>

    <div class="form__cta">
      <button class="btn" @click="router.back()">Go Back</button>
      <button class="btn primary">Confirm</button>
    </div>
  </div>

  <!-- <div class="message">
    <img src="@/assets/images/icon-thank-you.svg" alt="check icon" />
    <h2>Thank you</h2>
    <p>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div> -->
</template>

<script setup>
const router = useRouter();
</script>

<style lang="scss" scoped>
.form {
  width: 50%;
  &__summary-group {
    margin-block: 2rem;
    background-color: #f8f9ff;
    padding: 1.5rem;
    border-radius: 8px;
  }

  .summary__plan {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      color: $color-marine-blue;
    }
    a {
      color: $color-cool-gray;
      text-decoration: underline;
      font-size: 0.875rem;
    }
    span {
      font-weight: 700;
      color: $color-marine-blue;
      font-size: 1rem;
    }
  }

  hr {
    margin-block: 1.3rem;
    border-top: 1px solid #9699aa;
  }

  .summary__add-on {
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      span {
        font-size: 0.875rem;

        &:first-child {
          color: $color-cool-gray;
          text-transform: capitalize;
        }
        &:last-child {
          color: $color-marine-blue;
        }
      }
    }
  }

  &__summary-total {
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 0.875rem;

        &:first-child {
          color: $color-cool-gray;
          text-transform: capitalize;
        }
        &:last-child {
          color: $color-purplish-blue;
          font-size: 1.25rem;
          font-weight: 700;
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
      color: $color-cool-gray;
      padding: 0;

      &.primary {
        background-color: $color-purplish-blue;
        color: $color-white;
        padding: 0.7rem 1.5rem;
      }
    }
  }
}

.message {
  img {
    margin-inline: auto;
  }
  h2 {
    text-align: center;
    margin-block: 1rem 0.6rem;
    font-size: 2rem;
    color: $color-marine-blue;
  }
  p {
    text-align: center;
    width: 70%;
    color: $color-cool-gray;
    margin-inline: auto;
  }
}
</style>
