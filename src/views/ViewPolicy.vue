<template>
    <section>
        <b-breadcrumb align="is-left">
            <b-breadcrumb-item tag='router-link' to="/admin">Home</b-breadcrumb-item>
            <b-breadcrumb-item tag='router-link' to="/viewPolicy" active>View Policy - {{VM.policyNum}}</b-breadcrumb-item>
        </b-breadcrumb>
        <b-tabs class="block" pack="fas">
            <template v-for="item in editableTabs">
                <b-tab-item
                    :key="item.id"
                    :value="item.id"
                    :label="item.label">
                    <PolicyDetails ref="PolicyDetails" v-if="item.content=='policy-details'" />
                    <PolicyActivities :policyNum="VM.policyNum" v-if="item.content=='policy-activities'" />
                    <PolicyReceipts :policyNum="VM.policyNum" v-if="item.content=='policy-receipts'" />
                    <PolicyClaims :policyNum="VM.policyNum" v-if="item.content=='policy-claims'" />
                    <PolicyLetters :policyNum="VM.policyNum" v-if="item.content=='policy-letters'" />
                </b-tab-item>
            </template>
        </b-tabs>
    </section>
</template>

<script>
import PolicyDetails from '@/components/Policy/PolicyDetails.vue'
import PolicyActivities from '@/components/Policy/PolicyActivities.vue'
import PolicyReceipts from '@/components/Policy/PolicyReceipts.vue'
import PolicyClaims from '@/components/Policy/PolicyClaims.vue'
import PolicyLetters from '@/components/Policy/PolicyLetters.vue'

export default {
    name: 'ViewPolicy',
    components: {
        PolicyDetails,
        PolicyActivities,
        PolicyReceipts,
        PolicyClaims,
        PolicyLetters
    },
    mounted () {
        const policyNum = this.$route.query.policyNum
        this.setPolicyNum(policyNum)
    },
    data () {
        return {
            VM: {
                policyNum: null
            },
            editableTabs: [
            {
                label: 'Details',
                id: '1',
                content: 'policy-details'
            },
            {
                label: 'Activities',
                id: '2',
                content: 'policy-activities'
            },
            {
                label: 'Receipts',
                id: '3',
                content: 'policy-receipts'
            },
            {
                label: 'Claims',
                id: '4',
                content: 'policy-claims'
            },
            {
                label: 'Letters',
                id: '5',
                content: 'policy-letters'
            }]
        }
    },
    methods: {
        setPolicyNum (policyNum) {
            this.VM.policyNum = policyNum
            this.$refs.PolicyDetails[0].setPolicyNum(policyNum)
        }
    }
}
</script>
