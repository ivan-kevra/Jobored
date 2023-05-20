import React, {ChangeEvent} from 'react';
import style from './Style.module.css'
import {Button, CloseButton, Group, Input, NumberInput, Title} from '@mantine/core';
import {IconChevronDown} from '@tabler/icons-react';
import {
    CatalogueResponseType,
    FilterParamsType,
    setCatalogueAC,
    setPaymentFromAC,
    setPaymentToAC
} from "../../store/reducers/filterReducer";
import {useAppDispatch} from "../../store/store";

type FilterPropsType = {
    catalogues: CatalogueResponseType[]
    catalogue: number | null
    paymentFrom: number
    paymentTo: number
    filterParams: FilterParamsType
    resetFilter: () => void
    getVacancies: (param: FilterParamsType) => void
    applyFilters: (data: { catalogue: number | null, paymentFrom: number, paymentTo: number }) => void
    setCatalogue: (title: number) => void
}
export const Filter: React.FC<FilterPropsType> = ({
                                                      catalogues,
                                                      catalogue,
                                                      paymentFrom,
                                                      paymentTo,
                                                      resetFilter,
                                                      applyFilters,
                                                      setCatalogue
                                                  }) => {

    const dispatch = useAppDispatch()

    const setSalaryFrom = (value: number) => dispatch(setPaymentFromAC(value))
    const setSalaryTo = (value: number) => dispatch(setPaymentToAC(value))
    const setFilter = () => {
        applyFilters({catalogue, paymentTo, paymentFrom})
    }

    return (
        <div className={style.filter}>
            <div className={style.header}>
                <Title order={2}>Фильтры</Title>
                <Group position="center">
                    <Button variant="subtle" color="gray" className={style.resetButton} onClick={resetFilter}>
                        Сбросить все
                    </Button>
                    <CloseButton aria-label="Close modal" onClick={resetFilter}/>
                </Group>
            </div>
            <div className={style.job}>
                <Title order={3}>Отрасль</Title>
                <Input component="select"
                       value={catalogue ? catalogue : ' '}
                       onChange={(event: ChangeEvent<HTMLSelectElement>) => setCatalogue(+event.currentTarget.value)}
                       rightSection={<IconChevronDown size={14} stroke={1.5}
                       />}>
                    {catalogues.map(catalog => <option key={catalog.key} value={catalog.key}>{catalog.title}</option>)}
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
            <Button radius="lg" size="md" className={style.button}
                    onClick={setFilter}>
                Применить
            </Button>

        </div>
    );
};

