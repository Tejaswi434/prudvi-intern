import './index.css'

const IndividualCard = props => {
  const {changingBackground, each} = props
  const {emojiUrl, emojiName, id} = each

  const change = () => {
    changingBackground(id)
  }

  return (
    <div className="smallContainer">
      <img src={emojiUrl} alt="images" className="imageCentering" />
      <p>{emojiName}</p>
      <button onClick={change} type="button">
        Cancel me
      </button>
    </div>
  )
}

export default IndividualCard
