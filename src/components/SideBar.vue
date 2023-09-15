<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    User,
    House,
    Back
} from '@element-plus/icons-vue'
const router  = useRouter();
const username = ref('')
// logout
const logout = () => {
    localStorage.removeItem('accessToken');
    router.push({ name: 'login' });
}

</script>
<template>
    <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo border-l-0">
            <el-menu-item index="1">
                <el-icon>
                    <House />
                </el-icon>
                <span>Home</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>Users</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">User list</el-menu-item>
                    <el-menu-item index="1-2">Profile</el-menu-item>
                </el-menu-item-group>

            </el-sub-menu>
            <el-menu-item index="3">
                <el-icon><icon-menu /></el-icon>
                <span>Vote</span>
            </el-menu-item>
            <el-menu-item index="4" @click="logout">
                <el-icon>
                    <Back />
                </el-icon>
                <span>Log out</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>
  

  