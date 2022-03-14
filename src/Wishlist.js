import React from 'react';
import './Wishlist.css';

function Wishlist() {

  const [query, setQuery] = React.useState("")
  const [items, setItems] = React.useState([])
  const [count, setCount] = React.useState(0)

  const handleChange = ( event ) => {
    const { value } = event.target;
    setQuery( value );
  };


  const handleAdd = () => {
    const payLoad = {
      title: query,
      status: false
    };
    let newItems = [...items, payLoad];
    setItems( newItems );
    setCount(count + 1)
  };

  return (
    <div className="Wishlist">
      <h1>Wishlist</h1>
      { count >= 4 ? <h1>Sorry! You can't add more than 3 items in Wishlist</h1> :  <div><input type={ "text" } placeholder="Enter Something" onChange={ handleChange } />
      <button onClick={ handleAdd }>ADD</button>
      <div>
        { items.map((prod) => {
          return <div>{ prod.title }</div>
        }) }
      </div></div>}
      
    </div>
  );
};

export default Wishlist;
