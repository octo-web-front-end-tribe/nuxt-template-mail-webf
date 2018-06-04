<template>
    <!-- Hero Image, Flush : BEGIN -->
    <tr>
        <td bgcolor="#ffffff" align="center">
            <img :src="srcLink"
                 width="680" height="" alt="alt_text" border="0" align="center"
                 style="width: 100%; max-width: 780px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; margin: auto;"
                 class="fluid g-img">
        </td>
    </tr>
    <!-- Hero Image, Flush : END -->
</template>

<script>
    import Drive from '@/services/linkDrive';

    export default {
        name: 'hero-image-flush',
        props:['fullImage'],

        data() {
            return {
                srcLink: Drive.linkDrive(this.fullImage)
            };
        }
    };
</script>

<style scoped>

</style>
