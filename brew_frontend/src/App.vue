<template>
    <div>
        <h1 v-show='loggedIn'>Hi</h1>
    </div>
</template>

<script>
export default {
    data() {
        return{ 
            loggedIn: false,
        }
    },
}
</script>

<style lang="scss">
</style>
