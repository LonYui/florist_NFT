<template>
ispayment:{{ispayment}}
amount:{{amount}}
</template>

<script>

export default {
  name: "payment_check",
  data(){
    return {
    }
  },
  props:['amount','ispayment','txn_id'],
}
</script>