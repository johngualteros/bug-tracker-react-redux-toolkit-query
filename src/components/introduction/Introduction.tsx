import style from './Introduction.module.css';
import image from './home_image.svg'

const Introduction = () => {
  return (
    <section className={style.introduction}>
      <div className={style.info}>
        <h1>Jbug</h1>
        <h3>The bug tracker builded for devs</h3>
        <p>
          this is a bug tracker builded for devs, you can create projects and
          manage your bugs, login and register is required
        </p>
      </div>
      <div className={style.image}>
        <img src={image} alt="bug" />
      </div>
    </section>
  )
}

export default Introduction