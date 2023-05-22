import React, {ChangeEvent} from 'react';
import style from './Style.module.css'
import {Button, CloseButton, Group, Input, NumberInput, Select, Title} from '@mantine/core';
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
    catalogue: string | null
    paymentFrom: number
    paymentTo: number
    filterParams: FilterParamsType
    resetFilter: () => void
    getVacancies: (param: FilterParamsType) => void
    applyFilters: (data: { catalogue: string | null, paymentFrom: number, paymentTo: number }) => void
    setCatalogue: (value: string | null) => void

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

    const catalog = catalogues.map(c => ({'value': String(c.key), 'label': String(c.title)}))

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
                <Select
                    data-elem='industry-select'
                    mt="md" withinPortal
                    data={catalog}
                    placeholder="Выберите отрасль"
                    value={catalogue ? catalogue.toString() : null}
                    onChange={setCatalogue}
                    rightSection={<IconChevronDown size={14} stroke={1.5}/>}/>
            </div>
            <div className={style.salary}>
                <Title order={3}>Оклад</Title>
                <NumberInput
                    data-elem='salary-from-input'
                    mt="xl"
                    placeholder="От"
                    value={paymentFrom}
                    onChange={setSalaryFrom}
                    step={10000} min={0}
                    max={paymentTo}
                />
                <NumberInput
                    data-elem='salary-to-input'
                    mt="xl"
                    placeholder="До"
                    value={paymentTo}
                    onChange={setSalaryTo}
                    step={10000} min={paymentFrom || 0}
                />
            </div>
            <Button data-elem="search-button" radius="lg" size="md" className={style.button}
                    onClick={setFilter}> Применить </Button>
        </div>
    );
};

