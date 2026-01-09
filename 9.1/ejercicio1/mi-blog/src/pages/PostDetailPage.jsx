import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

const PostDetailPage = () => {
  const { postId } = useParams();
  
  const post = POSTS.find((p) => p.id === parseInt(postId));

  if (!post) {
    return (
      <div>
        <h2>Artículo no encontrado</h2>
        <Link to="/posts">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p style={{ lineHeight: '1.6', fontSize: '18px' }}>{post.content}</p>
      <hr />
      <Link to="/posts">← Volver a la lista de artículos</Link>
    </div>
  );
};

export default PostDetailPage;