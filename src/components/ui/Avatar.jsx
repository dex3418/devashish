import { useState } from "react"
import { AVATAR_URL } from "../../data/socials.js"

// GitHub profile picture in a frame with corner brackets. Shows an initial if it cannot load.
export default function Avatar({ name }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="avatar-wrap">
      <div className="avatar">
        {failed ? (
          <span className="avatar__fallback" aria-hidden="true">{name.charAt(0)}</span>
        ) : (
          <img src={AVATAR_URL} alt={name} onError={() => setFailed(true)} />
        )}
      </div>
    </div>
  )
}
