<template>
    <el-dialog title="项目信息" :visible.sync="dialogVisible" width="45%" :before-close="handleClose" id="dklx">

        <el-form :model="formData.uUser" ref="form" label-width="200px">
            <el-form-item label="客户端IP地址" prop="ipaddress">
                <el-input v-model="formData.uUser.ipaddress"></el-input>
            </el-form-item>
            <el-form-item label="客户端" prop="khd">
                <el-input v-model="formData.uUser.lxdm"></el-input>
            </el-form-item>
        </el-form>

    </el-dialog>
</template>
<script>
export default {
    name: "dklx_modal",
    data() {
        return {
            dialogVisible: false,
            formData: {
                uUser: {},
                uUserInfo: {}
            },
            props: {
                value: "code"
            }
        };
    },
    props: {
        modalShow: Boolean,
        data: {
            default: () => {}
        }
    },
    watch: {
        modalShow(val) {
            this.formData.uUser = Object.assign({}, this.data);
            this.dialogVisible = val;
        }
    },
    methods: {
        handleClose() {
            this.$refs.form.resetFields();
            this.$emit("close");
        },
    },
    mounted() {
    }
};
</script>

