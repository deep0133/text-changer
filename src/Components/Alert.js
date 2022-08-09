import React from 'react'

function Alert(props) {

    let capitalize = (str)=>{
        let firstCh = str.toLowerCase();
        return str.charAt(0).toUpperCase() + firstCh.slice(1);
    }

    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert"
            style={{ marginBottom: "0", position:"absolute", width:"100%" }}>
            <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
        </div>

    )
}

export default Alert;
