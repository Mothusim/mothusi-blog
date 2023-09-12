import { useState ,useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

function ContactForm() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(null); 
    const [error , setError] = useState(null)

    useEffect(() =>{

        if(status === 'success' || 'error'){
            const timer = setTimeout(()=>{
                setStatus(null)
                setError(null)
            },3000)

            return ()=> clearTimeout(timer)
        }
    },[status])

	async function sendMessageHandler(e) {
		e.preventDefault();

		setStatus("pending");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					email: email,
					name: name,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				setStatus("success");
				setEmail("");
				setName("");
				setMessage("");
			} else {
                setError(error.message)
				setStatus("error");
			}
		} catch (error) {
            setError(error.message)
			setStatus("error");
		}
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				{status === "success" && (
					<Notification
						title="Success!"
						message="Message sent successfully."
						status="success"
					/>
				)}
				{status === "error" && (
					<Notification
						title="Error!"
						message="Message sending failed. Please try again later."
						status="error"
					/>
				)}
				{status === "pending" && (
					<Notification
						title="Sending message..."
						message="Your message is being sent"
						status="pending"
					/>
				)}
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows="5"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button disabled={status === "pending"}>Send Message</button>
				</div>
			</form>
		</section>
	);
}

export default ContactForm;
