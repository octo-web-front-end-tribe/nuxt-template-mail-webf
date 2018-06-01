<template>
    <div
            style="display:inline-block; margin: 0 -2px; max-width:33.33%; min-width:220px; vertical-align:top; width:100%;"
            class="stack-column">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td style="padding: 10px 10px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                           style="font-size: 14px;text-align: left;  text-align:center">
                        <tr>
                            <td style="">
                                <img :src="srcImage" width="100" height="" border="0" alt="alt_text"
                                     class="center-on-narrow"
                                     style="width: 100%; max-width: 100px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                    style="font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; padding-top: 10px;"
                                    class="stack-column-center">
                                <h2>{{emoji1}} {{mouvement.tri}} {{emoji2}}</h2>
                                <p style="margin: 0;" v-html="mouvement.content"></p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'even-column200',
        props: ['mouvement'],

        data() {
            return {
                srcImage: this.mouvement.image || 'http://placehold.it/200',
                emoji1: this.mouvement.entree ? '🍾' : '😭',
                emoji2: this.mouvement.entree ? '🍾' : '😭'
            };
        }
    };
</script>

<style scoped>

</style>
