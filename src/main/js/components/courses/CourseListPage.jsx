import React,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const CourseListPage = (props) => {
    // let courseRow = () => {
    //     return(props.courseList.map((item,index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>
    //                     {item}
    //                 </td>
    //             </tr>)
    //         })
    //     );
    // }
    return (
        <div>
            <h3>{props.name}</h3>

                {props.courseList.courseName}
        </div>
    );
};

CourseListPage.propTypes={
    courseList(props,propName,component){
        if(props.courseList.length === 4){
            return new Error(`Array length should be greather than 4`); // custom props validation
        }
    },
    name(props, propName, component){
        if(props.name === ''){
            return new Error('Name should not be empty');
        }
    }
};
CourseListPage.defaultProps={
    name:"CourseListChildStateLess Component"
};

export default CourseListPage;
