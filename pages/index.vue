<template>
  <div>
    <v-container>
      <v-card color="white">

        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="fullname" :rules="namerules" counter="25" label="name"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field v-model="phone" :rules="phonerules" counter maxlength="25" label="phone"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field v-model="zipcode" counter="6" label="code"
                  :counter-value="v => v.trim().split(' ').length"></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-btn @click="save">save</v-btn>
        </v-form>

      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      fullname: '',
      phone: '',
      zipcode: "",
      namerules: [value => !!value || 'Required.',],
      phonerules: [value => !!value || 'Required.',
      v => v.length === 10 || 'Max 10 characters'],
      // wordsRules: [v => v.trim().split(' ').length <= 5 || 'Max 5 words'],
    }
  },
  methods: {
    async save() {
      const insertUser = {
        name: this.fullname,
        phone: this.phone,
        zipcode: this.zipcode,


      }
      console.log(insertUser)
      await this.$axios.post('/api/transfer/transInsertUser', insertUser)

    }
  }
}
</script>
