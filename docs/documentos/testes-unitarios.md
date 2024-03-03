# Testes Unitários

## Gestão de importação e Validade de dados do cliente

### 1. Teste de download do modelo de planilha
- **Objetivo**: confirmar que o usuário pode baixar o modelo de planilha personalizado sem erros.
- **Entrada**: usuário clica no link ou botão de download do modelo de planilha.
- **Resultado esperado**: o download do arquivo inicia imediatamente, e o arquivo baixado corresponde ao modelo de planilha atualizado, contendo as colunas para `name`, `email`, `phone`, `CPF`, `Empresa`, `Company` por e-mail.

### 2. Teste de importação de planilha
- **Objetivo**: avaliar a capacidade do sistema de importar corretamente uma planilha preenchida com dados de clientes.
- **Entrada**: upload de uma planilha preenchida seguindo o modelo fornecido pelo sistema.
- **Variáveis**: planilha com dados válidos, planilha com células vazias, e planilha com formatos de dados incorretos.
- **Resultado esperado**: para dados válidos, a importação é bem-sucedida. Para células vazias ou formatos de dados incorretos, o sistema exibe mensagens de erro específicas.

### 3. Teste de validação dos dados importados
- **Objetivo**: garantir que o sistema valida os dados importados de acordo com regras de negócio específicas antes de confirmar a importação.
- **Entrada**: dados dos clientes importados via planilha.
- **Cenários de Teste**: importação de dados com e-mails duplicados, CPFs inválidos, e datas de nascimento futuras.
- **Resultado esperado**: o sistema identifica e relata erros específicos, bloqueando a importação até que os problemas sejam resolvidos.

### 4. Teste de limites de importação
- **Objetivo**: verificar como o sistema lida com planilhas que excedem o número máximo permitido de linhas ou colunas.
- **Entrada**: uma planilha com número de linhas ou colunas superior ao limite especificado pelo sistema.
- **Resultado esperado**: o sistema deve exibir uma mensagem de erro indicando que o arquivo excede o limite permitido e orientando sobre como proceder.

### 5. Teste de formato de arquivo de planilha
- **Objetivo**: confirmar que o sistema aceita apenas os formatos de arquivo de planilha especificados (por exemplo, .xls, .xlsx).
- **Entrada**: tentativa de upload de arquivos em formatos não suportados.
- **Resultado esperado**: mensagem de erro informando o usuário sobre os formatos de arquivo aceitos.



## Monitoramento em tempo real e Registro de resultados da distribuição

### 1. Teste de exibição do resumo de distribuição
- **Objetivo**: verificar se o resumo da distribuição reflete com precisão os dados importados em tempo real.
- **Entrada**: finalização da importação dos dados dos clientes.
- **Resultado esperado**: o resumo no lado direito da tela mostra a contagem exata de clientes que foram importados para a distribuição, incluindo quaisquer erros ou avisos relacionados à qualidade dos dados.

### 2. Teste de correspondência do resumo com a quantidade enviada
- **Objetivo**: assegurar que a quantidade de clientes listada no resumo após a importação corresponde exatamente à quantidade de registros válidos enviados.
- **Entrada**: dados dos clientes após a importação bem-sucedida.
- **Detalhamento**: comparação entre a quantidade de registros importados e a quantidade indicada no resumo.
- **Resultado esperado**: nenhuma discrepância entre a quantidade de clientes importados e a quantidade indicada no resumo.

## 3. Teste de distribuição de pesquisa

- **Objetivo**: confirmar a funcionalidade de distribuição de pesquisas via E-mail, incluindo modos anônimo e identificado.
- **Ação**: distribuir uma pesquisa utilizando o canal de E-mail para a base de clientes importada.
- **Resultado esperado**: registros da distribuição, incluindo quantidade de envios e entregas, são gerados conforme esperado.

## 4. Teste de salvamento dos resultados da distribuição

- **Objetivo**: validar a funcionalidade de salvamento dos resultados da distribuição, incluindo detalhes de sucesso e falhas na entrega.
- **Entrada**: comando do usuário para salvar os resultados da distribuição.
- **Detalhamento**: verificar se o sistema salva com precisão todos os detalhes da distribuição, incluindo a quantidade de e-mails enviados, a quantidade de e-mails entregues, a quantidade de falhas, e qualquer feedback de erro específico relacionado às falhas.
- **Resultado esperado**: os resultados da distribuição são salvos de forma que possam ser facilmente acessados e analisados para futuras referências e melhorias no processo de distribuição.

## 5. Teste de persistência dos resultados salvos

- **Objetivo**: garantir que os resultados da distribuição salvos permaneçam acessíveis e intactos após o logout ou reinicialização do sistema.
- **Ação**: salvar os resultados da distribuição, sair do sistema e então retornar para acessar os resultados salvos.
- **Resultado Esperado**: Os resultados salvos anteriormente são recuperados com precisão, sem perda de dados.

## 6. Teste de desempenho na importação

- **Objetivo**: avaliar o desempenho do sistema ao importar grandes volumes de dados.
- **Entrada**: importação de uma planilha de dados próxima ao limite máximo de capacidade.
- **Resultado esperado**: o sistema deve processar a importação dentro de um tempo aceitável, sem erros de timeout ou falhas.

## 7. Teste de segurança na importação de dados

- **Objetivo**: assegurar que o processo de importação de dados não seja vulnerável a injeções de SQL ou outros ataques que possam comprometer a segurança dos dados.
- **Entrada**: tentativa de importação de uma planilha contendo dados maliciosos ou código.
- **Resultado esperado**: o sistema deve sanitizar os dados de entrada, prevenindo qualquer tipo de injeção ou execução de código malicioso.
