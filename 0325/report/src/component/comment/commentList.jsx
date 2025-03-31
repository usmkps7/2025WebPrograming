import React from "react";
import Comment from "./comment";

const commentse = [
    {
        name: "이재협",
        comment: "잘보고 갑니다!",
    },
    {
        name: "장문용",
        comment: "담에 같이 공부해요",
    },
    {
        name: "장현호",
        comment: "좋은 정보 감사합니다~",
    },
];

function CommentList(props){
    return (
        <div>
            {commentse.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;