export const Shopinp = ({text, onClickSubmit, onChange, onClickEditSubmit, edit}) => {

    return (
        <div>
            <input 
            type={"text"} 
            placeholder={"e.g. eggs"} 
            className = "input" 
            value={text}
            onChange={onChange}/>
            {edit.case === false ? 
            <button className='btn' onClick={onClickSubmit}> Submit </button>:
            <button className='btn' onClick={onClickEditSubmit}> Edit </button>}
        </div>
    )}

export default Shopinp;