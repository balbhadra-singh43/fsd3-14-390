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
          src="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg"
          alt="Design Pattern React JS"
       /> 
      <h1>Lets us react</h1>
      <h2>price: 765.00</h2>
      <h3>Quantiy:5</h3>
      <h4>Rating: 5.0</h4>
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
