import Button from './components/button/Button';
import User from './components/user/User';
import { USERS } from './constants/users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Button color='blue' padding='0.5rem' rounded={true}>
        Click me
      </Button>
      <Button color='green' padding='1rem'>
        Click me
      </Button>
      <Button color='orange' padding='2rem' hover>
        Click me
      </Button>
      {/* Para evitar escribir todo esto, creamos un objeto con la misma inf (USERS) y hacemos un bucle */}
      {/* <User name='Pepe' email='pepe@gmail.com' />
      <User name='Laura' email='laura@gmail.com' />
      <User name='Marcos' email='marcos@gmail.com' /> */}

      {USERS.map(user => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}
    </>
  );
};

export default App;
