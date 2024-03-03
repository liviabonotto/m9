# Requisitos Funcionais

## Gestão de Importação e Validade de Dados do Cliente

### Descrição

O sistema deve fornecer aos usuários a capacidade de realizar o download de um modelo de planilha personalizado destinado à distribuição por e-mail. Ao preencher essa planilha com os dados dos clientes, o sistema deverá oferecer uma funcionalidade robusta de importação. Durante esse processo, os dados devem ser validados para garantir coesão e precisão. Em caso de detecção de erros ou inconsistências nos dados, o sistema deve apresentar mensagens de erro detalhadas, fornecendo orientações claras sobre as correções necessárias antes da confirmação da importação.

### Fluxo Principal

1. **Acesso à página inicial:** o usuário inicia o processo acessando a página inicial do sistema. Esta página contém uma seção com diversas pesquisas listadas para distribuição.
2. **Seleção da pesquisa:** o usuário localiza a pesquisa que deseja distribuir por e-mail e clica nela para visualizar uma página completa.
3. **Acesso à distribuição:** na página da pesquisa, o usuário seleciona a tab “distribuição” e é levado à tela de gestão de distribuição para aquela pesquisa específica.
4. **Criação de nova distribuição:** na tela de distribuição, o usuário clica no botão “Nova distribuição” para iniciar o processo de configuração da distribuição por e-mail.
5. **Escolha do Canal de Distribuição:** um modal é aberto e nele o usuário seleciona “E-mail” como o canal de distribuição desejado.
6. **Lista de clientes:** após a seleção do canal, mais opções surgem para inclusão da planilha de distribuição.
7. **Seleção do arquivo:** o usuário clica em “Clique aqui para subir” ou arrasta o arquivo para o campo indicado para carregar a planilha preenchida com os dados dos clientes.
8. **Validação dos dados:** após o carregamento, o sistema exibe as 5 primeiras colunas da planilha e inicia a validação dos dados inseridos. Se erros ou inconsistências forem detectados, mensagens de erro detalhadas são apresentadas ao usuário, indicando os problemas encontrados e como corrigi-los.
9. **Confirmação da importação:** uma vez que todos os dados estejam corretos e validados, o usuário clica em “Confirmar importação” para finalizar o processo de importação dos dados dos clientes.

## Monitoramento em Tempo Real e Registro de Resultados da Distribuição

### Descrição

Após a importação bem-sucedida dos dados dos clientes, o sistema deverá apresentar um resumo detalhado em tela. Este resumo deve exibir informações em tempo real, destacando a quantidade de clientes que serão incluídos na distribuição por e-mail. Proporcionando aos usuários uma verificação instantânea, o sistema assegura que a quantidade de clientes exibida no resumo corresponda exatamente às expectativas dos usuários. Adicionalmente, o sistema deve possibilitar que os usuários salvem os resultados da distribuição, permitindo o registro das informações para referência futura e análise posterior.

### Fluxo Principal

1. **Salvar envio de distribuição:** após a importação, aparece um resumo com a quantidade de clientes enviados para a distribuição e o usuário clica em “Salvar” para finalizar o processo de envio.
2. **Visualização do resumo da distribuição:** após a confirmação da importação dos dados dos clientes, o sistema atualiza a tela para mostrar um resumo detalhado. Este resumo inclui a quantidade de clientes que serão abordados na distribuição por e-mail.
3. **Verificação em tempo real:** o resumo exibido é atualizado em tempo real, oferecendo ao usuário a capacidade de verificar instantaneamente se a quantidade de clientes listada corresponde à sua expectativa. Isso assegura que o usuário tenha controle e visibilidade sobre o processo de distribuição.
4. **Salvamento dos resultados:** com os dados de distribuição confirmados e validados, o usuário tem a opção de clicar em “Salvar” para registrar as informações da distribuição. Este passo permite que os resultados sejam armazenados para referência futura e análises posteriores, garantindo que o usuário acompanhe o sucesso e o alcance de suas distribuições por e-mail.

### **Fluxo alternativo: Confirmação final antes de salvar os resultados:**
  
   - Antes de salvar os resultados da distribuição, o sistema exibe uma tela de confirmação final.
   - O usuário revisa todos os detalhes da distribuição, incluindo os ajustes feitos, anomalias resolvidas e visualizações dos resultados.
   - O sistema solicita ao usuário que confirme sua intenção de salvar os resultados.
   - O usuário pode optar por revisar novamente os dados ou confirmar o salvamento dos resultados.

**1: Falha na Confirmação:**
   - Se o usuário não confirmar a intenção de salvar os resultados após a solicitação do sistema:
      - O sistema exibe uma mensagem de erro indicando que os resultados não foram salvos.
      - O usuário tem a opção de revisar novamente os dados ou tentar salvar os resultados novamente.

