<template>
    <img
            :src="srcLink"
            style="width: 100px"
    >
</template>

<script>
    import Drive from '@/services/linkDrive';

    export default {
        name: 'logo-web-f',
        data() {
            return {
                srcLink: Drive.linkDrive('13BzL0ExgsfvDpbZsTQe4qq15XS1GS0_4')
            }
        }
    };
</script>

<style scoped>

</style>
