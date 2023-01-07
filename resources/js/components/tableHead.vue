<template>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <template v-for="(heading, index) in tableHeading">
                    <th scope="col">{{heading}}</th>
                </template>
            </tr>
        </thead>
        <tbody>
            <slot name="data"></slot>
        </tbody>
    </table>
</template>
<script>
export default{
    name:'tableHead',
    props: {
            tableHeading: {
                type: [Array, Object],
                default: []
            },
        }
}
</script>
