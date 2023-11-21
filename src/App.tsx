import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import "./App.css";
import { PersonList } from "./components/PersonList";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";
import { Button } from "./components/Button"
import { Input } from "./components/Input"

import { Container} from "./components/Container"

import { LoggedIn } from './components/state/LoggedIn'

// import { User } from "./components/state/User"

import {Counter} from "./components/reducer/Counter"

import { ThemeContextProvider } from "./components/context/ThemeContext"

import { Box } from "./components/context/Box"

import { User} from "./components/context/User"
import {UserContextProvider } from "./components/context/UserContext"

function App() {
  const personName = {
    first: "sivan",
    last: "Sri Vishnu ",
  };

  const nameList = [
    { firstName: "Clark", lastName: "Kent" },
    { firstName: "Bruce", lastName: "Wayne" },
    { firstName: "Diana", lastName: "Prince" },
    { firstName: "Barry", lastName: "Allen" },
    { firstName: "Arthur", lastName: "Curry" },
    { firstName: "Hal", lastName: "Jordan" },
    { firstName: "Victor", lastName: "Stone" },
    { firstName: "Billy", lastName: "Batson" },
  ];
  return (
    <div className="App">
      {/* <Greet name="TypeScript" messageCount={20} isLoggedIN={true} />
      <Person name={personName} />
    <PersonList names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!!</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event,id) => { console.log("print FISH", event,id)
      }} /> */}
      {/* <Input value="" handleChange={event=> console.log(event.target.value)
      }/> */}
      {/* <Container styles={{
      border: '5px solid gray', padding: '1rem'
    }}/> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}

      {/* <Counter />  */}

      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      

      <UserContextProvider>
        <User/>
      </UserContextProvider>

    </div>
  );
}

export default App;
