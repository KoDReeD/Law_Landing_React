import style from './specialists.module.css';

export default function Specialists() {
  return (
    <div className={style.bg}>
      <div className="container">
        <div className={style.section_specialists}>

          <div className={style.content_block}>
            <div className={style.block}>
              <div className="line_element"></div>
              <p className="light_gray_text">Наша команда</p>
            </div>
            <h1 style={{ margin: '32px 0 0' }} className='title'>
              Наши специалисты<br /><span className='yellow_color'>знают свое дело</span>
            </h1>
            <p className={style.text}>Я обеспечу представление Ваших интересов в судах
              общей юрисдикции, арбитраже, третейском суде,
              приму участие в переговорах.
            </p>

            <button style={{marginTop: '40px'}} className='btn_dark'>заказать звонок</button>
          </div>

          <div className={style.specialists_block}>

            <ul className={style.specialists_list}>
              <li className={style.list_item}>
                <img class={style.item_img} src="/images/Kirill_Alexsandrovich.png" alt="Kirill_Alexsandrovich" />
                <h5 className='h5_text'>КИРИЛЛ АЛЕКСАНДРОВич</h5>
                <p className='light_gray_text'>27 лет стажа</p>
              </li>

              <li className={style.list_item}>
                <h5 className='h5_text'>Любовь Юрьевна</h5>
                <p className='light_gray_text'>18 лет стажа</p>
                <img class={style.item_img} src="images/Lubov_Yurievna.png" alt="Lubov_Yurievna" />
              </li>

              <li className={style.list_item}>
                <img class={style.item_img} src="images/Ivan_Vasilevich.png" alt="Ivan_Vasilievich" />
                <h5 className='h5_text'>Иван васильевич</h5>
                <p className='light_gray_text'>17 лет стажа</p>
              </li>

              <li className={style.list_item}>
                <h5 className='h5_text'>АННА ДМИТРИЕВНА</h5>
                <p className='light_gray_text'>14 лет стажа</p>
                <img class={style.item_img} src="images/Anna_Dmitrievna.png" alt="Anna_Dmitrievna" />
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}