function displayCommentTree(data) {
    let commentTreeElement = document.getElementById("comment-tree");
    if (data != null) {
        Object.values(data).forEach(comment => {
            if (comment.post_id === comment.parent_id) {
                commentTreeElement.appendChild(getUlForComment(data, comment.comment_id));
                addComment(data, comment.comment_id, commentTreeElement)
            }
        })
    } else {
        let errorP = document.createElement("p");
        let errorText = document.createTextNode("404 : Data not found");
        errorP.appendChild(errorText);
        commentTreeElement.appendChild(errorP);
    }
}

function addComment(data, commentId, commentTreeElement) {
    Object.values(data).forEach(comment => {
        if (comment.parent_id.includes(commentId)) {
            commentTreeElement.appendChild(getUlForComment(data, comment));
            addComment(data, comment.comment_id, commentTreeElement)
        }
    })
}

function getUlForComment(data, comment) {
    let commentUl = document.createElement("ul");
    let commentP = document.createElement("p");
    let commentMessage = document.createTextNode(comment.message);
    commentP.appendChild(commentMessage);
    if (comment.comment_id === data.curr_id) {
        commentP.setAttribute("class", "alert alert-dark active_background");
    } else {
        commentP.setAttribute("class", "alert alert-dark");
    }

    commentUl.appendChild(commentP);

    return commentUl
}