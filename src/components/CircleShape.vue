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
    name: 'CircleShape',
    data() {
        return {
            configKonva: {
                width: 200,
                height: 200
            },
            configCircle: {
                x: 100,
                y: 100,
                radius: 70,
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            }
        };
    }
}
</script>

<style scoped></style>