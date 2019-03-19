// index.ts
import { Vue, Component } from 'vue-property-decorator'
//import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件
import { ExampleAPI } from "@/api/exampleAPI";//引入API文件
import { Tools } from "@/api/tools";//引入API里的通用工具
import { QueryFormNews, ExampleModelData,ExampleModelDetail} from "@/model/exampleModel";//引入model中定义数据
// 必须使用装饰器的方式来指定component
const debug = require('debug')('log:Index')
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  },
})
class Index extends Vue {
  ver: number = 123;

  //声明定义引入的API类和数据类
  example: ExampleAPI = new ExampleAPI();
  tools: Tools = new Tools();
  queryFormNews: QueryFormNews = new QueryFormNews();
  exampleModelData: ExampleModelData = new ExampleModelData();
  exampleModelDetail: ExampleModelDetail = new ExampleModelDetail();

  onShow() { // 小程序 hook
    debug('onShow')
  }

  mounted() { // vue hook
    debug('mounted')
  }
  //查找数据例子
  getData() {
    this.example
      .getByPage(this.queryFormNews)
      .then(res => {
        console.log(res);
          this.exampleModelData = res.data;
      })
      .catch(error => {
        console.log(error);
       
      });
  }
}

export default Index
