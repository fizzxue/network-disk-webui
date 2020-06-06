<template>
    <div>
        <div style="height: 62px;">
            <img src="./assets/logo.png" style="width: 142px; height: 32px; margin: 15px; cursor: pointer;" title="网盘">
            <el-header style="text-align: right; font-size: 12px; display: inline; float: right">
                <span>Fizz</span>
            </el-header>
        </div>
        <div>
            <el-container style="height: 100%; border: 1px solid #eee">
                <el-aside width="200px">
                    <el-menu>
                        <router-link style="text-decoration: none" to="/">
                            <el-menu-item index="1-4-1"><i class="el-icon-document-copy"></i>全部文件</el-menu-item>
                        </router-link>
                        <router-link style="text-decoration: none" to="/picture">
                            <el-menu-item index="1-4-1" style="padding-left: 50px;">图片</el-menu-item>
                        </router-link>
                        <router-link style="text-decoration: none" to="/document">
                            <el-menu-item index="1-4-1" style="padding-left: 50px;">文档</el-menu-item>
                        </router-link>
                        <router-link style="text-decoration: none" to="/recycle">
                            <el-menu-item index="1-4-1"><i class="el-icon-delete"></i>回收站</el-menu-item>
                        </router-link>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

</style>
