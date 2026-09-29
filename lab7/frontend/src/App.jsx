// export default function App(){
//   return <h1>Hello balbhadra</h1>
// }

const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY218_.jpg",
  bname: "React js for beginners ",
  price: 1200,
  quantity: 5,
  rating: 4.0,
};

function book(){
  return (
    <div>
      <img
          src={props.book.picUrl}
          alt={b1.bname}
       /> 
      <h1>{b1.bname}</h1>
      <h2>{b1.price}</h2>
      <h3>{b1.quantity}</h3>
      <h4>{b1.rating}</h4>
    </div>
  );
}

export default function App (){
  return (
    <>
    <book book={b1} />
    <h1>Hello React</h1>;
    <book book={b2}/>
    <book book={b1}/>
    <book book={b2} />
    
    </>
  );
}
