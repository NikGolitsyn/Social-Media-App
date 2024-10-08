'use client';
import { updateProfile } from '@/lib/action';
import { User } from '@prisma/client';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { useActionState, useState } from 'react';
import { useRouter } from 'next/navigation';
import UpdateButton from './UpdateButton';

const UpdateUser = ({ user }: { user: User }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cover, setCover] = useState<any>();
  const router = useRouter();
  const [state, formAction] = useActionState(updateProfile, { success: false, error: false });

  const handleClose = () => {
    setIsFormOpen(false);
    state.success && router.refresh();
  };

  return (
    <div className="">
      <span className="text-blue-500 text-xs cursor-pointer" onClick={() => setIsFormOpen(true)}>
        Update
      </span>
      {isFormOpen && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            className="relative p-12 max-h-[calc(100%-48px)] bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3"
            action={(formData) => formAction({ formData, cover: cover?.secure_url || '' })}
          >
            {/* TITLE */}
            <h1>Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">Use the navbar profile to change the avatar or username</div>
            {/* COVER PICTURE UPLOAD */}
            <CldUploadWidget uploadPreset="social media" onSuccess={(result) => setCover(result.info)}>
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-4 my-4" onClick={() => open()}>
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <input
                        className="display: hidden"
                        type="text"
                        name="cover"
                        value={user.cover || '/noCover.png'}
                      />
                      <Image
                        src={user.cover || '/noCover.png'}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-500">Change</span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            {/* WRAPPER */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  name="name"
                  className="ring-1 ring-gray-300 p-[13px]"
                  type="text"
                  placeholder={user.name || 'John'}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  name="surname"
                  className="ring-1 ring-gray-300 p-[13px]"
                  type="text"
                  placeholder={user.surname || 'Doe'}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  name="description"
                  className="ring-1 ring-gray-300 p-[13px]"
                  type="text"
                  placeholder={user.description || 'Life is beautiful...'}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  name="city"
                  className="ring-1 ring-gray-300 p-[13px]"
                  type="text"
                  placeholder={user.city || 'New York'}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  name="school"
                  className="ring-1 ring-gray-300 p-[13px]"
                  type="text"
                  placeholder={user.school || 'MIT'}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  name="work"
                  className="ring-1 ring-gray-300 p-[13px]"
                  type="text"
                  placeholder={user.work || 'Apple Inc.'}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  name="website"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  type="text"
                  placeholder={user.website || 'example.com.'}
                />
              </div>
            </div>
            <UpdateButton />
            {state.success && <span className="text-green-500">Profile has been updated!</span>}
            {state.error && <span className="text-red-500">Something went wrong!</span>}
            <div className="absolute text-lg right-3 top-2 cursor-pointer" onClick={handleClose}>
              x
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
