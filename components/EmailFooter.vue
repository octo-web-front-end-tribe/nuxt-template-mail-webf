<template>
    <table role="presentation" bgcolor="#001849" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
        <tr>
            <td valign="top" align="center">
                <div style="max-width: 780px; margin: auto;" class="email-container">
                    <!--[if mso]>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">
                        <tr>
                            <td>
                    <![endif]-->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 40px; padding-right: 10px; padding-left: 10px; text-align: center; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #ffffff;">
                                <p style="margin: 0;">
                                    <logo :driveImageID="params.driveImageID"/>
                                    <br>
                                    <b style="font-size: large">There is a better Web</b>
                                    <br>
                                    <br>
                                    Nous accompagnons les acteurs du Web pour construire des architectures Front
                                    innovantes et de qualité.
                                </p>
                            </td>
                        </tr>
                    </table>
                    <!--[if mso]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
    import Logo from '@/components/EmailFooter/Logo';

    export default {
        components: {Logo},
        name: 'email-footer',

        props: ['params']
    };
</script>