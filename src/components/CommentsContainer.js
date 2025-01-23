import React from "react";
import { CommentsList } from "./CommentsList";

const commentsData = [
  {
    name: "Flash",
    text: "Lorem ipsum dolor sit omet",
    replies: [],
  },
  ,
  {
    name: "Flash",
    text: "Lorem ipsum dolor sit omet",
    replies: [
      {
        name: "Flash",
        text: "Lorem ipsum dolor sit omet",
        replies: [
          {
            name: "Flash",
            text: "Lorem ipsum dolor sit omet",
            replies: [
              {
                name: "Flash",
                text: "Lorem ipsum dolor sit omet",
                replies: [
                  {
                    name: "Flash",
                    text: "Lorem ipsum dolor sit omet",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Flash",
        text: "Lorem ipsum dolor sit omet",
        replies: [
          {
            name: "Flash",
            text: "Lorem ipsum dolor sit omet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Flash",
    text: "Lorem ipsum dolor sit omet",
    replies: [
      {
        name: "Flash",
        text: "Lorem ipsum dolor sit omet",
        replies: [
          {
            name: "Flash",
            text: "Lorem ipsum dolor sit omet",
            replies: [],
          },
        ],
      },
      {
        name: "Flash",
        text: "Lorem ipsum dolor sit omet",
        replies: [
          {
            name: "Flash",
            text: "Lorem ipsum dolor sit omet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Flash",
    text: "Lorem ipsum dolor sit omet",
    replies: [
      {
        name: "Flash",
        text: "Lorem ipsum dolor sit omet",
        replies: [
          {
            name: "Flash",
            text: "Lorem ipsum dolor sit omet",
            replies: [],
          },
        ],
      },
      {
        name: "Flash",
        text: "Lorem ipsum dolor sit omet",
        replies: [
          {
            name: "Flash",
            text: "Lorem ipsum dolor sit omet",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <p className="font-bold">Comments:</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
