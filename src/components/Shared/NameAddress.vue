<template>
    <section>
        <div class="columns">
            <div class="column is-full">
                <b-field label="Name" label-position="on-border">
                    <b-input v-model="VM.name1"></b-input>
                </b-field>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'NameAddress',
    data () {
        return {
            VM: {
                name1: '',
                name2: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                contact: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        handleChange () {
            this.$emit('nameAddressChanged', this.VM)
        },
        setNameAddress (nameAddress) {
            this.VM = nameAddress
        }
    }
}
</script>
