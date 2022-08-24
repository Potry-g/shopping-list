const ItemList = ({shopList, onCLickClose, onClickEdit}) => {
  return (
    <>
        {shopList.map((elm) => (
        <div key={elm.id}> 
          <h3 style={{borderBottom: "1px solid rgb(200, 200, 200)"}}>
            {elm.name}
            <button className="close-btn" onClick={() => onCLickClose(elm.id)}> X </button>
            <button className="edit-btn" onClick={() => onClickEdit(elm)}> Edit </button>
          </h3>
        </div>))}
    </>
  )
}

export default ItemList