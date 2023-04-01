import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            {/* start last post div */}
            <div className='lastpost'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/' >Debian</Link>
                        </li>
                        <li>
                            <Link>Linux Min</Link>
                        </li>
                        <li>
                            <Link>M NH</Link>
                        </li>

                    </ul>

                </nav>
            </div>
            {/* end of div last post */}
            <div className='lamostview'>
                <nav>
                    <ul>
                        <li>
                            <Link>Debian </Link>
                        </li>
                        <li>
                            <Link>Linux Min</Link>
                        </li>
                        <li>
                            <Link>sudo</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            {/* end */}
        </div>
    )
}

export default Sidebar