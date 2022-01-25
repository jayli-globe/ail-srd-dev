<template>
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
</template>
<script>
import StateCode from '../Shared/StateCode.vue'

export default {
  name: 'SearchPolicy',
  components: {
    StateCode
  }
}
</script>
