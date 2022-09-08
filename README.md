# tabuada-node
Tabuada usando Node.js com a biblioteca Yargs

### Obrigatório:
-b: Trata-se do Multiplicador (primeiro fator)
### Opcional (padrão = 10):
-m: Trata-se do Multiplicando (segundo fator)
### Opcional:
-l: Lista a tabuada em console


Exemplos:
Criando um arquivo tabuada-de-3.txt
```
node tabuada -b 3
```

Criando um arquivo tabuada-de-3.txt e listando a tabuada em console
```
node tabuada -b 3 -l
```

Criando um arquivo tabuada-de-3.txt com multiplicando 20
```
node tabuada -b 3 -m 20
```
