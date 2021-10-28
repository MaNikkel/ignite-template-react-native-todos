import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      done: false,
      title: newTaskTitle
    }

    setTasks([...tasks, newTask])
  }

  function handleToggleTaskDone(id: number) {
    setTasks(tasks => {
      const newTasks = tasks.map(task => task.id === id ? {...task, done: !task.done} : task)
      return newTasks
    })
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks => tasks.filter(task => (task.id !== id)))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
