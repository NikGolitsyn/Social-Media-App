'use client';

import { FollowRequest, User } from '@prisma/client';
import Image from 'next/image';

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  return (
    <>
      {requests.map((requests) => (
        <div className="flex items-center justify-between " key={requests.id}>
          <div className="flex items-center gap-4">
            <Image
              src={requests.sender.avatar || '/noAvatar.png'}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {requests.sender.name && requests.sender.surname
                ? requests.sender.name + ' ' + requests.sender.surname
                : requests.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <Image src="/accept.png" alt="accept" width={20} height={20} className="cursor-pointer" />
            <Image src="/reject.png" alt="reject" width={20} height={20} className="cursor-pointer" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequestList;
