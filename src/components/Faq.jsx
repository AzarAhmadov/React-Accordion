import React from 'react'

function Faq({ active, setActive, title }) {
    return (
        <div className='container'>
            <div className="accordion-title">
                <div className={(active === title ? "show" : "")}>
                    <div className="accordion-top">
                        <p className='title'>{title}</p>
                        <p onClick={() => setActive(title)}>
                            <span className={(active === title ? "arrow" : "") + "arrow"} >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASJJREFUaEPtllEOwjAMQ72bwUmAk8FN4GgoEpWmsZE2TkAT7g+T1rp+dlcxYedj2rl/CODXDaoBNUAmoCNEBkgvVwN0hKSAGiADpJerATpCUkANkAHSy/++gQOABxkjpcE0cANwAnABYM+RcQZwfa03neERBWjm24YRiGa+aZjmMEQEwCq/r0Q1ArE03+SOo0cyAmCbbRnogWDWvuUWBYhCpJo3EwzAKES6+QyAXogS81kAHoS9t6tyOXq+F/daZY/QfIOtlNdMpJjPbKCZ7IFIM18B8Ok42btU81UAWxDp5isBlhAl5qsBGoT9Rv/sffUWcjermJB5jVb4czUF4EZUPEENFAfsyqsBN6LiCWqgOGBXXg24ERVPUAPFAbvyu2/gCaY3LDHDoO4gAAAAAElFTkSuQmCC" />
                            </span>
                        </p>
                    </div>
                </div>
                <div className={(active === title ? "show" : "") + "accordion-container"}>
                    <div className='accordion-text'>
                        <p> adipisicing elit. Vitae, commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, itaque.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq