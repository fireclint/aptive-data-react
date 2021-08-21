import React from 'react'
import './FaqStyles.css'

const Faq = () => {
    return (
        <div className="section-d" id="faq">
        <div className="container">
          <div className="col-1">
            <h3>Frequently asked questions</h3>
            <p>Can't find the answer you're looking for?</p>
            <p>Reach out to our <span>customer support</span> team.</p>
          </div>
          <div className="col-2">
            <div className="faq">
              <h5>How do you make holy water?</h5>
              <p>
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div className="faq">
              <h5>What's the best thing about Switzerland?</h5>
              <p>
                I don't know, but the flag is a big plus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Expedita, rem.
              </p>
            </div>
            <div className="faq">
              <h5>What do you call someone with no body and no nose?</h5>
              <p>
                Nobody knows. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vero, sequi?
              </p>
            </div>
            <div className="faq">
              <h5>Why do you never see elephants hiding in trees?</h5>
              <p>
                Because they are good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit rem.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Faq
