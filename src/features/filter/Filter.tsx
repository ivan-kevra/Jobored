import React from 'react';
import style from './Style.module.css'
import {Button, Select, Title} from '@mantine/core';
import {IconChevronDown} from '@tabler/icons-react';

export const Filter = () => {
    return (
        <div className={style.filter}>
            <div className={style.header}>
                <Title order={1}>Фильтры</Title>
                <Button variant="subtle" color="gray" radius="xs">
                    Сбросить все x
                </Button>
            </div>
            <div className={style.job}>
                <Title order={3}>Отрасль</Title>
                <Select
                    placeholder="Выберите отрасль"
                    rightSection={<IconChevronDown size="1rem"/>}
                    rightSectionWidth={30}
                    // styles={{rightSection: {pointerEvents: 'none'}}}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                />
            </div>
            <div className={style.salary}>
                <Title order={3}>Оклад</Title>
                <Select
                    placeholder="От"
                    data={[
                        {value: '100', label: '100'},
                        {value: '200', label: '200'},
                        {value: '300', label: '300'},
                        {value: '400', label: '400'},
                    ]}
                />
                <Select
                    placeholder="До"
                    data={[
                        {value: '100', label: '100'},
                        {value: '200', label: '200'},
                        {value: '300', label: '300'},
                        {value: '400', label: '400'},
                    ]}
                />

            </div>
            <Button radius="lg" size="md" className={style.button}>
                Применить
            </Button>

        </div>
    );
};

