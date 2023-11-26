"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "nihao",
      pics: [
        {
          id: "1",
          pic: "../../static/user_default.png"
        },
        {
          id: "2",
          pic: "../../static/user_default.png"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    test(pic) {
      common_vendor.wx$1.previewImage({
        urls: this.pics.map((v) => v.pic),
        current: pic
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pics, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.test(item.pic), item.id),
        b: item.pic,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/program_code/web-project/uniapp-projects/LearnDemo01/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
