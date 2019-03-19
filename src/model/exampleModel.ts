import { QueryPageBase } from './queryPageBase';
//参数查询格式
export class QueryFormNews extends QueryPageBase{
    searchText: string = "";
}
//-表格数据
export class ExampleModelData {
    Data: ExampleModelDetail[];
    total: number = 0;
}
//-表格数据-详情
export class ExampleModelDetail {
    title: string = "";
    coverUrl: string = "";
    digest: string = "";
    contentSourceUrl:string = "";
}