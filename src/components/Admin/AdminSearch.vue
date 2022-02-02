<template>
    <section>
        <b-tabs position="is-centered" size="is-medium">
            <b-tab-item label="Policy">
                <SearchPolicy />
            </b-tab-item>
            <b-tab-item label="Activity">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>
            <b-tab-item label="Receipt">
                What light is light, if Silvia be not seen? <br>
                What joy is joy, if Silvia be not by— <br>
                Unless it be to think that she is by <br>
                And feed upon the shadow of perfection? <br>
                Except I be by Silvia in the night, <br>
                There is no music in the nightingale.
            </b-tab-item>
            <b-tab-item label="Claim">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>
            <b-tab-item label="Dictionary">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
import SearchPolicy from './SearchPolicy.vue'

export default {
  name: 'AdminSearch',
  components: {
    SearchPolicy
  }
}
</script>
