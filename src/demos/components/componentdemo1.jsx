import React, { Component, PureComponent, Profiler } from 'react'

export class Info extends Component {

  shouldComponentUpdate(newProps) {
    if (newProps.data === this.props.data) {
      return false
    }
  }

  render() {
    console.log('Info 更新');
    return <div>{this.props.data}</div>
  }
}

// export const Info = React.memo((props) => {
//   console.log('Info 更新');
//   return <div>{props.data}</div> 
// })

export default class ComponentDemo extends Component {

  state = {
    count: 1,
    info: '这是一个info组件'
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onRenderCallback = (
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) => {
    // 合计或记录渲染时间。。。
    console.log('id', id);
    console.log('id', phase);
    console.log('actualDuration', actualDuration);
    console.log('baseDuration', baseDuration);
    console.log('startTime', startTime);
    console.log('commitTime', commitTime);
    console.log('interactions', interactions);
  }

  render() {
    const { count, info } = this.state
    return <div className="component-demo-wrapper">
      <Profiler id="homeProfile" onRender={this.onRenderCallback} >
        <Info data={info} />
        <div><span>{count}</span></div>
        <button onClick={this.addCount}>点击新增button</button>
      </Profiler>
    </div>
  }
}