<template>
  <div class="konva-wrapper">
    <v-stage :config="configKonva">
      <v-layer>
        <v-rect :config="configRect"></v-rect>
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
      configRect: {
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        fill: "blue",
        cornerRadius: [0, 10, 20, 30],
      },
    };
  },
  mounted() {
    console.log("rect mounted");
  },
};
</script>

<style scoped></style>