import React from 'react'
import articles from '../data.js'
import '../style/main.scss'
import Navbar from "./Navbar"
import Article from "./Articles"
import Tags from "./Tags"

export default function App() {


  const [filteredList, setFilteredList] = React.useState(articles)

  //Maps out all of the props of the articles in the 'data.js' file.
  const list = filteredList.map(article =>(
    <Article
      key = {article.id}
      {...article} // or article = {article}
    />
  ))

    //This function filters the article depending on the tag that was clicked.
  function filter(event){
    const list = articles
    setFilteredList(list.filter((article) =>{
      return article.tag === event.target.value
    }))

  }


  return (
    <>
    <div className='flow container'>
      <Tags toggle = {filter}/>
    </div>

   <div className='flow container'>
    {list.slice(0,5)}
   </div>




    </>
  )
}

/* <div className="grid container">
        <div>

        </div>  
        <header className='spacing2'>
            
                <ul className="nav--flex">
                    <li className="ff-sans-normal"><a href="">Home</a></li>
                    <li className="ff-sans-normal"><a href="">Stories</a></li>
                    <li className="ff-sans-normal"><a href="">Projects</a></li>
                    <li className="ff-sans-normal"><a href="">Contact</a></li>
                </ul>

        </header> 
        <div className="hero--img">
            <img src="https://cdm.link/app/uploads/2018/11/GSGDM_113017_STILLS-37.jpg" className="grid-img" alt="detroit techno artists"/>
        </div>

        <div className="flow">
            <p>Latest News</p>
           <h1 >The Detroit Techno Scene</h1>
           <p>A shared deep love of music, sparked a musical group composed of Derrick May, Juan Atkins, and Kevin Saunderson. </p>
            <p>Read More</p>
        </div>
    </div>

    <div className="spacing grid container ">
      <div>
      */