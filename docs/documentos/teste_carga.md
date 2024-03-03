# Documento de Descrição dos Testes de Carga

## Introdução

Este documento delineia a estratégia e metodologia para a realização dos testes de carga do sistema de envio e coleta de pesquisas de satisfação por e-mail. O objetivo destes testes é assegurar que o sistema seja capaz de operar de forma eficiente e sem falhas sob condições de carga que simulam o uso real, garantindo assim a satisfação do usuário e a integridade dos dados coletados.

## Hotpath (Caminho Crítico)

O hotpath do sistema envolve os seguintes passos críticos que serão objeto de nosso teste de carga:

1. **Envio de E-mails de Pesquisa**: Inicia-se com a seleção dos clientes alvo e o envio dos e-mails contendo as pesquisas de satisfação.
2. **Resposta à Pesquisa**: A ação dos clientes ao receberem o e-mail e responderem à pesquisa, incluindo o acesso ao link da pesquisa, o preenchimento das questões e o envio das respostas.
3. **Coleta e Armazenamento de Respostas**: O sistema coleta as respostas enviadas, processa-as e armazena os dados de forma segura e eficiente.
4. **Geração de Relatórios**: A partir dos dados coletados, o sistema gera relatórios de análise de satisfação para visualização pelos gestores da empresa.

## Cenários de Carga

### Cenário 1: Carga Normal

- **Objetivo**: Simular o funcionamento do sistema sob condições normais de uso.
- **Volume de Usuários**: 500 usuários simultâneos enviando respostas às pesquisas.
- **Duração**: 1 hora de teste.
- **Expectativa**: O sistema deve processar todas as respostas sem erros significativos ou atrasos notáveis.

### Cenário 2: Carga de Pico

- **Objetivo**: Avaliar a capacidade do sistema de suportar um aumento repentino no volume de usuários.
- **Volume de Usuários**: 1.000 usuários simultâneos enviando respostas às pesquisas.
- **Duração**: 30 minutos de teste, representando um pico de atividade.
- **Expectativa**: O sistema deve manter a funcionalidade, com possíveis degradações aceitáveis no tempo de resposta.

### Cenário 3: Carga Progressiva

- **Objetivo**: Determinar o ponto de falha do sistema aumentando gradualmente o número de usuários.
- **Volume de Usuários**: Inicia com 500 usuários, aumentando em 100 usuários a cada 10 minutos até atingir o ponto de falha ou um máximo de 2.000 usuários.
- **Duração**: Variável, dependendo do ponto de falha.
- **Expectativa**: Identificar o limite máximo de usuários que o sistema pode suportar antes de falhar ou degradar a performance além dos limites aceitáveis.

## Metodologia de Teste

Para a execução dos testes de carga, utilizaremos ferramentas de teste de carga como JMeter ou LoadRunner, complementadas pela produção de scripts personalizados. Estes scripts serão desenvolvidos especificamente para simular os cenários de carga descritos, permitindo a emulação fiel das ações dos usuários, desde o recebimento do e-mail até a submissão das respostas da pesquisa.

### Desenvolvimento de Scripts Personalizados

- **Objetivo**: Criar scripts que simulem as interações dos usuários com o sistema de maneira precisa e que permitam a captura de métricas específicas e personalizáveis, de acordo com as necessidades e preferências do cliente.
- **Funcionalidades dos Scripts**:
  - Simulação de múltiplos usuários acessando o sistema, respondendo às pesquisas e navegando através do processo de envio de respostas.
  - Coleta de métricas personalizadas, incluindo tempo de resposta, taxa de sucesso de entrega de e-mails, taxa de conclusão das pesquisas, entre outros.
  - Capacidade de ajuste de parâmetros dos testes em tempo real ou via configurações pré-definidas, para adaptar os testes às diferentes demandas de análise.

### Monitoramento e Análise

Os scripts personalizados, juntamente com as ferramentas de teste de carga, permitirão um monitoramento detalhado do comportamento do sistema sob carga. Isso inclui a análise de métricas críticas como tempo de resposta, taxa de erros, throughput e o comportamento do sistema diante de diferentes cenários de carga.

Essa abordagem nos possibilita não apenas validar a performance e a escalabilidade do sistema, mas também fornecer insights valiosos sobre como otimizar o sistema para atender melhor às demandas dos usuários finais e às expectativas do cliente.

### Conclusão da Metodologia

A integração de scripts personalizados com ferramentas de teste de carga consolidadas oferece uma metodologia robusta para testar a capacidade do sistema de manejar diferentes volumes de tráfego. Essa estratégia garante que podemos simular cenários de uso reais de maneira eficaz e coletar dados precisos para orientar melhorias no sistema, assegurando sua estabilidade, performance e a satisfação do usuário final.

## Conclusão

Este plano de testes de carga é projetado para garantir que o sistema de envio e coleta de pesquisas de satisfação esteja preparado para lidar com diferentes volumes de carga, simulando condições reais de uso. A execução desses testes nos permitirá identificar e corrigir possíveis gargalos, assegurando a escalabilidade, performance e a estabilidade do sistema.