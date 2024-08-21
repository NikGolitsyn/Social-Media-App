import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/12089901/pexels-photo-12089901.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Elisha Hartman</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={22} height={22} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
          <span className="text-gray-500">See other 16 have upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
