import Link from 'next/link';
import Image from 'next/image';

const UserInformationCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl text-black">Micheal Brennan</span>
          <span className="text-sm">@micheal</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores fuga enim aliquam fugit commodi
          rem praesentium dolores facilis.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="map" width={16} height={16} />
          <span>
            Living in <b>Boston</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="school" width={16} height={16} />
          <span>
            Went to <b>Boston Arts Academy</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="work" width={16} height={16} />
          <span>
            Works at <b>Museum of Fine Arts Boston</b>
          </span>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="personal site link" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">
              testexaple.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="joined date" width={16} height={16} />
            <span>Joined June 2024 </span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

export default UserInformationCard;
