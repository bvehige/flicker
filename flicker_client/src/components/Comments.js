import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/commentsAction'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Comments = ({ comments, reviewId }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <div>
            {comments.filter(function(comment){
                return comment.review_id === reviewId
            }).map(c =>
                <li><div key={c.id}>
                    {c.author} says,  {c.content}</div></li>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps, { fetchComments })(Comments)