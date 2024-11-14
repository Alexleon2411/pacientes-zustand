

type  PatientDetailItemProps = {
    label: string,
    content: string
}


export default function PatientDetailItem({label, content} : PatientDetailItemProps) {
  return (
    <p className="font-bold  mb-1 text-gray-700 uppercase"> {label}:  {''}  <span className="font-normal normal-case">{content}</span></p>
  )
}
