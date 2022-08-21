import { useState } from 'react'
import data from './data'


function App() {
  const [articles, setArticles] = useState(data)
  //Mapping out all the data from the data.js file and rendering them on the page.
  const articleList = articles.map((article)=>{
    return(
      <Article
        key={article.id}
        article= {article}
      />
    )
  })
  //Filtering the articles by their tag.
  function filter(event){
    const list = data
    setArticles(list.filter((article => article.tag === event.target.value)));
  }

  //Toggle button that does not filter any of the articles so the user can see all of the articles regardless of topic.
  function filterAll(){
    const list = data
    setArticles(list.filter((article => article.tag !== '')));
  }
  return (
    <div className='flow container'>
      <Tag 
        toggleAll={filterAll}
        toggle={filter}
        
      />
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
        <p className='desc'>{props.article.desc}</p>
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
        <input className="tag" type="button" value="All" onClick={props.toggleAll}/>
        <input className="tag" type="button" value="Health" onClick={props.toggle}/>
        <input className="tag" type="button" value="Sports" onClick={props.toggle}/>
        <input className="tag" type="button" value="Music" onClick={props.toggle}/>
      </div>
    </div>
    
  )
}

export default App
