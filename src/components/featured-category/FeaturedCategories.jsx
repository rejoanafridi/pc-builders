
const FeaturedCategories = () => {
  // Define an array of category objects
  const categories = [
    { name: 'Drone', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png' },
    { name: 'Gimbal', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png' },
    { name: 'laptop-battery', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-battery-01-48x48.png' },
    { name: 'Tv', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png' },
    { name: 'Mobile-Phone', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png' },
    { name: 'Power Station', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png' },
    { name: 'VR', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/vr-48x48.png' },
    { name: 'Smart-Watch', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png' },
    { name: 'Action Camera', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/action-camera-48x48.png' },
    { name: 'Gpu', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png' },
    { name: 'Printer', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-48x48.png' },
    { name: 'Headphone', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png' },
    { name: 'Earbuds', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/earbuds-48x48.png' },
    { name: 'Buletooth Speaker', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/bt-speaker-48x48.png' },
    { name: 'CC Camera Speaker', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/cc-camera-48x48.png' },
    { name: 'Gaming Console', icon: 'https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png' },
    
    // Add more categories here
  ];

  return (
    <div className=" py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Featured Category</h1>
        <p className="text-sm">Explore our featured categories</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-4 p-8 ">
          {categories.map((category, index) => (
            <div key={index} className="shadow-xl bg-white p-4 rounded-lg flex gap-2 justify-center items-center hover:bg-orange-200 hover:font-bold">
              <img
                src={category.icon}
                alt={category.name}
                width={48}
                height={48}
              />
              <p className="text-xs">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
