import React from 'react'
import Nave from './Nave'

const ViewBooks = () => {
    var booklist= [{
        "title":"Wings of Fire",
        "Price":"260",
        "Author":"APJ",
        "image":"https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"},
        
            {
              "title":"XMAS CAROL",
            "Price":"500",
            "Author":"Charles",
            "image":"https://st2.depositphotos.com/1105977/5461/i/600/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg"},
            {
                "title":"abc",
                "Price":"130",
                "Author":"xyz",
              "image":"https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612"}
    
    ]
  return (
    <div>
        <Nave/>
        <div className="container">
            <div className="row g-3">
                {booklist.map((value,key)=>{
                return <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <div class="card" >
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.Author}</p>
    <p class="card-text">{value.Price}</p>
    <a href="#" class="btn btn-primary">BUY NOW</a>
  </div>
</div>
                </div>
                })}
            
            </div>
        </div>
    </div>
  )
}

export default ViewBooks