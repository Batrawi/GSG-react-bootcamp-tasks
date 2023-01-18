// import logo from './logo.svg';
import "./App.css";
import NamedComponent from "./Components/NamedComponent";
import Tweet from "./Components/Tweet";
import Counter from "./Components/counter";
import Person from "./Components/Person";
import Palette from "./Components/Palette";

function App() {
  return (
    <div className="app">
      <Counter />
      <NamedComponent name="battrawi" />
      <div>
        <Tweet
          username="@john_doe"
          name="John Doe"
          date="Jan 18, 2021"
          message="This is my first tweet!"
        />
        <Tweet
          username="@jane_doe"
          name="Jane Doe"
          date="Jan 19, 2021"
          message="Just learned how to use React!"
        />
        <Tweet
          username="@jim_smith"
          name="Jim Smith"
          date="Jan 20, 2021"
          message="Excited to start building my own apps!"
        />
      </div>
      <div>
        <Person
          name="John Doe"
          age={25}
          hobbies={["reading", "swimming", "traveling"]}
        />
        <Person
          name="Jane Smith"
          age={19}
          hobbies={["painting", "singing", "cooking"]}
        />
        <Person
          name="Jim Brown"
          age={30}
          hobbies={["dancing", "programming", "biking"]}
        />
      </div>
      <div>
        <Palette />
      </div>
    </div>
  );
}

export default App;
