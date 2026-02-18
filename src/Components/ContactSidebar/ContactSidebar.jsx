import React, { useContext } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router-dom'
import './ContactSidebar.css'

export default function ContactSidebar() {

    const { contacts, favorite_name } = useContext(ContactsContext)

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Whatsapp Clone</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar o empezar un chat" />
                </div>
            </div>
            <div className="contacts-list">
                {
                    contacts.map((contact) => {
                        const lastMessage = contact.messages[contact.messages.length - 1];
                        return (
                            <Link
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                className="contact-item"
                            >
                                <img
                                    src={contact.profile_picture}
                                    alt={contact.name}
                                    className="contact-avatar"
                                />
                                <div className="contact-info">
                                    <div className="contact-name">{contact.name}</div>
                                    <div className="contact-last-message">
                                        {lastMessage ? lastMessage.text : 'No hay mensajes'}
                                    </div>
                                </div>
                                <div className="contact-time">
                                    {contact.last_time_connection}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
