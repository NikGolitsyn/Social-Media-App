'use client';

import { addPost } from '@/lib/action';
import { useUser } from '@clerk/nextjs';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';
import AddPostButton from './AddPostButton';

const AddPosts = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return 'Loading...';
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || '/noAvatar.png'}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      {/* POST */}
      <div className=" flex-1">
        {/* TEXT INPUT */}
        <form action={(formData) => addPost(formData, img?.secure_url || '')} className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            onChange={(e) => setDesc(e.target.value)}
            className="bg-slate-100 flex-1 p-2 rounded-lg"
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt="emoji.png"
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            <AddPostButton />
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social media"
            onSuccess={(result) => {
              setImg(result.info);
            }}
          >
            {({ open }) => {
              return (
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => open()}>
                  <Image src="/addImage.png" alt="addImage.png" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="addVideo.png" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="poll.png" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" alt="addEvent.png" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosts;
