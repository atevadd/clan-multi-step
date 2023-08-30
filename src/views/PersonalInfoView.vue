<script setup></script>

<template>
  <div class="form">
    <div class="form__personal">
      <Header
        heading="Personal Info"
        subtitle="Please provide your name, email address, and phone number" />
      <form>
        <FormKit
          type="text"
          id="name"
          label="Name"
          validation="required"
          placeholder="e.g. Stephen King" />
        <FormKit
          type="email"
          id="email"
          label="Email Address"
          validation="email|required"
          validation-messages="Enter a valid email"
          placeholder="e.g. stephenking@lorem.com" />
        <FormKit
          type="tel"
          id="phone"
          label="Phone"
          validation="required"
          placeholder="e.g. +1 234 567 890" />
        <div class="form__cta">
          <button>Next Step</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.formkit-outer {
  position: relative;
  margin-bottom: 2rem;
}
.formkit-label {
  color: $color-marine-blue;
  font-size: 0.875rem;
}
.formkit-wrapper {
  position: relative;

  input {
    width: 100%;
    min-height: 45px;
    border-radius: 5px;
    outline: none;
    border: 1px solid $color-light-gray;
    padding-inline: 1rem;
    font-size: 0.9rem;

    &:focus {
      border-color: $color-purplish-blue;
    }
  }
}
.formkit-messages {
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;

  li {
    color: $color-strawberry-red;
    font-size: 0.8rem;
  }
}
</style>
<style lang="scss">
.form {
  width: 50%;

  @include sm {
    border-radius: 10px;
    background: $color-white;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
    width: 90%;
    padding: 1.5rem;
    margin-top: -5rem;
    margin-bottom: 4rem;
  }
  @include md {
    border-radius: 10px;
    background: $color-white;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
    width: 80%;
    padding: 1.5rem;
    margin-top: -30rem;
    margin-bottom: 4rem;
  }
  @include lg {
    border-radius: 10px;
    background: $color-white;
    box-shadow: none;
    width: 50%;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__personal {
    header {
      margin-bottom: 1.5rem;

      h2 {
        font-size: 2rem;
        color: $color-marine-blue;
      }
      p {
        color: $color-cool-gray;
      }
    }
  }
  &__cta {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;
    outline: none;
    border: none;

    button {
      padding: 0.7rem 1.5rem;
      background-color: $color-marine-blue;
      color: $color-white;
      font-weight: 500;
      border-radius: 8px;
      outline: none;
      border: none;
    }
  }
}
</style>
