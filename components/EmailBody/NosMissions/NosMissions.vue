<template>
    <!-- Thumbnail Left, Text Right : BEGIN -->
    <tr>
        <!-- dir=ltr is where the magic happens. This can be changed to dir=rtl to swap the alignment on wide while maintaining stack order on narrow. -->
        <td dir="ltr" bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%"
            style="padding: 0px 0;">
            <!--[if mso]>
            <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780"
                   style="width: 780px;">
                <tr>
                    <td align="center" valign="top" width="780" style="width: 780px;">
            <![endif]-->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                   style="max-width:780px;">
                <tr>
                    <td align="left" valign="top" style="font-size:0; padding: 0px 0;">
                        <!--[if mso]>
                        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780"
                               style="width: 780px;">
                            <tr>
                                <td align="left" valign="top" width="220" style="width: 220px;">
                        <![endif]-->
                        <div
                                style="display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:top; width:100%;"
                                class="stack-column">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td dir="ltr" style="padding: 0 10px 10px 10px;">
                                        <div v-for="(people, index) in peoples" :key="index" style="text-align:center">
                                            <img :src="people.url_images" width="100" height="" border="0"
                                                 alt="alt_text"
                                                 class="center-on-narrow"
                                                 style="width: 100%; max-width: 100px; height: 100px; margin-top: 20px; margin-bottom: 5px; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
                                            <h2 style="margin: 0; font-family: sans-serif; font-size: 20px; line-height: 125%; color: rgb(20, 160, 192); font-weight: normal;">
                                                {{people.trigramme}}</h2>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!--[if mso]>
                        </td>
                        <td align="left" valign="top" width="440" style="width: 440px;">
                        <![endif]-->
                        <div
                                style="display:inline-block; margin: 0 -2px; max-width:70%; min-width:320px; vertical-align:top;"
                                class="stack-column">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td dir="ltr"
                                        style="font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; padding: 10px 10px 0; text-align: left;"
                                        class="center-on-narrow">
                                        <h2
                                                style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 24px; line-height: 125%; color: rgb(20, 160, 192); font-weight: bold;">
                                            {{title}}</h2>
                                        <p style="margin: 0 0 10px 0;">
                                            <component :is="component"/>
                                        </p>
                                        <technos :liste="technos"/>
                                        <br>
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
                <tr>
                    <td>
                        <hr style="width: 60%; color: #dddddd">
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
</template>

<script>
    import ANEF from "@/contents/missions/ANEF.md"
    import AVIGNON from "@/contents/missions/AVIGNON.md"
    import conges from "@/contents/missions/conges_fait.md"
    import DISNEY from "@/contents/missions/DISNEY_fait.md"
    import CANAL from "@/contents/missions/CANAL.md"
    import FAURECIA from "@/contents/missions/FAURECIA.md"
    import INVIVO from "@/contents/missions/INVIVO_fait.md"
    import MEETIC from "@/contents/missions/MEETIC_fait.md"
    import PIX from "@/contents/missions/PIX_fait.md"
    import POLICE from "@/contents/missions/POLICE_fait.md"
    import RANDSTAD from "@/contents/missions/RANDSTAD_fait.md"
    import TEXA from "@/contents/missions/TEXA_fait.md"

    import Technos from '@/components/EmailBody/NosMissions/Technos'

    export default {
        name: 'nos-missions',
        components: {
            ANEF,
            AVIGNON,
            conges,
            DISNEY,
            CANAL,
            FAURECIA,
            INVIVO,
            MEETIC,
            PIX,
            POLICE,
            RANDSTAD,
            TEXA,
            Technos,
        },
        props: ['mission'],

        data() {
            return {
                component: this.mission.texte,
                title: this.mission.name,
                peoples: this.mission.peoples,
                technos: this.mission.technos,
            }
        }
    };
</script>

<style scoped>

</style>
