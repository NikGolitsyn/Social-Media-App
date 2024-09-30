import Image from 'next/image';

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          <Image
            src="https://images.pexels.com/photos/5531004/pexels-photo-5531004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="ad image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/5531004/pexels-photo-5531004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Cold Brew</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {size === 'sm'
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            : size === 'md'
              ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem, porro dolore vel voluptatum at illo aperiam vero nulla odit in fuga sunt!'
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem, porro dolore vel voluptatum at illo aperiam vero nulla odit in fuga sunt! Ex, voluptatum minima maiores nisi alias voluptate.'}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
      </div>
    </div>
  );
};

export default Ad;
