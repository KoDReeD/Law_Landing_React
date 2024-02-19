import style from './phoneForm.module.css';
import '../../../styles/buttons.css';

export default function phoneForm() {
  return (
    <div className={style.form_inner}>
      <form action="#" className="form">
        <p>Нужна консультация?</p>
        <div className={style.phone_row}>
          <input className={style.phone_input} placeholder='+7 (___) ___ __ __'/>
          <button className='btn_light'>заказать звонок</button>
        </div>
      </form>
    </div>
  )
}