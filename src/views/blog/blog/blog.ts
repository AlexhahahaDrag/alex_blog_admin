// import type { TableColumnsType } from 'ant-design-vue';
export interface search {
  keyword?: string;
  sortId?: string;
  isOriginal?: string;
  currentPage?: number;
  pageSize?: number;
  isPublish?: string;
  level?: number;
  tagId?: string;
  type?: number;
}

export interface blog {
  title: string;
}

export interface pageInfo {
  current?: number;
  pageSize?: number;
  total?: number;
  showTotal: Function;
  showSizeChanger: boolean;
  pageSizeOptions: string[];
  showSizeChange: Function;
  size: string;
  showQuickJumper: boolean;
  defaultPageSize: number;
}

export const levelInfo = [
  { value: "", label: "请选择" },
  { value: "1", label: "一级" },
  { value: "2", label: "二级" },
  { value: "3", label: "三级" },
  { value: "4", label: "四级" },
  { value: "0", label: "普通" },
];

const colorInfo = ["pink", "red"];

export const typeInfo = [
  { value: "", label: "请选择" },
  { value: "0", label: "博客" },
  { value: "1", label: "推广" },
];

export const isTrueOrFalse = [
  { value: "", label: "请选择" },
  { value: "1", label: "是" },
  { value: "0", label: "否" },
];

export const columns = [
  {
    title: "标题图",
    dataIndex: "fileId",
    key: "fileId",
    width: "10%",
    ellipsis: true,
  },
  {
    title: "标题",
    dataIndex: "title",
    width: "20%",
    key: "title",
    ellipsis: true,
  },
  {
    title: "作者",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "是否原创",
    dataIndex: "isOriginal",
    key: "isOriginal",
    customRender: (text: any) => {
      let res: string = "否";
      isTrueOrFalse.forEach((item) => {
        if (item.value == text.text) {
          res = item.label;
        }
      });
      return res;
    },
  },
  {
    title: "分类",
    dataIndex: "blogSortName",
    key: "blogSortName",
  },
  {
    title: "标签",
    dataIndex: "tagName",
    width: "10%",
    key: "tagName",
  },
  {
    title: "推荐等级",
    dataIndex: "level",
    key: "level",
    customRender: (text: any) => {
      let res: string = "否";
      levelInfo.forEach((item) => {
        if (item.value == text.text) {
          res = item.label;
        }
      });
      return res;
    },
  },
  {
    title: "点击数",
    dataIndex: "clickCount",
    key: "clickCount",
  },
  {
    title: "开启评论",
    dataIndex: "openComment",
    key: "openComment",
    customRender: (text: any) => {
      let res: string = "否";
      isTrueOrFalse.forEach((item) => {
        if (item.value == text.text) {
          res = item.label;
        }
      });
      return res;
    },
  },
  {
    title: "发布状态",
    dataIndex: "isPublish",
    key: "isPublish",
    customRender: (text: any) => {
      let res: string = "否";
      isTrueOrFalse.forEach((item) => {
        if (item.value == text.text) {
          res = item.label;
        }
      });
      return res;
    },
  },
  {
    title: "操作时间",
    dataIndex: "operateTime",
    key: "operateTime",
    width: "15%",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
  },
];
