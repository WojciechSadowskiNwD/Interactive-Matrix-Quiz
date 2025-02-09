import styles from './Footer.module.css';

export default function Footer() {
	const date = new Date();
	let year = date.getFullYear();

	return (
		<div className={styles.footer}>
			<p>&copy; {year} Matrix Quiz. Follow the white rabbit.</p>
		</div>
	);
}