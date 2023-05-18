import React from 'react';
import style from './Style.module.css'
import logo from '../../assets/img/logo.svg'
import {Button, Grid, Image, Title} from "@mantine/core";


export const Header = () => {
    return (
        <Grid justify="center" bg='#ffff' align='center'>
            <Grid.Col span={4} className={style.logo}>
                <Image maw={36} src={logo} alt="Logo"/>
                <Title order={1}>Jobored</Title>
            </Grid.Col>
            <Grid.Col span={8} bg='blue' className={style.menu}>
                <Button variant="subtle" size="16px">
                    Поиск вакансий
                </Button>
                <Button variant="subtle" color="dark" size="16px">
                    Избранное
                </Button>
            </Grid.Col>
        </Grid>
    );
};

