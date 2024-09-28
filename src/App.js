import {MyComponent, Sample} from "./components/MyComponent";

function App() {
  return (
    <div className="App">
     Hello World 
     <MyComponent name="Ganesh" classnamefordiv="div1"  income={200}/>
     <MyComponent name="Veda" classnamefordiv="div2"  />
     <MyComponent name="Sainath" classnamefordiv="div3" income={300} />
     <Sample/>
    </div>
  );
}

export default App;