Condição de início: O sistema exibe uma tela de confirmação final solicitando ao usuário que confirme sua intenção de salvar os resultados da distribuição. Se o usuário não confirmar a intenção de salvar os resultados após a solicitação do sistema, isso desencadeia este fluxo alternativo.
Revisão adicional solicitada pelo usuário

**2: Revisão adicional solicitada pelo usuário:**
   - Se o usuário optar por revisar novamente os dados após a confirmação:
      - O sistema permite que o usuário faça as revisões necessárias.
      - Após a revisão adicional, o usuário é solicitado novamente a confirmar a intenção de salvar os resultados.

Condição de início: Após revisar todos os detalhes da distribuição, o usuário opta por revisar novamente os dados, o que indica uma solicitação adicional por parte do usuário para revisar os detalhes da distribuição. Isso desencadeia este fluxo alternativo.
Anomalias críticas não resolvidas

**3: Anomalias críticas não resolvidas:**
   - Se durante a revisão dos detalhes da distribuição, o usuário identificar anomalias críticas que não foram resolvidas:
      - O sistema destaca as anomalias críticas não resolvidas e avisa o usuário.
      - O usuário pode optar por voltar e resolver essas anomalias ou continuar sem salvar os resultados.
      - Se o usuário escolher continuar sem resolver as anomalias, o sistema não salva os resultados e fornece uma mensagem indicando que há anomalias críticas não resolvidas.

Condição de início: Durante a revisão dos detalhes da distribuição, o usuário identifica anomalias críticas que não foram resolvidas. Essa identificação desencadeia este fluxo alternativo.
Visualização dos resultados insatisfatória

**4: Visualização dos resultados insatisfatória:**
   - Se o usuário considerar que a visualização dos resultados não é satisfatória durante a revisão:
      - O sistema oferece opções para ajustar as configurações de visualização ou refinar os parâmetros da distribuição.
      - Após as alterações, o usuário é solicitado novamente a confirmar a intenção de salvar os resultados.

Condição de início: Durante a revisão dos detalhes da distribuição, o usuário considera que a visualização dos resultados não é satisfatória. Esta insatisfação desencadeia este fluxo alternativo.
Interrupção do sistema durante a confirmação

**5: Interrupção do sistema durante a confirmação:**
   - Se ocorrer uma interrupção do sistema enquanto o usuário estiver revisando e confirmando a intenção de salvar os resultados:
      - O sistema registra o progresso até o momento da interrupção.
      - Quando o sistema for restaurado, ele retorna à tela de confirmação, permitindo ao usuário retomar o processo a partir do ponto em que foi interrompido.
      - O usuário pode revisar novamente os dados ou confirmar o salvamento dos resultados.

Condição de início: O usuário está revisando e confirmando a intenção de salvar os resultados da distribuição quando ocorre uma interrupção do sistema. Esta interrupção desencadeia este fluxo alternativo.

## **Fluxo alternativo: Visualização do resumo da distribuição**

Após a confirmação da importação dos dados dos clientes, o sistema atualiza a tela para mostrar um resumo detalhado. Este resumo inclui a quantidade de clientes que serão abordados na distribuição por e-mail.

**1: Falha na Atualização do Resumo:**
   - Se ocorrer uma falha na atualização da tela para mostrar o resumo detalhado após a confirmação da importação dos dados dos clientes:
      - O sistema exibe uma mensagem de erro indicando a falha na atualização.
      - O usuário tem a opção de tentar atualizar a tela novamente para visualizar o resumo.
      - Se a falha persistir, o sistema pode oferecer alternativas, como acessar o resumo por meio de outra interface ou fornecer um relatório detalhado por e-mail.

**2: Dados de Importação Incompletos:**
   - Se, após a confirmação da importação dos dados dos clientes, o sistema identificar que parte dos dados está faltando ou é inconsistente:
      - O sistema exibe um aviso indicando que os dados de importação estão incompletos ou inconsistentes.
      - O usuário é orientado a revisar os dados de importação e corrigir quaisquer problemas encontrados.
      - Após a correção dos dados, o sistema atualiza a tela para mostrar o resumo detalhado conforme descrito no fluxo principal.
    
## **Fluxo alternativo: Verificação em tempo real**
 - Verificação em tempo real: o resumo exibido é atualizado em tempo real, oferecendo ao usuário a capacidade de verificar instantaneamente se a quantidade de clientes listada corresponde à sua expectativa. Isso assegura que o usuário tenha controle e visibilidade sobre o processo de distribuição.

**1: Desativação da Verificação em Tempo Real:**
   - Se o usuário preferir desativar a atualização em tempo real do resumo:
      - O sistema fornece uma opção para desativar a verificação em tempo real.
      - O usuário pode escolher essa opção se preferir uma atualização manual do resumo ou se estiver enfrentando problemas de desempenho devido à atualização contínua.
      - Após desativar a verificação em tempo real, o usuário pode optar por atualizar manualmente o resumo quando necessário.
      
