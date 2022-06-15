import { postData } from "@/api/common";

export function getBlogTagList(params: any): Promise<any> {
  return postData("/api/tag/getList", params);
}
