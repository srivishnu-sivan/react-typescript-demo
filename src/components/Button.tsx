import { button } from "@material-tailwind/react"

type ButtonProps = {
    handleClick :(event : React.MouseEvent<HTMLButtonElement>, id :number)=>void
}

export const Button = (props: ButtonProps) =>{
  return <button className="outline p-2 mt-5 rounded-lg w-24 hover:bg-blue-500 hover:text-white" onClick={event => props.handleClick(event, 1)} >Click</button>;
}

 