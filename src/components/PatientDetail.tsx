import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatienStore } from "../store"

type PatientDetailProps ={
    patient: Patient
}

export default function PatientDetail({patient} : PatientDetailProps) {
    const deletePatient = usePatienStore((state) => state.deletePatient)
  return (
    <div className="bg-white px-5 py-10 my-10 mx-5 shadow-md rounded-xl">
        <PatientDetailItem label={'ID'} content={patient.id}/>
        <PatientDetailItem label={'Name'} content={patient.name} />
        <PatientDetailItem label={'Propietario'} content={patient.caretaker} />
        <PatientDetailItem label={'Email'} content={patient.email} />
        <PatientDetailItem label={'Fecha De Alta'} content={patient.date.toString()} />
        <PatientDetailItem label={'Nota'} content={patient.symtoms} />

        <div className="flex justify-between  mt-10">
            <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" type="button" >Editar</button>
            <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button" onClick={() =>deletePatient(patient.id)}>Eliminar</button>
        </div>
    </div>
  )
}
