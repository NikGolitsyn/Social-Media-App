import { User } from '@prisma/client';
import { Suspense } from 'react';
import Ad from '../Ad';
import Birthdays from './Birthdays';
import FriendRequests from './FriendRequests';
import UserInformationCard from './UserInformationCard';
import UserMediaCard from './UserMediaCard';

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInformationCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
