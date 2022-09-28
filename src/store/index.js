import { defineStore } from "pinia";
import APIs from "../config/APIs.js";
const mainStore = defineStore('mainStore',{
    state(){
        return {
            allTabs: [
                ["ShowCard", "albums", "/represent"],
                ["AddCard", "add-circle", "/submit"],
                ["Login", "log-in-outline", "/login"],
                ["Register", "person-add-outline", "/register"],
            ],
            dataList:[]
        }
    },
    getters:{
        // navigator manager
        navigatorObjectList(state) { // state will
            return state.allTabs.map((unit) => {
                return { navDes: unit[0], navIcon: unit[1], navTarget: unit[2] };
            });
        },
    },

    actions: {
        deleteHook(toBeDeletedIndex) {
            this.dataList = this.dataList.filter(
                (_, index) => index !== toBeDeletedIndex
            ); // local delete
        },
    },
})


export default mainStore;