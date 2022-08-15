import React from "react"

export default function Tags(props){

    const gap = {
        gap: '1em'
    }

    const style = {
        cursor: "pointer"
    }

    return(
        <div className=' flow '>
            <h3 className='ff-sans-normal'>Topic Tags</h3>
            <div className="flex" style={gap}>
                <input type="button" value="Health" className='ff-sans-normal input article--tag' style={style} onClick={props.toggle}/>
                <input type="button" value="Music" className='ff-sans-normal  input article--tag' style={style} onClick={props.toggle}/>
                <input type="button" value="Sports" className='ff-sans-normal  input article--tag' style={style} onClick={props.toggle}/>
                {/* <input type="button" value="Esports" className='ff-sans-normal input article--tag' style={style} onClick={props.toggle}/> */}
            </div>
            <div className="flex" style={gap}>
                
                {/* <input type="button" value="Politics" className='ff-sans-normal  input article--tag' style={style} onClick={props.toggle}/>
                <input type="button" value="Tech" className='ff-sans-normal  input article--tag' style={style} onClick={props.toggle}/> */}
            </div>
        </div>
    )
}