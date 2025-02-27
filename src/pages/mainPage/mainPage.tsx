import { Button } from '../../components/common/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import backGroundPhoto from '../../../public/photo_2025-02-14_14-53-03.jpg';
import './mainPage.css';
import { Footer } from '../../components/common/footer/footer.tsx';

export const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="scroll-container">
            <section className="landing-section">
                <div className="background-panel">
                    <img src={backGroundPhoto} alt="Background" />
                </div>
                <header className="header">
                    <h1 className="title">Симулятор кондиционера</h1>
                    <p className="subtitle">
                        Ознакомьтесь с теоретическими сведениями, узнайте структуру установки и
                        запустите симулятор.
                    </p>
                </header>
                <div className="menu">
                    <Button
                        action={() => {
                            navigate('/theory');
                        }}
                        text="Теоретические сведения"
                    />
                    <Button action={() => navigate(`/structure`)} text="Структура установки" />
                    <Button action={() => navigate(`/simulation`)} text="Симулятор установки" />
                </div>
            </section>

            <section className="info-section">
                <h2>О проекте</h2>
                <div className="card-row">
                    <div className="interactive-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>Наведи мышь, чтобы узнать больше!</p>
                            </div>
                            <div className="card-back">
                                <p>
                                    Этот симулятор демонстрирует принципы работы систем
                                    кондиционирования. Узнайте о ключевых компонентах данного
                                    устройства.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="interactive-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>Наведи мышь, чтобы узнать больше!</p>
                            </div>
                            <div className="card-back">
                                <p>Ознакомьтесь с теоритическими сведеньями</p>
                            </div>
                        </div>
                    </div>
                    <div className="interactive-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>Наведи мышь, чтобы узнать больше!</p>
                            </div>
                            <div className="card-back">
                                <p>Запустите симмуляцию прямо на сайте!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-text">
                    <p>
                        Данный симулятор разработан для того, чтобы вы могли изучить принцип работы
                        и установки кондиционера в интерактивном режиме. Здесь вы найдете подробные
                        теоретические материалы, узнаете о ключевых компонентах установки и сможете
                        запустить симулятор, чтобы увидеть, как все работает в реальном времени.
                    </p>
                    <p>
                        Наш инструмент поможет вам разобраться в принципах охлаждения воздуха,
                        понять процессы регулирования температуры и оптимизации работы систем
                        кондиционирования.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};
