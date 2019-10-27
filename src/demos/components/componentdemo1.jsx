import React from 'react';
import { unstable_batchedUpdates as batchedUpdates } from "react-dom";
const { Component } = React;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  // 先执行interactiveUpdates$1
  test(){
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1
    });
  }
  componentDidMount() {
    let me = this;
    // isRender = false
    // 但现在还处于生命周期里
    me.setState({
      count: me.state.count + 1
    });
    console.log("第一次执行setState", me.state.count);    // 打印 
    me.setState({
      count: me.state.count + 1
    });
    console.log("第二次执行setState", me.state.count);    // 打印  
    setTimeout(function () {
      // if (expirationTime === Sync) {
      //   performSyncWork();
      // }
      me.setState({
        count: me.state.count + 1
      });
      console.log('setTimeout里执行setState', me.state.count);   // 打印  
    }, 0);
    setTimeout(function () {
      // 等fn执行完毕后，统一执行performSyncWork
      // isBatchingUpdates=true
      // if (!isBatchingUpdates && !isRendering) {
      //   performSyncWork();
      // }
      batchedUpdates(() => {
        me.setState({
          count: me.state.count + 1  
        })
      })
      console.log('batchedUpdates里执行setState', me.state.count);   // 打印  
    }, 0);
    console.log('最后', me.state.count);   // 打印 
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.test.bind(this)}>增加count</button>
      </div>
    );
  }
}

export default App;