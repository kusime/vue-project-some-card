import {defineStore} from "pinia";
import APIs from "../../../config/APIs.js";
import {RegisterInputCheck} from "../../function/inputCheck.js";
import alertState from "../alert/index.js";


// the id cannot duplicate
const registerState = defineStore('registerState', {
    state() {
        return {
            username: "",
        }
    },
    actions: {
        async userRegisterHook() {
            const alert = alertState()
            if (!RegisterInputCheck(this.username)) return false; // check name
            const regOK = await APIs.register(this.username);
            if (regOK) {
                alert.settingAlert("SUCCESS REGISTER", `Your Password is [=> ${regOK} <=]`)
                return true;
            }
            alert.settingAlert("FAIL REGISTER", `This userName have been existed`)
            return false;
        },
    }
})
export default registerState;