<template>
    <base-layouts>
    <div class="mt-5">
        <div class="card">
            <page-top-vue></page-top-vue>
        <div class="card-body">
            <table-head-vue  :table-heading="tableHeading">
                <template v-slot:data>
                    <tr v-for="(data, index) in dataList.data">
                    <th scope="row">{{index+1}}</th>
                    <td>{{data.name}}</td>
                    <td>{{data.email}}</td>
                    <td>
                        <button class="btn btn-outline-success btn-sm" @click="editData(data, data.id)">
                                <i class="fa fa-pen-to-square"></i>Edit</button>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteInformation(index, data.id)">
                                <i class="fa fa-trash"></i>Delete</button>

                        </td>
                    </tr>

                </template>
            </table-head-vue>
        </div>
    </div>
    </div>

    <!--        Modal-->
    <user-form-vue></user-form-vue>

   </base-layouts>
</template>
<script>
    import pageTopVue from "../pageTop";
    import baseLayouts from "../layouts/baseLayouts";
    import formModal from "../formModal";
    import tableHeadVue from "../tableHead";
    import userFormVue from "./userForm";
    export default {
        name: "userList",
        components: {baseLayouts, formModal,pageTopVue,tableHeadVue,userFormVue},
        data() {
            return {
                tableHeading: ['Sl','Name','Email', 'Action'],
            }
        },

        mounted(){
            this.getDataList();
        }


    }
</script>

<style scoped>

</style>
