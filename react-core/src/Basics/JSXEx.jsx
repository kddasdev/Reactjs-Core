
function JSXEx(props) {
    const {name, age} = props;
    //or we can use props.name and props.age
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
    </div>
  )
}

export default JSXEx