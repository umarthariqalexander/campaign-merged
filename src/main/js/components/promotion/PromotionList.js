import React, {PropTypes} from 'react';
import PromoTable from './PromoTable.jsx';
import * as promoActions from '../../actions/promoActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class PromotionList extends React.Component{
    constructor(context,props){
        super(context,props);
        this.state ={
            promoList:{}
        };
    }
    componentWillMount() {
        if(typeof window !== 'undefined') {
            this.props.actions.getPromotions();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.promotions) {
            this.setState({ promoList: nextProps.promotions});
        }
    }
    getPromoTable(){
        if(this.state.promoList.value!==undefined)
        return <PromoTable promotions={this.state.promoList}/>;
    }

    render() {
        return(
            <div>
                <h2>Promotion List</h2>
                {this.getPromoTable()}
            </div>
        );
    }

}

PromotionList.propTypes = {
    promotions:PropTypes.object.isRequired,
};

function mapStateToProps(state,ownProps) {
    return{
        promotions:state.promos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(promoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionList);
