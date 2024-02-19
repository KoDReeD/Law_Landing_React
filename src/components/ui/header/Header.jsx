// папка относительно этого файла
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        
        <nav className="nav">
          <a href="#" className="logo">
            <img src="/images/logo.svg" alt="" className="img-logo" />
          </a>
          <ul className="menu">
            <li className="menu-item">Главная</li>
            <li className="menu-item">Услуги</li>
            <li className="menu-item">Сопровождение</li>
            <li className="menu-item">Полезное</li>
            <li className="menu-item">О компании</li>
            <li className="menu-item">Контакты</li>
          </ul>
          <a href="tel:79998900998" className="phone">+7 (999) 890 09 98</a>
        </nav>

      </div>
    </header>
  )
}