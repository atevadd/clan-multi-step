import { createRouter, createWebHistory, useRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useFormStore } from "../stores/form";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "info" },
    },
    {
      path: "/onboarding/personal-info",
      name: "info",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PersonalInfoView.vue"),
    },
    {
      path: "/onboarding/select-plan",
      name: "plan",
      component: () => import("../views/SelectPlanView.vue"),
      beforeEnter: (to, from) => {
        const form = useFormStore();
        const { personalInfo } = storeToRefs(form);

        if (form.areAllKeysNotEmpty(personalInfo.value)) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      path: "/onboarding/add-ons",
      name: "add-on",
      component: () => import("../views/AddonView.vue"),
      beforeEnter: (to, from) => {
        const form = useFormStore();
        const { selectedPlan } = storeToRefs(form);

        if (form.areAllKeysNotEmpty(selectedPlan.value)) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      path: "/onboarding/summary",
      name: "summary",
      component: () => import("../views/SummaryView.vue"),
      beforeEnter: (to, from) => {
        const form = useFormStore();
        const { addOnsList } = storeToRefs(form);

        if (addOnsList.value.length <= 0) {
          return false;
        } else {
          return true;
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
