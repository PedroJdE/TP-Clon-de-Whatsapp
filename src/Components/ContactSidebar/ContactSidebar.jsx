import React, { useContext, useState, useRef } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactsContext'
import './ContactSidebar.css'

export default function ContactSidebar({ onSelectContact, onClose }) {

    const { contacts, favorite_name } = useContext(ContactsContext)
    const [searchQuery, setSearchQuery] = useState('')
    const [translateX, setTranslateX] = useState(0)
    const touchStartX = useRef(0)
    const sidebarRef = useRef(null)

    // Filtrar contactos basado en la búsqueda
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Manejo de touch para swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        if (touchStartX.current === 0) return
        const currentX = e.touches[0].clientX
        const diff = currentX - touchStartX.current
        
        // Solo permitir movimiento hacia la izquierda
        if (diff < 0) {
            setTranslateX(diff)
        }
    }

    const handleTouchEnd = () => {
        // Si el swipe fue mayor a 50px, cerrar
        if (translateX < -50 && onClose) {
            onClose()
        }
        setTranslateX(0)
        touchStartX.current = 0
    }

    return (
        <div 
            className="sidebar"
            ref={sidebarRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(${translateX}px)` }}
        >
            <div className="sidebar-header">
                <div className="header-top">
                    <h2>Whatsapp Clone</h2>
                    {onClose && (
                        <button className="close-button" onClick={onClose} title="Cerrar">
                            ✕
                        </button>
                    )}
                </div>
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
