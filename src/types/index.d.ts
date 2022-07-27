export type ColorType = 'black' | 'white' | 'red'

export interface IParam {
	id: number
	name: string
	type?: string
}

export interface IParamValue {
	paramId: number
	value: string
}

export interface IModel {
	paramValues: IParamValue[]
	colors: ColorType[]
}

export interface ITransformedParams {
	param: IParam
	paramValue: IParamValue
}
