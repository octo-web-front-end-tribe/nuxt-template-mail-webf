<template>
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 780px;" class="email-container">

        <introduction :config="config"/>

        <column-text component-name="Organisation"/>

        <even-column-2 :table="journees"/>

        <column-text component-name="Invitation"/>

        <column-text component-name="League"/>

        <column-text component-name="RetD"/>

        <imageFullPage :image="retd.image" padding="10px"/>

        <column-text component-name="Recrutement"/>

        <even-column-3 :title="mouvements.title" :table="mouvements.table"/>

        <thumbnail-left-text-right :title='parisWeb.title' :content="parisWeb.content" :image="parisWeb.image"
                                   :linkButton="parisWeb.linkButton"/>

        <thumbnail-right-text-left :title='vuejsAmsterdam.title' :content="vuejsAmsterdam.content"
                                   :image="vuejsAmsterdam.image" :linkButton="vuejsAmsterdam.linkButton"/>

        <imageFullPage :title="weo2018.title" :image="weo2018.image"/>

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
    import EvenColumn3 from "./EmailBody/EvenColumn3";
    import EvenColumn2 from "./EmailBody/EvenColumn2";

    export default {
        components: {
            EvenColumn2,
            EvenColumn3,
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
                parisWeb: this.config.parisWeb,
                journees: this.config.table,
                retd: this.config.retd,
                vuejsAmsterdam: this.config.vuejsAmsterdam,
                mouvements: this.config.mouvements,
                weo2018: this.config.weo2018,
                missions: this.config.missions
            };
        }
    };
</script>

