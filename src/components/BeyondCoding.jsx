import './BeyondCoding.css'

import spotify from '../assets/image/beyond-coding/spotify.png'
import running from '../assets/image/beyond-coding/running.png'
import youtube from '../assets/image/beyond-coding/you-tube.png'
import basketball from '../assets/image/beyond-coding/basketball.png'
import netflix from '../assets/image/beyond-coding/netflix.png'
import guitar from '../assets/image/beyond-coding/guitar.png'
import bike from '../assets/image/beyond-coding/bike.png'
import disney from '../assets/image/beyond-coding/disney.png'

const hobbies = [
    {name: 'Spotify', icon: spotify},
    {name: 'Running', icon: running},
    {name: 'Youtube', icon: youtube},
    {name: 'Basketball', icon: basketball},
    {name: 'Netflix', icon: netflix},
    {name: 'Playing Guitar', icon: guitar},
    {name: 'Disney+', icon: disney},
    {name: 'Cycling', icon: bike},
]


function BeyondCoding() {
    return (
        <div className="beyond-coding">
            <h3>Beyond Coding</h3>
            <div className="hobbies-flex disp-flex flex-wrap flex-align-center">
                {hobbies.map((hobby) => (
                    <div className="hobby-item" key={hobby.name} tabIndex={0}>
                        <img src={hobby.icon} alt={hobby.name} loading='lazy' />
                        <span className="hobby-tooltip">{hobby.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BeyondCoding