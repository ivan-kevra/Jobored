import React from 'react';
import empty from '../../assets/img/empty.svg'
import {Title} from "@mantine/core";
import {Button} from '@mantine/core';
import style from './Style.module.css'
import {Header} from '../../components/header/Header';
import {NavLink} from "react-router-dom";

export const Empty = () => {
    return (
        <>
            <Header/>
            <div className={style.empty}>
                <img src={empty} alt={'empty'}/>
                <Title order={1}>Упс, здесь еще ничего нет</Title>
                <NavLink to={'/main'} className={({isActive}) => isActive ? style.text : style.nav}>
                    <Button variant="light" color="cyan" radius="md" size="xl">
                        Поиск вакансий
                    </Button>
                </NavLink>
            </div>
        </>
    );
};

