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
                                <h2>{{emoji1}} {{params.tri}} {{emoji2}}</h2>
                                <p style="margin: 0;" v-html="params.content"></p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import EmojiMouvement from '@/services/emojiMouvement';

    export default {
        name: 'even-column200',
        props: ['params'],

        data() {
            return {
                srcImage: this.params.image || 'http://placehold.it/200',
                emoji1: EmojiMouvement.emoji(this.params.entree),
                emoji2: EmojiMouvement.emoji(this.params.entree)
            };
        }
    };
</script>

<style scoped>

</style>
