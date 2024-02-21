<template>
  <div class="konva-wrapper" ref="konvaWrapper">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>

<script >
export default {
  name: "CircleShape",
  data() {
    return {
      configKonva: {
        width: 200,
        height: 200,
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4,
      },
    };
  },
  props: ["props"],
  mounted() {
    this.$emit("filterFromChild", { ...this.configCircle });
    this.configCircle = {};
    Object.keys(this.props).forEach((key) => {
      if (this.props[key].show) {
        this.configCircle[key] = this.props[key].value;
      }
    });
  },
  watch: {
    props: {
      handler(newProps, oldProps) {
        // 创建一个新对象来更新 configCircle
        const newConfigCircle = { ...this.configCircle };
        Object.keys(newProps).forEach((key) => {
          if (newProps[key].show) {
            newConfigCircle[key] = newProps[key].value;
          }
        });
        // 使用新对象替换旧对象以确保视图更新
        this.configCircle = newConfigCircle;
      },
      deep: true, // 监听对象内部属性的变化
    },
  },
};
</script>

<style scoped></style>