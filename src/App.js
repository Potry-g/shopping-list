import { useState } from "react";
import ClearItems from "./components/ClearItems";
import ItemList from "./components/ItemList";
import Shopinp from "./components/Shopinp";


function App() {

  const [text, setText] = useState([""]);
  const [shopList, setShopList] = useState([]);
  const [id, setId] = useState(1);
  const [edit, setEdit] = useState({case:false,id:-1});

  const onClickSubmit = (event) => {
    event.preventDefault();
    if(text !== ""){
      let copy = shopList;
      copy.push({id:id,name:text})
      setShopList(copy);
      setId(id+1);
    }
    setText("");
  }

  const onCLickClose = (id) => {
    let copy = [];
    shopList.forEach(elm => {if(elm.id !== id) copy.push(elm)});
    setShopList(copy);
  }

  const onCLickEdit = (item) => {
    setEdit({case:true,id:item.id});
    setText(item.name);
  }

  const onCLickEditSubmit = (event) => {
    event.preventDefault();
    if(text !== ""){
      let copy = shopList;
      for(let i = 0; i<=copy.length; i++){
        if(copy[i].id === edit.id){
          copy[i].name = text;
          break;
        }
      }
      setShopList(copy);
      setEdit({case:false,id:-1});
    }
    setText("");
  }
  return (
    <div className="root">
      <form>
        <h1 style = {{textAlign : "center"}}>
          Shopping list
        </h1>
        <Shopinp text={text} 
        onClickSubmit={onClickSubmit} 
        onClickEditSubmit = {onCLickEditSubmit}
        onChange={(e) => setText(e.target.value)} 
        edit={edit} />
      </form>
      <ItemList shopList={shopList} onCLickClose={onCLickClose} onClickEdit={onCLickEdit}/>
      {shopList.length === 0 ? <></>:<ClearItems onClick={() => setShopList([])}/>}

    </div>
  );
}

export default App;
