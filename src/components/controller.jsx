const Controller = ({handleClick}) => {


    return (
        <>
        <div className="flex w -[] h-[100px] bg-[white] flex-wrap mt-[20px]  ">
            <button className="flex-1" onClick={()=>handleClick(-10)}>-10</button>
            <button className="flex-1" onClick={()=>handleClick(-100)}>-100</button>
            <button className="flex-1" onClick={()=>handleClick(-1000)}>-1000</button>
            <button className="flex-1" onClick={()=>handleClick(+1000)}>+1000</button>
            <button className="flex-1" onClick={()=>handleClick(+100)}>+100</button>
            <button className="flex-1" onClick={()=>handleClick(+10)}>+1</button>
        </div>
        </>
    )
}

export default Controller;