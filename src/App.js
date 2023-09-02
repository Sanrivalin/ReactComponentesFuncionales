import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container'
import Typography  from '@mui/material/Typography';


function App() {

  const handleSubmit = (values) => {
   console.log('Info. at App.js: ',values)
  }


  return (
    <Container component='section' maxWidth='sm'>
    <Typography variant='h4' align='center'>Formulario Registro</Typography>
     <FormSignUp handleSubmit={handleSubmit}  />
      
    </Container>
  );
}

export default App;

