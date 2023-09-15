<script setup>
import { ref, onMounted, onBeforeMount, defineEmits } from 'vue';
import SideBar from './SideBar.vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const userId = route.params.id 
const selectedUser = ref(null);

axios.get('http://localhost:8001/user/'+ userId).then((res)=>{
    console.log(res.data)
    selectedUser.value = res.data.data;
})


</script>
<template>
    <div class="flex bg-bgDashBoard">
        <SideBar></SideBar>
        <!--container-->
        <!-- show user detail-->
    

    </div>
</template>

