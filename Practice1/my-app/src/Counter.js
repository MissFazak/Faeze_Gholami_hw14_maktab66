import React, { Component } from 'react';
import Button from './Button';

class Counter extends Component{
constructor(props){
    super(props)
    this.state = {
        count:0
    }

}
increase(){
    this.setState({
        count: this.state.count+1
    })
}
decrease(){
    if(this.state.count>0){
        this.setState({
            count: this.state.count-1
        })
    }
}

    render(){
        return(
<div className='countainer'>
    <div className='countHolder'>{this.state.count}</div>
    <div className='btnHolder'>
    <Button title='Increase' ClickHandeler={()=>this.increase()} />
    <Button title='Decrease' ClickHandeler={()=>this.decrease()} />

    </div>
</div>
        )
    }
}

export default Counter
