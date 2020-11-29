import React, { Component } from 'react';
import Address from '../../components/contact/address';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Address address="abcdefgh" phone="9001123123" email="xyz@gmail.com" />
            </div>
        );
    };

}

export default ContactPage;