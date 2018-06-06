<template>
    <img :src="imgSrc" style="width: 100px">
</template>

<script>
    import Drive from '@/services/linkDrive';

    export default {
        name: 'logo',
        props: ['driveImageID'],
        data() {
            return {
                imgSrc: Drive.linkDrive(this.driveImageID)
            }
        }
    };
</script>

<style scoped>

</style>
