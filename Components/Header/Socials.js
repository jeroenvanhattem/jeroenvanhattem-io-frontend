import 'font-awesome/css/font-awesome.min.css';
import styles from './Socials.module.css'

const Socials = () => {
  return (

    <div className={styles.socials}>
      <a href='https://instagram.com/jeroenvhattem' target='_blank'><span className="fa fa-instagram"></span></a>
      <a href='https://github.com/jeroenvanhattem' target='_blank'><span className="fa fa-github"></span></a>
      <a href='https://twitter.com/iamyeno' target='_blank'><span className="fa fa-twitter"></span></a>
      <a href='https://open.spotify.com/artist/7Egoy0UuRKksBWzmGYzd68?si=99fb5dda45c648ce' target='_blank'><span className="fa fa-spotify"></span></a>
    </div>
  )
}

export default Socials