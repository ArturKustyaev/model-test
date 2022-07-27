import { IModel, IParam, ITransformedParams } from 'types'

export const getTransformedValues = (params: IParam[], model: IModel) => {
	const array: ITransformedParams[] = []

	params.forEach((param, index) =>
		array.push({ param: param, paramValue: model.paramValues[index] })
	)

	return array
}
