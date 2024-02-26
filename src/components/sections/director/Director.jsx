import style from './director.module.css';

export default function Director() {
  return (
    <section className={style.section_director}>
      <div className={style.row}>

        <div className={style.img_block}>
          <img src='/images/director.png' />
        </div>

        <div className={style.text_block}>
          <div className={style.slovo_block}>
            <div className="line_element"></div>
            <p className="light_gray_text">Слово руководителя</p>
          </div>
          {/* app.css */}
          <h1 className='title_black'>Потому что нам <br /> <span class='yellow_color'>не все равно</span></h1>
          <p className={style.slogan}>Я обеспечу представление Ваших интересов в судах общей<br></br>
            юрисдикции, арбитраже, третейском суде, приму участие<br></br>
            в переговорах, окажу помощь на стадии досудебного<br></br>
            урегулирования споров.
          </p>

          <div className={style.fio_block}>
            <p className={style.fio}>Жемчужин Василий Яковлевич</p>
            <p className={style.gen_dir}>Генеральный директор</p>
          </div>
        </div>

        <div className={style.rospis_block}>
          <img className={style.rospis_img} src='/images/rospis.png' />
        </div>

      </div>
    </section>
  )
}