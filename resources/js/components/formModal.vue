<template>
<div class="modal fade" role="dialog" :id="modalId" :data-bs-backdrop="backDrop">
    <div class="modal-dialog">
        <form @submit.prevent="submit()">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ $store.state.modalTitle }}</h4>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                        <a v-if="isEnablePrint" @click="closeModal(modalId)" class="btn btn btn-outline-secondary fw-medium">
                            <i class="fa fa-close"></i> Close
                        </a>
                        <button v-if="isEnablePrint" type="submit" class="btn btn-primary">
                            <i class="fa fa-save"></i> Submit
                        </button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>
<script>
export default{
    name : 'formModal',
    props:{
        modalTitle: {
            type: [String],
            default: "Form Modal"
        },
        modalId: {
            type: [String],
            default: "formModal"
        },
        isEnableFooter: {
                type: [Boolean],
                default: true
        },
        isEnablePrint: {
            type: [Boolean],
            default: true
        },
        backDrop : {
            type: [String],
            default: 'static'

        }
    },
    methods : {
            submit : function () {
                this.$emit('submitMyForm');
            }
        }
}
</script>
