import TodoList from './components/TodoList';
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button/new';

function App() {
  return (
    <div className='App'>
      <h1>Danh sách Việc Cần Làm</h1>
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          gap: '10px',
          maxWidth: '500px',
        }}
      >
        <TextField
          name='add-todo'
          placeholder='Thêm công việc mới...'
          elemAfterInput={<Button appearance='primary'>Thêm</Button>}
          css={{ padding: '2px 2px 2px 2px' }}
        />
   
      </div>
      <TodoList />
    </div>
  );
}

export default App;
