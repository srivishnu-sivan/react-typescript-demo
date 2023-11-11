type InputProps = {
    value: string,
    handleChange : (event: React.ChangeEvent<HTMLInputElement>)=>void
}


export const Input = (props:InputProps) => {
    return (
      <input
        type="text"
        name=""
        id=""
        className="outline"
        value={props.value}
        onChange={props.handleChange}
      />
    );
}