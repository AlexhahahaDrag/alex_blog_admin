import { postData } from "@/api/common";

export function getBlogList(params: any): Promise<any> {
  return postData("/api/blog/getList", params);
}
