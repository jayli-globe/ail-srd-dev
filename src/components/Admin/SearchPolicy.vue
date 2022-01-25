<template>
        <section>
    <div class="columns">
        <div class="column">
            <b-field label="Policy Num#" label-position="on-border">
                <b-input placeholder='Policy #'></b-input>
            </b-field>
        </div>
        <div class="column">
            <StateCode />
        </div>
        <div class="column">
            <b-field label="County" label-position="on-border">
                <b-input></b-input>
            </b-field>
        </div>
        <div class="column">
            <b-field label="Organization" label-position="on-border">
                <b-input></b-input>
            </b-field>
        </div>
        <div class="column">
            <b-button type="is-info" rounded>Search Policy</b-button>
        </div>
        <div class="column">
            <b-button type="is-warning" rounded>New Policy</b-button>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <b-table icon-pack="fas" bordered
                :data="data"
                :sort-icon-size="sortIconSize"
                default-sort="last_name"
                >

                <b-table-column field="id" label="ID" width="50" sortable numeric v-slot="props">
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="first_name" label="First Name" sortable v-slot="props">
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name" sortable v-slot="props">
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="date" label="Date" sortable centered v-slot="props">
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Gender" v-slot="props">
                    <span>
                        <b-icon
                            v-if="props.row.id !== 'Total'"
                            pack="fas"
                            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                        </b-icon>
                        {{ props.row.gender }}
                    </span>
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
import StateCode from '../Shared/StateCode.vue'

export default {
    name: 'SearchPolicy',
    components: {
        StateCode
    },
    data () {
        const data = [
            { id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016/10/15 13:43:27', gender: 'Male' },
            { id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016/12/15 06:00:53', gender: 'Male' }
        ]

        return {
            data,
            defaultSortDirection: 'asc',
            sortIcon: 'arrow-up',
            sortIconSize: 'is-small'
        }
    }
}
</script>
