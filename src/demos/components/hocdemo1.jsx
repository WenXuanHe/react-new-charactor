import React, { Component } from "react";

const Hoc = (WrapperedComponent) => {
    class WrapperComponent extends Component {
        state = {
            info: "一灯学堂"
        }

        render () {
            return <WrapperedComponent info={this.state.info}  /> 
        }
    }
    return WrapperComponent
}

class Welcome extends Component {
    render() {
      return <div className="text-warning">welcome {this.props.info}</div>;
    }
}

class Hello extends Component {
    render() {
      return <div className="text-warning">hello {this.props.info}</div>;
    }
}

const WelcomeHoc = Hoc(Welcome)
const HelloHoc = Hoc(Hello)

export default class HocDemo extends Component {
    render(){
        return <div>
            <WelcomeHoc />
            <HelloHoc />
        </div>
    }
}