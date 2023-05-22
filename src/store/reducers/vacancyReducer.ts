import {VacanciesActionsType, VacancyResponseType} from "./vacanciesReducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../store";
import {api} from "../../api/api";

const initialState: VacancyInitialStateType = {
    currentVacancy: {
        payment_from: 0,
        payment_to: 0,
        town: {
            title: ''
        },
        type_of_work: {
            title: ''
        },
        currency: '',
        profession: '',
        firm_name: '',
        id: 0,
        vacancyRichText: ''
    }
}
export const vacancyReducer = (state: VacancyInitialStateType = initialState, action: VacancyActionsType) => {
    switch (action.type) {
        case "ADD-CURRENT-VACANCY":
            return {...state, currentVacancy: action.vacancy}
        default:
            return state
    }
}

const addCurrentVacancyAC = (vacancy: VacancyResponseType) => ({type: 'ADD-CURRENT-VACANCY', vacancy} as const)

export const setCurrentVacancyTC = (id: number) => (dispatch: Dispatch<VacancyActionsType>, getState: () => AppRootStateType) => {
    const vacancy = getState().vacancies.objects.find((v) => v.id === id)
    if (!vacancy) {
        api.getVacancyById(id)
            .then(response => {
                    dispatch(addCurrentVacancyAC(response.data[0]))
                console.log('1')
            })
    } else {
        dispatch(addCurrentVacancyAC(vacancy))
        console.log('2')
    }
}


type VacancyInitialStateType = {
    currentVacancy: VacancyResponseType
}
export type VacancyActionsType = addCurrentVacancyACType
type addCurrentVacancyACType = ReturnType<typeof addCurrentVacancyAC>