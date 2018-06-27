<template>
    <!--&lt;!&ndash; 3 Even Columns : BEGIN &ndash;&gt;-->
    <tr>
        <td bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%" style="padding: 10px 0;">
            <!--[if mso]>
            <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780">
                <tr>
                    <td align="center" valign="top" width="780">
            <![endif]-->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                   style="max-width:780px;">
                <tr>
                    <td align="center" valign="top" style="font-size:0;">
                        <!--[if mso]>
                        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center"
                               width="780">
                            <tr>
                                <td align="left" valign="top" width="190">
                        <![endif]-->
                        <div style="text-align:left">
                            <h2 style="margin: 0px 10px 10px; font-family: sans-serif; font-size: 24px; line-height: 125%; color: rgb(20, 160, 192); font-weight: bold;">{{title}}</h2>
                        </div>
                        <even-column170 :params="table[0]"/>
                        <!--[if mso]>
                        </td>
                        <td align="left" valign="top" width="190">
                        <![endif]-->
                        <even-column170 :params="table[1]"/>
                        <!--[if mso]>
                        </td>
                        <td align="left" valign="top" width="190">
                        <![endif]-->
                        <even-column170 :params="table[2]"/>
                        <!--[if mso]>
                        </td>

                        <td align="left" valign="top" width="190">
                        <![endif]-->
                        <even-column170 :params="table[3]"/>
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
    <!-- 3 Even Columns : END -->
</template>

<script>
    import EvenColumn170 from "./EvenColumn4/EvenColumn170";
    export default {
        name: 'even-column-4',
        components: {EvenColumn170},
        props: ['title', 'table'],

        data() {
            return {};
        }
    };
</script>

<style scoped>

</style>
