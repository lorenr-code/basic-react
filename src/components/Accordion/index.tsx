import { ReactNode, useState } from "react"

interface IAccordionProps {
    children?: ReactNode,
    title: string,
}


export const Accordion = ({children, title}: IAccordionProps) => {
  const [open, setOpen] = useState(false)
  
    return (
    <div onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        {
            open && children
        }

    </div>
  )
}
