import React from 'react'

export default function Contact() {
  return (

    <div className=' text-center mt-5 pt-5 vh-100'>
        <h1 className='adress  mt-5 pt-5'> conatct section</h1>
        <br />
        <i class="fa-solid fa-star fs-2 mt-2 "></i>        

        <div className='bg-white offset-2 mt-5 pt-5  '>

        <input type="text" className='w-75 form-control outline-none p-2 m-3 text-danger    border-0 border-bottom py-3 ' placeholder=' UserName' />
        <input type="number" className='w-75  form-control  p-2 m-3 text-danger   border-0 border-bottom py-3'  placeholder='UserAge'/>
        <input type="email" className='w-75 form-control p-2 m-3 text-danger  border-0 border-bottom py-3'placeholder='UserEmail' />
        <input type="password" className='w-75  form-control p-2 m-3 text-danger   border-0 border-bottom py-36'placeholder='userPassword' />

</div> 

<button className='btn btn-outline-danger    p-3 text-black '> send massage</button>
    </div>
 )
}
