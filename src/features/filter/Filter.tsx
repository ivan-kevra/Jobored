import React from 'react';
import style from './Filter.module.css'
import {Button, Select} from '@mantine/core';
import {IconChevronDown} from '@tabler/icons-react';

export const Filter = () => {
    return (
        <div className={style.filter}>
            <div className={style.header}>
                <div>Фильтры</div>
                <div>Сбросить все</div>
            </div>
            <div>
                <Select
                    label="Отрасль"
                    placeholder="Выберите отрасль"
                    rightSection={<IconChevronDown size="1rem"/>}
                    rightSectionWidth={30}
                    styles={{rightSection: {pointerEvents: 'none'}}}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                />
            </div>
            <div>
                <Select
                    label="Оклад"
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
                <Button radius="lg" size="md">
                    Применить
                </Button>
            </div>


        </div>
    );
};

