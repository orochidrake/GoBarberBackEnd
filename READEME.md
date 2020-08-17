# Recuperação de Senha

**Requisitos Funcionais**

- O Usuario deve poder recuperar sua senha informando o seu e-mail;
- O Usuario deve receber um e-mail com instruções re recuperação de senha;
- O usuario deve poder resetar sua senha;

**Requisistos Não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regra de Negocio**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao reseta-la;

# Atualização do Perfill

**Requisitos Funcionais**

-O Usuario deve poder atualizar seu nome, e-mail e senha;

**Regra de Negocio**

- O usuario não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar sua nova senha;

# Painel do Prestador

**Requisitos Funcionais**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisistos Não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviados em tempo-real utilizando Socket.io;

**Regra de Negocio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos Funcionais**

- O usuario deve poder listar todos os prestadores de serviço cadastrados;
- O usuario deve poder listar os dias de um mês com pelo um horário disponível de um prestador;
- o usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- o usuario deve poder realizar um novo agendamento com um prestador;

**Requisistos Não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regra de Negocio**

- Cada agendamento deve durar 1h exatemente;
- Os agendamentos devem estar disponiveis entre as 8h às 18h ( primeiro às 8h, último às 17h);
- O usuario não poder agendar em um horario já ocupado;
- o usuario nao pode agendar em um horario que ja passou;
- o usuario nao pode agendar serviços consigo mesmo;
