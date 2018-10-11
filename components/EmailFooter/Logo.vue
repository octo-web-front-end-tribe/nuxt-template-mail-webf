<template>
    <img :src="imgSrc" :alt="altText" style="width: 100px">
</template>

<script>
    import Drive from '@/services/linkDrive';

    export default {
        name: 'logo',
        props: ['driveImageID', 'alt'],
        data() {
            return {
                imgSrc: Drive.linkDrive(this.driveImageID),
                altText: this.alt
            }
        }
    };
</script>

<style scoped>

</style>
