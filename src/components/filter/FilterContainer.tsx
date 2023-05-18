import React, {useEffect, useState} from 'react';
import {Filter} from "./Filter";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {CatalogueResponseType, fetchCatalogues} from "../../store/reducers/filterReducer";
// import {fetchCatalogues} from "../../store/reducers/filterReducer";

export const FilterContainer = () => {

    const dispatch = useAppDispatch()
    const catalogues = useSelector<AppRootStateType, CatalogueResponseType[]>(state => state.filter.catalogues)
    const currentCatalogue = useSelector<AppRootStateType, number>(state => state.filter.filterParams.catalogue)

    useEffect(() => {
        dispatch(fetchCatalogues())
    }, []);
    console.log(catalogues)

    const [catalogue, setCatalogue] = useState(currentCatalogue)

    const changeCatalogue = (value: number) => {
        setCatalogue(value)
    }

    return (
        <Filter catalogue={catalogue} changeCatalogue={changeCatalogue} catalogues={catalogues}/>
    );
};
