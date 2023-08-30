<script setup></script>

<template>
  <div class="form">
    <div class="form__personal">
      <header>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address and phone number</p>
      </header>
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
}
.formkit-wrapper {
  position: relative;

  input {
    width: 100%;
    min-height: 45px;
    border-radius: 5px;
    outline: none;
    border: 1px solid $color-cool-gray;
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
  // border: 1px solid red;

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
    margin-top: 4rem;
    outline: none;
    border: none;

    button {
      padding: 0.7rem 2rem;
      background-color: $color-marine-blue;
      color: $color-white;
      font-weight: 700;
      border-radius: 5px;
      outline: none;
      border: none;
    }
  }
}
</style>
