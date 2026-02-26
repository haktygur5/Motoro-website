# PROMPT COMPLETO PARA NOVO CHAT - MOTORO AUTOMOTIVE GROUP

## Use este prompt para iniciar um novo chat com todo o contexto do projeto

---

## 🎯 OBJETIVO ATUAL

Preciso adicionar uma **seção de MAPA** no final da página HOME do site Motoro Automotive Group. O mapa deve:
- Aparecer **ANTES do footer original** do tema
- Ter um **visual escuro/elegante** (dark mode)
- Mostrar a **localização da loja** em Orlando, FL
- Ter um **card de informações** com endereço, telefone, horário
- Ter um **botão "Get Directions"** que redirecione para o Google Maps
- Ser **responsivo** para mobile

---

## 🏢 INFORMAÇÕES DA EMPRESA

- **Nome:** MOTORO AUTOMOTIVE GROUP
- **Endereço:** 5501 S Orange Blossom Trail, Orlando, FL 32839
- **Telefone:** +1 (689) 320-9498
- **Horário:** Mon-Sat: 9AM - 7PM | Sun: Closed
- **Google Maps URL:** https://maps.app.goo.gl/T4eyLmafuVhcGFW37
- **Website:** www.motoroautomotivegroup.com

---

## 💻 PLATAFORMA E ESTRUTURA

### WordPress com DealerCenter
- O site usa **WordPress** com o **DealerCenter** como base
- O tema tem um **Customizer** com estas seções disponíveis:

### Seções do Customizer Disponíveis:
1. **Site Identity** - Logo, título, tagline, favicon
2. **Social Media Links** - URLs de perfis sociais
3. **Advanced Header & Footer** - HTML customizado
4. **Theme Scripts** - Scripts para Header/Footer
5. **Theme Mode** - Light/Dark mode
6. **Theme Colors** - Paleta de cores
7. **Custom Script** - Campo para JS/HTML personalizado
8. **Menus** - Estrutura de navegação
9. **Widgets** - Áreas de widgets
10. **Homepage Settings** - Configurações da home

### ⚠️ IMPORTANTE: Não existe "Additional CSS"
O Customizer **NÃO TEM** a seção "Additional CSS" padrão do WordPress.
**Todo CSS deve ser inserido com tags `<style>` dentro do Header Script ou Footer Script.**

---

## 📍 ONDE INSERIR CÓDIGO

Para adicionar código customizado, existem estas opções:

| Local | Caminho | Tipo de Código |
|-------|---------|----------------|
| Header Script | Customizer > Theme Scripts > Header Script | `<style>` e `<script>` |
| Footer Script | Customizer > Theme Scripts > Footer Script | HTML + `<style>` + `<script>` |
| Advanced Header | Customizer > Advanced Header & Footer > Header | HTML estrutural |
| Advanced Footer | Customizer > Advanced Header & Footer > Footer | HTML estrutural |
| Página Home | Pages > Home > Edit (Gutenberg) | Blocos WordPress |

---

## ❌ O QUE NÃO FUNCIONOU (EVITAR!)

### 1. Variáveis CSS `:root` - QUEBRA O SITE!
```css
/* ❌ NÃO USAR - quebrou o site inteiro */
:root {
  --motoro-primary: #1a1a2e;
  --motoro-secondary: #ff6d00;
}
```
**Problema:** As variáveis conflitaram com as variáveis do tema DealerCenter e quebraram o layout.

### 2. CSS complexo com muitas classes
```css
/* ❌ NÃO USAR - código complexo não renderizou */
.motoro-map-section { ... }
.motoro-info-card { ... }
```
**Problema:** O código não renderizou nada, provavelmente conflitos com CSS do tema.

### 3. CSS Filters no iframe
```css
/* ❌ NÃO USAR - bloqueou o mapa */
iframe {
  filter: grayscale(100%) invert(92%) contrast(83%);
}
```
**Problema:** O filtro CSS aplicado no iframe impediu o carregamento do mapa.

### 4. Backdrop-filter
```css
/* ❌ NÃO USAR - não suportado */
backdrop-filter: blur(10px);
```
**Problema:** Não funciona em todos os browsers e pode quebrar o layout.

