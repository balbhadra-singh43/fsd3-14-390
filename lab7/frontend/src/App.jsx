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

export function book(){
  return (
    <div>
      <img
          src={b1.picUrl}
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
    <Book />
    <h1>Hello React</h1>;
    <Book />
    
    </>
  );
}
