// ========== GALERIA DE PRODUTOS ==========
const produtosGaleria = [
  { nome: "Anel Solitário Ouro", categoria: "aneis", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop", preco: "Sob Consulta" },
  { nome: "Colar Corrente Feminina", categoria: "colares", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop", preco: "Consulte" },
  { nome: "Pulseira Elos Dourados", categoria: "pulseiras", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop", preco: "Promoção" },
  { nome: "Brinco Argolas Maxi", categoria: "brincos", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop", preco: "Sob Consulta" },
  { nome: "Cordão Masculino Aço", categoria: "cordao", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", preco: "Sob Consulta" },
  { nome: "Relógio Premium Dourado", categoria: "relogios", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", preco: "Lançamento" },
  { nome: "Tornozeleira Pérolas", categoria: "pulseiras", img: "https://images.unsplash.com/photo-1509316975850-ff9c5e7f16a5?w=400&h=400&fit=crop", preco: "Sob Consulta" },
  { nome: "Anel Duas Cores", categoria: "aneis", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop", preco: "Exclusivo" },
  { nome: "Cordão Feminino Coração", categoria: "cordao", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop", preco: "Sob Consulta" },
  { nome: "Brinco Pedra Lunar", categoria: "brincos", img: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=400&fit=crop", preco: "Super Oferta" },
  { nome: "Pulseira de Couro", categoria: "pulseiras", img: "https://images.unsplash.com/photo-1589674781759-21f379bbdcde?w=400&h=400&fit=crop", preco: "Sob Consulta" },
  { nome: "Colar Masculino Prata", categoria: "colares", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop", preco: "Consulte" },
  { nome: "Relógio Pulseira Feminina", categoria: "relogios", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&h=400&fit=crop", preco: "Parcele já" },
  { nome: "Anel Cravejado Rubi", categoria: "aneis", img: "https://images.unsplash.com/photo-1583402217325-eeaa6a1a50e7?w=400&h=400&fit=crop", preco: "Sob Consulta" }
];

function renderizarGaleria(filtro = "todos") {
  const grid = document.getElementById("galeriaGrid");
  if (!grid) return;
  const filtrados = filtro === "todos" ? produtosGaleria : produtosGaleria.filter(p => p.categoria === filtro);
  grid.innerHTML = filtrados.map(prod => `
    <div class="galeria-item" data-categoria="${prod.categoria}">
      <img class="galeria-img" src="${prod.img}" alt="${prod.nome}" loading="lazy">
      <div class="galeria-info">
        <div class="galeria-cat">${prod.categoria.toUpperCase()}</div>
        <div class="galeria-titulo">${prod.nome}</div>
        <div class="galeria-preco">${prod.preco}</div>
        <a href="https://wa.me/5538992117178?text=Olá!%20Tenho%20interesse%20na%20peça%20*${encodeURIComponent(prod.nome)}*" target="_blank" class="galeria-link">Solicitar <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

function initFiltrosGaleria() {
  const botoes = document.querySelectorAll('.filtro-btn');
  if (!botoes.length) return;
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      botoes.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderizarGaleria(btn.getAttribute('data-filter'));
      observerReveal(); // Reaplica reveal nos novos itens
    });
  });
}

// ========== SCROLL REVEAL ==========
const observerReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
};

// ========== PARTÍCULAS HERO ==========
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
}

// ========== MENU MOBILE ==========
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10,10,10,0.98)';
      navLinks.style.padding = '24px';
      navLinks.style.gap = '20px';
      navLinks.style.alignItems = 'center';
    }
  });
}

// ========== SCROLL NAVBAR EFFECT ==========
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.style.padding = '12px 60px';
    } else {
      nav.style.padding = '18px 60px';
    }
  });
}

// ========== SMOOTH SCROLL ÂNCORAS ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Fecha menu mobile se estiver aberto
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.style.display === 'flex') {
          navLinks.style.display = 'none';
        }
      }
    });
  });
}

// ========== FORMULÁRIO DE CONTATO ==========
function initFormulario() {
  const btnForm = document.getElementById('btnFormContato');
  if (!btnForm) return;
  btnForm.addEventListener('click', () => {
    const nome = document.getElementById('formNome')?.value.trim() || '';
    const tel = document.getElementById('formTel')?.value.trim() || '';
    const interesse = document.getElementById('formInteresse')?.value || '';
    const msg = document.getElementById('formMsg')?.value.trim() || '';
    if (!nome) {
      alert('Por favor, informe seu nome.');
      return;
    }
    const texto = `Olá Bruna! Me chamo *${nome}*.%0A📱 Telefone: ${tel}%0A💎 Interesse: ${interesse}%0A💬 Mensagem: ${msg || 'Gostaria de mais informações.'}`;
    window.open(`https://wa.me/5538992117178?text=${texto}`, '_blank');
  });
}

// ========== ANIMAÇÃO DO TICKER INFINITO (DUPLICAR CONTEÚDO) ==========
function initTicker() {
  const ticker = document.getElementById('ticker');
  if (!ticker) return;
  const clone = ticker.cloneNode(true);
  ticker.parentElement.appendChild(clone);
}

// ========== INICIALIZAÇÃO GERAL ==========
document.addEventListener('DOMContentLoaded', () => {
  renderizarGaleria('todos');
  initFiltrosGaleria();
  initParticles();
  initMobileMenu();
  initNavbarScroll();
  initSmoothScroll();
  initFormulario();
  initTicker();
  observerReveal(); // Ativa efeito reveal em elementos estáticos
});

// Expor funções globalmente se necessário (para chamadas inline, por exemplo)
window.enviarFormContato = () => {
  const nome = document.getElementById('formNome')?.value.trim() || '';
  const tel = document.getElementById('formTel')?.value.trim() || '';
  const interesse = document.getElementById('formInteresse')?.value || '';
  const msg = document.getElementById('formMsg')?.value.trim() || '';
  if (!nome) { alert('Por favor, informe seu nome.'); return; }
  const texto = `Olá Bruna! Me chamo *${nome}*.%0A📱 Telefone: ${tel}%0A💎 Interesse: ${interesse}%0A💬 Mensagem: ${msg || 'Gostaria de mais informações.'}`;
  window.open(`https://wa.me/5538992117178?text=${texto}`, '_blank');
};