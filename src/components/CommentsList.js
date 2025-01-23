import React from "react";
import { Comment } from "./Comment";

export const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div>
      <Comment key={i} data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
