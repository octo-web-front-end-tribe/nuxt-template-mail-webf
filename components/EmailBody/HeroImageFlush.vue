<template>
    <!-- Hero Image, Flush : BEGIN -->
    <tr>
        <td bgcolor="#ffffff" align="center">
            <a :href="link" target="_blank">
            <img :src="srcLink"
                 width="680" height="" :alt="altText" border="0" align="center"
                 style="width: 100%; max-width: 780px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; margin: auto; margin-bottom: 20px"
                 :style="'width:' + width"
                 class="fluid g-img">
            </a>
        </td>
    </tr>
    <!-- Hero Image, Flush : END -->
</template>

<script>
    import Drive from '@/services/linkDrive';

    export default {
        name: 'hero-image-flush',
        props:['fullImage', 'size', 'link', 'alt'],

        data() {
            return {
                srcLink: Drive.linkDrive(this.fullImage),
                width: this.size || '780px',
                altText: this.alt
            };
        }
    };
</script>

<style scoped>

</style>
