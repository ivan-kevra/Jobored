import React, {useState} from 'react';
import style from './Style.module.css'
import logo from '../../assets/img/logo.svg'
import {Grid, Image, Title} from "@mantine/core";
import {NavLink} from 'react-router-dom';


export const Header = () => {
    return (
        <Grid justify="center" bg='#ffff' align='center'>
            <Grid.Col span={4} className={style.logo}>
                <Image maw={36} src={logo} alt="Logo"/>
                <Title order={1}>Jobored</Title>
            </Grid.Col>
            <Grid.Col span={8} bg='blue' className={style.menu}>
                <NavLink to={'/main'} className={({isActive}) => isActive ? style.text : style.nav}>
                    Поиск вакансий</NavLink>
                <NavLink to={'/favorites'} className={({isActive}) => isActive ? style.text : style.nav}>
                    Избранное</NavLink>
            </Grid.Col>
        </Grid>
    );
};


