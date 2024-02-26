import style from './home.module.css';
import PhoneForm from '../../ui/phone_form/PhoneForm'

export default function Home() {
  return (
    <div className="container">
      <section className={style.section_home}>
        <div className={style.row}>
          <div className={style.text_block}>
            <h1 className={style.title_black}>
              Решим любой
              правовой вопрос
            </h1>
            <p className={style.p}>
              Помощь в решении любого правового вопроса в вашу пользу
            </p>
            <PhoneForm />

            <div className={style.stat_block}>
              <ul className={style.status_list}>
                <li className={style.status_item}>
                  <h5>89%</h5>
                  <p>Выигранных дел</p>
                </li>
                <li className={style.status_item}>
                  <h5>34</h5>
                  <p>Сотрудника в штате</p>
                </li>
                <li className={style.status_item}>
                  <h5>18</h5>
                  <p>Лет на рынке</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.image_block}>
            <img src='/images/statya.png' />
          </div>

        </div>
      </section>
    </div>
  )
}