<template>
  <div id="app">
    <div class="tab-wrapper">
      <div
        class="tab"
        v-for="item in tabs"
        v-bind:class="{ active: item.active }"
        v-on:click="handleClick"
        :key="item.id"
      >
        {{ item.name.replace("Shape", " Shape") }}
      </div>
    </div>
    <div class="preview">
      <div class="left-code">
        <Debugger @update="handleParamUpdate" :props="props" />
      </div>
      <div class="right-view">
        <component
          :is="targetComponent"
          :props="props"
          @filterFromChild="filterFromChild"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import Debugger from "./components/Debugger.vue";
import RectShape from "./components/RectShape.vue";
import CircleShape from "./components/CircleShape.vue";
import EllipseShape from "./components/EllipseShape.vue";

export default {
  name: "App",
  data() {
    return {
      targetComponent: `RectShape`,
      tabs: [
        { id: 1, name: "RectShape", active: true },
        { id: 2, name: "CircleShape", active: false },
        { id: 3, name: "EllipseShape", active: false },
      ],
      props: {
        x: { value: 50, show: false, type: "number" },
        y: { value: 120, show: false, type: "number" },
        z: { value: 50, show: false, type: "number" },
        width: { value: 100, show: false, type: "number" },
        height: { value: 100, show: false, type: "number" },
        radius: { value: 70, show: false, type: "number" },
        radiusX: { value: 70, show: false, type: "number" },
        radiusY: { value: 70, show: false, type: "number" },
        stroke: { value: "black", show: false, type: "string" },
        strokeWidth: { value: 4, show: false, type: "number" },
        fill: { value: "blue", show: false, type: "string" },
        cornerRadius: { value: [0, 10, 20, 30], show: false, type: "array" },
      },
    };
  },
  components: {
    RectShape,
    CircleShape,
    EllipseShape,
    Debugger,
  },
  methods: {
    handleClick(e) {
      const componentName = e.target.innerText.replace(" ", "");
      if (componentName !== this.targetComponent) {
        this.targetComponent = componentName;
        // 重置props
        const newProps = { ...this.props };
        Object.keys(newProps).forEach((key) => {
          newProps[key].show = false;
        });
        this.props = newProps;
      }
    },
    handleParamUpdate(param) {
      Object.keys(this.props).forEach((key) => {
        if (param[key].show) {
          this.props[key].value = param[key].value;
        }
      });
    },
    filterFromChild(filterParam) {
      Object.keys(this.props).forEach((key) => {
        if (filterParam[key]) {
          this.props[key].show = true;
          this.props[key].value = filterParam[key];
        }
      });
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
  box-shadow: 0px 0px 3px 2px #fff;
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
