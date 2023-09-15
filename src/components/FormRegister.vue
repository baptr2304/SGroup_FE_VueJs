<script setup>
import axios from 'axios'
import { defineEmits, ref } from 'vue';
import { notify } from '@kyvg/vue3-notification'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const password = ref('')
const name = ref('')
const age = ref()
const email = ref('')
const isMale = ref(true);
const confirmPassword = ref('')

const register = async () => {


    if (password.value !== confirmPassword.value) {
        notify({
            title: 'Error',
            text: 'Passwords do not match',
            type: 'error',
        });
        return;
    }
    console.log(username.value,
        password.value,
        name.value,
        age.value,
        email.value,
        isMale.value,
        confirmPassword.value)
   await axios.post('http://localhost:8001/register', {
        username: username.value,
        password: password.value,
        name: name.value,
        age: age.value,
        email: email.value,
        gender: isMale.value,
        confirmPassword: confirmPassword.value
    })
        // then response = 201 => success
        .then((response) => {
            console.log(response)
            notify({
            title: 'Success',
            text: 'Account created successfully',
            type: 'success',
        });
        router.push({ name: 'login' });
        }).catch((error) => {
            console.log(error)
            if (error.response) {
                notify({
                    title: 'Error',
                    text: 'Fill out the form',
                    type: 'error'
                });
                console.log(error)
            }
        })

}

const ageOptions = ref([]);
for (let ageOpt = 0; ageOpt <= 100; ageOpt++) {
    ageOptions.value.push(ageOpt);
};

const backLogin = () =>
{   
    localStorage.removeItem('accessToken');
    router.push({ name: 'login' });
}


</script>
<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <div class="">
                        <form class="grid grid-cols-2 gap-4 md:gap-6" action="#">
                            <div>
                                <label for="username"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="nguyenvana" required="" v-model="username">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" v-model="password">
                            </div>
                            <div>
                                <label for="confirm-password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" v-model="confirmPassword">
                            </div>
                            <div>
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" placeholder="Nguyen Van A"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" v-model="name">
                            </div>
                            <div>
                                <label for="age"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <select name="age" id="age"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" v-model="age">
                                    <option value="" disabled selected>Select your age</option>
                                    <option v-for="ageOpt in ageOptions" :key="ageOpt" :value="ageOpt">{{ ageOpt }}</option>
                                </select>

                            </div>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" placeholder="name@gmail.com"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" v-model="email">
                            </div>


                            <div class="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="true" name="gender" v-model="isMale"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-radio-1"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                            </div>
                            <div class="flex items-center">
                                <input id="default-radio-2" type="radio" value="false" name="gender" v-model="isMale"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-radio-2"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>

                        </form>

                    </div>

                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required="">
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" @click.prevent="register"
                        class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border">Create
                        an account</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#"  @click="backLogin"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500" >Login here</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>