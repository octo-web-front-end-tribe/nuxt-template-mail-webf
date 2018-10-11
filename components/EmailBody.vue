<template>
    <!-- Email Body : BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
           style="max-width: 780px;" class="email-container">

        <introduction :config="config"/>

        <title-table title="À la découverte des architectures du front"></title-table>

        <column-text componentName="RefCardArchi"></column-text>

        <hero-image-flush :full-image="refcard.archi.img" :size="refcard.archi.size" :alt="refcard.archi.alt"></hero-image-flush>


        <title-table title="Refcard Test : où en sommes-nous ?"></title-table>

        <column-text componentName="RefCardTest"></column-text>

        <hero-image-flush :full-image="refcard.test.img" :size="refcard.test.size" :alt="refcard.test.alt"></hero-image-flush>

        <title-table title="Les vacances des WebF !!"></title-table>

        <hero-image-flush :full-image="vacances.img" :size="vacances.size" :alt="vacances.alt"></hero-image-flush>

        <title-table title="Nos meilleurs Tweets du trimestre"></title-table>

        <hero-image-flush :full-image="twitter.first.img" :size="twitter.first.size" :link="twitter.first.link" :alt="twitter.first.alt"></hero-image-flush>
        <hero-image-flush :full-image="twitter.second.img" :size="twitter.second.size" :link="twitter.second.link" :alt="twitter.second.alt"></hero-image-flush>
        <hero-image-flush :full-image="twitter.third.img" :size="twitter.third.size" :link="twitter.third.link" :alt="twitter.third.alt"></hero-image-flush>
        <hero-image-flush :full-image="twitter.fourth.img" :size="twitter.fourth.size" :link="twitter.fourth.link" :alt="twitter.fourth.alt"></hero-image-flush>
        <hero-image-flush :full-image="twitter.fifth.img" :size="twitter.fifth.size" :link="twitter.fifth.link" :alt="twitter.fifth.alt"></hero-image-flush>

        <even-column-2 :title="mouvements.title" :table="mouvements.table"/>

        <title-table title="Nos missions"/>

        <nos-missions v-for="(mission, index) in missions" :key="index" :mission="mission"/>
    </table>
    <!-- Email Body : END -->
</template>

<script>
  import ThumbnailRightTextLeft from './EmailBody/ThumbnailRightTextLeft'
  import ThumbnailLeftTextRight from './EmailBody/ThumbnailLeftTextRight'
  import Introduction from './EmailBody/Introduction'

  import imageFullPage from './EmailBody/ImageFullPage'
  import ColumnText from './EmailBody/ColumnText'
  import NosMissions from './EmailBody/NosMissions/NosMissions'
  import TitleTable from './EmailBody/TitleTable'
  import EvenColumn2 from './EmailBody/EvenColumn2'
  import EvenColumn3 from './EmailBody/EvenColumn3'
  import EvenColumn4 from './EmailBody/EvenColumn4'
  import HeroImageFlush from './EmailBody/HeroImageFlush'

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

    data () {
      return {
        refcard: this.config.refcard,
        mouvements: this.config.mouvements,
        missions: this.config.missions,
        vacances: this.config.vacances,
        twitter: this.config.twitter
      }
    }
  }
</script>

