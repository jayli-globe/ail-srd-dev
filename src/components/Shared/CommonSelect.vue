<template>
    <b-field :label="label" label-position="on-border">
        <b-select v-model="selected" @input="handleCodeChange" placeholder="Please Select" expanded>
            <option
                v-for="item in items"
                :key="item.key"
                :value="item.value"
                >
                {{ item.displayName }}
            </option>
        </b-select>
        <a href='#' @click="clear" v-show="selected != null">
            <b-icon pack="fas" icon="times" class="clear-icon"></b-icon>
        </a>
    </b-field>
</template>
<script>
export default {
    name: 'CommonSelect',
    props: ['label'],
    data () {
        return {
            selected: null,
            items: null
        }
    },
    methods: {
        clear () {
            this.selected = null
            this.handleCodeChange()
        },
        handleCodeChange () {
            this.$emit('codeChanged', this.selected)
        },
        setItems (items) {
            this.items = items
        }
    }
}
</script>
<style scoped>
.clear-icon {
    margin-top: 8px;
    color: grey;
}
</style>
