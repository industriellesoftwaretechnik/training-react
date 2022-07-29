import { Post } from './types';

export const PostCard = (props: { post: Post }) => {
  const { title, body } = props.post;
  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
    </div>
  );
};
