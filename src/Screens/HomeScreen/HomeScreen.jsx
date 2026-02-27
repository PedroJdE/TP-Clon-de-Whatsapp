import React, { useContext, useState, useEffect } from 'react'
import { GoChevronLeft, GoPaperAirplane } from "react-icons/go";
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactsContext } from '../../Context/ContactsContext'
import './HomeScreen.css'

export default function HomeScreen() {
  const { contacts } = useContext(ContactsContext)
  const [selectedContact, setSelectedContact] = useState(null)
  const [messages, setMessages] = useState([])
  const [showSidebar, setShowSidebar] = useState(true)

  // Inicializar mensajes cuando cambia el contacto seleccionado
  useEffect(() => {
    if (selectedContact) {
      setMessages(selectedContact.messages)
      setShowSidebar(false) // Ocultar sidebar al abrir un chat en responsive
    }
  }, [selectedContact])

  // Detectar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 680) {
        // En desktop: mostrar sidebar siempre
        setShowSidebar(true)
      } else {
        // En mobile: ocultar sidebar si hay un chat seleccionado
        if (selectedContact) {
          setShowSidebar(false)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [selectedContact])

  // Función para enviar mensaje
  const handleSendMessage = (e) => {
    e.preventDefault()
    const messageText = e.target.message.value.trim()
    if (messageText) {
      const newMessage = {
        id: Date.now(),
        text: messageText,
        send_by_me: true,
        created_at: new Date().toISOString(),
        is_read: true
      }
      setMessages(prevMessages => [...prevMessages, newMessage])
      e.target.message.value = ''
    }
  }

  // Función para volver al sidebar
  const handleBackToSidebar = () => {
    setShowSidebar(true)
  }

  return (
    <div className="home-screen">
      <div className={`sidebar-wrapper ${showSidebar ? 'show' : 'hide'}`}>
        <ContactSidebar 
          onSelectContact={setSelectedContact} 
          onClose={() => selectedContact && setShowSidebar(false)}
        />
      </div>
      {showSidebar && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => selectedContact && setShowSidebar(false)}
        />
      )}
      {!selectedContact ? (
        <div className="chat-container">
          <div className="chat-header">
            <h1>Selecciona un contacto</h1>
          </div>
          <div className="no-contact">
            <h1>Elige un contacto para chatear</h1>
          </div>
        </div>
      ) : (
        <div className="chat-container">
          <div className="chat-header">
            <button
              className="back-button"
              onClick={handleBackToSidebar}
            >
              <GoChevronLeft />
            </button>
            <img
              src={selectedContact.profile_picture}
              alt={selectedContact.name}
              className="chat-avatar"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedContact.name)}&background=random&size=200`
              }}
            />
            <div className="chat-info">
              <h2>{selectedContact.name}</h2>
              <span>{selectedContact.last_time_connection}</span>
            </div>
          </div>
          <div className="messages-container">
            {messages.map(message => (
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
            ))}
          </div>
          <form className="message-form" onSubmit={handleSendMessage}>
            <textarea
              name="message"
              placeholder='Escribe un mensaje...'
              className="message-input"
            />
            <button type='submit' className="send-button">
              <span className="send-text">Enviar</span>
              <span className="send-icon"><GoPaperAirplane /></span>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}