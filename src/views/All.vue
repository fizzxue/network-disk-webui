<template>
    <div>
        <el-button icon="el-icon-upload" type="primary">上传</el-button>
        <el-button icon="el-icon-folder-add">新建文件夹</el-button>
        <el-button icon="el-icon-download" v-if="this.multipleSelection.length >= 1">下载</el-button>
        <el-button icon="el-icon-delete" v-if="this.multipleSelection.length >= 1">删除</el-button>
        <el-button v-if="this.multipleSelection.length === 1">重命名</el-button>
        <el-button disabled v-if="this.multipleSelection.length > 1">重命名</el-button>
        <el-button v-if="this.multipleSelection.length >= 1">复制到</el-button>
        <el-button v-if="this.multipleSelection.length >= 1">移动到</el-button>
        <span style="margin-top: 10px; margin-left: 20px;" v-if="this.multipleSelection.length > 0">已选中{{this.multipleSelection.length}}个文件/文件夹</span>
        <span style="float: right; margin-top: 11px;">已全部加载，共{{this.tableData.length}}个</span>
        <el-table
                :data="tableData"
                @selection-change="handleSelectionChange"
                height="850"
                style="width: 100%;"
                v-loading="loading">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="文件名"
                    min-width="60%"
                    sortable>
                <template slot-scope="scope">
                    <img :src="getPng(scope.row)" style="vertical-align: middle;margin-right: 10px;"/>
                    <span @click="getListByParentId" class="spanLink"
                          style="padding-left: 1px; text-align: center; cursor: pointer;">{{scope.row.fileName}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="大小"
                    min-width="20%"
                    prop="fileSize"
                    sortable>
            </el-table-column>
            <el-table-column
                    label="修改日期"
                    min-width="20%"
                    prop="updateTime"
                    sortable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import request from '../utils/request'

    export default {
        data() {
            return {
                loading: true,
                tableData: [],
                multipleSelection: []
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                this.loading = true
                request({
                    url: '/netWorkDisk/list'
                }).then(response => {
                    this.tableData = response.data.list
                })
                this.loading = false
            },
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            getPng(row) {
                console.log("../assets/" + row.extName + ".png")
                return require("../assets/" + row.extName + ".png")
            },
            getListByParentId() {
                this.loading = true
                this.tableData = [{
                    fileId: 1,
                    fileName: '我是子文件',
                    fileSize: '111',
                    extName: 'dir',
                    updateTime: '2006-02-11 20:29:03'
                }]
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    .spanLink:hover {
        color: #09aaff
    }
</style>
