# Design Guidelines: Mapa da Bíblia - Landing Page de Vendas

## Design Approach
**Reference-Based Approach**: Inspirado em landing pages de produtos digitais de alta conversão como Gumroad, Teachable e Notion, com estética que evoca tradição católica e espiritualidade através de elementos visuais dourados e texturas que remetem a pergaminho.

## Core Design Principles
- **Mobile-First Conversion**: Otimizado para experiência vertical em dispositivos móveis com CTAs acessíveis
- **Visual Trust Building**: Uso estratégico de prova social, garantias e elementos visuais que transmitem autoridade religiosa
- **Clarity Over Complexity**: Informação hierarquizada com espaçamento generoso para facilitar leitura em telas pequenas

## Color Palette

### Light Mode
- **Primary Brand**: 35 65% 25% (Azul navy profundo - confiança e tradição)
- **Accent Gold**: 45 85% 55% (Dourado vibrante - sacralidade e valor)
- **Background Base**: 40 30% 97% (Off-white quente)
- **Background Elevated**: 0 0% 100% (Branco puro para cards)
- **Text Primary**: 220 15% 15% (Quase preto com leve tonalidade azul)
- **Text Secondary**: 220 10% 45% (Cinza médio)

### Dark Mode
- **Primary Brand**: 35 55% 65% (Azul claro suave)
- **Accent Gold**: 45 75% 65% (Dourado suave)
- **Background Base**: 220 15% 12% (Cinza-azulado escuro)
- **Background Elevated**: 220 12% 16% (Cinza-azulado médio)
- **Text Primary**: 40 10% 95% (Off-white quente)
- **Text Secondary**: 40 5% 70% (Cinza claro)

## Typography

**Font Families** (via Google Fonts):
- Headings: 'Playfair Display' (serif elegante, evoca tradição)
- Body: 'Inter' (sans-serif moderna, legibilidade mobile)
- Accent/CTA: 'Inter' weight 600-700

**Type Scale**:
- Hero H1: text-4xl md:text-5xl lg:text-6xl font-bold
- Section H2: text-3xl md:text-4xl font-bold
- Card H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small/Caption: text-sm

## Layout System

**Spacing Primitives**: Usar unidades Tailwind de 4, 6, 8, 12, 16, 20, 24 para consistência vertical
- Section padding: py-12 md:py-20
- Component spacing: space-y-6 md:space-y-8
- Inner content: px-4 md:px-6
- Container: max-w-7xl mx-auto

**Grid Strategy**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns para features/bônus (md:grid-cols-2)
- Desktop: Máximo 3 colunas para depoimentos (lg:grid-cols-3)

## Component Library

### Hero Section
- Full-width background com gradiente sutil (dourado para azul)
- Imagem do produto: mockup de tablet/páginas do mapa centralizado, ocupando 60% width mobile
- Selo de prova social: badge com "+1.000 católicos" posicionado top-right do hero
- CTA button: Large, accent gold background, texto branco, shadow-lg, fixed bottom mobile
- Typography: Playfair Display bold para headline

### CTA Buttons
- Primary: bg-accent-gold, text-white, px-8 py-4, rounded-lg, text-lg font-semibold
- Icon: Emoji 📖 inline antes do texto
- Fixed mobile CTA: Sticky bottom com backdrop-blur-md, sempre visível durante scroll
- Hover: Lift effect (scale-105) sem alterar cor

### Testimonial Cards
- Card: bg-white dark:bg-elevated, rounded-xl, p-6, shadow-md
- Avatar: circular, 56x56px placeholder ou ícone
- Rating: 5 estrelas douradas (★★★★★) acima do texto
- Quote: text-base italic, text-secondary
- Name: text-sm font-semibold, text-primary

### Feature Grid (Seção 4 - 4 pilares)
- Cards: bg-background-elevated, border-l-4 border-primary, p-6, rounded-lg
- Icon: Emoji grande (48px) ou número styled como badge
- Layout: Stack vertical mobile, grid-cols-2 md, gap-6

### Pricing Section
- Container: bg-gradient-to-br from-primary/5 to-accent-gold/5, p-8, rounded-2xl
- Strike-through price: text-2xl line-through text-secondary
- Current price: text-5xl font-bold text-accent-gold
- Date countdown: text-sm font-mono bg-black/10 px-3 py-1 rounded
- Guarantee badges: flex row com ícones 🛡️💸, text-xs

### FAQ Accordion
- Headers: Semibold, flex justify-between, py-4, border-b
- Chevron icon: rotate-180 quando expandido
- Content: text-secondary, py-4, leading-relaxed

### Footer
- Background: bg-primary dark:bg-primary-dark
- Text: text-white/90
- Links: text-white/70 hover:text-white
- Layout: Stack vertical, text-center mobile

## Visual Elements

### Background Textures
- Hero: Subtle radial gradient overlay simulando luz dourada
- Sections alternadas: Leve textura de papel (via CSS background-image url com texture sutil)

### Shadows & Depth
- Cards: shadow-md hover:shadow-xl transition
- CTAs: shadow-lg
- Floating elements: shadow-2xl

### Borders & Dividers
- Subtle: 1px solid com opacity 10% da cor primária
- Feature cards: border-l-4 colorido (accent)

## Images

**Hero Image**: Mockup profissional do produto - tablet exibindo o Mapa da Bíblia aberto, ou páginas físicas em layout atraente. Posicionamento central, tamanho 300-400px width mobile, 600px+ desktop. Formato: PNG transparente sobre background do hero.

**Product Showcase (Seção 6)**: Screenshot ou preview das páginas do PDF, mostrando design interno. Grid 2x2 mobile de previews pequenos.

**Depoimentos**: Avatars circulares 56x56px (podem ser placeholders com iniciais ou ícones genéricos de usuário).

**Bônus Icons**: Usar emojis grandes ou ícones SVG da Heroicons (DocumentText, BookOpen, Printer) em tamanho 48px, cor accent-gold.

## Animations
- **Minimal**: Apenas transições suaves (transition-all duration-300)
- Hover effects: Subtle scale (scale-105) e shadow elevation
- Scroll reveal: Fade-in sutil para sections (opcional, não obrigatório)
- **Evitar**: Animações complexas, parallax, carrosséis automáticos

## Accessibility
- Contrast ratio mínimo 4.5:1 para texto
- Focus states visíveis em todos interactive elements (ring-2 ring-accent-gold)
- Buttons com min-height 44px (touch target)
- Alt text descritivo para todas imagens
- Dark mode consistente em todos componentes