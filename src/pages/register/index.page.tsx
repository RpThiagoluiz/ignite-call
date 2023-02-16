import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite</Heading>
        <Text>
          Precisamos de algumas informações para criar seu usuário. Ah, você
          pode editar este usuário futuramente.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome do usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuário" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="seu-nome" />
        </label>
        <Button type="submit">Proximo passo</Button>
      </Form>
    </Container>
  )
}
