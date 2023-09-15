<script setup>
import { reactive, computed, onMounted, defineEmits, defineProps, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import SideBar from './SideBar.vue';
const router = useRouter();
let users = ref([])
const tableColumns = ["Username", "Email", "Age", "Actions"]
const currentPage = ref(1);

// get all users

axios.get('http://localhost:8001/users', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(response => {
    users.value = [...response.data.users];
})
.catch(error => {
    console.log(error);
})


const goToUserDetail = (userId) => {
    router.push({ name: 'userDetail', params: { id: userId } });
};


const log = (val) => {
    console.log(val)
    axios.get(`http://localhost:8001/users?page=${currentPage.value}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(response => {
            users.value = response.data;
            
        })
        .catch(error => {
            console.log(error);
        })
}

</script>
<template>
    <div class="flex">
        <SideBar></SideBar>
        <!--container-->
        <div class="m-8 w-5/6">
            <!--search box-->
            <div class="flex items-center justify-between mb-2">
                <div class="search-box ">
                    <!-- component -->
                    <div class='max-w-md mx-auto'>
                        <div
                            class="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text"
                                id="search" placeholder="Search..." />
                        </div>
                    </div>
                </div>
                <!--create user-->
                <div class="flex justify-end">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Create User
                    </button>
                </div>
            </div>
            <div class="user-list">
                <!-- component -->
                <div class="text-gray-900 ">
                    <div class="px-1 py-2 flex justify-center box-border">
                        <table class="w-full text-md bg-white shadow-md rounded mb-4 ">
                            <tbody>
                                <tr>
                                    <th class="text-left p-3 px-5" v-for="(column, index) in tableColumns" :key="index">
                                        {{ column }}
                                    </th>
                                </tr>
                                <tr v-for="user in users" :key="user" class="border-b hover:bg-orange-100 ">
                                    <td class="p-3 px-5"><span class="bg-transparent" @click="goToUserDetail(user.id)">{{
                                        user.username }} </span>
                                    </td>
                                    <td class="p-3 px-5"><span class="bg-transparent">{{ user.email }}</span>
                                    </td>
                                    <td class="p-3 px-5">
                                        <!--created at-->
                                        <p>{{ user.age }}</p>
                                    </td>
                                    <td class="p-3 px-5 flex justify-start "><button type="button"
                                            class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button><button
                                            type="button"
                                            class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <el-pagination small layout="prev, pager, next" :total="50" :background="false" @current-change="currentPage"/>
        </div>
    </div>
</template> 