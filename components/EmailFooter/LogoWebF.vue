<template>
    <img :src="srcLink" style="width: 100px">
</template>

<script>
    import Drive from '@/services/linkDrive';

    export default {
        name: 'logo-web-f',
        props: ['logoWebFLinkID'],
        data() {
            return {
                srcLink: Drive.linkDrive(this.logoWebFLinkID)
            }
        }
    };
</script>

<style scoped>

</style>
