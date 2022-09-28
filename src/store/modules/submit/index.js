import { defineStore } from "pinia";
import {SubmitInputCheck} from "../../function/inputCheck.js";

import alertState from "../alert/index.js";
import loginState from "../login/index.js";
import mainStore from "../../index.js";



const submitState = defineStore("submitState", {
  state() {
    return {
      title: "",
      content: "",
      link: "",
    };
  },
  getters: {
    inputPack(state) {
      // getter use arguments to have access to the store
      // jsonify
      return {
        title: state.title,
        content: state.content,
        link: state.link,
      };
    },
  },
  actions: {
    clearInput() {
      this.title = "";
      this.content = "";
      this.link = "";
    },
    submitHook(data) {
      const login = loginState();
      const main = mainStore();
      const alert = alertState();
      if (!SubmitInputCheck(this.inputPack))return false;
      if (!login.isLogin) return false; // login check wrapper
      //info user
      alert.settingAlert("Submit Success","Data Submit Success")
      main.dataList.push(this.inputPack);// local push
    },

  },

});
export default submitState;
