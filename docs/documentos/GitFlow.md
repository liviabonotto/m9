# Git Flow com Staging e Release

## 1. Estrutura de Branches

- **Main Branch**: Continua sendo a linha de vida principal do projeto, representando o código em produção. Atualizações nesta branch devem vir apenas da branch `release`.

- **Staging Branch**: A branch `staging` serve como um ambiente de preparação que imita a produção o mais próximo possível. É útil para testes finais antes de um lançamento. A `staging` é atualizada com recursos da branch `features` ou diretamente da `release` para testes de pré-lançamento.

- **Release Branch**: A branch `release` é usada para preparar lançamentos. Ela é criada a partir da `staging` quando esta está estável e pronta para ser lançada. Ajustes finais, como correções de bugs e documentação de última hora, são feitos aqui.

- **Feature Branches**: A estratégia para recursos permanece a mesma. Crie branches a partir da `staging` para novos recursos ou correções, usando a convenção `/features/nome_do_recurso`.

## 2. Fluxo de Trabalho (Workflow)

1. **Desenvolvimento de Recursos**: Inicie um novo recurso criando uma branch `/features/nome_do_recurso` a partir da `staging`.

2. **Testes Iniciais**: Desenvolva e teste o recurso em sua branch de recurso. Faça commits pequenos e significativos.

3. **Pull Request para Staging**: Quando o recurso está pronto e testado, crie um Pull Request para a `staging`. Isso permite uma rodada de testes em um ambiente que se assemelha à produção.

4. **Testes em Staging**: Teste o ambiente `staging` intensivamente. Isso é crucial para garantir que não haja regressões ou bugs introduzidos.

5. **Preparação para o Lançamento**: Uma vez que `staging` está estável e pronto para produção, crie uma branch `release` a partir dela. Faça ajustes finais e prepare a documentação do lançamento.

6. **Merge para Main e Tagging**: Após a conclusão dos ajustes na `release`, faça o merge para a `main`. Em seguida, marque este ponto com uma tag seguindo o padrão SemVer.

## 3. Versionamento SemVer

O versionamento SemVer (Semantic Versioning) é uma prática recomendada para gerenciar as versões do seu software de maneira clara e previsível. Utilizando o formato `MAJOR.MINOR.PATCH`, o SemVer ajuda a comunicar a natureza e o impacto das mudanças feitas no projeto. Aqui está um detalhamento mais aprofundado:

- **MAJOR**: Incrementado quando você faz mudanças incompatíveis na API que poderiam quebrar a compatibilidade com versões anteriores. Isso sinaliza que os consumidores do software precisarão fazer modificações significativas para continuar utilizando a nova versão.

- **MINOR**: Incrementado quando você adiciona funcionalidades de maneira compatível com versões anteriores. Isso permite a introdução de novos recursos sem perturbar o funcionamento existente do software.

- **PATCH**: Incrementado quando você faz correções de bugs compatíveis com versões anteriores. Isso se destina a melhorias que não alteram a funcionalidade principal ou a API do software.

Além disso, tags pré-lançamento e metadados de build podem ser utilizados para versões beta, correções e outras modificações prévias ao lançamento final.

## 4. Boas Práticas

- Garanta que `staging` e `main` estejam sempre prontas para deploy e bem testadas.
- Utilize Pull Requests para revisão de código e integração de mudanças.
- Mantenha convenções de nomenclatura claras e consistentes para branches e tags.
- Documente mudanças e novos recursos de forma clara.
- Implemente automação para testes e CI para manter a qualidade do código.