
import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { cn } from '@/lib/utils';

interface label {
  label:string;
  option?:string,
}
  
interface RadioGroupProps{
  label: label[],
  className?: string,

  
}
const RadioButton = ({label,className}:RadioGroupProps) => {
  return (
<div className={cn("",className)}>
  <RadioGroup name='radio' defaultValue={`${label[0].option}`}>
  {label.map((radio)=>( 
       <div className="flex items-center space-x-2">
    <RadioGroupItem  value={`${radio.option}`} id={`${radio.option}`} />
    <Label htmlFor={`${radio.option}`}>{radio.label}</Label>
       </div>
  ))}
  </RadioGroup>
</div>
  )
}

export default RadioButton
