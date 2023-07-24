"use client"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
export default function Home() {
  return (
   <div>
      <h1>Check your future home with us  </h1>
      <Carousel>
                  <div>
                      <img src="https://photos.zillowstatic.com/fp/a206a9218e92bc0fc44eb66245460026-p_e.webp" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="https://hips.hearstapps.com/hmg-prod/images/924belairroadmostexpensivehouseveranda-1558701809.jpg" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2GI9_1yrpLGWohTcG9JyP1c_-66_rnwVEQ&usqp=CAU" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="https://photos.zillowstatic.com/fp/cf2d478734043d08012e89948c4f7015-p_e.jpg" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="https://ik.imagekit.io/lhmimages/lhm_listings/75075/Davies-3232-Lakeview-Blvd-(1).jpg?tr=w-305,h-220" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
   </div>
  )
}
