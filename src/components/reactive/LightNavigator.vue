<template>
  <div id="LightNavigator">
    <ul :style="{ width: 80 * navList.length + 'px' }" class="navigation">
      <li
        v-for="(navUnit, index) in navList"
        :key="navUnit.navDes"
        ref="navList"
      >
        <router-link :to="navUnit.navTarget">
          <span class="icon">
            <ion-icon :name="navUnit.navIcon"></ion-icon>
          </span>
          <span class="text">{{ navUnit.navDes }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import "vue-ionicons/dist/ionicons";
import mainStore from "../../store/index.js";

const main = mainStore()
const navList = main.navigatorObjectList

</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #2f363e;
  position: relative;
  width: 305px;
  height: 88px;
  /* background: #fff; */
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  margin: auto;
}

.navigation li {
  position: relative;
  list-style: none;
  width: 80px;
  margin: 0 5px;
}

.navigation li::before {
  content: "";
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  background: #222;
  border-radius: 50%;
  transition: 0.5s;
}

.navigation li::before {
  background: #0f0;
  box-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0,
    0 0 40px #0f0, 0 0 50px #0f0;
}

/*navigation a tag css start*/
.navigation li a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  background: rgb(255 255 255 / 0%);
  border: none;
}

.navigation li a .icon {
  position: absolute;
  font-size: 1.75em;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  border-radius: 50%;
  transition: 0.5s;
  transition-delay: 0.2s;
}

.navigation li a.router-link-active .icon {
  background: #98f119;
  color: #fff;
  transform: translateY(-55px);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.25),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  transition-delay: 0s;
}

.navigation li a .icon::before {
  content: "";
  position: absolute;
  inset: 10px;
  background: #2f363e;
  border-radius: 50%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5),
    inset 2px 2px 3px rgba(255, 255, 255, 0.25),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  transform: scale(1);
  transition: 0.5s;
}

.navigation li a .icon::before {
  transform: scale(1);
}

.navigation li a .text {
  position: absolute;
  font-size: 0.75em;
  color: #2f363e;
  opacity: 0;
  border-radius: 15px;
  transform: translateY(20px);
  padding: 2px 10px;
  background: #fff;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  transition-delay: 0s;
}

.navigation li a.router-link-active .text {
  opacity: 1;
  transform: translateY(10px);
  transition-delay: 0.2s;
}

/*navigation a tag css end*/
</style>
