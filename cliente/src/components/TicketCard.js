import React, {useState, useEffect} from 'react'
import api from '../api/Axios'

const TicketCard = () => {
    const id = 5;
    const [ticket, setTicket] = useState({idus: 5, idtramite: 0, idestado: 0, cedula: '', fecha: new Date()})

    return(
        <>
            <p>{ticket.fecha}</p>
        </>
    )
}

export default TicketCard