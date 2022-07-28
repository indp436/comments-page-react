import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import Create from '../CommentItem/index'

const initialCommentsList = []

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: initialCommentsList}

  onAddComment = event => {
    event.preventDefault()
    let randomNumber = Math.floor(Math.random() * 8)
    if (randomNumber === 0) {
      randomNumber = 1
    }
    const {name, comment} = this.state
    const timeObj = formatDistanceToNow(new Date())

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      timeObj,
      randomNumber,
      isLiked: false,
    }

    console.log(randomNumber)

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  nameTyping = event => {
    this.setState({name: event.target.value})
  }

  commentTyping = event => {
    this.setState({comment: event.target.value})
  }

  toggledLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const lengthOfCommentList = commentsList.length

    return (
      <div className="bg">
        <div className="top-container">
          <div className="input-reading-container">
            <h1 className="title">Comments</h1>
            <p className="para">Say Something about 4.0 Technologies</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="input"
                onChange={this.nameTyping}
              />
              <textarea
                className="textarea"
                value={comment}
                placeholder="Your Comment"
                rows="10"
                cols="50"
                onChange={this.commentTyping}
              />
              <button className="btn" type="submit">
                Add Comments
              </button>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>
        <hr />
        <div className="comments-no-box">
          <p className="comments-no">{lengthOfCommentList}</p>
          <p className="comment-word">Comments</p>
        </div>
        <ul>
          {commentsList.map(each => (
            <Create
              details={each}
              color={
                initialContainerBackgroundClassNames[each.randomNumber - 1]
              }
              key={each.id}
              lengthOfCommentList={lengthOfCommentList}
              toggledLike={this.toggledLike}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
