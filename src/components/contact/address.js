import React, { Component } from 'react';

class Address extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { address, email, phone } = this.props;
        return (<div>
            <span>{`Address: ${address} Email: ${email} Phone: ${phone}`} </span>
        </div>);
    };
}

export default Address;