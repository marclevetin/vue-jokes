<template>
    <v-card>
      <v-card-text>
        {{text}}
      </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "SingleJoke",
    props: ['text']
}
</script>