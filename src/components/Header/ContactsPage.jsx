import React from 'react';
import '../../styles/ContactsPage.css';

function ContactsPage() {
    return (
        <div className='contacts'>
            <div className='bgcContacts' />
            <div className='containerContact'>
                <div>
                    <i className="fas fa-envelope" />
                    <a href="mailto:newme1989.5@gmail.com?subject=Здравствуйте. Хочу изучать фронтенд!">
                        <span className='emailContact'>newme1989.5@gmail.com</span>
                    </a>
                </div>
                <div>
                    <i className="fas fa-headphones" />
                    <a href="skype:live:newme1989.5?call">
                        <span className='skypeContact'>live:newme1989.5 (skype)</span>
                    </a>
                </div>
                <div>
                    <i className="fas fa-phone" />
                    <a href="tel:+380936757386">
                        <span>093-675-73-86</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;