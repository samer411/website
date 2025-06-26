import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
function App() {

  return (
    <>
    <Student name="Samer" age="{22}" isStudent={false}></Student>
    <Student name="Patrick" age={22} isStudent={true}></Student>
    <Student name="Squidward" age={24} isStudent={true}></Student>
    <Student name="Sandy" age={27} isStudent={true}></Student>
    <Student></Student>
    </>
      
    
)
}

export default App
