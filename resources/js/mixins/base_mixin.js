export default{
    data() {
        return {
            formData: {
            },
        }
    },
    methods: {
        getDataUrl : function(){
            return this.$route.meta.dataUrl;
        },
        generateUrl : function(customUrl = false){
            if(customUrl){
                return `${baseUrl}/${customUrl}`
            }
            return `${baseUrl}/${this.getDataUrl()}`;
        },
        getDataList : function(){
            const _this = this;
            this.axios.get(this.generateUrl()).then(function(response){
                if(parseInt(response.data.status) === 5000){
                    _this.$toastr('error', response.data.message, 'Error');
                }
                if(parseInt(response.data.status) === 2000){
                    _this.$store.commit('dataList', response.data.result);
                }
            })
        },
        openModal: function (modalName = 'formModal', title = false, callback = false, resetValidation = true) {
            if (title) {
                this.$store.commit('modalTitle', title);
            }
            $('#' + modalName).modal('show');
            if (resetValidation){
                this.$validator.reset();
            }
            if (typeof callback === 'function') {
                callback(true);
            }
        },
        closeModal: function (modalName = 'createModal', resetForm = true, resetFormType = true) {
            const _this = this;
            this.$validator.reset();
            $('#' + modalName).modal('hide');
            $('.error_message').remove();
            $('.is-invalid').removeClass('is-invalid');
            if (resetForm) {
                _this.$store.commit('formObject', {});
            }
            if (resetFormType) {
                _this.$store.commit('formType', 1);
            }
        },
        submitForm: function (formData, model = true, callback = false, checkValidation = true, url = false, object = {}) {
            const _this = this;
            var URL, method;
            var pageNumber = 1;
            if (_this.formType === 2) {
                pageNumber = _this.currentPagination;
                URL = `${_this.generateUrl(url)}/${_this.updateId}`;
                method = 'put';
            } else {
                URL = _this.generateUrl(url);
                method = 'post';
            }
            this.$validator.validate().then(valid => {
                if (valid || !checkValidation) {
                    this.$validator.errors.clear();
                    _this.$store.state.httpRequest = true;
                    _this.axios({method: method, url: URL, data: formData, params: object}).then(function (response) {
                        var retData = response.data;
                        _this.$store.state.httpRequest = false;

                        if (parseInt(retData.status) === 5001) {
                            _this.$toastr('error', retData.message, 'Error');
                            // _this.$router.push({path:'/admin/dashboard'});
                            return;
                        }

                        if (parseInt(retData.status) === 2000) {
                            if (model) {
                                _this.$store.state.currentFromModel = 1;
                                _this.closeModal(model);
                                _this.getDataList(pageNumber);
                                // _this.resetForm(formData);
                            }
                            if (typeof callback == 'function') {
                                callback(retData.result);
                            }
                            _this.$toastr('success', retData.message, 'Success');
                        }
                        if (parseInt(retData.status) === 3000) {
                            _this.$toastr('warning', retData.message, 'Warning');
                            _this.assignValidationError(retData.result);
                        }
                        if (parseInt(retData.status) === 5000) {
                            _this.$toastr('error', retData.message, 'Error');
                        }
                    }).catch(function (error) {
                        _this.$toastr('Success', 'Something Wrong', 'success');

                    });
                }
            });
        },
        editData: function (data, updateId, model = 'formModal', callback = false) {
            const _this = this;
            _this.$store.commit('formObject', data);
            _this.$store.commit('updateId', updateId);
            _this.$store.commit('formType', 2);

            if (model) {
                _this.openModal(model);
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        },
        deleteInformation: function (index, ID, url = false, callback = false, callDataList = true) {
            const _this = this;
            this.$swal({
                title: 'Are you sure..??',
                text: 'Data will be delete Permanently??',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '<i class="fa fa-check"></i>',
                cancelButtonText: '<i class="fa fa-close"></i>',
                showCloseButton: true,
            }).then((result) => {
                if (result.value) {
                    var URL = !url ? `${_this.generateUrl()}/${ID}` : url;
                    _this.axios.delete(URL)
                        .then(function (response) {
                            var retData = response.data;
                            _this.$store.commit('httpRequest', false);
                            if (parseInt(retData.status) === 2000) {
                                _this.$toastr('success', retData.message, 'Success');
                                if (callDataList) {
                                    _this.getDataList();
                                }
                                if (typeof callback == 'function') {
                                    callback(true);
                                }
                            } else {
                                _this.$toastr('warning', retData.message, 'Warning');
                            }
                        }).catch(function (error) {
                        _this.$toastr('error', 'Something Wrong', 'Error');
                    });
                }
            });
        },

    },
    computed:{
        dataList(){
            return this.$store.getters.dataList;
        },
        formObject(){
            return this.$store.getters.formObject;
        },
        httpRequest(){
            return this.$store.getters.httpRequest;
        },
        formType(){
            return this.$store.getters.formType;
        },
        updateId(){
            return this.$store.getters.updateId;
        },
    },
    mounted() {
       this.getDataList()
    },
}
