<template>
    <!-- Email Header : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 780px;">
        <tr>
            <td style="padding: 20px 0; text-align: center">
                <hero-image-flush :fullImage="params.fullImage" :alt="params.alt"/>
            </td>
        </tr>
    </table>
    <!-- Email Header : END -->
</template>

<script>
    import HeroImageFlush from './EmailBody/HeroImageFlush';

    export default {
        name: 'email-header',
        props:['params'],
        components: {
            HeroImageFlush
        }
    };
</script>

<style scoped>

</style>
