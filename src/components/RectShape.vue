<template>
  <div class="konva-wrapper" ref="konvaWrapper">
    <v-stage :config="configKonva">
      <v-layer>
        <v-rect :config="configData"></v-rect>
      </v-layer>
    </v-stage>
  </div>
</template>

<script >
export default {
  name: "RectShape",
  data() {
    return {
      configKonva: {
        width: 200,
        height: 200,
      },
      configData: {
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        fill: "blue",
        cornerRadius: [0, 10, 20, 30],
      },
    };
  },
  props: ["props"],
  mounted() {
    this.$emit("filterFromChild", { ...this.configData });
    this.configData = {};
    Object.keys(this.props).forEach((key) => {
      if (this.props[key].show) {
        this.configData[key] = this.props[key].value;
      }
    });
    //修改画布大小为所在元素宽高
    this.configKonva = {
      width: this.$refs.konvaWrapper.clientWidth,
      height: this.$refs.konvaWrapper.clientHeight,
    };
  },
  watch: {
    props: {
      handler(newProps, oldProps) {
        // 创建一个新对象来更新 configRect
        const newConfigData = { ...this.configData };
        Object.keys(newProps).forEach((key) => {
          if (newProps[key].show) {
            newConfigData[key] = newProps[key].value;
          }
        });
        // 使用新对象替换旧对象以确保视图更新
        this.configData = newConfigData;
      },
      deep: true, // 监听对象内部属性的变化
    },
  },
};
</script>

<style scoped></style>