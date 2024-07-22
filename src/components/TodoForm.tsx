import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { DatePicker } from '@/components/ui/datepicker'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface FormData {
  id: string
  taskName: string
  taskDescription: string
  difficulty: string
  dueDate: Date | undefined
  completed: boolean
}

interface UserFormProps {
  onSubmit: (formData: FormData) => void
}

export const TodoForm = ({ onSubmit }: UserFormProps) => {
  const [formData, setFormData] = useState<Omit<FormData, 'id'>>({
    taskName: '',
    taskDescription: '',
    difficulty: 'Easy',
    dueDate: undefined,
    completed: false
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      difficulty: value
    }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      dueDate: date
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      !formData.taskName ||
      !formData.taskDescription ||
      !formData.dueDate ||
      !formData.difficulty
    ) {
      toast.error('All fields are required!', {
        description: 'Please fill out all the form to submit a task!'
      })
      return
    }
    const taskWithId = {
      ...formData,
      id: uuidv4()
    }
    onSubmit(taskWithId)
    console.log(taskWithId)
  }

  return (
    <Card className='max-w-[500px] flex items-center flex-col justify-center'>
      <CardHeader>
        <CardTitle>Create a task</CardTitle>
        <CardDescription>To add to your todo-list</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='w-96'>
          <div className='mb-6'>
            <Label htmlFor='taskName' className=''>
              Task Name
            </Label>
            <Input
              type='text'
              name='taskName'
              id='taskName'
              value={formData.taskName}
              onChange={handleInputChange}
              className='mt-1 block w-full'
            />
          </div>
          <div className='mb-6'>
            <Label htmlFor='taskDescription'>Task Description</Label>
            <Textarea
              name='taskDescription'
              id='taskDescription'
              value={formData.taskDescription}
              onChange={handleInputChange}
              className='mt-1 block w-full'
            />
          </div>
          <div className='mb-6'>
            <Label htmlFor='difficulty'>Difficulty</Label>
            <Select
              onValueChange={handleSelectChange}
              defaultValue={formData.difficulty}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select a difficulty level' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Easy'>Easy</SelectItem>
                <SelectItem value='Medium'>Medium</SelectItem>
                <SelectItem value='Hard'>Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='mb-6'>
            <label htmlFor='date'>Due Date</label>
            <DatePicker
              date={formData.dueDate}
              onDateChange={handleDateChange}
            />
          </div>
          <Button type='submit' className='w-full'>
            Create Task
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <CardDescription>
          This is a simple to do list app created with React
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
