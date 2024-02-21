<template>
  <div class="debugger">
    <div
      class="slider-container"
      v-for="(value, key, index) in dynamicValues"
      :key="index"
    >
      <div class="slider" v-if="value.show">
        <label>{{ key }}:</label>
        <input
          v-if="value.type == 'number'"
          type="range"
          max="999"
          v-model.number="dynamicValues[key].value"
          @input="updateValue(key)"
        />
        <input
          v-if="value.type == 'string' || value.type == 'array'"
          v-model="dynamicValues[key].value"
          @input="updateValue(key)"
        />
        <span>{{ value.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Debugger",
  props: ["props"],
  data() {
    return {
      dynamicValues: { ...this.props },
    };
  },
  methods: {
    updateValue(key) {
      this.$emit("update", { ...this.dynamicValues });
    },
  },
};
</script>

<style scoped>
.debugger {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #ded6d8;
  padding: 8px;
  border-radius: 8px;
}

.slider-container {
  display: flex;
  margin-bottom: 6px;
}

.slider {
  display: flex;
  gap: 8px;
}
</style>
