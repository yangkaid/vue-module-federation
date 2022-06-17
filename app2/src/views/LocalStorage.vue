<template>
  <div>
    <h1>Local Storage</h1>
    <p>will set key "test-abc", value "def" to localStorage</p>
    <p>value: {{ val }}</p>
    <input ref="inp" type="text" />
    <button @click="handleSetLocalStorage">set localStorage</button>
  </div>
</template>

<script>
import { ref, computed } from "vue"
export default {
  name: "LocalStorage",
  components: {},
  setup() {
    localStorage.setItem("test-abc", "def")
    const inp = ref()
    const val = ref(localStorage.getItem("test-abc"))

    const handleSetLocalStorage = () => {
      localStorage.setItem("test-abc", inp.value.value)
      val.value = localStorage.getItem("test-abc")
    }

    return { inp, val, handleSetLocalStorage }
  }
}
</script>
