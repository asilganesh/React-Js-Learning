
const MyComponent = ({name, classnamefordiv, income =10}) => {
  return (
    <>
    <div className={classnamefordiv}>
      {name} : $ {income}
    </div>
    <hr/>
    </>
  )
}

function App() {
  return (
    <div className="App">
     Hello World 
     <MyComponent name="Ganesh" classnamefordiv="div1"  income={200}/>
     <MyComponent name="Veda" classnamefordiv="div2"  />
     <MyComponent name="Sainath" classnamefordiv="div3" income={300} />
    </div>
  );
}

export default App;
