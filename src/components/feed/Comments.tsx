import prisma from '@/lib/client';
import CommentList from './CommentList';

const Comments = async ({ postId }: { postId: number }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  if (!comments) return null;

  return (
    <div className="">
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
