import React from 'react';
import Image from 'next/image';
import graphicStudio from '../../../public/assets/images/brand-1.svg';
import salvaArt from '../../../public/assets/images/brand-2.svg';
import goldenStudio from '../../../public/assets/images/brand-3.svg';
import furnitureDesign from '../../../public/assets/images/brand-4.svg';
import travel from '../../../public/assets/images/brand-5.svg';


function HotCategory() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-around align-middle my-20'>
      <Image src={graphicStudio} alt="graphicStudio" height="70" width="200" />
      <Image src={salvaArt} alt="salvaArt" height="70" width="200" />
      <Image src={goldenStudio} alt="goldenStudio" height="70" width="200" />
      <Image src={furnitureDesign} alt="furnitureDesign" height="70" width="200" />
      <Image src={travel} alt="travel" height="70" width="200" />
      </div>
      <div>
      <div className="grid grid-cols-2 gap-4">
         <div></div>
         <div></div>
        </div>
      </div>
    </div>
  )
}

export default HotCategory