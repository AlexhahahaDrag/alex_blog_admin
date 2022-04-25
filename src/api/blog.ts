import request from "@/utils/request";

export function getBlogList(params: any) {
  return request.post("/api/blog/getList", params);
}
