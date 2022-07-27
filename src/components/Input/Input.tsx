import { FC, HTMLProps } from 'react'
import classes from './Input.module.css'

interface InputProps extends HTMLProps<HTMLInputElement> {
	className?: string
	label: string
}

export const Input: FC<InputProps> = ({ className, label, ...rest }): JSX.Element => {
	return (
		<div className={className}>
			<label>{label}</label>
			<input className={classes.input} type='text' {...rest} />
		</div>
	)
}
