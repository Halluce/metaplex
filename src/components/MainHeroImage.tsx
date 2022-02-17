import React from 'react';

const MainHeroImage = () => {
  // const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:top-1/2 transform lg:-translate-y-2/3">
      {/* <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="happy team image"
      /> */}

      <img src="assets/images/mrbeast_thumb_scaled.png" alt="" />
    </div>
  );
};

export default MainHeroImage;
