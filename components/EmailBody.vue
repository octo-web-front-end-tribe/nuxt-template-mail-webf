<template>
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 780px;" class="email-container">

        <introduction :config="config"/>

        <title-table title="Status du reboot de la ref-card tests" ></title-table>

        <column-text componentName="RefCardTest"></column-text>

        <hero-image-flush :full-image="refcard.test.img" size="350px"></hero-image-flush>

        <title-table title="Status de la ref-card architecture front"></title-table>

        <column-text componentName="RefCardArchi"></column-text>

        <thumbnail-right-text-left :title="BOFNuxt.title" :content="BOFNuxt.content" :image="BOFNuxt.image" :linkButton="BOFNuxt.linkButton"></thumbnail-right-text-left>

        <thumbnail-left-text-right :title="BBLJest.title" :content="BBLJest.content" :image="BBLJest.image" :linkButton="BBLJest.linkButton"></thumbnail-left-text-right>

        <thumbnail-right-text-left :title="twitter.title" :content="twitter.content" :image="twitter.image" :linkButton="twitter.linkButton"></thumbnail-right-text-left>

        <thumbnail-left-text-right :title="sortie.title" :content="sortie.content" :image="sortie.image" :linkButton="sortie.linkButton"></thumbnail-left-text-right>

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
    import HeroImageFlush from "./EmailBody/HeroImageFlush";

    export default {
        components: {
            HeroImageFlush,
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
                refcard: this.config.refcard,
                BBLJest: this.config.BBLJest,
                BOFNuxt: this.config.BOFNuxt,
                twitter: this.config.twitter,
                sortie: this.config.sortie,
                mouvements: this.config.mouvements,
                missions: this.config.missions
            };
        }
    };
</script>

