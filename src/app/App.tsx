import React from 'react';
import style from './Style.module.css'
import {Header} from '../features/header/Header';
import {Vacancies} from '../features/vacancies/Vacancies';
import {Filter} from "../features/filter/Filter";
import {Grid} from '@mantine/core';

function App() {
    return (
        <div className={style.app}>
            <Grid justify="center">
                <Grid.Col span={12}><Header/></Grid.Col>
                <Grid.Col span={3}><Filter/></Grid.Col>
                <Grid.Col span={6}><Vacancies/></Grid.Col>
            </Grid>
        </div>
    );
}

export default App;
