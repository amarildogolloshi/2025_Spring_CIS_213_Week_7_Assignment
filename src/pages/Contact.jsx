const Contact = () => {
    return (
        <div className="page page-contact">
            <h1>Contact Us</h1>
            <form action="#" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
    
}

export default Contact;