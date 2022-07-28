import './index.css'

const Create = props => {
  const {details, color, toggledLike, onDelete} = props
  const {name, comment, timeObj, isLiked, id} = details
  const firstLetter = name.slice(0, 1)

  const clickedOnLike = () => {
    toggledLike(id)
  }

  const onDeleteClicked = () => {
    onDelete(id)
  }

  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeButtonAlt = isLiked ? 'liked' : 'like'

  const likeButtonColor = isLiked ? 'active-like' : ''

  const likeButtonText = isLiked ? 'Liked' : 'Like'
  return (
    <li className="comment-box">
      <div className="name-container">
        <p className={`name-circle ${color}`}>{firstLetter}</p>
        <p className="name">{name}</p>
        <p className="time">{timeObj}</p>
      </div>
      <p className="comment-typed">{comment}</p>
      <div className="like-container">
        <div className="like-box">
          <img
            src={likedImgUrl}
            className={`like-img ${likeButtonColor}`}
            alt={likeButtonAlt}
          />
          <button
            className={` ${likeButtonColor} button like-word`}
            onClick={clickedOnLike}
            type="button"
          >
            {likeButtonText}
          </button>
        </div>
        <button className="button" type="button" testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-img"
            alt="delete"
            onClick={onDeleteClicked}
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default Create
