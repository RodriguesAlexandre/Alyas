# AleYas · a casa do Ale e da Yas

Lista de compras, despensa, notas e cardápio, no celular e no PC, sincronizados por uma planilha do Google.

**App:** https://rodriguesalexandre.github.io/Alyas/

## Como funciona

- **O app** é um site estático publicado pelo GitHub Pages (pasta `docs/`).
- **Os dados** ficam numa planilha do Google de vocês. Um Google Apps Script (`apps-script/Code.gs`) funciona como servidor. Ele guarda a casa, controla quem salvou por último (os dois podem editar ao mesmo tempo) e busca as ofertas do Supermercados BH.
- **Sincronização:** cada aparelho confere a planilha a cada 6 segundos. Uma alteração aparece na hora no aparelho e sobe para a planilha em segundo plano.
- **Sem sinal no mercado:** o app abre e funciona offline. As alterações ficam guardadas no aparelho e sobem quando a internet volta.
- **Acesso:** uma chave secreta da casa, entregue pelo link do e-mail. O código é público; os dados não.

## Instalação da planilha (uma vez, ~5 minutos)

1. Crie uma planilha nova em sheets.google.com e dê o nome **AleYas**.
2. Abra **Extensões → Apps Script**. Apague o código que aparece e cole **todo** o conteúdo do arquivo `AleYas-Code.gs` (a cópia privada, que já traz as notas antigas). O `apps-script/Code.gs` deste repositório é a mesma versão, sem as notas.
3. Clique em salvar (ícone de disquete). Na barra de cima, escolha a função **configurar** e clique em **Executar**.
   - O Google vai pedir autorização: **Revisar permissões → escolha sua conta → Avançado → Acessar AleYas (não seguro) → Permitir**. Esse aviso é padrão para scripts pessoais.
4. Clique em **Implantar → Nova implantação**. Na engrenagem, escolha **App da Web** e preencha:
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
   - Clique em **Implantar** e autorize, se pedir.
5. Volte ao editor, escolha a função **enviarLink** e clique em **Executar**. O link chega no seu e-mail.
6. Abra o link **em cada aparelho**. No celular: menu do navegador → **Adicionar à tela de início**.

Para mandar o link também para a Yas, coloque o e-mail dela em `EMAILS_EXTRAS` no topo do script e rode `enviarLink` de novo. Outra opção: no app, **Nossa casa → Enviar link para outro aparelho**.

### Ao atualizar o script

Em **Implantar → Gerenciar implantações**, clique no lápis da implantação, escolha **Nova versão** e depois **Implantar**. Assim o endereço continua o mesmo e ninguém precisa reconectar.

### Se o link vazar

Rode a função **trocarChave** e depois **enviarLink**. O link antigo para de funcionar.

## Abas da planilha

| Aba | O que tem |
|---|---|
| `_estado` (oculta) | O banco de dados do app. Não edite. |
| Lista de compras, Nossos produtos, Despensa | Espelhos para consulta, reescritos pelo app. |
| Compras, Itens comprados | Histórico de compras e preços pagos, incluindo as notas importadas. |
| Cardápio, Perfis | Refeições planejadas, porções, metas e orçamento. |

Para editar, use o app: as abas espelho são sobrescritas a cada alteração.

## Desenvolvimento

```bash
bun scripts/build.ts      # gera docs/ (é o que o GitHub Pages publica)
npm run typecheck         # checagem de tipos (TypeScript)
npm test                  # testes de lógica (Node 22+)
```

O código fica em `src/` (React + TypeScript). A leitura de etiquetas e notas usa Tesseract.js, rodando no próprio aparelho (`public/ocr`), sem custo de IA.
