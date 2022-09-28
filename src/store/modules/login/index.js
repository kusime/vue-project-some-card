import {defineStore} from "pinia";
import alertState from "../alert/index.js";
import mainStore from "../../index.js";
import APIs from "../../../config/APIs.js";
import {LoginInputCheck} from "../../function/inputCheck.js";
import main from "../../main.js";

const loginState = defineStore('loginState', {
    state() {
        return {
            username: "",
            password: "",
            isAuthed: false,
            dataListMonitor:'monitor',
        }
    },
    getters: {
        isLogin(state) {
            return state.isAuthed
        }
    },
    actions: {
        setUserLogin(username, password) {
            this.username = username;
            this.password = password;
            this.isAuthed = true;
        },
        unsetUserLogin() {
            this.isAuthed = false;
        },
        async loginHook() {
            if (!LoginInputCheck({
                username: this.username,
                password: this.password,
            })) return false;

                const alert = alertState()

            if (this.isLogin) {
                // is already logged in
                alert.settingAlert("You will be Logout ..", `Current You have been logged as ${this.username}`)
                this.unsetUserLogin() // unset the login status
                // unattached from monitoring
                if (!this.dataListMonitor) APIs.stopMonitoring(this.dataListMonitor);
            }
            // start login
            const loginOK = await APIs.login(this.username, this.password);
            const main = mainStore()
            if (Array.isArray(loginOK)) {
                // we get an array ,which is a map of the database
                // set login state
                this.setUserLogin(this.username, this.password);
                // update the data list
                console.log(loginOK);
                main.dataList = loginOK;
                // info the user
                alert.settingAlert("Login Successfully", `Welcome ${this.username}`)
                // enable the data list monitor
                this.dataListMonitor = APIs.startMonitoring(this.username, this.password, main);
                return true;
            }
            // alert User
            alert.settingAlert("Login Failed", "Your Password or UserName doest match")
            return false;
        },
    }
})

export default loginState;