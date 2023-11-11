type GreetProps = {
    name: String,
    messageCount: number,
    isLoggedIN : boolean
}


export const Greet = (props : GreetProps) => {
      return props.isLoggedIN ? (
        <>
          <h2>Welcome to {props.name}, you Bastard!!!</h2>
          <h4>You have {props.messageCount} unread messages</h4>
        </>
      ) : null;
}