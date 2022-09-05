import React from 'react'

import Article from '../../components/article/Article'

import './blog.css'

import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const articles = [
  {
    image: blog1,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    image: blog2,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    image: blog3,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    image: blog4,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    image: blog5,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  }
]

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article 
            image={articles[0].image} 
            date={articles[0].date} 
            text={articles[0].text}
          />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article 
            image={articles[1].image} 
            date={articles[1].date} 
            text={articles[1].text}          
          />
          <Article 
            image={articles[2].image} 
            date={articles[2].date} 
            text={articles[2].text}          
          />
          <Article 
            image={articles[3].image} 
            date={articles[3].date} 
            text={articles[3].text}          
          />
          <Article 
            image={articles[4].image} 
            date={articles[4].date} 
            text={articles[4].text}          
          />
        </div>
      </div>
    </div>
  )
}

export default Blog