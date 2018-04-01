<template>
  <div
    style="display:inline-block; margin: 0 -2px; width:100%; min-width:200px; max-width:330px; vertical-align:top;"
    class="stack-column">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td style="padding: 10px 10px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                 style="font-size: 14px;text-align: left;">
            <tr>
              <td style="text-align: center">
                <img :src="image" width="270" height="" border="0" alt="alt_text"
                     class="center-on-narrow"
                     style="width: 100%; max-width: 270px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
              </td>
            </tr>
            <tr>
              <td
                style="text-align: center; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; padding-top: 10px;"
                class="stack-column-center">
                <p style="margin: 0;" v-html="journee.content"></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Drive from '@/services/linkDrive';

  export default {
    name: 'even-colum310',
    props: ['journee'],

    data () {
      return {
        image: Drive.linkDrive(this.journee.image) || 'http://placehold.it/310'
      }
    }
  };
</script>

<style scoped>

</style>
