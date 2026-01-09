import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

const PostsListPage = () => {
  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {POSTS.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link to={`/posts/${post.id}`} style={{ fontSize: '18px', textDecoration: 'none', color: 'blue' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsListPage;