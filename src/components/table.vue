<template>
    <div class="appTable">
        <appScrollview></appScrollview>
        <appTablecell></appTablecell>
    </div>
</template>

<script>
import appTablecell from './TableCell' 
import appScrollview from './ScrollView'

export default {
    name: 'app-table',
    components: {
        appTablecell,
        appScrollview
    }
}
</script>

<style lang="scss" scoped>

</style>