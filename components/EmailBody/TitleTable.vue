<template>
    <tr>
        <td bgcolor="#ffffff">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td style="padding: 10px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
                        <h1
                                style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 24px; line-height: 125%; color:rgb(20, 160, 192); font-weight: bold;">
                            {{title}}</h1>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'title-table',
        props: ['title']
    };
</script>

<style scoped>

</style>
