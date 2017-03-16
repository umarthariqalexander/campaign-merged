import React, {PropTypes} from 'react';

const PromoTable = (props) => {
    return(
            <table className="table">
                <tbody>
                    <tr>
                        <th>Promotion Name</th>
                        <th>Description</th>
                        <th>Display Name</th>
                        <th>Requestor Mail</th>
                        <th>Redemption Method</th>
                        <th>Combination Type</th>
                        <th>Priority Level</th>
                    </tr>
                {props.promotions.value.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{item.promoName}</td>
                            <td>{item.description}</td>
                            <td>{item.displayName}</td>
                            <td>{item.requesterMail}</td>
                            <td>{item.redemptionMethod}</td>
                            <td>{item.combinationType}</td>
                            <td>{item.priorityLevel}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
    );
};


export default PromoTable;
