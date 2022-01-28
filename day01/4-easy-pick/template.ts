type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>
const todo: TodoPreview = {
  title: 'clean room',
  completed: false,
  // 如果多了其他的键值对，会报 Object literal may only specify known properties 
  // 对象字面量只能指定已知属性,xxx类型里面不存在xxx
  // description: 'Get a bucket of water at 9:00.And then ...'
}