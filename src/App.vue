<template>
  <div id="app">
    <div class="tab-wrapper">
      <div
        class="tab"
        v-for="(item, index) in tabs"
        v-bind:class="{ active: item.active }"
        v-on:click="handleClick"
      >
        {{ item.name.replace("Shape", " Shape") }}
      </div>
    </div>
    <div class="preview">
      <div class="left-code"></div>
      <div class="right-view">
        <component :is="targetComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import RectShape from "./components/RectShape.vue";
import CircleShape from "./components/CircleShape.vue";
import EllipseShape from "./components/EllipseShape.vue";

export default {
  name: "App",
  data() {
    return {
      targetComponent: `RectShape`,
      tabs: [
        { name: "RectShape", active: true },
        { name: "CircleShape", active: false },
        { name: "EllipseShape", active: false },
      ],
    };
  },
  components: {
    RectShape,
    CircleShape,
    EllipseShape,
  },
  methods: {
    handleClick(e) {
      this.targetComponent = e.target.innerText.replace(" ", "");
    },
  },
  watch: {
    targetComponent(newVal, oldVal) {
      this.tabs.map((item, index) => {
        if (item.name == oldVal) {
          this.tabs[index].active = false;
        }
        if (item.name == newVal) {
          this.tabs[index].active = true;
        }
      });
      this.tabs = [...this.tabs];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #3b3b3b;
}

.tab-wrapper {
  margin: 1rem 12rem;
  display: flex;
  padding: 6px;
  gap: 1rem;
  flex-wrap: wrap;
  max-height: 45vh;
  overflow-y: scroll;
}

.tab-wrapper::-webkit-scrollbar {
  display: none;
}

.tab-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.tab {
  border: 1px solid black;
  box-shadow: 0px 0px 0px 1px #fff;
  cursor: pointer;
  width: 120px;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: bisque;
  transition: all ease 0.2s;
}

.tab:hover {
  box-shadow:  0px 0px 3px 2px #fff;
}

.preview {
  display: flex;
  gap: 12px;
  padding: 8px 12px;
}

.left-code {
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px;
  width: 50%;
  height: 50vh;
}

.right-view {
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px;
  width: 50%;
  height: 50vh;
}

.active {
  background-color: rgb(243, 153, 17);
}

.konva-wrapper {
  width: 100%;
  height: 100%;
}
</style>
