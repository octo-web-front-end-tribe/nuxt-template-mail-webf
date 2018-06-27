<template>
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 780px;" class="email-container">

        <introduction :config="config"/>

        <thumbnail-right-text-left :title="twitter.title" :content="twitter.content" :image="twitter.image" :linkButton="twitter.linkButton"></thumbnail-right-text-left>

        <even-column-4 :title="mouvements.title" :table="mouvements.table"/>

        <title-table title="Nos missions"/>

        <nos-missions v-for="(mission, index) in missions" :key="index" :mission="mission"/>
    </table>
    <!-- Email Body : END -->
</template>

<script>
    import ThumbnailRightTextLeft from './EmailBody/ThumbnailRightTextLeft';
    import ThumbnailLeftTextRight from './EmailBody/ThumbnailLeftTextRight';
    import Introduction from './EmailBody/Introduction';

    import imageFullPage from './EmailBody/ImageFullPage';
    import ColumnText from './EmailBody/ColumnText';
    import NosMissions from './EmailBody/NosMissions/NosMissions';
    import TitleTable from './EmailBody/TitleTable';
    import EvenColumn2 from "./EmailBody/EvenColumn2";
    import EvenColumn3 from "./EmailBody/EvenColumn3";
    import EvenColumn4 from "./EmailBody/EvenColumn4";

    export default {
        components: {
            EvenColumn2,
            EvenColumn3,
            EvenColumn4,
            TitleTable,
            NosMissions,
            ColumnText,
            imageFullPage,
            Introduction,
            ThumbnailLeftTextRight,
            ThumbnailRightTextLeft
        },
        name: 'email-body',

        props: ['config'],

        data() {
            return {
                twitter: this.config.twitter,
                mouvements: this.config.mouvements,
                missions: this.config.missions
            };
        }
    };
</script>

