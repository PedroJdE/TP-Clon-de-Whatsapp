const contacts = [
    {
        id: 1,
        name: 'Shrek',
        last_time_connection: 'Hace 1 hora',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Shrek_%28character%29.png',
        messages: [
            {
                id: 1,
                text: 'Hola, como estas?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Bien, salvando princesas como siempre',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Princesa Fiona',
        last_time_connection: 'Hace 2 horas',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Princess_Fiona.png',
        messages: [
            {
                id: 1,
                text: 'Holaaa',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola amor, todo bien?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: 'Burro',
        last_time_connection: 'Hace 30 minutos',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Donkey_%28Shrek%29.png',
        messages: [
            {
                id: 1,
                text: 'Ey amigo!',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Waffles!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 4,
        name: 'Gato con Botas',
        last_time_connection: 'Hace 4 horas',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Puss_in_Boots_%28Shrek%29.png',
        messages: [
            {
                id: 1,
                text: 'Hola gatito',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Para servirte',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 5,
        name: 'Dragona',
        last_time_connection: 'Hace 5 horas',
        profile_picture: 'https://static.wikia.nocookie.net/shrek/images/4/4a/Dragon.png',
        messages: [
            {
                id: 1,
                text: 'Hola dragona',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Roar!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        name: 'Señor Farquaad',
        last_time_connection: 'Hace 6 horas',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Lord_Farquaad.png',
        messages: [
            {
                id: 1,
                text: 'Hola lord',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Soy el rey!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 7,
        name: 'Jengibre',
        last_time_connection: 'Hace 7 horas',
        profile_picture: 'https://static.wikia.nocookie.net/shrek/images/6/6f/Gingerbread_Man.png',
        messages: [
            {
                id: 1,
                text: 'Hola galleta',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'No me comas!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 8,
        name: 'Pinocho',
        last_time_connection: 'Hace 8 horas',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Pinocchio_%28Shrek%29.png',
        messages: [
            {
                id: 1,
                text: 'Hola Pinocho',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Mi nariz crece!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 9,
        name: 'Lobo Feroz',
        last_time_connection: 'Hace 9 horas',
        profile_picture: 'https://static.wikia.nocookie.net/shrek/images/9/9c/Big_Bad_Wolf.png',
        messages: [
            {
                id: 1,
                text: 'Hola lobo',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Huff puff!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 10,
        name: 'Los Tres Cerditos',
        last_time_connection: 'Hace 10 horas',
        profile_picture: 'https://static.wikia.nocookie.net/shrek/images/3/3c/Three_Little_Pigs.png',
        messages: [
            {
                id: 1,
                text: 'Hola cerditos',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'No soples!',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts

