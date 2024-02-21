import style from './advantages.module.css';

export default function Advantages() {
  return (
    <div className={`${style.center} container`}>
      <div className={style.section_advantages}>
        <p style={{ margin: '80px 0 0' }} className="light_gray_text">Наши преимущества</p>
        {/* app.css */}
        <h1 style={{ margin: '32px 0 0' }} className='title'>Почему <span className='yellow_color'>выбирают</span> нас</h1>

        <ul className={style.advantages_list}>
          <li className={style.advantages_item}>
            <div className={style.img_box}>
              <img className={style.list_img} src='/images/time_advantage.svg' alt='time' />
            </div>
            <h3 className={style.item_title}>круглосуточная поддержка</h3>
            <p className={style.item_text}>Звонки по любым вопросам
              в удобное для вас время.
              Мы всегда рядом</p>
          </li>

          <li className={style.advantages_item}>
            <div className={style.img_box}>
              <img className={style.list_img} src='/images/box_advantage.svg' alt='time' />
            </div>
            <h3 className={style.item_title}>Высокая экспертность</h3>
            <p className={style.item_text}>Наши специалисты постоянно
              улучшают свои навыки и изучают
              новые подходы</p>
          </li>

          <li className={style.advantages_item}>
            <div className={style.img_box}>
              <img className={style.list_img} src='/images/figure_advantage.svg' alt='time' />
            </div>
            <h3 className={style.item_title}>думаем на два шага вперед</h3>
            <p className={style.item_text}>Звонки по любым вопросам
              в удобное для вас время.
              Мы всегда рядом</p>
          </li>

          <li className={style.advantages_item}>
            <div className={style.img_box}>
              <img className={style.list_img} src='/images/book_advantage.svg' alt='time' />
            </div>
            <h3 className={style.item_title}>Знания – наша сила</h3>
            <p className={style.item_text}>Звонки по любым вопросам
              в удобное для вас время.
              Мы всегда рядом</p>
          </li>
        </ul>
        
        <button style={{ margin: '100px 0 90px' }} className='btn_dark'>Заказать звонок</button>
        
      </div>
    </div>
  )
}