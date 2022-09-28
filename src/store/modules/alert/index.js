import {defineStore} from "pinia";

const alertState = defineStore('alertState', {
    state(){
        return {
            showAlert: false,
            alertContent: "",
            alertTitle: "",
        }
    },
    actions:{
        // actions use this to have access to the store
        settingAlert(title, content){
            // automatically enable the modal
            this.alertTitle = title;
            this.alertContent = content;
            this.showAlert = true;
        },
        cancelAlert(){ // cannot use arrow function
            console.log(this);
            this.showAlert = false;
        }
    }
})
export default alertState;