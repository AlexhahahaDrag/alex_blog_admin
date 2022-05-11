<template>
  <div class="app-container">
    <h1>blog</h1>

    <div class="table-page-search-wrapper" style="margin: 10px 0 10px 0">
      <a-form layout="inline" @keyup.enter.native="searchInfo">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="博客名">
              <a-input
                style="width: 140px; margin: 0px 5px 0px 5px"
                v-model:value="searchInfo.title"
                placeholder="请输入博客名"
                allow-clear
              />
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="分类">
              <a-select
                v-model:value="searchInfo.sortName"
                mode="tags"
                style="width: 140px; margin: 0px 5px 0px 5px"
                placeholder="请输入分类名"
                :options="options"
                @change="handleChange"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="标签">
              <a-select
                v-model:value="searchInfo.sortName"
                mode="tags"
                style="width: 140px; margin: 0px 5px 0px 5px"
                placeholder="请输入标签名"
                :options="options"
                @change="handleChange"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="等级">
              <a-select
                v-model:value="searchInfo.sortName"
                mode="tags"
                style="width: 140px; margin: 0px 5px 0px 5px"
                placeholder="推荐等级"
                :options="options"
                @change="handleChange"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="是否发布">
              <a-select
                v-model:value="searchInfo.sortName"
                mode="tags"
                style="width: 140px; margin: 0px 5px 0px 5px"
                placeholder="是否发布"
                :options="options"
                @change="handleChange"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="是否原创">
              <a-select
                v-model:value="searchInfo.isOriginal"
                mode="tags"
                style="width: 140px; margin: 0px 5px 0px 5px"
                placeholder="是否原创"
                :options="options"
                @change="handleChange"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="文章类型">
              <a-select
                v-model:value="searchInfo.sortName"
                mode="tags"
                style="width: 140px; margin: 0px 5px 0px 5px"
                placeholder="请输入文章类型"
                :options="options"
                @change="handleChange"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span
              style="float: left; overflow: hidden"
              class="table-page-search-submitButtons"
            >
              <a-button type="primary" style="margin: 0px 5px 0px 5px">查找</a-button>
              <a-button type="primary" style="margin: 0px 5px 0px 5px">清空</a-button>
              <a-button type="primary" style="margin: 0px 5px 0px 5px">本地导入</a-button>
              <a-button type="primary" style="margin: 0px 5px 0px 5px">导出选中</a-button>
              <a-button type="primary" style="margin: 0px 5px 0px 5px">删除选中</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div>
      <a-table :dataSource="dataSource" :columns="columns" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getBlogList } from "@/api/blog";
import { useUserStore } from "@/store/modules/user/user";

interface search {
  title?: string;
  sortName?: string;
  isOriginal?:string;
}
let searchInfo = ref<search>({});
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
  console.log(searchInfo.value.sortName);
};

  const userStore = useUserStore();
  const token = userStore.getToken;
  console.log(token);
  debugger;
const options = [...Array(25)].map((_, i) => ({
  value: (i + 10).toString(36) + (i + 1),
}));

function blogList() {
  getBlogList(searchInfo).then((result) => {
    console.log(result);
  });
}
let dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];
let columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
blogList();
</script>

<style>
.table-page-search-wrapper {
  margin-top: -16px;
  margin-bottom: 16px;
}
</style>
