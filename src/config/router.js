import {createRouter, createWebHistory} from "vue-router"; // import router
// import components
import NotFound from "../pages/NotFound.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import RepresentPage from "../pages/RepresentPage.vue";
import SubmitPage from "../pages/SubmitPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // define routes of the component
        {
            path: "/",
            redirect: "/represent",
        },
        {
            path: "/represent",
            component: RepresentPage
        },
        {path: "/submit", component: SubmitPage},
        {path: "/login", component: LoginPage},
        {path: "/register", component: RegisterPage},
        {path: "/:NotFound(.*)", props: true, component: NotFound},
    ],
})
export default router;