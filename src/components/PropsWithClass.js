import React, { Component } from "react";

class PropsWithClass extends Component
{
    render(props)
    {
        return(<h1>Hello {this.props.name} {this.props.surName}</h1>)
    }
}

export default PropsWithClass;