import React, {PureComponent} from 'react';

class Life extends PureComponent {

  state = {
    title: 'Life cycles'
  }

  // componentWillMount() {
  //   console.log('3 before render')
  // }
  //
  // componentWillUpdate() {
  //   console.log('before update')
  // }
  //

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.title === this.state.title) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log('render')
    return (<div>
      <h3>{this.state.title}</h3>
      <div onClick={() => this.setState({title: 'something else'})}>Click to change</div>

    </div>)
  }
  // componentDidUpdate() {
  //   console.log('after update')
  // }
  // componentDidMount() {
  //   console.log('5 after render')
  // }
  //
  // componentWillUnmount() {
  //   console.log('unmount')
  // }
  //

  //
  // componentWillReceiveProps() {
  //   console.log('Before receive props')
  // }

}

export default Life;
