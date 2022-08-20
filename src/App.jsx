import { useState } from 'react'
import data from './data'





function App() {
  const [articles, setArticles] = useState(data)
  
  const articleList = articles.map((article)=>{
    return(
      <Article
        key={article.id}
        article= {article}
      />
    )
  })

  function filter(event){
    const list = data
    setArticles(list.filter((article) =>{
      return article.tag === event.target.value
    }))
  }
  return (
    <div className='container'>
      <Tag toggle={filter}/>
      {articleList}
    </div>
    )
  
}

function Article(props){

  return(
    <div className='container'>
    <div className='article-container article-flex'>
      <div className='article-content'>
        <h1>{props.article.title}</h1>
        <p>{props.article.desc}</p>
        <p>{props.article.dateTime} · {props.article.readTime} · {props.article.tag}</p>
      </div>
      <img  className="article-image" src={props.article.image}/>
    </div>
  </div>
  )
}

function Tag(props){
  
  return(
    <div className='container'>
      <div className='tag-container tag-flex'>
        <input className="tag" type="button" value="Health" onClick={props.toggle}/>
        <input className="tag" type="button" value="Sports" onClick={props.toggle}/>
        <input className="tag" type="button" value="Music" onClick={props.toggle}/>
      </div>
    </div>
    
  )
}

export default App
