import CardList from "./components/cardList";
import Card from "./components/card";
import Navbar from "./components/navbar";
import todos from "./mocks/todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>First React App</h1>
      <div className="App__toDoList">
        {todos.map((todo) => (
          <Card data={todo} key={todo.id}></Card>
        ))}
      </div>
    </div>
  );
}
export default App;
