<template>
  <div class="weiwrap">
    <div class="wrap_c">
      <div class="title">Professional Service</div>
      <div class="inner_c">
        <div class="tab_h">
          <div
            v-for="(item, key, id) in tabData"
            :key="id"
            class="service_icon"
            :class="needshow_h(item.status)"
            @click="changetab(item.id)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="tab_b">
          <div
            v-for="(item, key, index) in tabData"
            :key="index"
            class="service_c"
            :class="needshow(item.status)"
          >
            <transition name="fade">
              <div v-if="item.status" class="tabcontents">
                <div
                  class="tab_subc"
                  v-for="(_item, key, index) in item.contents"
                  :key="index"
                >
                  {{ _item.content }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "Service",
  props: {},
  data: function () {
    return {
      tabData: [
        {
          id: 1,
          status: true,
          title: "網頁架設",
          contents: [
            { icon: "test.png", content: "1-1111" },
            { icon: "test1.png", content: "1-2222" },
            { icon: "test1.png", content: "1-3333" },
          ],
        },
        {
          id: 2,
          status: false,
          title: "頁面設計",
          contents: [
            { icon: "test.png", content: "2-1111" },
            { icon: "test1.png", content: "2-2222" },
            { icon: "test1.png", content: "2-3333" },
          ],
        },
      ],
    };
  },
  methods: {
    changetab: function (index) {
      this.tabData.forEach(function (e, i) {
        if (i + 1 == index) {
          e.status = true;
        } else {
          e.status = false;
        }
      });
    },
    needshow_h: function (status) {
      return {
        active: status,
      };
    },
    needshow: function (status) {
      return {
        active: status,
      };
    },
  },
};
</script>
<style scoped>
.weiwrap {
  height: 40vh;
  width: 100%;
}
.wrap_c {
  padding: 5%;
  font-size: 1em;
}
.title {
  font-weight: bold;
}
.inner_c {
  display: column;
}
.service_icon {
  width: 100%;
  padding: 1em;
  text-align: right;
}

.service_icon.active {
  width: 100%;
  position: relative;
}
.service_icon.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  height: 2px;
  background-color: rgb(230, 145, 48);
}

.tab_h {
  display: flex;
}

.tab_b {
}

.tabcontents {
  display: flex;
}
.tab_subc {
  padding: 2em 0;
  margin: 0 auto;
}
.service_c {
  display: none;
}

.service_c.active {
  display: block;
  height: 30vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.2;
}
</style>