import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import './ContactScreen.css'

export default function ContactScreen() {
    const { contacts } = useContext(ContactsContext)

    //Obtengo el id del contacto seleccionado a traves de los parametros de la url
    const { contact_id } = useParams()

    //Busco el contacto seleccionado en la lista de contactos
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

    return (
        <div className="contact-screen">
            <ContactSidebar />
            {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
            {
                !contact_selected
                    ? <div className="chat-container">
                        <div className="chat-header">
                            <h1>Selecciona un contacto</h1>
                        </div>
                        <div className="no-contact">
                            <h1>El contacto seleccionado no existe</h1>
                        </div>
                    </div>
                    : <div className="chat-container">
                        <div className="chat-header">
                            <img
                                src={contact_selected.profile_picture}
                                alt={contact_selected.name}
                                className="chat-avatar"
                            />
                            <div className="chat-info">
                                <h2>{contact_selected.name}</h2>
                                <span>{contact_selected.last_time_connection}</span>
                            </div>
                        </div>
                        <div className="messages-container">
                            {
                                contact_selected.messages.map(message => {
                                    return (
                                        <div
                                            key={message.id}
                                            className={`message ${message.send_by_me ? 'sent' : 'received'}`}
                                        >
                                            <div className="message-bubble">
                                                {message.text}
                                            </div>
                                            <div className="message-time">
                                                {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        <form className="message-form">
                            <textarea
                                placeholder='Escribe un mensaje...'
                                className="message-input"
                            />
                            <button type='submit' className="send-button">Enviar</button>
                        </form>
                    </div>
            }

        </div>
    )
}