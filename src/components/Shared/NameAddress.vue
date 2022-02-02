<template>
    <section style="width: 100%">
        <div class="columns">
            <div class="column is-full">
                <b-field label="Name" label-position="on-border">
                    <b-input v-model="VM.name1"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                <b-field label-position="on-border">
                    <b-input v-model="VM.name2"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                <b-field label="Address" label-position="on-border">
                    <b-input v-model="VM.address1"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                <b-field label-position="on-border">
                    <b-input v-model="VM.address2"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                <b-field label="City" label-position="on-border">
                    <b-input v-model="VM.city"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-8">
                <b-field label="State" label-position="on-border">
                    <b-input v-model="VM.state"></b-input>
                </b-field>
            </div>
            <div class="column is-4">
                <b-field label="Zip" label-position="on-border">
                    <b-input v-model="VM.zip"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                <b-field label="Contact" label-position="on-border">
                    <b-input v-model="VM.contact"></b-input>
                </b-field>
            </div>
        </div>
        <div class="columns">
            <div class="column is-8">
                <b-field label="Email" label-position="on-border">
                    <b-input v-model="VM.email"></b-input>
                </b-field>
            </div>
            <div class="column is-4">
                <b-field label="Phone" label-position="on-border">
                    <b-input v-model="VM.phone"></b-input>
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
<style scoped>
 .second-text-box {
     padding-top: 0px;
     margin-top: -5px;
 }
</style>
