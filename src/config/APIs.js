import getRef from "./firebase.js";
import { get, onValue, push, runTransaction, off } from "firebase/database";

const BASE_URI = "dummy-vue-form/";
const FireBaseAPI = {
  async updateValue(refs, value) {
    await runTransaction(refs, (rawValue) => {
      if (rawValue) {
        return value;
      }
      return rawValue;
    });
  },
  async checkoutValue(key) {
    const targetRef = getRef(false, BASE_URI + key);
    return {
      value: (await get(targetRef)).val(),
      state: (await get(targetRef)).val() !== null,
      ref: targetRef,
    };
  },
};

const APIs = {
  async register(userName) {
    const chkBundle = await FireBaseAPI.checkoutValue(userName);
    if (!chkBundle.state) {
      // reg ok
      return (
        await push(chkBundle.ref, "Firebase not support store empty dataList")
      ).key;
    } // reg fail
    return false;
  },
  async login(userName, password) {
    console.log(userName, password);
    const chkBundle = await FireBaseAPI.checkoutValue(
      `${userName}/${password}`
    );
    console.log(chkBundle);
    if (chkBundle.state) {
      // ok ,we find the dataList
      return Array.isArray(chkBundle.value) ? chkBundle.value : [];
      // since firebase not support store empty list ,so we need to make a check
      // and if the return data is not ||
      // typeof [] === 'object'
      // return ((typeof chkBundle.value) === 'list') ? chkBundle.value : [];
      // 报告 typeof 表达式与不是以下标准类型之一的文字字符串的比较：undefined、object、boolean、number、string、function 或 symbol。 此类比较始终返回 false。
      // 这里注意一下优先级
    }
    return false;
  },
  async updateDataList(userName, password, newDataList) {
    // we have already known the user info
    const chkBundle = await FireBaseAPI.checkoutValue(
      `${userName}/${password}`
    );
    if (Array.isArray(newDataList) && newDataList.length !== 0) {
      // make sure the data list will be the Array , and not be null
      // to fit the firebase
      await FireBaseAPI.updateValue(chkBundle.ref, newDataList);
      return true;
    }
    await FireBaseAPI.updateValue(
      chkBundle.ref,
      "FireBase not support empty array , this means empty dataList"
    );
    return false;
  },
  async startMonitoring(userName, password, mainStore) {
    const chkBundle = await FireBaseAPI.checkoutValue(
      `${userName}/${password}`
    );
    // return the monitor
    return onValue(chkBundle.ref, (snapshot) => {
      if (Array.isArray(snapshot.val())) {
        mainStore.dataList = snapshot.val();
        return true;
      }
      mainStore.dataList = [];
      return false;
    });
  },
  stopMonitoring(monitor) {
    console.log(monitor);
    off(monitor);
  },
};

export default APIs;
