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
                                <b-field label="Policy Type" label-position="on-border">
                                    <b-select v-model="VM.policy.policyType" placeholder="Select" expanded>
                                        <option
                                            v-for="item in VM.policyTypes"
                                            :key="item.key"
                                            :value="item.value"
                                            >
                                            {{ item.displayName }}
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                            <div class="column">
                                <b-field label="Accident" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen1" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-two-thirds">
                                <b-field label="Risk Code" label-position="on-border">
                                    <b-select v-model="VM.policy.riskCode" placeholder="Select" expanded>
                                        <option
                                            v-for="item in VM.riskCodes"
                                            :key="item.key"
                                            :value="item.value"
                                            >
                                            {{ item.displayName }}
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                            <div class="column">
                                <b-field label="Dental" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen2" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-two-thirds">
                                <b-field label="Plan Code" label-position="on-border">
                                    <b-select v-model="VM.policy.planCode" placeholder="Select" expanded>
                                        <option
                                            v-for="item in VM.planCodes"
                                            :key="item.key"
                                            :value="item.value"
                                            >
                                            {{ item.displayName }}
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                            <div class="column">
                                <b-field label="Illness" label-position="on-border">
                                    <b-input v-model="VM.policy.maxBen3" placeholder="0"></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column is-two-thirds">
                                <b-field label="Summary Code" label-position="on-border">
                                    <b-select v-model="VM.policy.sumCat" placeholder="Select" expanded>
                                        <option
                                            v-for="item in VM.summaryCodes"
                                            :key="item.key"
                                            :value="item.value"
                                            >
                                            {{ item.displayName }}
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                            <div class="column">
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
    async created () {
        await this.loadPolicyView()
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
                pt.value = item._PolicyType
                pt.displayName = appService.zeroPad(item._PolicyType, 2) + ' - ' + item.description
                this.VM.policyTypes.push(pt)
            })
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
                rc.value = item.riskCode
                rc.displayName = appService.zeroPad(item.riskCode, 2) + ' - ' + item.description
                this.VM.riskCodes.push(rc)
            })
        },
        async loadPlanCodes () {
            const req = {
                entityName: 'plancode'
            }
            await dataService.getCodeByName(req).then((response) => {
                this.setPlanCodes(response.data.result)
            })
        },
        setPlanCodes (planCodeData) {
            planCodeData.forEach(item => {
                const pc = {}
                pc.key = item.planCode
                pc.value = item.planCode
                pc.displayName = appService.zeroPad(item.planCode, 2) + ' - ' + item.description
                this.VM.planCodes.push(pc)
            })
        },
        async loadSummaryCodes () {
            const req = {
                entityName: 'summarycode'
            }
            await dataService.getCodeByName(req).then((response) => {
                this.setSummaryCodes(response.data.result)
            })
        },
        setSummaryCodes (summaryCodeData) {
            summaryCodeData.forEach(item => {
                const sc = {}
                sc.key = item.summaryCode
                sc.value = item.summaryCode
                sc.displayName = appService.zeroPad(item.summaryCode, 2) + ' - ' + item.description
                this.VM.summaryCodes.push(sc)
            })
        }

    }
}
</script>
