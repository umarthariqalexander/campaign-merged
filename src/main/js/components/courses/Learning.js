import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Extra from './Extra.jsx';

class Learning extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            val:0
        };
        this.updateState=this.updateState.bind(this);
        this.mount=this.mount.bind(this);
        this.unmount=this.unmount.bind(this);
    }
    componentWillMount(){
        // console.log('componentWillMount');
    }
    componentDidMount(){
        // console.log('componentDidMount');
    }

    updateState(){
        let val=this.state.val;
        val=val+1;
        this.setState({val});
    }
    mount(){
        ReactDOM.render(<Extra />, document.getElementById('extraLayer'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('extraLayer'));
        // console.log('extra layer removed');
    }
    render(){
        // console.log('render');
        return(
            <div>
                React Learning Page
                <div>
                    <button onClick={this.updateState}>{this.state.val}</button>
                </div>
                <button onClick={this.mount}>Attach</button>
                <button onClick={this.unmount}>Detach</button>
                <div id="extraLayer"/>
            </div>
        );
    }
}

export default Learning;
