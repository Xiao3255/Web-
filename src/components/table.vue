<template>
    <div>
        <appScrollview class="appScrollview"></appScrollview>
        <appTablecell class="appTablecell"></appTablecell>
    </div>
</template>

<script>
import appTablecell from './tablecell' 
import appScrollview from './scrollView'

export default {
    name: 'app-table',
    components: {
        appTablecell,
        appScrollview
    }
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    .appScrollview{
        flex: 0 0 30%;
    }
    .appTablecell{
        flex: 0 0 70%;
    }
}

</style>