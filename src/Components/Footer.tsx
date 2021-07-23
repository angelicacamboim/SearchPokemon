import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
	return (
		<footer className="text-center text-lg-start bg-light text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a
						href="https://www.linkedin.com/in/angelicabayer/"
						target="_blank"
						className="me-4 text-reset"
						rel="noreferrer"
					>
						<FontAwesomeIcon size="2x" icon={faLinkedin} />
					</a>
					<a
						href="https://github.com/angelicacamboim"
						target="_blank"
						className="me-4 text-reset"
						rel="noreferrer"
					>
						<FontAwesomeIcon size="2x" icon={faGithub} />
					</a>
				</div>
			</section>

			<div className="text-center p-4">Made with ❤️ by Angelica</div>
		</footer>
	)
}
