import React from 'react'
import part1 from '../../assets/poert1.png'
import part2 from '../../assets/port2.png'
import part3 from '../../assets/port3.png'

export default function Gallery() {
    return (
        <div className=' container h-100 mt-5 pt-3 mb-5 '>
            <div className='  mt-5 py-4  w-100'>
                <div className="row mb">
                    <h1 id='adress' className='adress  '>portfolio component</h1>
                    <i class="fa-solid fa-star fs-2 mb-3 "></i>





                    <div className="imgProto col-md-4 pt-2   ">
                        <div className='overflow-hidden rounded-4  position-relative mt-3'>
                            <img src={part1} alt="" className='w-100 rounded-4' />
                            <div className='layer position-absolute top-0 left-0 d-flex  align-items-center justify-content-center'>
                                <div>
                                    <i class="text-white fa-solid fa-plus fa-3x  "></i>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="imgProto col-md-4 pt-2   ">
                        <div className='overflow-hidden rounded-4  position-relative mt-3'>
                            <img src={part2} alt="" className='w-100 rounded-4' />
                            <div className='layer position-absolute top-0 left-0 d-flex  align-items-center justify-content-center'>
                                <div>
                                    <i class="text-white fa-solid fa-plus fa-3x  "></i>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="imgProto col-md-4 pt-2   ">
                        <div className='overflow-hidden rounded-4  position-relative mt-3'>
                            <img src={part3} alt="" className='w-100 rounded-4' />
                            <div className='layer position-absolute top-0 left-0 d-flex  align-items-center justify-content-center'>
                                <div>
                                    <i class="text-white fa-solid fa-plus fa-3x  "></i>

                                </div>

                            </div>
                        </div>
                    </div>



                </div>

                <div className="row mb">




                    <div className="imgProto col-md-4 pt-2   ">
                        <div className='overflow-hidden rounded-4  position-relative mt-3'>
                            <img src={part2} alt="" className='w-100 rounded-4' />
                            <div className='layer position-absolute top-0 left-0 d-flex  align-items-center justify-content-center'>
                                <div>
                                    <i class="text-white fa-solid fa-plus fa-3x  "></i>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="imgProto col-md-4 pt-2   ">
                        <div className='overflow-hidden rounded-4  position-relative mt-3'>
                            <img src={part3} alt="" className='w-100 rounded-4' />
                            <div className='layer position-absolute top-0 left-0 d-flex  align-items-center justify-content-center'>
                                <div>
                                    <i class="text-white fa-solid fa-plus fa-3x  "></i>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="imgProto col-md-4 pt-2   ">
                        <div className='overflow-hidden rounded-4  position-relative mt-3'>
                            <img src={part1} alt="" className='w-100 rounded-4 ' />
                            <div className='layer position-absolute top-0 left-0 d-flex  align-items-center justify-content-center'>
                                <div>
                                    <i class="text-white fa-solid fa-plus fa-3x  "></i>

                                </div>

                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}
