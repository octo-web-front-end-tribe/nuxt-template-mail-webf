<template>
    <!-- Visually Hidden Preheader Text : BEGIN -->
    <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
        La tribu WebF vous partage ses dernières nouveautés ({{params.startMonth}} -> {{params.endMonth}}
        {{params.year}}). {{params.themes}}.
    </div>
    <!-- Visually Hidden Preheader Text : END -->
</template>

<script>
    export default {
        name: 'preheader-text',
        props: ['params']
    };
</script>

<style scoped>

</style>
