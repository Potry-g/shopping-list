const ClearItems = ({onClick}) => {
  return (
    <div style={{textAlign : "center"}}>
        <button className="clear-items" onClick={onClick}>Clear items</button>
    </div>
  )
}

export default ClearItems