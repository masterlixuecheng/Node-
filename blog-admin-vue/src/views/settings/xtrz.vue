<template>
    <div class="bmgl">
        <el-form :inline="true" :model="queryFrom">
            <el-form-item label="模块名">
                <el-input v-model="queryFrom.module" placeholder="模块名"></el-input>
            </el-form-item>
            <el-form-item label="操作">
                <el-input v-model="queryFrom.operation" placeholder="操作"></el-input>
            </el-form-item>
            <el-form-item label="操作人">
                <el-input v-model="queryFrom.user" placeholder="操作人"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="btn_search">查询</el-button>
                <!-- <el-button type="success" icon="el-icon-plus" @click="isEdit = true;modalShow=true">添加类型</el-button> -->
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
            <el-table-column prop="module" label="模块名"></el-table-column>
            <el-table-column prop="operation" label="操作"></el-table-column>
            <el-table-column prop="user" label="操作人"></el-table-column>
            <el-table-column prop="occurstime" :formatter="fromatDateHMS" label="操作时间"></el-table-column>
            <el-table-column prop="ipaddress" label="IP"></el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
        <!-- <xModal :modalShow="modalShow" :data=data :isEdit="isEdit" @close="close" @edit="btn_search"></xModal> -->
    </div>
</template>
<script>
import { xtrzSearch } from "@/api/settings/xtrz";
// import xModal from "./xtrz_modal";
export default {
    name: "xtrz",
    components: {
        // xModal
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
        fromatDateHMS(val) {
            let t = new Date(val.occurstime);
            let y = t.getFullYear();
            let m = (t.getMonth()+1)<10?"0"+(t.getMonth()+1):t.getMonth()+1;
            let d = t.getDate()<10?"0"+t.getDate():t.getDate();
            let h = t.getHours()<10?"0"+t.getHours():t.getHours();
            let min = t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();
            let s = t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();
            return y+"-"+m+"-"+d+" "+h+":"+min+":"+s
        },
        indexMethod(index) {
            let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
            return start + index + 1;
        },
        handleCurrentChange(val) {
            this.btn_search();
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
            xtrzSearch(obj).then(res => {
                let data = res.data;
                if (data.success) {
                    this.tableData = data.msg.data.map(d => {
                        // d.xzqhList = (d.xzqh && d.xzqh.split(",")) || [];
                        return d;
                    });
                    this.pageObj.totalCount = data.msg.totalCount;
                }
            });
        }
    },
    mounted() {
        this.btn_search();
    }
};
</script>
