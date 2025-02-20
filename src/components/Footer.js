import styles from './Footer.module.scss';

export default function Footer() {
	const date = new Date();
	let year = date.getFullYear();

	return (
		<div className={styles.footer}>
			<p>&copy; {year} Matrix-inspir. Follow the white rabbit.</p>
		</div>
	);
}