import React from 'react';
import style from './Style.module.css'
import {Button, CloseButton, Group, Select, Title} from '@mantine/core';
import {IconChevronDown} from '@tabler/icons-react';
import {CatalogueResponseType} from "../../store/reducers/filterReducer";

type FilterPropsType = {
    catalogue: number
    changeCatalogue: (value: number) => void
    catalogues: CatalogueResponseType[]
}

export const Filter: React.FC<FilterPropsType> = ({catalogue, changeCatalogue, catalogues}) => {
    const setCatalogueHandler = () => changeCatalogue(catalogue)
    const data = catalogues.map((cat) => cat.title)
    return (
        <div className={style.filter}>

            <div className={style.job}>
                <Title order={3}>Отрасль</Title>
                <Select
                    onClick={setCatalogueHandler}
                    placeholder="Выберите отрасль"
                    rightSection={<IconChevronDown size="1rem"/>}
                    rightSectionWidth={30}
                    // value={data}
                    data={data}


                    // styles={{rightSection: {pointerEvents: 'none'}}}
                />
            </div>


            {/*<div className={style.header}>*/}
            {/*    <Title order={2}>Фильтры</Title>*/}
            {/*    <Group position="center">*/}
            {/*        <Button variant="subtle" color="gray" className={style.resetButton}>*/}
            {/*            Сбросить все*/}
            {/*        </Button>*/}
            {/*        <CloseButton aria-label="Close modal"/>*/}
            {/*        /!*<CloseButton title="Close popover" size="xl" iconSize={20} />*!/*/}
            {/*    </Group>*/}
            {/*</div>*/}


            {/*<div className={style.salary}>*/}
            {/*    <Title order={3}>Оклад</Title>*/}
            {/*    <Select*/}
            {/*        placeholder="От"*/}
            {/*        data={[*/}
            {/*            {value: '100', label: '100'},*/}
            {/*            {value: '200', label: '200'},*/}
            {/*            {value: '300', label: '300'},*/}
            {/*            {value: '400', label: '400'},*/}
            {/*        ]}*/}
            {/*    />*/}
            {/*    <Select*/}
            {/*        placeholder="До"*/}
            {/*        data={[*/}
            {/*            {value: '100', label: '100'},*/}
            {/*            {value: '200', label: '200'},*/}
            {/*            {value: '300', label: '300'},*/}
            {/*            {value: '400', label: '400'},*/}
            {/*        ]}*/}
            {/*    />*/}

            {/*</div>*/}
            {/*<Button radius="lg" size="md" className={style.button}>*/}
            {/*    Применить*/}
            {/*</Button>*/}

        </div>
    );
};

