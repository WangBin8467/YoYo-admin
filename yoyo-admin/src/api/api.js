import {get ,post} from './config.js';

let adminApi ={
  getNewsList:(data,params)=>post('/api/news/getNewsList',data), // 获取新闻列表数据
}

export default adminApi