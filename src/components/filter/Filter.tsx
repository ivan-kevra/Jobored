import React, {ChangeEvent} from 'react';
import style from './Style.module.css'
import {Button, CloseButton, Group, Input, NumberInput, Select, Title} from '@mantine/core';
import {IconChevronDown} from '@tabler/icons-react';
import {
    CatalogueResponseType,
    resetFilterAC, setCatalogueAC,
    setPaymentFromAC,
    setPaymentToAC
} from "../../store/reducers/filterReducer";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store";


export const Filter = () => {

    const dispatch = useAppDispatch()
    const catalogues = useSelector<AppRootStateType, CatalogueResponseType[]>(state => state.filter.catalogues)
    const catalogue = useSelector<AppRootStateType, number | null>(state => state.filter.filterParams.catalogue)
    const paymentFrom = useSelector<AppRootStateType, number>(state => state.filter.filterParams.payment_from)
    const paymentTo = useSelector<AppRootStateType, number>(state => state.filter.filterParams.payment_to)


    const setCatalogueHandler = (title: number) => {
        dispatch(setCatalogueAC(title))
    }

    const setSalaryFrom = (value: number) => dispatch(setPaymentFromAC(value))
    const setSalaryTo = (value: number) => dispatch(setPaymentToAC(value))
    const resetFilter = () => {
        dispatch(resetFilterAC())
    }

    return (
        <div className={style.filter}>
            <div className={style.header}>
                <Title order={2}>Фильтры</Title>
                <Group position="center">
                    <Button variant="subtle" color="gray" className={style.resetButton} onClick={resetFilter}>
                        Сбросить все
                    </Button>
                    <CloseButton aria-label="Close modal"/>
                </Group>
            </div>

            <div className={style.job}>
                <Title order={3}>Отрасль</Title>
                <Input component="select"
                       value={catalogue ? catalogue : ' '}
                       onChange={(event: ChangeEvent<HTMLSelectElement>) => setCatalogueHandler(+event.currentTarget.value)}
                       rightSection={<IconChevronDown size={14} stroke={1.5}
                       />}>
                    {catalogues.map((cat) => {
                            return (
                                <option value={cat.key}>{cat.title}</option>)
                        }
                    )
                    }

                </Input>
            </div>

            <div className={style.salary}>
                <Title order={3}>Оклад</Title>
                <NumberInput
                    mt="xl"
                    placeholder="От"
                    value={paymentFrom}
                    onChange={setSalaryFrom}
                    step={10000}
                />
                <NumberInput
                    mt="xl"
                    placeholder="До"
                    value={paymentTo}
                    onChange={setSalaryTo}
                    step={10000}
                />


            </div>
            <Button radius="lg" size="md" className={style.button}>
                Применить
            </Button>

        </div>
    );
};

