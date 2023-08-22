import React from 'react'
const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, subject, message } = e.target.elements

        window.open(`mailto:mg8600@gmail.com?subject=${subject.value}&body=${message.value}`);
        setFormStatus('Submit')
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Contact Me</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="subject">
                        Subject
                    </label>
                    <input className="form-control" type="text" id="subject" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-primary" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}
export default Contact