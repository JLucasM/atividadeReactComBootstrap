import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className='mb-3' style={{ color: "#000", backgroundColor: "#7D8C65" }}>
          <Card.Img src="http://cdn.simplesite.com/i/3b/2d/283726781727452475/i283726789582726502.jpg" />
          <Card.Body>
            <Card.Title style={{ fontFamily: "fantasy" }}>
              Teste de aceitação
            </Card.Title>
            <Form>
              <Form.Group className='mb-4 mt-4'>
                <Form.Control className='mb-2' type="number" placeholder='Quantos zumbis você já matou?' />
                <Form.Control className='mb-2' type="number" placeholder='Quantas pessoas você já matou?' />
                <Form.Control className='mb-2' type="text" placeholder='Por que?' />
              </Form.Group>
            </Form>
            <Button variant='danger'>Reprovado</Button>
            <Button className='mx-2' variant='success'>Aprovado</Button>
          </Card.Body>

        </Card>

      </header>
    </div>
  );
}

export default App;
