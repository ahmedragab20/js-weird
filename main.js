import { ref, computed } from "@vue/reactivity";

const btnEl = document.querySelector("button");

const count = ref(0);

console.log(count.value);

const double = computed(() => count.value * 2);

const increment = () => {
  count.value++;

  console.log(count.value);
  console.log(double.value);
};

btnEl.addEventListener("click", increment);