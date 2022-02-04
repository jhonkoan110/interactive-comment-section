import { useState } from 'react';
import { CommentList } from './components/CommentList';
import { Container } from './components/Container';
import { data } from './data';
import { Comment, User } from './types/types';

const App = () => {
  const [user, setUser] = useState<User>(data.currentUser);
  const [comments, setComments] = useState<Comment[]>(data.comments);

  return (
    <Container>
      <CommentList user={user} comments={comments} />
    </Container>
  );
};

export default App;
