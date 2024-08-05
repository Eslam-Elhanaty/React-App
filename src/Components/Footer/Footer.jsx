import React from 'react'

export default function Footer() {
  return (

    <div id='footer' className="container-fluid ">
      <div className="row">
      <div className="d-flex pt-5  ">
    
        <div className='text-center col-md-4' >
        <h2>
              LOCATION
            </h2>
            <p>
              2215 John Daniel Drive
            </p>
            <p>
              Clark, MO 65243        </p>

       
        </div>
        <div className=' col-md-4  '>
        <h2>
        AROUND THE WEB
            </h2>
            <i class="fa-brands fa-facebook mx-1 icon fs-3 "></i>
            <i class="fa-brands fa-twitter mx-1 icon fs-3"></i>      
            <i class="fa-brands fa-linkedin-in mx-1 icon fs-3 "></i>
            <i class="fa-solid fa-globe mx-1 icon fs-3"></i>          

       
        </div>
        <div className='col-md-4    '>
        <h2>

        ABOUT FREELANCER            </h2>
            <p>
            Freelance is a free to use, licensed Bootstrap theme created <br /> by Route            </p>
      

       
        </div>
       
      </div>
      <div className=' botFooter w-100   py-4 ' >
        <p>Copyright © Your Website 2021</p>
      </div>
      </div>
    </div>
  
    
 )
}
