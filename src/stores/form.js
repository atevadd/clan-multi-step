import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useFormStore = defineStore(
  "form",
  () => {
    const router = useRouter();
    const personalInfo = ref({});
    const selectedPlan = ref({ plan: "", duration: false });
    const planError = ref(null);
    const addOnsList = ref([]);
    const addsError = ref(null);
    const isCompleted = ref(false);
    const addSum = ref(0);
    const planPrice = ref(0);

    const areAllKeysNotEmpty = (obj) => {
      if (Object.keys(obj).length === 0) {
        return false;
      } else {
        return Object.keys(obj).every((key) => {
          const value = obj[key];
          return value !== undefined && value !== null && value !== "";
        });
      }
    };

    const submitPersonalInfo = (credentials) => {
      const { name, email, phone } = credentials;
      personalInfo.value = { name, email, phone };

      // move the next page
      router.push({ name: "plan" });
    };

    // handle select plan page
    const submitPlan = () => {
      if (selectedPlan.value.plan === "") {
        planError.value = "Please select a plan";
        if ("vibrate" in navigator) {
          // Vibration API is supported
          navigator.vibrate(200);
        }
        setTimeout(() => {
          planError.value = "";
        }, 3000);
      } else {
        // move to the next page
        router.push({ name: "add-on" });
      }
    };

    const submitAddons = () => {
      if (addOnsList.value.length <= 0) {
        addsError.value = "Select atleast one Add-on";
        if ("vibrate" in navigator) {
          // Vibration API is supported
          navigator.vibrate(200);
        }

        setTimeout(() => {
          addsError.value = "";
        }, 3000);
      } else {
        router.push({ name: "summary" });
      }
    };

    const finishForm = () => {
      isCompleted.value = true;

      // reseting the store after completion after 3secs
      setTimeout(() => {
        personalInfo.value = {};
        selectedPlan.value = { plan: "", duration: false };
        addOnsList.value = [];
        isCompleted.value = false;
        sessionStorage.removeItem("form");
        // redirecting user after completion
        router.push({ name: "info" });
      }, 3000);
    };

    const getSum = () => {
      planPrice.value = selectedPlan.value.duration
        ? selectedPlan.value.plan.price[1]
        : selectedPlan.value.plan.price[0];
      addSum.value = addOnsList.value.reduce((accumulator, obj) => {
        if (obj.hasOwnProperty("price") && typeof obj.price === "number") {
          return accumulator + obj.price;
        }
        return accumulator;
      }, 0);
    };

    return {
      personalInfo,
      submitPersonalInfo,
      selectedPlan,
      planError,
      submitPlan,
      addOnsList,
      submitAddons,
      addsError,
      isCompleted,
      finishForm,
      areAllKeysNotEmpty,
      addSum,
      getSum,
      planPrice,
    };
  },
  {
    persist: { storage: sessionStorage },
  }
);
