import Book from "./components/Book";
import Event from "./components/Event";
import Fruit from "./components/fruit";
import Pen from "./components/pen";

import { books } from "./data/books";
import { pens } from "./data/pens";

const MyButton=()=>{
  let count = 1;
  const handleSubmit=()=>{
    console.log("button clicked:", count);
    count
    alert("Button clicked");
  };
  return(
    <button className="bg-black text-white text-xl rounded-md m-4 px-4 py-2 " onClick={handleSubmit} >Submit</button>
  )
}
export default function App() {
  return (
    <>
      <MyButton/>
    </>
  );
}