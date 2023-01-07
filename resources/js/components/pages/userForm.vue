<template>

    <form-modal-vue @submitMyForm="submitForm(formObject,'formModal', ()=>{}, true, 'api/users')" modal-id="formModal" back-drop="static">

       <!-- Title  -->
            <div class="form-group">
                <label>Name:</label><br>
                <input type="text" autocomplete="off" v-model="formObject.name" class="form-control">
            </div>
            <div class="form-group">
                <label>Email:</label><br>
                <input type="text" autocomplete="off" v-model="formObject.email" class="form-control">
            </div>
            <div class="form-group" v-if="formType==1">
                <label>Password:</label><br>
                <input type="password" autocomplete="off" v-model="formObject.password" class="form-control">
            </div>
     <!-- Submit / close button -->
    </form-modal-vue>
</template>
<script>
import formModalVue from '../formModal';
export default{
    name:'userForm',
    components:{formModalVue},

}
</script>
