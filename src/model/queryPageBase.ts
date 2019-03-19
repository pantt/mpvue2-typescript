/**
 * 分页查找基类
 */
export class QueryPageBase {
  /**
   * 当前页码
   */
  currentPageIndex: number = 1;
  /**
   * 每页显示数量
   */
  pageSize: number = 10;
  /**
   * 排序字段
   */
  sortField: string;
  /**
   * 排序顺序
   */
  sortBy: string = "Descending";
}
