import React, { useContext, useState } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactsContext'
import './ContactSidebar.css'

export default function ContactSidebar({ onSelectContact }) {

    const { contacts, favorite_name } = useContext(ContactsContext)
    const [searchQuery, setSearchQuery] = useState('')

    // Filtrar contactos basado en la búsqueda
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Whatsapp Clone</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar o empezar un chat"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="contacts-list">
                {
                    filteredContacts.map((contact) => {
                        const lastMessage = contact.messages[contact.messages.length - 1];
                        return (
                            <div
                                onClick={() => onSelectContact(contact)}
                                key={contact.id}
                                className="contact-item"
                            >
                                <img
                                    src={contact.profile_picture}
                                    alt={contact.name}
                                    className="contact-avatar"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=random`
                                    }}
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
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
