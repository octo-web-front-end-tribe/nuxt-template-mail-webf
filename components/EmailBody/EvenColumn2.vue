<template>
    <!-- 2 Even Columns : BEGIN -->
    <tr>
        <td bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%">
            <!--[if mso]>
            <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780">
                <tr>
                    <td align="center" valign="top" width="780">
            <![endif]-->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                   style="max-width:780px;">
                <tr>
                    <td align="center" valign="top" style="font-size:0; padding: 10px 0;">
                        <!--[if mso]>
                        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center"
                               width="780">
                            <tr>
                                <td align="left" valign="top" width="330">
                        <![endif]-->
                        <div style="text-align:left">
                            <h2 style="margin: 0px 10px 10px; font-family: sans-serif; font-size: 24px; line-height: 125%; color: rgb(20, 160, 192); font-weight: bold;">{{title}}</h2>
                        </div>
                        <even-colum310 :params="table[0]"/>
                        <!--[if mso]>
                        </td>
                        <td align="left" valign="top" width="330">
                        <![endif]-->
                        <even-colum310 :params="table[1]"/>
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
    <!--&lt;!&ndash; 2 Even Columns : END &ndash;&gt;-->
</template>
<script>
    import EvenColum310 from './EvenColum2/EvenColum310'

    export default {
        name: 'even-column-2',
        components: {EvenColum310},
        props: ['title', 'table']
    }
</script>
