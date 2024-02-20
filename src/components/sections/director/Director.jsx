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
            <div className={style.line}></div>
            <p className={style.slovo}>Слово руководителя</p>
          </div>
          <div className={style.title_block}>
            <h3>Потому что нам</h3>
            <h3 className={style.title_row2}>не все равно</h3>
          </div>
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
          <img className={style.rospis_img} src='/images/rospis.png'/>
        </div>

      </div>
    </section>
  )
}