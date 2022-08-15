import React from 'react'
import '../style/layout/_Articles.scss'

export default function Article(props) {
  
    const style = {
        marginRight: "1em",
        alignItems: "baseline",
    }

  return (
  
    <div className='article'>
      <div className='article--content'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <div className='flex' style={style}>
        <span className="article--span">{props.dateTime}</span><span className="article--span">·</span><span className="article--span">{props.readTime}</span><span className="article--span">·</span><input type="button" className="article--tag" value={props.tag}/>
        </div>
      </div>
    
      <div className="article--image">
        <img src={props.image}/>
      </div>
      </div>
  
    
  )
}

