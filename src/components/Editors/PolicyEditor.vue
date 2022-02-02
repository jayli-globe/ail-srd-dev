<template>
    <section>
    <div class="columns">
        <div class="column is-half">
            <nav class="panel">
                <p class="panel-heading">
                    Organization Information
                </p>
                <div class="panel-block">
                    <NameAddress />
                </div>
            </nav>
        </div>
        <div class="column is-half">
            <nav class="panel">
                <p class="panel-heading">
                    Coverage
                </p>
                <div class="panel-block">
                    <section>
                        <div class="columns">
                            <div class="column is-half">
                                <b-field label="Accident" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen1" placeholder="0"></b-input>
                                </b-field>
                            </div>
                            <div class="column is-half">
                                <b-field label="Dental" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen2" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-half">
                                <b-field label="Illness" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen3" placeholder="0"></b-input>
                                </b-field>
                            </div>
                            <div class="column is-half">
                                <b-field label="Disease" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen4" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-half">
                                <b-field label="Loss Life" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen5" placeholder="0"></b-input>
                                </b-field>
                            </div>
                            <div class="column is-half">
                                <b-field label="Dbl Dismem" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen6" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-half">
                                <b-field label="Sgl Dismem" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen7" placeholder="0"></b-input>
                                </b-field>
                            </div>
                            <div class="column is-half">
                                <b-field label="Eye Sight" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen8" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                    </section>
                </div>
            </nav>
        </div>
    </div>
    <div class="columns">
        <div class="column is-half">
            <nav class="panel">
                <p class="panel-heading">
                    Additional Information
                </p>
                <div class="panel-block">
                    Address
                </div>
            </nav>
        </div>
        <div class="column is-half">
            <nav class="panel">
                <p class="panel-heading">
                    Notes
                </p>
                <div class="panel-block">
                    Address
                </div>
            </nav>
        </div>
    </div>
    </section>
</template>
<script>
import NameAddress from '@/components/Shared/NameAddress.vue'

export default {
    name: 'PolicyEditor',
    components: {
        NameAddress
    },
    data () {
        return {
            VM: {
                policy: {},
                nameAddress: {},
                policyTypes: [],
                riskCodes: [],
                planCodes: [],
                summaryCodes: [],
                appTypes: [
                    { appTypeCode: 'O', description: 'Online' },
                    { appTypeCode: 'L', description: 'List' },
                    { appTypeCode: 'E', description: 'Email' }
                ]
            }
        }
    },
    methods: {
        setPolicy (policy) {
            this.VM.policy = policy
        }
    }

}
</script>
