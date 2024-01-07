const Greetings = (props) => {
  let language = '';
  if(props.lang === "de"){
    language = "Hallo";
  }
  if(props.lang === "en"){
    language = "Hello";
  }
  
  if(props.lang === "es"){
    language = "Hola";
  }

  if(props.lang === "fr"){
    language = "Bonjour"
  }

  return (
    <div className="greetings">
        <p>{language} {props.children}</p>
    </div>
  )
}

export default Greetings;
