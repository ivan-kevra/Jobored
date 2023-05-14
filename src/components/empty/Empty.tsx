import React from 'react';
import {Header} from "../../features/header/Header";
import empty from '../../assets/img/empty.svg'
import {Title} from "@mantine/core";
import {Button} from '@mantine/core';
import style from './Style.module.css'

export const Empty = () => {
    return (
        <>
            <Header/>
            <div className={style.empty}>
                <img src={empty} alt={'empty'}/>
                <Title order={1}>Поиск вакансий</Title>
                <Button variant="light" color="cyan" radius="md" size="md">
                    Settings
                </Button>
            </div>
        </>
    );
};

