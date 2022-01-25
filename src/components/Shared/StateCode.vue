<template>
    <b-field label="State" label-position="on-border">
        <b-select v-model="selected" placeholder="Select a state" expanded>
            <option
                v-for="item in this.states"
                :key="item.stateCode"
                :value="item.stateCode"
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
import appService from '@/services/appService'
import dataService from '@/services/dataService'

export default {
    name: 'StateCode',
    mounted () {
        this.states = []
        const req = {
            entityName: 'statecode'
        }
        dataService.getCodeByName(req).then((response) => {
            this.setStates(response.data.result)
        })
    },
    data () {
        return {
            selected: null,
            states: []
        }
    },
    methods: {
        setStates (statesData) {
            statesData.forEach(item => {
                const st = {}
                st.stateCode = item.stateCode
                st.stateName = item.stateName
                st.displayName = appService.zeroPad(item.stateCode, 2) + ' - ' + item.stateName
                this.states.push(st)
            })
        },
        clear () {
            this.selected = null
        }
    }
}
</script>
<style scoped>
.clear-icon {
    margin-top: 6px;
    color: grey;
}
</style>
