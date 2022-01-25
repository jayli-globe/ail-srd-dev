<template>
    <section>
    <div class="columns">
        <div class="column">
            <b-field label="Policy Num#" label-position="on-border">
                <b-input v-model="VM.policyNum" placeholder='Policy #'></b-input>
            </b-field>
        </div>
        <div class="column">
            <StateCode v-on:codeChanged="handleStateCodeChanged"/>
        </div>
        <div class="column">
            <b-field label="County" label-position="on-border">
                <b-input v-model="VM.county" placeholder="County"></b-input>
            </b-field>
        </div>
        <div class="column">
            <b-field label="Organization" label-position="on-border">
                <b-input v-model="VM.organization" placeholder="Organization"></b-input>
            </b-field>
        </div>
        <div class="column">
            <b-button type="is-info" rounded @click="searchPolicy">Search Policy</b-button>
        </div>
        <div class="column">
            <b-button type="is-warning" rounded>New Policy</b-button>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <b-table icon-pack="fas" bordered :data="tableData" default-sort="policyNum" v-if="isSearched">

                <b-table-column field="policyNum" label="Policy Num" width="160" sortable v-slot="props">
                    {{ props.row.policyNum }}
                </b-table-column>
                <b-table-column field="orgName1" label="Name1" sortable v-slot="props">
                    {{ props.row.orgName1 }}
                </b-table-column>
                <b-table-column field="orgName2" label="Name2" sortable v-slot="props">
                    {{ props.row.orgName2 }}
                </b-table-column>
                <b-table-column field="stateAbbrev" label="State" width="80" sortable v-slot="props">
                    {{ props.row.stateAbbrev }}
                </b-table-column>
                <b-table-column field="countyName" label="County" width="160" sortable v-slot="props">
                    {{ props.row.countyName }}
                </b-table-column>
                <b-table-column field="displayTermDate" label="TermDate" width="120" sortable v-slot="props">
                    <span class="tag is-danger is-light" v-if="props.row.displayTermDate != ''">
                        {{ props.row.displayTermDate }}
                    </span>
                </b-table-column>
                <b-table-column field="date" label="" centered v-slot="props">
                    <b-button type="is-info is-small" @click="viewPolicy(props.row)" rounded>View</b-button>
                </b-table-column>

                <template #empty>
                    <div class="has-text-centered">No records</div>
                </template>

            </b-table>
        </div>
    </div>
    </section>
</template>
<script>
import dataService from '@/services/dataService'
import StateCode from '../Shared/StateCode.vue'
import router from '@/router'

export default {
    name: 'SearchPolicy',
    components: {
        StateCode
    },
    data () {
        return {
        VM: {
            policyNum: '',
            state: '',
            county: '',
            organization: ''
        },
        isSearched: false,
        tableData: []
        }
    },
    methods: {
        handleStateCodeChanged (state) {
            this.VM.state = state
        },
        searchPolicy () {
            this.isSearched = true
            const req = {
                policyNum: this.VM.policyNum,
                state: this.VM.state,
                county: this.VM.county,
                organization: this.VM.organization
            }
            dataService.searchPolicy(req).then((response) => {
                this.tableData = response.data.result
            })
        },
        viewPolicy (row) {
            router.push({ path: 'viewPolicy', query: { policyNum: row.policyNum } })
        }
    }
}
</script>
