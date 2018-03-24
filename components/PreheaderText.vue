<template>
  <!-- Visually Hidden Preheader Text : BEGIN -->
  <div
    style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
    (Optional) This text will appear in the inbox preview, but not the email body. It can be used to supplement the
    email subject line or even summarize the email's contents. Extended text preheaders (~490 characters) seems like a
    better UX for anyone using a screenreader or voice-command apps like Siri to dictate the contents of an email. If
    this text is not included, email clients will automatically populate it using the text (including image alt text)
    at
    the start of the email's body.
  </div>
  <!-- Visually Hidden Preheader Text : END -->
</template>

<script>
    export default {
        name: 'preheader-text'
    };
</script>

<style scoped>

</style>
