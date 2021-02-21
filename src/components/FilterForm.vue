<template>
    <b-input-group>
        <b-form-select   id="teachers"></b-form-select>
        <b-form-select></b-form-select>
        <b-input-group-append class="pl-2">
            <b-button variant="outline-light bg-success" >Пошук</b-button>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
    export default {
        name: "FilterForm"
    }
</script>

<style scoped>

</style>