<template>
    <div class="konva-wrapper" ref="konvaWrapper">
        <v-stage :config="configKonva">
            <v-layer>
              <v-ellipse :config="configEllipse"></v-ellipse>
            </v-layer>
          </v-stage>
    </div>
</template>

<script >
export default {
    name: 'EllipseShape',
    data() {
        return {
            configKonva: {
                width: 200,
                height: 200
            },
            configEllipse: {
                x: 200 / 2,
                y: 200 / 2,
                radiusX: 100,
                radiusY: 50,
                fill: 'yellow',
                stroke: 'black',
                strokeWidth: 4,
            }
        };
    },
    mounted() {
        this.configKonva.width = this.$refs.konvaWrapper.offsetWidth;
        this.configKonva.height = this.$refs.konvaWrapper.offsetHeight;
        this.configEllipse.width = this.$refs.konvaWrapper.offsetWidth / 4;
        this.configEllipse.height = this.$refs.konvaWrapper.offsetHeight / 2;
    }
}
</script>

<style scoped></style>