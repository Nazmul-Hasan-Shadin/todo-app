import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row-reverse lg:gap-[220px]">
          <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div className='lg:w-5/12'>
            <h1 className="text-3xl pb-8 font-bold"> Who Can beneficial from this website? </h1>

    <li className='pb-3'>Students organizing their assignments and study tasks.</li>
    <li className='pb-3'>Professionals managing work tasks, deadlines, and projects.</li>
    <li className='pb-3'>Developers tracking coding tasks, project timelines, and bug fixes.</li>
    <li className='pb-3'>Entrepreneurs organizing business tasks, meetings, and project management.</li>
    <li className='pb-3'>Parents managing household chores, shopping lists, and family events.</li>


            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;