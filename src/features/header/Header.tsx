import React from 'react';
import style from './Style.module.css'
import logo from '../../assets/img/logo.svg'


export const Header = () => {
    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo} alt={'logo'} className={style.logo}/>
                    <h1>Jobored</h1>
                </div>
                <div className={style.menu}>
                    <span>Поиск вакансий</span>
                    <span>Избранное</span>
                </div>

            </div>
        </div>

    );
};

