import React from "react";

const PropsWithFun = (props) =>
{
    return(
        <div>
        <h1>Hello {props.name} {props.surName}</h1>
        {props.children}
        </div>
        /* Props Using Function */
    )
}

export default PropsWithFun;