import React, {useCallback, useEffect} from 'react';
import {Grid, Loader} from "@mantine/core";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {setVacanciesTC, VacancyResponseType} from "../../store/reducers/vacanciesReducer";
import {Vacancies} from "../../components/vacancies/Vacancies";
import {
    CatalogueResponseType,
    fetchCataloguesTC,
    FilterParamsType,
    resetFiltersTC, setCatalogueAC
} from "../../store/reducers/filterReducer";
import {Header} from "../../components/header/Header";
import {useSelector} from "react-redux";
import {Filter} from "../../components/filter/Filter";

export const Main = () => {

    const dispatch = useAppDispatch()
    const filterParams = useSelector<AppRootStateType, FilterParamsType>(state => state.filter.filterParams)
    const catalogues = useSelector<AppRootStateType, CatalogueResponseType[]>(state => state.filter.catalogues)
    const catalogue = useSelector<AppRootStateType, string | null>(state => state.filter.filterParams.catalogue)
    const paymentFrom = useSelector<AppRootStateType, number>(state => state.filter.filterParams.payment_from)
    const paymentTo = useSelector<AppRootStateType, number>(state => state.filter.filterParams.payment_to)
    const vacancies = useSelector<AppRootStateType, VacancyResponseType[]>(state => state.vacancies.objects)
    const keyword = useSelector<AppRootStateType, string>(state => state.vacancies.filterParams.keyword);
    const page = useSelector<AppRootStateType, number>(state => state.vacancies.filterParams.page);

    const searchVacancies = useCallback((keyword: string) => getVacancies({...filterParams, keyword, page: 1}), []);
    const setVacanciesPage = useCallback((page: number) => getVacancies({...filterParams, page}), [page]);
    const setCatalogue = (title: string | null) => {
        dispatch(setCatalogueAC(title))
    }
    const resetFilter = () => {
        dispatch(setVacanciesTC(filterParams))
        dispatch(resetFiltersTC())
    }
    const getVacancies = (param: FilterParamsType) => {
        !param
            ? dispatch(setVacanciesTC(filterParams))
            : dispatch(setVacanciesTC(param));
    }
    const applyFilters = (data: { catalogue: string | null, paymentFrom: number, paymentTo: number }) => {
        const param = {
            ...filterParams,
            catalogues: data.catalogue,
            payment_from: data.paymentFrom,
            payment_to: data.paymentTo,
            page: 1,
        }
        getVacancies(param)
    }

    useEffect(() => {
        dispatch(setVacanciesTC(filterParams))
        dispatch(fetchCataloguesTC())
    }, []);


    return (
        <Grid justify="center">
            {/*<Loader/>*/}
            <Grid.Col span={12}><Header/></Grid.Col>
            <Grid.Col span={3}><Filter catalogues={catalogues}
                                       catalogue={catalogue}
                                       paymentFrom={paymentFrom}
                                       paymentTo={paymentTo}
                                       filterParams={filterParams}
                                       resetFilter={resetFilter}
                                       getVacancies={getVacancies}
                                       applyFilters={applyFilters}
                                       setCatalogue={setCatalogue}

            /> </Grid.Col>
            <Grid.Col span={6}>
                <Vacancies vacancies={vacancies}
                           searchVacancies={searchVacancies}
                           keyword={keyword}
                           setVacanciesPage={setVacanciesPage}
                           page={page}

                />
            </Grid.Col>
        </Grid>
    );
};

