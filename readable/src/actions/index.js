export const ADD_POST = 'ADD_POST'

export function addPost({post})
{
    let title = post.title;
    let body = post.body;
    let author = post.author;
    let category = post.category;
    let voteScore = post.voteScore;

    return
        {
            type: ADD_POST,
            title,
            body,
            author,
            category,
            voteScore
        }
}