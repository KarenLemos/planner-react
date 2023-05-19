import { useState } from "react"
import Appointment from "./Appointment"

export default function Day(props) {

    const [appointments, setAppointments] = useState([])

    const addAppointment = () => {
      const name = prompt("Compromisso: ")
      const newAppointment = {
        id: appointments.length,
        name,
        done: false
      }
      setAppointments(currentState => [...currentState, newAppointment])
    }
  
    const toggleDone = (appointmentId) => {
      setAppointments((currentState) => (
        currentState.map(appointment => {
          if (appointment.id !== appointmentId)
            return appointment
          else
            return { ...appointment, done: !appointment.done }
        }) 
      ))
    }
  
    const removeAppointment = (appointmentId) => {
      setAppointments(currentState => (
        currentState.filter(appointment => appointment.id !== appointmentId)
      ))
    }

    return(
      <div className="day">
        <h2>{props.day}</h2>
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            toggleDone={toggleDone}
            removeAppointment={removeAppointment}
          />
        ))}
        <button onClick={addAppointment}>Adicionar</button>
      </div>
    )

    
}