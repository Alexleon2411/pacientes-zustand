import { create } from "zustand";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
}
const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: uuidv4()}
}

export const usePatienStore = create<PatientState>((set) => ({
    patients: [],
    patientId: '',
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },
    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter(item => item.id !== id)
        }))
    }


}))