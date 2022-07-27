import { Model } from 'components'
import { IModel, IParam } from 'types'
import './App.css'

const params: IParam[] = [
	{
		id: 1,
		name: 'Назначение'
	},
	{
		id: 2,
		name: 'Длина'
	},
	{
		id: 3,
		name: 'Производство'
	}
]

const model: IModel = {
	paramValues: [
		{ paramId: 1, value: 'подвседневное' },
		{ paramId: 2, value: 'макси' },
		{ paramId: 3, value: 'Китай' }
	],
	colors: ['black', 'red']
}

function App() {
	return (
		<div className='App'>
			<Model model={model} params={params} />
		</div>
	)
}

export default App
