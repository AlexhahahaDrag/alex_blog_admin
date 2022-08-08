<template>
  <div class="app-container">
    <div class="table-page-search-wrapper" style="margin: 10px 0 10px 0">
      <a-form layout="inline" @keyup.enter.native="searchInfo">
        <a-span>
          <a-input
            style="width: 140px; margin: 5px 5px 0px 5px"
            v-model:value="searchInfo.keyword"
            placeholder="请输入博客名"
            allow-clear
          />
          <a-select
            v-model:value="searchInfo.sortId"
            mode="combobox"
            style="width: 100px; margin: 5px 5px 0px 5px"
            placeholder="请输入分类名"
            :options="sortList"
            :allowClear="true"
            :field-names="{ label: 'sortName', value: 'id' }"
          >
          </a-select>
          <a-select
            ref="select"
            v-model:value="searchInfo.tagId"
            mode="combobox"
            style="width: 100px; margin: 5px 5px 0px 5px"
            placeholder="请输入标签名"
            :field-names="{ label: 'content', value: 'id' }"
            :options="blogTagList"
            :allowClear="true"
          >
          </a-select>
          <a-select
            v-model:value="searchInfo.level"
            mode="combobox"
            style="width: 100px; margin: 5px 5px 0px 5px"
            placeholder="推荐等级"
            :options="levelInfo"
            :allowClear="true"
          >
          </a-select>
          <a-select
            v-model:value="searchInfo.isPublish"
            mode="combobox"
            style="width: 100px; margin: 5px 5px 0px 5px"
            placeholder="是否发布"
            :options="isTrueOrFalse"
            :allowClear="true"
          >
          </a-select>
          <a-select
            v-model:value="searchInfo.isOriginal"
            mode="combobox"
            style="width: 100px"
            select
            placeholder="是否原创"
            :options="isTrueOrFalse"
            :allowClear="true"
          >
          </a-select>
          <a-select
            v-model:value="searchInfo.type"
            mode="combobox"
            placeholder="请输入文章类型"
            :options="typeInfo"
            :allowClear="true"
          ></a-select>
          <a-button type="primary" @click="query">
            <!-- <Query></Query> -->
            查找</a-button
          >
          <a-button type="primary" @click="cancelQuery">清空</a-button>
          <a-row>
            <!-- <a-space style="margin: 10px 0px 10px 0px"> -->
            <a-button type="primary" @click="editBlog('add')">添加博客</a-button>
            <a-button type="primary">本地导入</a-button>
            <a-button type="primary">导出选中</a-button>
            <a-button type="primary">删除选中</a-button>
            <!-- </a-space> -->
          </a-row>
        </a-span>
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
            <a-space>
              <a-button type="primary" size="small">编辑</a-button>
              <a-popconfirm
                title="确认删除博客?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="confirm(record.id)"
                @cancel="cancel"
              >
                <a-button type="primary" size="small" danger>删除</a-button>
              </a-popconfirm>
            </a-space>
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
      <Edit ref="editInfo" :visible="visible" :modelInfo="modelInfo" @handleOk="handleOk"></Edit>
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
  pagination,
  ModelInfo,
} from "./blog";
import { blogTag } from "../blogTag/blogTag";
import { blogSort } from "../blogSort/blogSort";
// import Query from "@/views/alexblog/query/index.vue";
import Edit from "./info/edit.vue";

let dataSource = ref<blog>();

let searchInfo = ref<search>({
  pageSize: pagination.value.pageSize,
  currentPage: pagination.value.current,
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
let blogTagList = ref<blogTag[]>([]);
getBlogTagList(blogTagParam).then((res) => {
  if (res.code == "success") {
    blogTagList.value = [...blogTagList.value, ...res.data.records];
  }
});

let blogSortParam = { currentPage: 1, pageSize: 500 };
let sortList = ref<blogSort[]>([]);
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

let visible = ref<boolean>(false);
let modelInfo = ref<ModelInfo>({});

//新增和修改弹窗
function editBlog(type: string) {
  if (type == "add") {
    modelInfo.value.title = "新增博客";
  } else if (type == "edit") {
    modelInfo.value.title = "修改博客";
  }
  visible.value = true;
  console.log(visible.value);
  
}

const editInfo = ref();
const handleOk = (v) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
  visible.value = v;
  console.log("111111111111111111111111111");
};
</script>

<style>
.table-page-search-wrapper {
  margin-top: -16px;
  margin-bottom: 16px;
}
</style>
