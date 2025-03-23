import { useRef, useState } from 'react';
import { Button } from '../../components/common/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import AnimatedMap from '../../components/animatedMap/AnimatedMap.tsx';
import './structurePage.css';
import DeathMachine from '../../../public/deathmachine.jpg';
import { Footer } from '../../components/common/footer/footer.tsx';

export const StructurePage = () => {
    const navigate = useNavigate();
    const [hoveredImage, setHoveredImage] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setHoveredImage(true);
        }, 1000);
    };

    const handleMouseLeave = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setHoveredImage(false);
    };

    const getImageClass = () => {
        return hoveredImage ? 'image-zoom' : '';
    };

    return (
        <div className="scroll-container">
            <section className="conditioner-section">
                <h1>Установка "Кондиционер"</h1>

                <div className="conditioner-layout">
                    <div className="conditioner-description">
                        <h2>Описание устройства</h2>
                        <p>
                            Современный кондиционер представляет собой высокотехнологичное устройство для
                            регулирования микроклимата в помещении. Данная модель оснащена инверторным
                            компрессором, обеспечивающим энергоэффективную работу и точное поддержание
                            заданной температуры.
                        </p>

                        <h3>Основные компоненты</h3>
                        <ul>
                            <li><strong>Панель управления:</strong> расположена на верхней части устройства, включает LED-экран и кнопки управления</li>
                            <li><strong>Вентиляционные отверстия:</strong> перфорированные панели для забора воздуха</li>
                            <li><strong>Фронтальное окно:</strong> оснащено регулируемыми лопастями для направления потока воздуха</li>
                            <li><strong>Блок питания:</strong> встроен в нижнюю часть устройства</li>
                            <li><strong>Система увлажнения:</strong> дополнительная функция для поддержания оптимального уровня влажности</li>
                        </ul>
                    </div>

                    <div
                        className={`conditioner-image ${getImageClass()}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={DeathMachine} alt="Кондиционер" />
                        <div className="image-caption">Модель 2025 - "Климат-контроль ДельтаПро"</div>
                    </div>
                </div>

                <div className="conditioner-controls">
                    <h2>Панель управления</h2>
                    <div className="control-panel">
                        <div className="power-button">
                            <div className="button-icon">⏻</div>
                            <div className="button-label">Вкл/Выкл</div>
                        </div>

                        <div className="display-screen">
                            <div className="display-content">
                                <div className="display-item">
                                    <span className="display-label">Температура:</span>
                                    <span className="display-value">22°C</span>
                                </div>
                                <div className="display-item">
                                    <span className="display-label">Направление:</span>
                                    <span className="display-value">Авто</span>
                                </div>
                                <div className="display-item">
                                    <span className="display-label">Таймер:</span>
                                    <span className="display-value">2 ч</span>
                                </div>
                                <div className="display-item">
                                    <span className="display-label">Мощность:</span>
                                    <span className="display-value">Средняя</span>
                                </div>
                                <div className="display-item">
                                    <span className="display-label">Увлажнение:</span>
                                    <span className="display-value">40%</span>
                                </div>
                                <div className="display-item">
                                    <span className="display-label">Режим:</span>
                                    <span className="display-value">Охлаждение</span>
                                </div>
                            </div>
                        </div>

                        <div className="control-buttons">
                            <div className="button-pair">
                                <div className="button-up">▲</div>
                                <div className="button-label">Температура</div>
                                <div className="button-down">▼</div>
                            </div>
                            <div className="button-pair">
                                <div className="button-up">▲</div>
                                <div className="button-label">Направление</div>
                                <div className="button-down">▼</div>
                            </div>
                            <div className="button-pair">
                                <div className="button-up">▲</div>
                                <div className="button-label">Таймер</div>
                                <div className="button-down">▼</div>
                            </div>
                            <div className="button-pair">
                                <div className="button-up">▲</div>
                                <div className="button-label">Мощность</div>
                                <div className="button-down">▼</div>
                            </div>
                            <div className="button-pair">
                                <div className="button-up">▲</div>
                                <div className="button-label">Увлажнение</div>
                                <div className="button-down">▼</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conditioner-technical">
                    <h2>Технические характеристики</h2>
                    <div className="tech-specs">
                        <div className="spec-item">
                            <div className="spec-title">Мощность охлаждения:</div>
                            <div className="spec-value">3,5 кВт</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-title">Энергопотребление:</div>
                            <div className="spec-value">0,8 кВт/ч</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-title">Класс энергоэффективности:</div>
                            <div className="spec-value">A+++</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-title">Хладагент:</div>
                            <div className="spec-value">R32 (экологичный)</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-title">Уровень шума:</div>
                            <div className="spec-value">24 дБ</div>
                        </div>
                        <div className="spec-item">
                            <div className="spec-title">Размеры (ВxШxГ):</div>
                            <div className="spec-value">60x35x25 см</div>
                        </div>
                    </div>
                </div>

                <div className="conditioner-features">
                    <h2>Особенности и преимущества</h2>
                    <div className="features-list">
                        <div className="feature">
                            <div className="feature-icon">🌡️</div>
                            <div className="feature-description">
                                <h4>Точное поддержание температуры</h4>
                                <p>Погрешность не более ±0,5°C благодаря продвинутым алгоритмам управления</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🔄</div>
                            <div className="feature-description">
                                <h4>Инверторная технология</h4>
                                <p>Снижение энергопотребления до 40% по сравнению со стандартными моделями</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">💧</div>
                            <div className="feature-description">
                                <h4>Система увлажнения воздуха</h4>
                                <p>Поддержание оптимального уровня влажности 40-60%</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🔊</div>
                            <div className="feature-description">
                                <h4>Низкий уровень шума</h4>
                                <p>Специальная звукоизоляция компрессора и вентилятора</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conditioner-formula">
                    <h3>Расчёт эффективности охлаждения</h3>
                    <p>
                        Эффективность работы данной модели кондиционера может быть рассчитана по формуле:
                    </p>
                    <span className="formula">
                        EER = Q<sub>c</sub> / P
                    </span>
                    <p>
                        где EER - коэффициент энергоэффективности, Q<sub>c</sub> - холодопроизводительность (Вт),
                        P - потребляемая мощность (Вт).
                    </p>
                    <p>
                        Для нашей модели: EER = 3500 / 800 = 4,375, что соответствует классу энергоэффективности A+++.
                    </p>
                </div>
                <div className="conditioner-section">
                    <AnimatedMap/>
                </div>

                <div className="back-button">
                    <Button action={() => navigate('/')} text="На главную" />
                </div>
            </section>
            <Footer />
        </div>
    );
};