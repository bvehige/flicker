import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews, deleteReview } from '../actions/reviewsActions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import DeleteReview from './DeleteReview'
import moment from 'moment'

const ReviewsList = ({ reviews, flickId}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReviews())
    }, [dispatch])

        return(
            <div className="reviews">
                {reviews.filter(function(review){
                    return review.flick_id === flickId
                }).map(r => 
                    <ul>
                        <div className="review_card" key={r.id}>
                            <p>{r.content}</p>
                            <small>Reviewed By: {r.author} | Submitted {moment(r.created_at).fromNow()}</small>
                            <br/>
                            <DeleteReview reviewId={r.id} />
                        </div>
                    </ul>)}

            </div>
        )
    
}

const mapStateToProps = state => {
    return { reviews: state.reviews }

}

export default connect(mapStateToProps, { fetchReviews, deleteReview })(ReviewsList)
