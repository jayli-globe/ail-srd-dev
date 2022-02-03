<template>
    <b-field label="State" label-position="on-border">
        <b-select v-model="state" @input="handleCodeChange" placeholder="Select a state" expanded>
            <option
                v-for="item in this.states"
                :key="item.stateCode"
                :value="item.stateCode"
                >
                {{ item.displayName }}
            </option>
        </b-select>
        <a href='#' @click="clear" v-show="state != null">
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
            state: null,
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
            this.state = null
            this.handleCodeChange()
        },
        handleCodeChange () {
            this.$emit('codeChanged', this.state)
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
