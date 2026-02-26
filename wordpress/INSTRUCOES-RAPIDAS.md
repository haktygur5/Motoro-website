# 📋 INSTRUÇÕES RÁPIDAS DE IMPLEMENTAÇÃO

## Motoro Automotive Group - Footer com Mapa Escuro

---

## ⚠️ PRIMEIRO: REMOVA O CÓDIGO ANTIGO

Se você já colou o código antigo e o site quebrou:

1. Vá para **Customizer > Theme Scripts > Header Script**
2. **APAGUE TODO** o código que você colou antes
3. Clique em **Publish**
4. O site deve voltar ao normal

---

## ✅ PASSO 1: Adicionar o CSS (VERSÃO SEGURA)

### Onde: `Customizer > Theme Scripts > Header Script`

1. Acesse seu WordPress
2. Vá para **Appearance > Customize** (ou Personalizar)
3. Encontre **Theme Scripts** ou **Custom Script**
4. Clique em **Header Script** ou **Header**
5. **APAGUE qualquer código antigo da Motoro** se houver
6. Cole TODO o conteúdo do arquivo: **`CSS-PARA-HEADER-SCRIPT.html`**
7. Clique em **Publish** (Publicar)

⚠️ **IMPORTANTE**: 
- Cole o código COMPLETO, incluindo as tags `<style>` e `</style>`
- Esta versão é SEGURA e não interfere com o resto do site
- Todos os estilos começam com `.motoro-` para não conflitar

---

## ✅ PASSO 2: Adicionar o HTML na Página Home

### Onde: `Pages > Home > Bloco HTML Personalizado`

1. Vá para **Pages > Home**
2. Clique em **Edit** (Editar)
3. Role até o FINAL da página (após a seção "Explore With Us")
4. Clique no **+** para adicionar um novo bloco
5. Procure por **"HTML Personalizado"** ou **"Custom HTML"**
6. Cole TODO o conteúdo do arquivo: **`HTML-PARA-PAGINA-HOME.html`**
7. Clique em **Update** (Atualizar)

---

## 📁 Arquivos a Usar

| Arquivo | Onde Colar |
|---------|------------|
| `wordpress/CSS-PARA-HEADER-SCRIPT.html` | Theme Scripts > Header Script |
| `wordpress/HTML-PARA-PAGINA-HOME.html` | Pages > Home > Bloco Custom HTML |

---

## 🔧 Personalizações Rápidas

### Mudar o número de telefone:
Procure por `(407) 123-4567` e substitua pelo número real.

### Mudar o endereço:
Procure por `Orlando, FL 32822` e substitua pelo endereço real.

### Mudar o horário:
Procure por `Mon - Sat: 9:00 AM - 7:00 PM` e substitua.

### Mudar as cores:
No CSS, procure por estas variáveis e altere os valores hex:
```css
--motoro-primary: #1a73e8;      /* Azul principal */
--motoro-secondary: #ff6d00;    /* Laranja (destaque) */
```

### Adicionar links reais das redes sociais:
Procure por `href="#"` nos botões de Facebook, Instagram e YouTube e substitua pelos links reais.

---

## 🗺️ Sobre o Mapa

O mapa usa um **filtro CSS** para ficar escuro. O link "Get Directions" já está configurado para:
```
https://maps.app.goo.gl/T4eyLmafuVhcGFW37
```

Se precisar trocar o embed do mapa, substitua o `src` do iframe por um novo código do Google Maps.

---

## ❓ Problemas Comuns

### O CSS não está funcionando
- Certifique-se de que colou INCLUINDO as tags `<style>` e `</style>`
- Limpe o cache do navegador (Ctrl+Shift+R)
- Limpe o cache do WordPress se tiver plugin de cache

### O mapa não aparece escuro
- O filtro CSS precisa estar ativo
- Verifique se o CSS foi colado corretamente

### Os botões não funcionam
- Verifique se os links estão corretos (`/inventory/`, `/apply-online/`, etc.)
- Confirme que as páginas existem no seu site

---

## 📞 Resultado Esperado

Após a implementação, você terá:

1. ✅ **Mapa escuro** com filtro CSS elegante
2. ✅ **Card overlay** com informações de contato
3. ✅ **Botão "Get Directions"** que abre o Google Maps
4. ✅ **Logo MOTORO** centralizado
5. ✅ **Botões de navegação** coloridos e animados
6. ✅ **Links secundários** para outras páginas
7. ✅ **Ícones de redes sociais** com efeito hover
8. ✅ **Copyright** com "Powered by DealerCenter"
9. ✅ **Design responsivo** para mobile/tablet
