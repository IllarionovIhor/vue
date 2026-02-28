<script setup>
import {useForm, useField, FieldArray, Field, ErrorMessage} from "vee-validate";
import { useValidSchema } from "@/hooks/useValidSchema.js";
import { useI18n } from "vue-i18n";
import {watch} from "vue";

const { t, locale } = useI18n({useScope: 'global'});

const { schema } = useValidSchema()

const { handleSubmit, resetForm, setFieldError, validate} = useForm({
  validationSchema: schema
});

const {value: name} = useField("name");
const {value: email} = useField("email");
const {value: dateOfBirth} = useField("dateOfBirth");
const {value: address} = useField("address");


const onSubmit = handleSubmit((values) => {
  // setEmailError()
  // setNameError()
  // setAddressError()
  // setDateError()
  console.log(values)
})

const setEmailError = () => {
  setFieldError('email', 'Invalid email')
}

const setNameError = () => {
  setFieldError('name', 'Invalid name')
}

const setAddressError = () => {
  setFieldError('address', 'Invalid address')
}

const setDateError = () => {
  setFieldError('dateOfBirth', 'Invalid date of birth')
}

</script>

<template>
<form @submit.prevent="onSubmit" class="form">
  <input type="text" name="name" :placeholder="t('placeholders.name')" v-model="name"  class="field"/>
  <ErrorMessage name="name" class="error"/>

  <input type="email" name="email" :placeholder="t('placeholders.email')" v-model="email"  class="field"/>
  <ErrorMessage name="email" class="error"/>

  <input type="date" name="dateOfBirth" placeholder="Date Of Birth" v-model="dateOfBirth"  class="field"/>
  <ErrorMessage name="dateOfBirth" class="error"/>

  <input type="text" name="address" :placeholder="t('placeholders.address')" v-model="address"  class="field"/>
  <ErrorMessage name="address" class="error"/>

  <FieldArray name="phones"  v-slot="{ fields, push, remove }" >
    <fieldset class="field-p">
    <legend> {{t('legacy')}} </legend>

    <div v-for="(field, idx) in fields" :key="field.key" class="field-wrapper">
      <Field :name="`phones[${idx}]`" type="text" id="phone-input"/>
      <button @click="remove (idx)" class="delete">{{t('buttons.delete')}}</button>
    </div>

      <button type="button" @click="push ()" class="push">{{t('buttons.add')}}</button>
    </fieldset>
  </FieldArray>
  <ErrorMessage name="phones" class="error"/>

  <button type="submit" class="submit">{{t('buttons.submit')}}</button>
  <button @click="resetForm()" class="reset">{{t('buttons.reset')}}</button>

</form>


</template>

<style scoped>
.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 25px;
}

.field{
  padding: 15px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #888888;
  font-size: 16px;

}

.error{
  color: red;
}

button{
  color: white;
  width: 200px
}

.submit{
  background-color: #5cb85c;
}

.reset{
  background-color: rgb(131, 131, 131);
}

.delete{
  background-color: red;
  width: 100px
}

.push{
  background-color: #37769e;
}

.field-p{
  padding: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.field-wrapper{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.field-wrapper #phone-input {
  border: 1px solid #888888;
  border-radius: 5px;
}

</style>