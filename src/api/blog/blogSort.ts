import { postData } from "@/api/common";

export function getBlogSortList(params: any): Promise<any> {
  return postData("/api/blogSort/getList", params);
}
