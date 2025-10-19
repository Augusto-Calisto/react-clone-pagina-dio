import { forwardRef } from "react";

import { Controller } from "react-hook-form";

import { InputContainer, InputText, IconContainer } from './styles';

const Input = forwardRef(({ leftIcon, name, rules, control, ...rest }, ref) => {
	return (
    	<InputContainer>
        	{leftIcon && (
				<IconContainer> { leftIcon } </IconContainer>
			)}
        
			<Controller
				name={name}
				control={control}
				defaultValue=""
				rules={rules}
				render={({ field }) => (
					<InputText
						{...field}
						{...rest}
					/>
				)}
      		/>
    	</InputContainer>
  )
})

export { Input }; 
