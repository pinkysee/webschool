<template>
    <navbar />
    <div class="container">
        <iframe v-for="(item, index) in IframeList" :src="`${this.$config.public.API_URL}/file/iframe/${item.Path}`" frameborder="0"></iframe>
    </div>
    <myfooter />
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            IframeList: [],
        }
    },
    methods: {
        async GetAllIframes() {
            console.log(this.$route.name)
            const a = await axios.get(`${this.$config.public.API_URL}/getiframe?page=${this.$route.name}`).then(function (response) {
                return response.data
            })
            this.IframeList = a
        },
    },
    async mounted() {

        await this.GetAllIframes()
    }
}
</script>
<style scoped>
    iframe {
        width: 100%;
        height: 90vh;
        overflow: scroll;
    }
    .container {
        height: 100vh;
        min-height: 100vh;
    }
</style>