import Joi from "joi"

export const CarValidators = Joi.object({


    model:  Joi.string().regex(new RegExp('[[a-zA-ZA-яёЁіІїЇ]{1,20}$')).required().message({
        'string.empty':'"mode" не може бути пустим',
        'string.pattern.base':'Тільки букви мін 1 макс 20' }),
    price:Joi.number().min(0).max(10000).message({
        'number.base': 'Ціна може бути від 1 - 1 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().message({
        'number.base': 'Рік введення від 1900 до теперенього'
    })

})
