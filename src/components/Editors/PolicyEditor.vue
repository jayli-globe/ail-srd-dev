<template>
    <section>
    <div class="columns">
        <div class="column is-half">
            <nav class="panel">
                <p class="panel-heading">
                    Organization Information
                </p>
                <div class="panel-block">
                    <NameAddress ref="NameAddress" />
                </div>
            </nav>
        </div>
        <div class="column is-half">
            <nav class="panel">
                <p class="panel-heading">
                    Coverage
                </p>
                <div class="panel-block">
                    <section style="width: 100%">
                        <div class="columns">
                            <div class="column is-two-thirds">
                            </div>
                            <div class="column">
                                <b-field label="Accident" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen1" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-two-thirds">
                            </div>
                            <div class="column">
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
                        </div>
                        <div class="columns">
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
                        </div>
                        <div class="columns">
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
                        </div>
                        <div class="columns">
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
import appService from '@/services/appService'
import dataService from '@/services/dataService'

export default {
    name: 'PolicyEditor',
    components: {
        NameAddress
    },
    mounted () {
        setTimeout(() => {
        this.loadPolicyView()
        }, 0)
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
            this.VM.nameAddress.name1 = policy.orgName1
            this.VM.nameAddress.name2 = policy.orgName2
            this.VM.nameAddress.address1 = policy.orgAddr1
            this.VM.nameAddress.address2 = policy.orgAddr2
            this.VM.nameAddress.city = policy.orgCitySt
            this.VM.nameAddress.zip = policy.orgZip
            this.VM.nameAddress.contact = policy.orgContact
            this.VM.nameAddress.email = policy.orgEmail
            this.VM.nameAddress.phone = policy.orgPhone
            this.setPolicyNameAddress()
        },
        setPolicyNameAddress () {
            let nameAddress = {}
            nameAddress = this.VM.nameAddress
            this.$refs.NameAddress.setNameAddress(nameAddress)
        },
        async loadPolicyView () {
            await this.loadPolicyTypes()
            await this.loadRiskCodes()
            await this.loadPlanCodes()
            await this.loadSummaryCodes()
        },
        async loadPolicyTypes () {
            const req = {
                entityName: 'policytype'
            }
            await dataService.getCodeByName(req).then((response) => {
                this.setPolicyTypes(response.data.result)
            })
        },
        setPolicyTypes (policyTypeData) {
            policyTypeData.forEach(item => {
                const pt = {}
                pt.key = item._PolicyType
                pt.value = item.description
                pt.displayName = appService.zeroPad(item._PolicyType, 2) + ' - ' + item.description
                this.VM.policyTypes.push(pt)
            })
            this.$refs.policyTypes.setItems(this.VM.policyTypes)
        },
        async loadRiskCodes () {
            const req = {
                entityName: 'riskcode'
            }
            await dataService.getCodeByName(req).then((response) => {
                this.setRiskCodes(response.data.result)
            })
        },
        setRiskCodes (riskCodeData) {
            riskCodeData.forEach(item => {
                const rc = {}
                rc.key = item.riskCode
                rc.value = item.description
                rc.displayName = appService.zeroPad(item.riskCode, 2) + ' - ' + item.description
                this.VM.riskCodes.push(rc)
            })
            this.$refs.riskCodes.setItems(this.VM.riskCodes)
        },
        async loadPlanCodes () {
            const req = {
                entityName: 'plancode'
            }
            await dataService.getCodeByName(req).then((response) => {
                this.VM.planCodes = response.data.result
            })
        },
        async loadSummaryCodes () {
            const req = {
                entityName: 'summarycode'
            }
            await dataService.getCodeByName(req).then((response) => {
                this.VM.summaryCodes = response.data.result
            })
        }

    }
}
</script>
