# Motoro Automotive Group - Guia de Implementação no WordPress

## 📋 Visão Geral

Este guia detalha como implementar a modernização visual da homepage do site Motoro Automotive Group utilizando o WordPress Customizer. Os arquivos incluídos proporcionam:

- ✨ **Animações de entrada suaves** (fade in, slide, scale)
- 🎨 **Design moderno com gradientes e sombras**
- 📱 **Layout totalmente responsivo**
- 🖱️ **Interações hover com efeitos 3D**
- 📊 **Contadores animados de estatísticas**
- 🎠 **Slider/carrossel para testimonials**
- 🔍 **Sistema de filtro para inventário**
- ⬆️ **Botão voltar ao topo**
- ✅ **Validação de formulários**

---

## 📁 Estrutura dos Arquivos

```
Motoro-website/
├── css/
│   └── homepage-animations.css    # Estilos e animações CSS
├── js/
│   └── homepage-interactive.js    # Funcionalidades JavaScript
├── html/
│   └── homepage-components.html   # Componentes HTML prontos
└── docs/
    └── IMPLEMENTATION-GUIDE.md    # Este guia
```

---

## 🚀 Passo a Passo de Implementação

### Passo 1: Adicionar o CSS (Estilos e Animações)

1. Acesse o painel WordPress: **Appearance > Customize**
2. Navegue até **Additional CSS**
3. Cole todo o conteúdo do arquivo `css/homepage-animations.css`
4. Clique em **Publish**

**Alternativa via Theme Scripts:**
- Vá em **Customizer > Theme Scripts > Header Script**
- Envolva o CSS em tags `<style>`:
```html
<style>
/* Cole o CSS aqui */
</style>
```

---

### Passo 2: Adicionar o JavaScript (Interatividade)

1. Acesse **Customizer > Theme Scripts > Footer Script** ou **Custom Script**
2. Cole todo o conteúdo do arquivo `js/homepage-interactive.js`
3. Envolva em tags `<script>`:
```html
<script>
/* Cole o JavaScript aqui */
</script>
```
4. Clique em **Publish**

**Nota:** O JavaScript foi escrito em ES5 para máxima compatibilidade com navegadores antigos.

---

### Passo 3: Adicionar os Componentes HTML na Homepage

1. Vá para **Pages > Home** no painel WordPress
2. Edite a página usando o **Gutenberg Block Editor**
3. Adicione blocos de **HTML Personalizado** (Custom HTML)
4. Cole as seções desejadas do arquivo `html/homepage-components.html`

**Seções disponíveis:**
| Seção | Descrição |
|-------|-----------|
| Hero Section | Banner principal com título animado e CTAs |
| Search Bar | Formulário de busca de veículos |
| Featured Vehicles | Grid de carros em destaque com filtros |
| Statistics | Contadores animados (vendas, satisfação, etc.) |
| Why Choose Us | Cards de benefícios com hover interativo |
| Testimonials | Slider de depoimentos de clientes |
| CTA Section | Chamada para ação com informações de contato |

---

## 🎨 Personalização de Cores

As cores podem ser facilmente alteradas modificando as variáveis CSS no início do arquivo `homepage-animations.css`:

```css
:root {
  /* Cores Primárias */
  --motoro-primary: #1a73e8;        /* Azul principal */
  --motoro-primary-dark: #0d47a1;   /* Azul escuro */
  --motoro-secondary: #ff6d00;       /* Laranja (destaque) */
  --motoro-accent: #00c853;          /* Verde (sucesso) */
  
  /* Cores Neutras */
  --motoro-dark: #1a1a2e;            /* Fundo escuro */
  --motoro-gray: #4a4a68;            /* Texto secundário */
  --motoro-light-gray: #f5f5f7;      /* Fundo claro */
}
```

**Via WordPress Customizer:**
Se o tema tem **Theme Colors**, você pode usar as cores definidas lá e apenas ajustar as variáveis CSS para referenciá-las.

---

## ⚡ Funcionalidades JavaScript

### 1. Animações ao Scroll (Intersection Observer)
Elementos com a classe `motoro-hidden` são automaticamente animados quando entram na viewport.

**Como usar:**
```html
<div class="motoro-hidden" data-animation="motoro-animate-fadeInUp">
  Conteúdo aqui
</div>
```

**Classes de animação disponíveis:**
- `motoro-animate-fadeInUp`
- `motoro-animate-fadeInLeft`
- `motoro-animate-fadeInRight`
- `motoro-animate-scaleIn`

**Classes de delay:**
- `motoro-delay-100` até `motoro-delay-800`

---

### 2. Contadores Animados
Para criar um contador que anima ao aparecer na tela:

```html
<div data-counter data-target="1500" data-suffix="+">0</div>
```

**Atributos:**
- `data-counter` - Ativa o contador
- `data-target` - Número final
- `data-suffix` - Texto após o número (ex: "+", "%")
- `data-prefix` - Texto antes do número (ex: "$")
- `data-duration` - Duração em ms (padrão: 2000)

