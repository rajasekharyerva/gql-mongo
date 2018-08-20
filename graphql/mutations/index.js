import blogPost from './blog-post';
import comment from './comment';
import student from './student';

export default {
  ...blogPost,
  ...comment,
  ...student
};
