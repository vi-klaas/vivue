<template>
    <header>
        <!--Nav-->
        <nav aria-label="menu nav" class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-20 fixed w-full z-20 top-0">
            <div class="flex flex-wrap items-center">
                <button @click="toggleSidebar" class="p-4 inline-block">
                    <!-- Here's a simple "hamburger" representation, but you can replace with an icon or SVG -->
                    ☰
                </button>
                <!--                <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2"><span class="relative w-full"> -->
                <!--                  <input aria-label="search" type="search" id="search" placeholder="Search" class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"> <div class="absolute search-icon" style="top: 1rem; left: .8rem;"></div> </span>-->
                <!--                </div>-->
                <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li class="flex-1 md:flex-none md:mr-3">
                            <a class="menu-item-active" href="#">Active</a>
                        </li>
                        <li class="flex-1 md:flex-none md:mr-3">
                            <a class="menu-item" href="#">link</a>
                        </li>
                        <li class="flex-1 md:flex-none md:mr-3">
                            <div class="relative inline-block">
                                <button @click="toggleDropdown()" class="drop-button text-white py-2 px-2"> <span class="pr-2"><i class="em em-robot_face"></i></span> Hi, User
                                    <svg class="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </button>
                                <div id="myDropdown" class="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30" v-show='showDropdown'>
                                    <input type="text" class="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onkeyup="filterDD('myDropdown','myInput')">
                                    <RouterLink to="/">Home</RouterLink>
                                    <RouterLink to="/about">About</RouterLink>
                                    <a href="#" class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fa fa-user fa-fw"></i> Profile</a>
                                    <a href="#" class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fa fa-cog fa-fw"></i> Settings</a>
                                    <div class="border border-gray-800"></div>
                                    <a href="#" class="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup lang='ts'>
import {ref, defineEmits} from 'vue';
import Avatar from 'primevue/avatar'

const showSidebar = ref(false);
const showDropdown = ref(false);

const emit = defineEmits(['update-show-sidebar'])

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
  emit('update-show-sidebar', showSidebar.value)
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

</script>
<style scoped>/* Add any component-specific styles here */</style>
