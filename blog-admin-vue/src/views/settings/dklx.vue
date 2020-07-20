<template>
    <div class="bmgl">
        <el-form :inline="true" :model="queryFrom">
            <!-- <el-form-item label="交易中心名称">
        <el-input v-model="queryFrom.jyname" placeholder="交易中心名称"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="queryFrom.nickname" placeholder="请输入姓名"></el-input>
      </el-form-item> -->
            <el-form-item>
                <!-- <el-button type="primary" icon="el-icon-search" @click="btn_search">查询</el-button> -->
                <el-button type="success" icon="el-icon-plus" v-permission="'dklx_add'" @click="isEdit = true;modalShow=true">添加类型</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
            <el-table-column prop="lxmc" label="类型名称"></el-table-column>
            <el-table-column prop="lxdm" label="类型代码"></el-table-column>
            <el-table-column prop="address" label="操作" width="220">
                <template slot-scope="scope">
                    <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
                    <el-button plain size="mini" type="warning" v-permission="'dklx_edit'" @click="btn_detail(scope.row,'edit')">修改</el-button>
                    <el-button plain size="mini" type="danger" v-permission="'dklx_del'" @click="btn_del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
        <xModal :modalShow="modalShow" :data=data :isEdit="isEdit" @close="close" @edit="btn_search"></xModal>
    </div>
</template>
<script>
import { dklxSearch, dklxDel } from "@/api/settings/dklx";
import xModal from "./dklx_modal";
export default {
    name: "dklx",
    components: {
        xModal
    },
    data() {
        return {
            queryFrom: {},
            pageObj: {
                pageNo: 1,
                pageSize: 10,
                totalCount: 0
            },
            data: {},
            modalShow: false,
            tableData: [],
            isEdit: false
        };
    },
    methods: {
        indexMethod(index) {
            let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
            return start + index + 1;
        },
        handleCurrentChange(val) {
            this.btn_search();
        },
        handleRes(res, type) {
            let data = res.data;
            if (data.success) {
                this.$message({
                    message: data.msg,
                    type: "success"
                });
                this.btn_search();
            } else {
                this.$message({
                    message: data.msg
                });
            }
        },
        close() {
            this.data = {};
            this.isEdit = false;
            this.modalShow = false;
        },
        btn_detail(row, edit) {
            this.data = row;
            if (edit) {
                this.isEdit = true;
            }
            this.modalShow = true;
        },
        btn_search() {
            let obj = Object.assign({}, this.queryFrom, this.pageObj);
            dklxSearch(obj).then(res => {
                let data = res.data;
                if (data.success) {
                    this.tableData = data.msg.data.map(d => {
                        // d.xzqhList = (d.xzqh && d.xzqh.split(",")) || [];
                        return d;
                    });
                    this.pageObj.totalCount = data.msg.totalCount;
                }
            });
        },
        btn_del(row) {
            this.$confirm("你确定删除吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    let obj = {};
                    obj.id = row.id;
                    dklxDel(obj).then(res => {
                        this.handleRes(res);
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    },
    mounted() {
        this.btn_search();
    }
};
</script>
