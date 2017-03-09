import React,{PropTypes} from 'react';

class Extra extends React.Component{
    constructor(props,context){
        super(props,context);
        this.update=this.update.bind(this);
        this.state={
            author:'empty'
        };
    }

    componentWillUnmount(){
        // console.log('componentWillUnmount');
    }
    update(){
        let author="john";
        this.setState({author});
        // this.state.author=author;
        // this.props.author="john";

    }
    render(){
        return(
            <div>
                This is Additional Attachment component
                <div>
                    {this.props.author}
                    {this.state.author}
                </div>
                <button onClick={this.update}>Update author Name</button>
            </div>
        );
    }
}

Extra.propTypes={
    author:PropTypes.string.isRequired
};

Extra.defaultProps={
    duration:1,
    author:'mike'
};

export default Extra;
