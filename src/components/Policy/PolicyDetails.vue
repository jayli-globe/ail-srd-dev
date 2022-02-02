<template>
<section>
    <div class="columns">
        <div class="column is-three-quarters">
            <PolicyEditor ref="PolicyEditor" />
        </div>
        <div class="column">
                <nav class="panel">
                    <p class="panel-heading">
                        Letter History
                    </p>
                    <div class="panel-block">
                    </div>
                </nav>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <b-button type="is-info" rounded>Save</b-button>
            &nbsp;
            <b-button type="is-warning" rounded>New Letter</b-button>
        </div>
    </div>
</section>
</template>
<script>
import PolicyEditor from '@/components/Editors/PolicyEditor.vue'
import dataService from '@/services/dataService'

export default {
    name: 'PolicyDetails',
    components: {
        PolicyEditor
    },
    data () {
        return {
            VM: {
                policyNum: null,
                letterHistoryFilter: null
            }
        }
    },
    methods: {
        setPolicyNum (policyNum) {
            this.VM.policyNum = policyNum
            this.getPolicyById(policyNum)
        },
        getPolicyById (policyNum) {
            this.VM.policyNum = policyNum
            dataService.getEntityById('policy', policyNum).then((response) => {
                this.setPolicy(response.data.result)
            })
        },
        setPolicy (policy) {
            this.$refs.PolicyEditor.setPolicy(policy)
        }
    }
}
</script>