---

### 3. Efeito Typewriter
Para textos com efeito de máquina de escrever:

```html
<span data-typewriter="Toyota|Honda|BMW|Ford" data-speed="100"></span>
```

---

### 4. Filtro de Inventário
Para implementar filtros nos cards de veículos:

**Botões de filtro:**
```html
<button data-filter="all" class="active">All</button>
<button data-filter="sedan">Sedans</button>
<button data-filter="suv">SUVs</button>
```

**Cards com categoria:**
```html
<div class="motoro-vehicle-card" data-category="sedan">
  <!-- Conteúdo do card -->
</div>
```

---

### 5. Slider/Carrossel

```html
<div class="motoro-slider" data-autoplay="true" data-interval="5000">
  <div class="motoro-slide active">Slide 1</div>
  <div class="motoro-slide">Slide 2</div>
  <div class="motoro-slider-dots"></div>
</div>
```

---

### 6. Lightbox para Imagens

Adicione `data-lightbox` a qualquer imagem para abrir em modal:
```html
<img src="thumb.jpg" data-lightbox data-full-src="full-size.jpg" alt="Descrição">
```

---

## 📱 Responsividade

O design é totalmente responsivo com breakpoints em:
- **768px** - Tablets
- **480px** - Mobile

**Funcionalidades responsivas:**
- Grid de veículos muda para 1 coluna em mobile
- Botões empilham verticalmente em telas pequenas
- Tamanhos de fonte ajustam automaticamente (`clamp()`)
- Estatísticas mudam de 4 para 2 e depois 1 coluna

---

## 🌙 Modo Escuro

O CSS inclui suporte a dark mode via `prefers-color-scheme`:

```css
body.motoro-dark-mode {
  /* Cores invertidas automaticamente */
}
```

Para ativar manualmente, adicione a classe `motoro-dark-mode` ao `<body>`.

---

## 🔧 Solução de Problemas

### Animações não funcionam
1. Verifique se o JavaScript foi adicionado no **Footer Script** (após o HTML)
2. Confirme que os elementos têm a classe `motoro-hidden`
3. Abra o Console do navegador (F12) e procure por erros

### Estilos não aplicam
1. Verifique se o CSS foi salvo corretamente no **Additional CSS**
2. Limpe o cache do navegador e do WordPress
3. Alguns temas podem sobrescrever estilos - adicione `!important` se necessário

### Contadores mostram 0
1. O elemento precisa ter `data-counter` e `data-target`
2. A animação só inicia quando o elemento entra na viewport

---

## 📞 Suporte

Para dúvidas ou problemas com a implementação:

1. Verifique se todos os arquivos foram copiados corretamente
2. Teste em uma página de staging antes de publicar
3. Use o Console do navegador para debugar problemas de JavaScript

---

## 📝 Changelog

### v1.0.0 (2024)
- Lançamento inicial
- CSS com animações e estilos modernos
- JavaScript com 15+ funcionalidades interativas
- Componentes HTML prontos para uso
- Documentação completa

---

## 🗺️ Seção do Mapa Escuro + Footer

### Arquivos Adicionados

- `html/footer-map-section.html` - Componentes HTML do mapa e footer
- `css/footer-map-section.css` - Estilos CSS para mapa escuro

### Implementação

1. **Adicionar CSS**: Cole o conteúdo de `css/footer-map-section.css` no **Additional CSS** do WordPress
2. **Adicionar HTML**: Cole o conteúdo de `html/footer-map-section.html` no final da página HOME, após a seção `dws-home-about`

### Personalização do Mapa

O mapa usa filtros CSS para criar o visual escuro:

```css
.motoro-map-wrapper iframe {
  filter: grayscale(100%) invert(92%) contrast(83%);
}
```

**Opções de estilo:**
- **Padrão**: Escuro com tons de cinza
- **Opção 2**: `invert(100%) hue-rotate(180deg)` - Totalmente escuro
- **Opção 3**: `grayscale(100%) invert(90%) sepia(10%)` - Azulado escuro

### Link do Google Maps

O link oficial da loja é: `https://maps.app.goo.gl/T4eyLmafuVhcGFW37`

Para atualizar o embed, substitua o `src` do iframe pelo embed correto do Google Maps.

---

## 🎯 Próximos Passos Sugeridos

1. **Personalizar cores** para corresponder à identidade visual da Motoro
2. **Substituir imagens placeholder** por fotos reais dos veículos
3. **Atualizar textos** com informações reais (telefone, endereço, etc.)
4. **Testar em dispositivos móveis** para garantir boa experiência
5. **Adicionar Google Analytics** via Theme Scripts > Header Script
6. **Implementar integração com inventário real** do DealerCenter
7. **Atualizar link do Google Maps** com o embed correto da localização
