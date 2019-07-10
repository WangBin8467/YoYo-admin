// 首页
import axios from 'axios';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default class Home extends Component{

  componentDidMount() {
    this.getData();
  }

  getData(){
     var that=this;
     axios.post('/api/news/getNewsList',{...that.filterForm}).then(res=>{
       console.clear();
       console.log(res.data.result);
     })
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