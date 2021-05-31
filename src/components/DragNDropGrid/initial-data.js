const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'A: Run a marathon', type: 'EXERCISE' },
    'task-2': { id: 'task-2', content: 'B: Gym work out', type: 'EXERCISE' },
    'task-3': { id: 'task-3', content: 'C: Do yoga', type: 'EXERCISE' },
    'task-4': { id: 'task-4', content: 'D: Do calistenics', type: 'EXERCISE' },
    'task-5': { id: 'task-5', content: 'E: Eat a carrot', type: 'EAT' },
    'task-6': { id: 'task-6', content: 'F: Eat an orange', type: 'EAT' },
    'task-7': { id: 'task-7', content: 'G: Eat a potato', type: 'EAT' },
    'task-8': { id: 'task-8', content: 'H: Play with dog', type: 'PLAY' },
    'task-9': { id: 'task-9', content: 'I: Play Soccer', type: 'PLAY' },
    'task-10': { id: 'task-10', content: 'J: Play videogame', type: 'PLAY' },
    'task-11': { id: 'task-11', content: 'K: Play board game', type: 'PLAY' },
  },
  columns: {
    'column-1:1': {
      id: 'column-1:1',
      tasksIds: [],
    },
    'column-1:2': {
      id: 'column-1:2',
      tasksIds: [],
    },
    'column-1:3': {
      id: 'column-1:3',
      tasksIds: [],
    },
    'column-1:4': {
      id: 'column-1:4',
      tasksIds: [],
    },
    'column-1:5': {
      id: 'column-1:5',
      tasksIds: [],
    },
    'column-2:1': {
      id: 'column-2:1',
      tasksIds: ['task-2'],
    },
    'column-2:2': {
      id: 'column-2:2',
      tasksIds: ['task-5'],
    },
    'column-2:3': {
      id: 'column-2:3',
      tasksIds: ['task-6'],
    },
    'column-2:4': {
      id: 'column-2:4',
      tasksIds: [],
    },
    'column-2:5': {
      id: 'column-2:5',
      tasksIds: [],
    },
    'column-3:1': {
      id: 'column-3:1',
      tasksIds: [],
    },
    'column-3:2': {
      id: 'column-3:2',
      tasksIds: [],
    },
    'column-3:3': {
      id: 'column-3:3',
      tasksIds: ['task-1', 'task-3', 'task-7', 'task-8', 'task-4', 'task-10', 'task-11', 'task-9'],
    },
    'column-3:4': {
      id: 'column-3:4',
      tasksIds: [],
    },
    'column-3:5': {
      id: 'column-3:5',
      tasksIds: [],
    },
    'column-4:1': {
      id: 'column-4:1',
      tasksIds: [],
    },
    'column-4:2': {
      id: 'column-4:2',
      tasksIds: [],
    },
    'column-4:3': {
      id: 'column-4:3',
      tasksIds: [],
    },
    'column-4:4': {
      id: 'column-4:4',
      tasksIds: [],
    },
    'column-4:5': {
      id: 'column-4:5',
      tasksIds: [],
    },
    'column-5:1': {
      id: 'column-5:1',
      tasksIds: [],
    },
    'column-5:2': {
      id: 'column-5:2',
      tasksIds: [],
    },
    'column-5:3': {
      id: 'column-5:3',
      tasksIds: [],
    },
    'column-5:4': {
      id: 'column-5:4',
      tasksIds: [],
    },
    'column-5:5': {
      id: 'column-5:5',
      tasksIds: [],
    },
  },
  columnOrder: ['column-1:1', 'column-1:2', 'column-1:3', 'column-1:4', 'column-1:5', 'column-2:1', 'column-2:2', 'column-2:3', 'column-2:4', 'column-2:5', 'column-3:1', 'column-3:2', 'column-3:3', 'column-3:4', 'column-3:5', 'column-4:1', 'column-4:2', 'column-4:3', 'column-4:4', 'column-4:5', 'column-5:1', 'column-5:2', 'column-5:3', 'column-5:4', 'column-5:5'],
};

export default initialData;
