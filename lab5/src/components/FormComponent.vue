<script setup>
import {ref, watch} from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();

const initialValues = ref({
  username: '',
  email: '',
  phone: '',
  comment: '',
  check: false,
});

//console.log(initialValues.value)

const resolver = zodResolver(
    z.object({
      username: z.string().min(1, { message: 'Username is required.' }),
      email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
      phone: z.string().min(1, { message: 'Phone number is required.' }),
      comment: z.string().min(1, { message: 'Comment is required.' }),
      check: z.literal(true, { message: 'You must agree to the terms and conditions' }),
    })
);

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'FormComponent is submitted.', life: 3000 });
    console.log(initialValues.value)
  }
};


</script>

<template>
  <div class="card flex justify-center">
    <h2>Write to us!</h2>
    <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="items flex flex-col gap-4 w-full sm:w-56">
      <div class="item flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
      </div>
      <div class="item flex flex-col gap-1">
        <InputText name="email" type="text" placeholder="Email" fluid />
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
      </div>
      <div class="item flex-auto">
        <InputMask id="phone"  mask="(999) 999-9999" placeholder="Phone" name="phone" fluid />
        <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">{{ $form.phone.error?.message }}</Message>
      </div>
      <div class="item flex flex-col gap-1">
        <Textarea id="description" rows="5" cols="30" style="resize: none" placeholder="Comment" name="comment" fluid />
        <Message v-if="$form.comment?.invalid" severity="error" size="small" variant="simple">{{ $form.comment.error?.message }}</Message>
      </div>
      <div class="item flex items-center gap-2">
        <Checkbox name="check" binary inputId="check"/>
        <label for="check"> “I agree to the privacy policy” </label>
        <Message v-if="$form.check?.invalid" severity="error" size="small" variant="simple">{{ $form.check.error?.message }}</Message>
      </div>
      <Toast />
      <Button type="submit" severity="secondary" label="Submit" class="btn"/>
    </Form>
  </div>
</template>

<style scoped>
.card{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.items{
  width: 350px;
  border: 1px solid #9f9e9e;
  border-radius: 10px;
}

.item{
  margin: 10px;
  padding: 10px;
}

.btn{
  width: 250px;
  padding: 10px;
  margin: 10px;
  background-color: #37769e;
  color: #fff;
  position: relative;
  left: 40px;
}

h2{
  font-size: 50px;
  position: relative;
  bottom: 20px;
}

</style>