**2: Configurações de Atualização Personalizadas:**
   - Se o usuário desejar configurar as atualizações em tempo real de forma personalizada:
      - O sistema permite que o usuário defina intervalos de atualização ou condições específicas para a verificação em tempo real.
      - O usuário pode especificar, por exemplo, a frequência com que o resumo é atualizado ou as circunstâncias sob as quais a atualização ocorre, como alterações significativas na quantidade de clientes.
      - Após configurar as preferências de atualização personalizadas, o sistema ajusta a verificação em tempo real de acordo com as especificações do usuário.

**3: Notificações de Eventos Específicos:**
   - Se o usuário preferir receber notificações específicas em vez de atualizar o resumo em tempo real:
      - O sistema permite que o usuário defina eventos específicos para os quais deseja receber notificações instantâneas.
      - Por exemplo, o usuário pode optar por receber uma notificação quando a quantidade de clientes atingir um determinado limite ou quando ocorrerem anomalias nos dados.
      - Após configurar as preferências de notificação, o sistema envia alertas conforme os eventos definidos pelo usuário, oferecendo uma abordagem alternativa para o controle e visibilidade do processo de distribuição.

**Associação às Condições de Início do Fluxo Alternativo:**

A condição de início deste fluxo alternativo é a preferência do usuário em desativar a atualização em tempo real do resumo, o que é uma escolha válida e justificável, especialmente se o usuário preferir controlar manualmente o momento da atualização do resumo ou se estiver enfrentando problemas de desempenho.

### **Fluxo alternativo: Salvamento dos resultados**

Com os dados de distribuição confirmados e validados, o usuário tem a opção de clicar em “Salvar” para registrar as informações da distribuição. Este passo permite que os resultados sejam armazenados para referência futura e análises posteriores, garantindo que o usuário acompanhe o sucesso e o alcance de suas distribuições por e-mail.

**Fluxo Alternativo 1: Cancelamento do Salvamento:**
   - Se, após confirmar os dados de distribuição, o usuário decidir não salvar os resultados:
      - O sistema fornece uma opção para cancelar o salvamento.
      - O usuário pode escolher essa opção se perceber que cometeu um erro na confirmação dos dados ou se decidir que a distribuição não precisa ser registrada para referência futura.
      - Após cancelar o salvamento, o sistema retorna à tela anterior, permitindo que o usuário faça ajustes adicionais ou saia do processo de distribuição.

**Fluxo Alternativo 2: Salvamento Automático:**
   - Se o sistema estiver configurado para realizar salvamentos automáticos:
      - Após a confirmação dos dados de distribuição, o sistema salva automaticamente os resultados sem a necessidade de intervenção do usuário.
      - Essa configuração é útil em cenários onde é crucial manter um registro contínuo e detalhado das distribuições, garantindo que nenhuma informação seja perdida.
      - Após o salvamento automático, o sistema pode fornecer uma confirmação visual ao usuário ou simplesmente continuar o fluxo de trabalho sem interrupção. 

**Associação às Condições de Início do Fluxo Alternativo:**

## Fluxo de exceção 

**Falha na Confirmação:**
Detalhamento: O sistema requer a confirmação do usuário para salvar os dados digitados. Uma falha ocorre quando essa confirmação não é fornecida.

Resposta do Sistema: O sistema alerta o usuário sobre a falha, destacando a necessidade de confirmação para prosseguir e oferece opções para revisar ou tentar o processo novamente, garantindo que o usuário esteja ciente da ação necessária.

Lógica: A abordagem permite que o usuário corrija a omissão sem prejudicar os dados já inseridos, mantendo a integridade do processo.

**Anomalias Críticas Não Resolvidas:**
Detalhamento: Durante a revisão, o usuário encontra problemas críticos nos dados que precisam ser resolvidos.

Resposta do Sistema: O sistema sinaliza essas anomalias e oferece ao usuário a opção de corrigi-las ou prosseguir sem salvar, destacando as consequências de ambas as ações.

Lógica: A abordagem assegura que o usuário esteja ciente dos problemas críticos, incentivando a correção de dados para manter a qualidade e integridade dos resultados finais.

**Visualização dos Resultados Insatisfatória:**
Detalhamento: O usuário não está satisfeito com como os resultados da distribuição são apresentados.

Resposta do Sistema: O sistema oferece opções para personalizar a visualização, incluindo ajustes nas configurações ou parâmetros, e solicita confirmação após as alterações.

Lógica: Permitir personalização da visualização melhora a experiência do usuário, garantindo que a apresentação dos resultados atenda às suas expectativas sem afetar a funcionalidade principal.

**Revisão Adicional Solicitada pelo Usuário:**

Detalhamento: O usuário deseja revisar os dados inseridos após a confirmação inicial.

Resposta do Sistema: O sistema facilita essa revisão, permitindo ajustes antes da finalização do salvamento, e solicita uma nova confirmação após as revisões.

Lógica: Esta flexibilidade respeita a necessidade do usuário de garantir a precisão dos dados, sem comprometer a eficácia do processo de salvamento.
