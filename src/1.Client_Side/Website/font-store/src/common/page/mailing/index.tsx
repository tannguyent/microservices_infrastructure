import * as React from 'react'

import './index.scss'

const Mailing = () => {
    return (
        <section className="mailing-list">
            <div className="content">
                <div className="mailing-list-content">
                    <h2>
                        Do you <span className="love">love</span> my product?</h2>
                    <p>
                        Sign up to recieve{' '}
                        product news, promotions and updates.
                    </p>
                    <form className="newsletter-form" method="post" noValidate>
                        <input
                            className="email"
                            placeholder="Email address"
                            name="email"
                            type="email"
                            aria-label="Email"
                        />
                        <button type="submit" className="submit">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Mailing