import { PersonPros} from  "../types/common.types"

export const Person = (props: PersonPros) => {
    return (
        <h2 className="text-orange-400 hover:text-blue-500">Hello, {props.name.first} { props.name.last}   </h2>
  )
};


