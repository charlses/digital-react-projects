import { useState } from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
  CardContent
} from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { Button } from './ui/button'
import { DatePicker } from './ui/datepicker'
import { Label } from '@radix-ui/react-label'

interface FormData {
  id: string
  taskName: string
  taskDescription: string
  difficulty: string
  dueDate: Date | undefined
  completed: boolean
}

interface TodoListItemProps {
  id: string
  taskName: string
  taskDescription: string
  difficulty: string
  dueDate: Date | undefined
  completed: boolean
  onUpdate: (id: string, updatedTodo: Partial<FormData>) => void
}

const TodoListItem = ({
  id,
  taskName,
  taskDescription,
  difficulty,
  dueDate,
  completed,
  onUpdate
}: TodoListItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editFormData, setEditFormData] = useState<Partial<FormData>>({
    taskName,
    taskDescription,
    difficulty,
    dueDate,
    completed
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSelectChange = (value: string) => {
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      difficulty: value
    }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      dueDate: date
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      completed: checked
    }))
  }

  const handleSave = () => {
    onUpdate(id, editFormData)
    setIsEditing(false)
  }

  return (
    <Card
      key={id}
      className={`flex flex-col items-start justify-center w-96 p-6 h-full ${
        completed && 'border-green-600'
      } ${difficulty === 'Easy' && 'bg-green-50'} ${
        difficulty === 'Medium' && 'bg-yellow-50'
      } ${difficulty === 'Hard' && 'bg-red-50'}`}
    >
      {isEditing ? (
        <CardContent className='flex flex-col items-start justify-center gap-4 w-full'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='taskName' className='font-semibold  w-full'>
              Task Name
            </Label>
            <Input
              type='text'
              name='taskName'
              id='taskName'
              value={editFormData.taskName || ''}
              onChange={handleInputChange}
              className='w-72'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='taskDescription' className='font-semibold'>
              Task Name
            </Label>
            <Textarea
              name='taskDescription'
              id='taskDescription'
              value={editFormData.taskDescription || ''}
              onChange={handleInputChange}
              className='w-72'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='difficulty' className='font-semibold'>
              Difficulty
            </Label>
            <Select
              onValueChange={handleSelectChange}
              value={editFormData.difficulty || 'Easy'}
            >
              <SelectTrigger id='difficulty' className='w-72'>
                <SelectValue placeholder='Select a difficulty level' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Easy'>Easy</SelectItem>
                <SelectItem value='Medium'>Medium</SelectItem>
                <SelectItem value='Hard'>Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-col gap-2 w-72'>
            <Label htmlFor='dueDate' className='font-semibold'>
              Due Date
            </Label>
            <DatePicker
              date={editFormData.dueDate}
              onDateChange={handleDateChange}
            />
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              name='completed'
              id='completed'
              checked={editFormData.completed || false}
              onChange={handleCheckboxChange}
              className='form-checkbox'
            />
            <Label htmlFor='completed' className='font-semibold'>
              Completed
            </Label>
          </div>
          <Button onClick={handleSave}>Save</Button>
        </CardContent>
      ) : (
        <CardContent className='flex flex-col items-start justify-center gap-4 w-full'>
          <CardTitle className='text-wrap'>
            {taskName}{' '}
            <p className='text-green-700 text-sm'>
              {completed && '(Completed)'}
            </p>
          </CardTitle>
          <CardDescription>{taskDescription}</CardDescription>
          <p>Difficulty: {difficulty}</p>
          <p>Due Date: {dueDate?.toLocaleDateString()}</p>
          <p>Completed: {completed.toString()}</p>
          <Button onClick={() => setIsEditing(true)} className='w-full'>
            Edit
          </Button>
          <CardFooter className='flex flex-col items-start justify-center gap-4 w-full'></CardFooter>
        </CardContent>
      )}
    </Card>
  )
}

export default TodoListItem
