import { Input } from 'components'
import { ChangeEvent, FC, useState } from 'react'
import { IModel, IParam, ITransformedParams } from 'types'
import { getTransformedValues } from 'utils'
import classes from './Model.module.css'

interface Props {
	params: IParam[]
	model: IModel
}

export const Model: FC<Props> = ({ params, model }): JSX.Element => {
	const [modelValues, setModelValues] = useState<ITransformedParams[]>(
		getTransformedValues(params, model)
	)

	const getModel = (): IModel => {
		return {
			paramValues: [...modelValues.map(modelValue => modelValue.paramValue)],
			colors: model.colors
		}
	}

	const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const newModelValues = modelValues.map(modelValue =>
			modelValue.param.name === e.target.name
				? { ...modelValue, paramValue: { ...modelValue.paramValue, value: e.target.value } }
				: modelValue
		)

		setModelValues([...newModelValues])
	}

	const clickHandler = () => {
		console.log(getModel())
	}

	return (
		<div className={classes.container}>
			{modelValues.map((modelValue, index) => (
				<Input
					className={classes.input}
					key={index}
					label={modelValue.param.name}
					name={modelValue.param.name}
					value={modelValue.paramValue.value}
					onChange={changeInputHandler}
				/>
			))}
			<button onClick={clickHandler}>Получить модель (консоль)</button>
		</div>
	)
}
