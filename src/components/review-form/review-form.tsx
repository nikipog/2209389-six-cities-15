import { FormEvent, Fragment, ReactEventHandler, useState } from 'react';
import { RATINGS } from '../../const';
import { useActionCreators } from '../../hooks/store';
import { commentsThunk } from '../../store/thunks/comments';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

type ReviewFormProps = {
  offerId: string;
}


function ReviewForm ({offerId} : ReviewFormProps) : JSX.Element {
  const [review, setReview] = useState({rating: 0, review: ''});
  const handleChange: TChangeHandler = (evt) => {
    const {name, value} = evt.currentTarget;
    setReview({...review, [name]:value});
  };
  const { postComment } = useActionCreators(commentsThunk);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Использую offerId из пропсов и состояние вашей формы для отправки комментария
    postComment({
      offerId,
      body: {
        comment: review.review,
        rating: Number(review.rating),
      }
    });
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({value, label}) => (
          <Fragment key ={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < MIN_REVIEW_LENGTH || review.review.length > MAX_REVIEW_LENGTH || review.rating === 0}
        >
                  Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

