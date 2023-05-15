export type VacancyRequestType = {
    published: number
    keyword: string
    payment_from: number
    payment_to: number
    catalogues: number
    page: number
    count: number
}
export type VacancyResponseType = {
    id: number,
    payment_from: number
    payment_to: number
    profession: string
    currency: string
    type_of_work: {
        'title': 'Полный рабочий день'
    }
    town: {
        title: string
    },
    catalogues: [
        { title: string }
    ]
    firm_name: string
    vacancyRichText: string
}
export interface CatalogResponseType {
    title:string
    key:number
}