### 5. Substituir código da página Home
**Problema:** Quando colei código novo na página Home, SUBSTITUIU todo o conteúdo existente ao invés de ADICIONAR.

---

## ✅ O QUE FUNCIONOU

### Código simples do mapa:
```html
<div style="width:100%; padding:20px; box-sizing:border-box;">
  <h2 style="text-align:center; color:#333; margin-bottom:20px;">📍 Visit Our Dealership</h2>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.123456789!2d-81.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjAiTiA4McKwMDcnMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  <p style="text-align:center; margin-top:15px;">
    <a href="https://maps.app.goo.gl/T4eyLmafuVhcGFW37" target="_blank" style="color:#ff6d00; text-decoration:none; font-weight:bold;">
      📍 Get Directions
    </a>
  </p>
</div>
```

**Este código funcionou quando colado no Footer Script**, mas:
- Apareceu no visual básico (sem estilização dark)
- O mapa ficou como uma "barra horizontal deitada"

---

## 🎨 CÓDIGO ATUAL DA PÁGINA HOME

Aqui está o código completo atual da página HOME que está funcionando:

```html
<!-- wp:cover - DESKTOP COVER -->
<div class="wp-block-cover is-light dws-home-banner-bg d-none d-md-block d-lg-block add-animation">
  <video class="wp-block-cover__video-background" autoplay muted loop playsinline src="https://dcdws.blob.core.windows.net/dws-29006608-102354-media/sites/102354/2026/02/Design-sem-nome-2-1.mp4"></video>
  <div class="wp-block-cover__inner-container">
    <div id="motoro-hero-ctas">
      <a href="/inventory/" class="cta-primary">🔍 Browse Inventory</a>
      <a href="/apply-online/" class="cta-secondary">✅ Get Pre-Approved</a>
    </div>
  </div>
</div>

<!-- wp:cover - MOBILE COVER -->
<!-- ... código mobile similar ... -->

<!-- MAIN CONTENT -->
<div class="wp-block-group dws-group-max-width m-auto dws-home-wrapper">
  <!-- Search By Make -->
  <!-- Quick Actions (Browse Inventory, Get Financed, Schedule Test Drive) -->
  <!-- Brand Section -->
  <!-- Featured Vehicles Slider -->
  <!-- Explore With Us Section -->
</div>
```

---

## 🎯 O QUE PRECISO AGORA

1. **Código para Footer Script** que adicione uma seção de mapa BONITA e ESCURA
2. O código deve:
   - Usar **APENAS estilos inline** (não criar classes CSS novas)
   - **NÃO usar** variáveis `:root`
   - **NÃO usar** CSS filters no iframe
   - Ter um **fundo escuro** (pode ser inline: `background: #1a1a2e;`)
   - Ter **mapa maior** (altura mínima de 400px)
   - Ter **card de informações** ao lado do mapa
   - Ser **responsivo** (media queries inline com `<style>`)
   - Ter **botão Get Directions** com visual laranja

---

## 📱 PÁGINAS DO SITE

- Home (principal)
- About Us
- Privacy Policy
- Apply Online
- Inventory
- Contact Us
- Schedule a Test Drive

---

## 🔗 LINKS ÚTEIS

- **Inventory:** /inventory/
- **Apply Online:** /apply-online/
- **Contact:** /contact-us/
- **About Us:** /about-us/
- **Test Drive:** /schedule-a-test-drive/
- **Privacy:** /privacy-policy/

---

## 🎨 CORES DO BRAND

- **Laranja (accent):** #ff6d00
- **Escuro (background):** #1a1a2e ou #0d1117
- **Texto claro:** #ffffff
- **Texto secundário:** #a0a0a0

---

## 📋 RESUMO DO QUE PRECISA

Gere código HTML + CSS inline para:
1. Uma **seção de mapa** para o final da página
2. Que seja colado no **Customizer > Theme Scripts > Footer Script**
3. Com **visual escuro/elegante**
4. **Sem usar** variáveis `:root` ou classes CSS que conflitem
5. Com **card de informações** (endereço, telefone, horário)
6. Com **botão Get Directions** laranja
7. **Responsivo** para mobile
8. Que **ADICIONE** ao site sem quebrar nada

---

**FIM DO PROMPT**
