<template>
  <!-- Thumbnail Right, Text Left : BEGIN -->
  <tr>
    <!-- dir=rtl is where the magic happens. This can be changed to dir=ltr to swap the alignment on wide while maintaining stack order on narrow. -->
    <td dir="rtl" bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%"
        style="padding: 10px 0;">
      <!--[if mso]>
      <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780"
             style="width: 780px;">
        <tr>
          <td align="center" valign="top" width="780">
      <![endif]-->
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
             style="max-width:780px;">
        <tr>
          <td align="center" valign="top" style="font-size:0; padding: 10px 0;">
            <!--[if mso]>
            <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780"
                   style="width: 780px;">
              <tr>
                <td align="left" valign="top" width="220" style="width: 220px;">
            <![endif]-->
            <div
              style="display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:bottom; width:100%;"
              class="stack-column">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td dir="ltr" style="padding: 0 10px 10px 10px;">
                    <img :src="srcImage" width="200" height="" border="0" alt="alt_text"
                         class="center-on-narrow"
                         style="width: 100%; max-width: 200px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
                  </td>
                </tr>
              </table>
            </div>
            <!--[if mso]>
            </td>
            <td align="left" valign="top" width="440" style="width: 440px;">
            <![endif]-->
            <div
              style="display:inline-block; margin: 0 -2px; max-width:66.66%; min-width:320px; vertical-align:top;"
              class="stack-column">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td dir="ltr"
                      style="font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; padding: 10px 10px 0; text-align: left;"
                      class="center-on-narrow">
                    <h2
                      style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 24px; line-height: 125%; color: rgb(20, 160, 192); font-weight: bold;">
                      {{title}}</h2>
                    <p style="margin: 0 0 10px 0;" v-html="content"></p>
                    <br>
                    <email-button  :texte="linkButton.title" :url-link="linkButton.url" align-button="center"/>
                  </td>
                </tr>
              </table>
            </div>
            <!--[if mso]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
      </table>
      <!--[if mso]>
      </td>
      </tr>
      </table>
      <![endif]-->
    </td>
  </tr>
  <!-- Thumbnail Right, Text Left : END -->
</template>

<script>
    import EmailButton from './EmailButton';
    import Drive from '@/services/linkDrive';

    export default {
      components: { EmailButton },
      name: 'thumbnail-right-text-left',
      props: ['title', 'content', 'image', 'linkButton'],

      data () {
        return {
          srcImage: Drive.linkDrive(this.image)
        }
      }
    };
</script>

<style scoped>

</style>
