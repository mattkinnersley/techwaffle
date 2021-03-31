import { usePagination } from "@techwaffle/hooks/usePagination";
import PageChanger from "../page-changer";
import PostThumbnail from "../post-thumbnail";

const PostList = ({ posts }) => {
  const [
    paginatedPosts,
    { currentPage, pageLimit, nextPage, previousPage },
  ] = usePagination(posts, 3);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-quicksand-bold my-4">More Posts</h2>
        <PageChanger
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
          pageLimit={pageLimit}
        />
      </div>
      <div className="flex flex-col">
        {paginatedPosts.map((post) => (
          <PostThumbnail key={Math.random()} post={post}></PostThumbnail>
        ))}
      </div>
    </div>
  );
};

export default PostList;
