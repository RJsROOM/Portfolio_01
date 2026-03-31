import React from 'react'
import MacWindows from './MacWindows'
import './spotify.scss'

const Spotify = () => {
  return (
    <MacWindows width='20vw'>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdpQPPZq3F7n?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindows>
  )
}

export default Spotify