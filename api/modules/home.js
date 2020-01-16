import { http } from '../http'

export default {
  // 文章查询列表接口
  selectArticlesByPage: data => http.postAplt(`article/selectArticlesByPage`, data),
  // 文章详情查询接口
  selectArticlesById: data => http.get(`article/selectArticlesById`, data)
}
