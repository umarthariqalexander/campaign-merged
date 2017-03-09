import React, {PropTypes} from 'react';
import PromoTable from './PromoTable.jsx';

class PromotionList extends React.Component{
    constructor(context,props){
        super(context,props);
        this.state={
            promotions:[{
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },{
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            },
            {
                'promoName':'XYZ',
                'description':'promotion xyz is created for some abc reason',
                'displayName':'adjustment Display name shown here',
                'requesterMail':'xyz@gmail.com',
                'redemptionMethod':'coupons',
                'combinationType':'exclusive',
                'priorityLevel':'1'
            }]
        };
    }

    render() {
        return(
            <div>
                <h2>Promotion List</h2>
                <PromoTable promotions={this.state.promotions}/>
            </div>
        );
    }

}

export default PromotionList;
