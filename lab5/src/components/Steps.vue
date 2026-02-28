<script setup>

</script>


<template>
  <div class="card flex justify-center">
    <h2>How it work?</h2>
    <Stepper value="1" class="step basis-[50rem]">
      <StepList>
        <Step value="1">Register or login</Step>
        <Step value="2">Fill in payment options</Step>
        <Step value="3">Setup your agents</Step>
      </StepList>
      <StepPanels class="items">
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col h-48">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              The client creates a profile or logs into an existing one
            </div>
          </div>
          <div class="flex pt-8 justify-end">
            <Button class="btn" id="btn-next" label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')" />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col h-48">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Fill in information for payment
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button class="btn" label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
            <Button class="btn" id="btn-next" label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col h-48">
            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Setup your agent whereever you need them, give them the rights to read/write and watch in horror how they delete your hard work
            </div>
          </div>
          <div class="pt-6">
            <Button class="btn color-warning-500" label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>


<style scoped>
.card{
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.step{
  width: 800px;
  font-size: 20px;
}

.items{
  border: 1px solid #9f9e9e;
  border-radius: 10px;
  padding: 40px;
  margin: 10px;
}

.btn{
  margin-top: 16px;
}

#btn-next{
  position: relative;
}

h2{
  position: relative;
  bottom: 70px;
  font-size: 50px;
}
</style>