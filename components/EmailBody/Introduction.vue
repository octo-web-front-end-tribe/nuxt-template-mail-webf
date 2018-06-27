<template>
    <!-- 1 Column Text + Button : BEGIN -->
    <tr>
        <td bgcolor="#ffffff">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td style="padding: 20px 10px 20px; text-align: center;">
                        <h1
                                style="margin: 0; margin-bottom: 10px; font-family: sans-serif; font-size: 30px; line-height: 125%; color: #001849; font-weight: bold;">
                            {{title}}
                        </h1>
                        <h2
                                style="margin: 0; font-family: sans-serif; font-size: 18px; font-style: italic; line-height: 125%; color: rgb(20, 160, 192); font-weight: normal;">
                            {{subTitle}}
                        </h2>
                    </td>
                </tr>
                <tr>
                    <td
                            style="padding: 0 10px 0px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; text-align: left;">
                        <p style="margin: 0;">
                            <intro></intro>
                        </p>
                    </td>
                </tr>
                <tr style="display: none">
                    <td
                            style="padding: 0 10px 40px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
                        <email-button texte="Découvre mes sources" urlLink="https://google.com"/>
                    </td>
                </tr>

            </table>
        </td>
    </tr>
    <!-- 1 Column Text + Button : END -->
</template>

<script>
    import EmailButton from './EmailButton';
    import Intro from '@/contents/introduction.md';

    export default {
        components: {
            EmailButton,
            Intro
        },
        name: 'introduction',
        props: ['config'],

        data() {
            return this.config.introduction;
        }
    };
</script>

<style scoped>

</style>
