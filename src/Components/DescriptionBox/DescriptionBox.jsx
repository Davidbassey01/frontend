import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repellat atque odio modi voluptatum totam repudiandae vero, cupiditate sit expedita magnam dolorem mollitia molestiae assumenda consequuntur commodi labore! Dolorum unde voluptatibus architecto culpa est, natus facere eum repudiandae aliquid quisquam quasi voluptas! Cumque sequi illo, voluptates laborum veniam doloremque porro!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quidem rerum repellat, velit aut sint commodi eius, quod placeat, reprehenderit quaerat fuga esse corrupti praesentium voluptates beatae itaque dolorum fugiat!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox