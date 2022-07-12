import { postData, deleteData } from "@/api/common";

export function getBlogList(params: any): Promise<any> {
  return postData("/api/blog/getList", params);
}

export function deleteBlogById(id: number) {
  return deleteData("/api/blog/delete?id=" + id);
}