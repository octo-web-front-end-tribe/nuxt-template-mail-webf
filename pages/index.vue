<template>
    <div>
        <img src="https://www.google-analytics.com/collect?v=1&tid=UA-32427720-2&cid=555&t=event&ec=email&ea=open&dp=%2Femail%2Fnewsletter&dt=NewsletterJuin2018&el=NewsletterJuin2018&cs=newsletter">
        <preheader-text :params="config.preheader"/>
        <!--
            Set the email width. Defined in two places:
            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.
            2. MSO tags for Desktop Windows Outlook enforce a 680px width.
            Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I've found that 680px is a good width. Change with caution.
        -->
        <div style="max-width: 780px; margin: auto;" class="email-container">
            <!--[if mso]>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">
                <tr>
                    <td>
            <![endif]-->

            <email-header :params="config.header"/>

            <email-body :config="config"/>

            <!--[if mso]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </div>
        <email-footer :params="email_footer_params"/>
    </div>
</template>

<script>
    import PreheaderText from '../components/PreheaderText';
    import EmailFooter from '../components/EmailFooter';
    import EmailHeader from '../components/EmailHeader';
    import EmailBody from '../components/EmailBody';

    import configuration from '@/contents/config';

    export default {
        components: {
            EmailBody,
            EmailHeader,
            EmailFooter,
            PreheaderText
        },
        data() {
            return {
                config: configuration,
                email_footer_params: {
                    driveImageID: configuration.logoWebF.linkID
                }
            };
        }
    };
</script>

<style>

</style>
