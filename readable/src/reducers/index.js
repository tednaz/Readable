import {
    ADD_POST
}
from '../actions'

function postReducer (state={}, action)
{
    const { title, body, author, category, voteScore } = action
    let id = Date.now().toString();

    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                [id]:{
                    id: Date.now().toString,
                    timestamp: Date.now(),
                    title: title,
                    body: body,
                    author: author,
                    voteScore: voteScore,
                    deleted : false
                }
            }

        default:
            return state        
        }
}

export default postReducer
