import React from 'react'

const Navbar = () => {
    return (
        <div className='flex py-3 flex-wrap justify-around'>
            <h1 className='text-lg font-semibold'>Todo App</h1>
            <ul className='flex gap-[40px] font-medium'>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Content</li>
            </ul>

        </div>
    )
}

export default Navbar