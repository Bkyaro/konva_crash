<template>
  <div class="debugger">
    <div
      class="slider-container"
      v-for="(value, key, index) in dynamicValues"
      :key="index"
    >
      <label>{{ key }}:</label>
      <input
        type="range"
        min="0"
        max="100"
        v-model="dynamicValues[key]"
        @input="updateValue(key)"
      />
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Debugger",
  props: {
    propX: {
      type: Number,
      default: 0,
    },
    propY: {
      type: Number,
      default: 0,
    },
    propZ: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      dynamicValues: {
        x: this.propX,
        y: this.propY,
        z: this.propZ,
      },
    };
  },
  methods: {
    updateValue(key) {
      console.log("updating..", { ...this.dynamicValues });
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
  background-color: pink;
  padding: 8px;
  border-radius: 8px;
}

.slider-container {
  display: flex;
  margin-bottom: 6px;
}
</style>
