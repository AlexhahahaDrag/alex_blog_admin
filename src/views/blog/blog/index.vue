<template>
  <div class="app-container">
    <div class="table-page-search-wrapper" style="margin: 10px 0 10px 0">
      <a-form layout="inline" @keyup.enter.native="searchInfo">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="博客名">
              <a-input
                style="width: 140px; margin: 5px 5px 0px 5px"
                v-model:value="searchInfo.keyword"
                placeholder="请输入博客名"
                allow-clear
              />
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="分类">
              <a-select
                v-model:value="searchInfo.sortId"
                mode="combobox"
                style="width: 140px; margin: 5px 5px 0px 5px"
                placeholder="请输入分类名"
                :options="sortList"
                :allowClear="true"
                :field-names="{ label: 'sortName', value: 'id' }"
              >
                <a-select-option value="">请选择</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="标签">
              <a-select
                ref="select"
                v-model:value="searchInfo.tagId"
                mode="combobox"
                style="width: 140px; margin: 5px 5px 0px 5px"
                placeholder="请输入标签名"
                :field-names="{ label: 'content', value: 'id' }"
                :options="blogTagList"
                :allowClear="true"
                ><a-select-option value="">请选择</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="等级">
              <a-select
                v-model:value="searchInfo.level"
                mode="combobox"
                style="width: 140px; margin: 5px 5px 0px 5px"
                placeholder="推荐等级"
                :options="levelInfo"
                :allowClear="true"
              >
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="是否发布">
              <a-select
                v-model:value="searchInfo.isPublish"
                mode="combobox"
                style="width: 140px; margin: 5px 5px 0px 5px"
                placeholder="是否发布"
                :options="isTrueOrFalse"
                :allowClear="true"
              >
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="是否原创">
              <a-select
                v-model:value="searchInfo.isOriginal"
                mode="combobox"
                style="width: 140px; margin: 5px 5px 0px 5px"
                select
                placeholder="是否原创"
                :options="isTrueOrFalse"
                :allowClear="true"
              >
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="文章类型">
              <a-select
                v-model:value="searchInfo.type"
                mode="combobox"
                style="width: 140px; margin: 5px 5px 0px 5px"
                placeholder="请输入文章类型"
                :options="typeInfo"
                :allowClear="true"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span
              style="float: left; overflow: hidden"
              class="table-page-search-submitButtons"
            >
              <a-button type="primary" style="margin: 5px 5px 0px 5px" @click="query"
                >查找</a-button
              >
            </span>
            <span
              style="float: left; overflow: hidden"
              class="table-page-search-submitButtons"
            >
              <a-button
                type="primary"
                style="margin: 5px 5px 0px 5px"
                @click="cancelQuery"
                >清空</a-button
              >
            </span>
          </a-col>
        </a-row>
        <a-row>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button type="primary" style="margin: 5px 50px 0px 5px">添加博客</a-button>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button type="primary" style="margin: 5px 50px 0px 5px">本地导入</a-button>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button type="primary" style="margin: 5px 50px 0px 5px">导出选中</a-button>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button type="primary" style="margin: 5px 5px 0px 5px">删除选中</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div>
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :loading="loading"
        :row-key="(record) => record.id"
        :pagination="pagination"
        @change="handleTableChange"
        :scroll="{ x: 1500 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'operation'">
            <a-popconfirm
              title="确认删除博客?"
              ok-text="确认"
              cancel-text="取消"
              @confirm="confirm(record.id)"
              @cancel="cancel"
            >
              <a href="#">删除</a>
            </a-popconfirm>
            <!-- <a-button type="primary" size="small">修改</a-button> -->
            <span></span>
          </template>
          <template v-else-if="column.key === 'tagList'">
            <span
              v-if="
                record.tagList && record.tagList.length > 0 && record.tagList[0] != null
              "
            >
              <a-tag
                v-for="(tag, index) in record.tagList"
                :key="tag.id"
                :color="colorInfo[index]"
              >
                {{ tag.content }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'blogSortList'">
            <span
              v-if="
                record.blogSortList &&
                record.blogSortList.length > 0 &&
                record.blogSortList[0] != null
              "
            >
              <a-tag
                v-for="(blogSort, index) in record.blogSortList"
                :key="blogSort.id"
                :color="colorInfo[index]"
              >
                {{ blogSort.sortName }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'isOriginal'">
            <a-tag :key="record.isOriginal" :color="record.isOriginal ? 'red' : 'green'">
              {{ record.isOriginal ? "原创" : "转载" }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'openComment'">
            <a-tag
              :key="record.openComment"
              :color="record.openComment ? 'green' : 'red'"
            >
              {{ record.openComment ? "开启" : "关闭" }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'isPublish'">
            <a-tag :key="record.isPublish" :color="record.isPublish ? 'green' : 'grey'">
              {{ record.isPublish ? "发布" : "下架" }}
            </a-tag>
          </template>
          <template v-else-if="column.key === 'level'">
            <div v-for="(level, index) in levelInfo">
              <a-tag
                v-if="record.level == level.value && level.value !== ''"
                :key="level"
                :color="colorInfo[index]"
              >
                {{ level.label }}
              </a-tag>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getBlogList, deleteBlogById } from "@/api/blog/blog";
import { getBlogTagList } from "@/api/blog/blogTag";
import { getBlogSortList } from "@/api/blog/blogSort";
import { notification, message } from "ant-design-vue";
import {
  search,
  columns,
  blog,
  pageInfo,
  isTrueOrFalse,
  levelInfo,
  typeInfo,
  colorInfo,
} from "./blog";
import { blogTag } from "../blogTag/blogTag";
import { blogSort } from "../blogSort/blogSort";

let dataSource = ref<blog>();

let pagination = ref<pageInfo>({
  // 数据总数
  total: 50,
  // 当前页数
  current: 1,
  // 每页条数
  pageSize: 10,
  // 展示总数
  showTotal: (total: number) => `共 ${total} 条`,
  // 是否可以改变pageSize
  showSizeChanger: true,
  // 设置每页可以展示多少条的选项
  pageSizeOptions: ["10", "20", "50", "100"],
  // 改变pageSize后触发
  showSizeChange: (current: number, pageSize: any) => (
    (pagination.value.current = current), (pagination.value.pageSize = pageSize)
  ),
  // 小尺寸分页
  size: "small",
  // 是否可以快速跳转至某页
  showQuickJumper: true,
  //默认条数
  defaultPageSize: 10,
});

let searchInfo = ref<search>({
  pageSize: pagination.value.pageSize,
  currentPage: pagination.value.current,
  sortId: "",
  tagId: "",
  type: "",
  isOriginal: "",
  isPublish: "",
  level: "",
});

let loading = ref<boolean>(false);
function blogList(param: search) {
  loading.value = true;
  getBlogList(param)
    .then((res) => {
      if (res.code == "success") {
        dataSource.value = res.data.records;
        pagination.value.current = res.data.current;
        pagination.value.pageSize = res.data.pageSize;
        pagination.value.total = res.data.total;
      } else {
        // notification
        notification.error({
          message: "Forbidden",
          description: (res && res.message) || "查询列表失败！",
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
}

function query() {
  blogList(searchInfo.value);
}

function cancelQuery() {
  searchInfo.value = {};
}

function handleTableChange(pagination: pageInfo) {
  searchInfo.value.currentPage = pagination.current;
  searchInfo.value.pageSize = pagination.pageSize;
  blogList(searchInfo.value);
}

blogList(searchInfo.value);
let blogTagParam = { currentPage: 1, pageSize: 500 };
let blogTagList = ref<blogTag[]>([{ id: "", content: "请选择" }]);
getBlogTagList(blogTagParam).then((res) => {
  if (res.code == "success") {
    blogTagList.value = [...blogTagList.value, ...res.data.records];
  }
});

let blogSortParam = { currentPage: 1, pageSize: 500 };
let sortList = ref<blogSort[]>([{ id: "", sortName: "请选择" }]);
getBlogSortList(blogSortParam).then((res) => {
  if (res.code == "success") {
    sortList.value = [...sortList.value, ...res.data.records];
  }
});
const confirm = (id: number) => {
  deleteBlogById(id).then((res) => {
    if (res.code == "success") {
      message.success(res.message);
      blogList(searchInfo.value);
    } else {
      message.error(res.message);
    }
  });
};

const cancel = (e: MouseEvent) => {
  console.log(e);
};
</script>

<style>
.table-page-search-wrapper {
  margin-top: -16px;
  margin-bottom: 16px;
}
</style>
