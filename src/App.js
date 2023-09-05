import React, {useState} from "react";
import Todolist from "./components/todolist";
import AddItem from "./components/additem";
import "./App.css";
const App = () => {
   
    const  [listitems, setListItems] = useState ([
         //   { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Buy item" },
          //  { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Watch item" },
          //  { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Study" },
        ]);

        // const Listitems = ;
        const addItemHandler = (newitem) => {
          setListItems((previouslist) => {
                    return previouslist.concat(newitem);
    
                });  
          //  listitems.push(newitem);
          //  console.log(listitems);
        };
    const name = "MERN";
    return (
        <div className="container">
            <h1>{name}'s To Do list</h1>
            <AddItem onAddItem ={addItemHandler} />
            <Todolist list={listitems} />
        </div>
    );
};

export default App;