// 首页
import React, { Component } from 'react';
import adminApi from '../api/api.js';

export default class Home extends Component{

  componentDidMount() {
    this.getData();
  }

  getData(){
     let that=this;
     adminApi.getNewsList({...that.filterForm}).then(res=>{
       console.log(res);
     })
     // return axios.post('/api/news/getNewsList',{...that.filterForm}).then(res=>{
     //
     // })
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filterForm:{
        sort:-1,
        page:1,
        pageSize:6,
        type:-1
      },
    }
  }
 render() {
   return(
      <div>
        111111111
      </div>
   )
 }
}