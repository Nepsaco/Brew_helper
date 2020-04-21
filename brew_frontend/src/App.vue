<template>
    <div>
        <Home v-show='loggedIn' />
    </div>
</template>

<script>
import Home from '@/views/Home'

export default {
    components: {
        Home,
    },

    computed: {
        loggedIn(){
           return this.$store.state.loggedIn 
        }
    },
}
</script>

<style lang="scss">
</style>
