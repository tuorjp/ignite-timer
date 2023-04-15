/* eslint-disable prettier/prettier */
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        id="task"
        disabled={
          !!activeCycle /* duas exclamações transformam o valor em booleano, true se existir um ciclo ativo */
        }
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Estudar"></option>
        <option value="Revisar useContext"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        placeholder="minutos"
        type="number"
        id="minutesAmount"
        min={0}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
