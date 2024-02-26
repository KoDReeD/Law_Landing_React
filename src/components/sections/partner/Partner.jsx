import style from './partner.module.css';

export default function Partner() {
  return (
    <div className={style.bg}>
      <div className="container">
        <div className={style.section_partner}>
          <p style={{padding: '60px 0 30px 0'}} className='light_gray_text'>Нам доверяют</p>
          <h1 style={{ margin: '0 0 30px 0' }} className='title_white'>
            Они <span className='yellow_light_color'>выбрали</span> нас
          </h1>

          <ul className={style.partner_list}>
            <li className={style.partner_item}>
              <div className={style.imb_box}>
                <img className={style.item_img} src='images/partner/cooper.png' />
              </div>
              <h4 className={style.item_title}>mini cooper</h4>
            </li>

            <li className={style.partner_item}>
              <div className={style.imb_box}>
                <img className={style.item_img} src='images/partner/sber.png' />
              </div>

              <h4 className={style.item_title}>сбер</h4>
            </li>

            <li className={style.partner_item}>
              <div className={style.imb_box}>
                <img className={style.item_img} src='images/partner/skolkovo.png' />
              </div>

              <h4 className={style.item_title}>сколково</h4>
            </li>

            <li className={style.partner_item}>
              <div className={style.imb_box}>
                <img className={style.item_img} src='images/partner/psyhology.png' />
              </div>

              <h4 className={style.item_title}>psychology</h4>
            </li>

            <li className={style.partner_item}>
              <div className={style.imb_box}>
                <img className={style.item_img} src='images/partner/valorant.png' />
              </div>

              <h4 className={style.item_title}>Valorant</h4>
            </li>

            <li className={style.partner_item}>
              <div className={style.imb_box}>
                <img className={style.item_img} src='images/partner/first_channel.png' />
              </div>
              <h4 className={style.item_title}>первый канал</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}