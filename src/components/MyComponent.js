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

  const Sample = () =>{
    return(
        <>
        <h1>Sample Component</h1>
        </>
    )
  }

  export  {MyComponent, Sample}
 