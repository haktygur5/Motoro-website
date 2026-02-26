/**
 * ==========================================================================
 * MOTORO AUTOMOTIVE GROUP - Homepage Interactive Features
 * Para ser usado no WordPress Customizer > Theme Scripts > Footer Script
 * ==========================================================================
 */

(function() {
  'use strict';

  // ==========================================================================
  // 1. INTERSECTION OBSERVER - Animações ao Scroll
  // ==========================================================================
  
  /**
   * Inicializa o Intersection Observer para animar elementos quando entram na viewport
   */
  function initScrollAnimations() {
    // Verificar suporte ao IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Fallback: mostrar todos os elementos
      document.querySelectorAll('.motoro-hidden').forEach(function(el) {
        el.classList.remove('motoro-hidden');
      });
      return;
    }

    // Configuração do observer
    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    // Criar o observer
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var animationClass = el.dataset.animation || 'motoro-animate-fadeInUp';
          
          // Adicionar classe de animação
          el.classList.remove('motoro-hidden');
          el.classList.add(animationClass);
          
          // Parar de observar após animar
          obs.unobserve(el);
        }
      });
    }, observerOptions);

    // Observar elementos com a classe .motoro-hidden
    document.querySelectorAll('.motoro-hidden').forEach(function(el) {
      observer.observe(el);
    });

    // Observar também elementos específicos
    document.querySelectorAll('[data-animate]').forEach(function(el) {
      el.classList.add('motoro-hidden');
      observer.observe(el);
    });
  }

  // ==========================================================================
  // 2. CONTADOR ANIMADO - Estatísticas
  // ==========================================================================
  
  /**
   * Anima contadores numéricos
   * @param {HTMLElement} element - Elemento que contém o número
   * @param {number} target - Número final
   * @param {number} duration - Duração da animação em ms
   */
  function animateCounter(element, target, duration) {
    if (!element) return;
    
    duration = duration || 2000;
    var start = 0;
    var startTime = null;
    var suffix = element.dataset.suffix || '';
    var prefix = element.dataset.prefix || '';

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutQuart(progress);
      var current = Math.floor(easedProgress * target);
      
      element.textContent = prefix + current.toLocaleString('en-US') + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = prefix + target.toLocaleString('en-US') + suffix;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  /**
   * Inicializa contadores quando entram na viewport
   */
  function initCounters() {
    if (!('IntersectionObserver' in window)) return;

    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.target, 10) || 0;
          var duration = parseInt(el.dataset.duration, 10) || 2000;
          
          animateCounter(el, target, duration);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach(function(el) {
      counterObserver.observe(el);
    });
  }

  // ==========================================================================
  // 3. NAVEGAÇÃO COM EFEITO DE SCROLL
  // ==========================================================================
  
  /**
   * Adiciona classe à navegação quando o usuário rola a página
   */
  function initNavScroll() {
    var nav = document.querySelector('.motoro-nav-enhanced, header, .site-header');
    if (!nav) return;

    var scrollThreshold = 100;
    var lastScrollY = 0;
    var ticking = false;

    function updateNav() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollY > scrollThreshold) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Esconder/mostrar nav ao rolar
      if (scrollY > lastScrollY && scrollY > 300) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
  }

  // ==========================================================================
  // 4. SMOOTH SCROLL PARA LINKS INTERNOS
  // ==========================================================================
  
  /**
   * Implementa scroll suave para links âncora
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#0') return;
        
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          
          var navHeight = document.querySelector('.motoro-nav-enhanced, header, .site-header');
          var offset = navHeight ? navHeight.offsetHeight : 0;
          
          var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==========================================================================
  // 5. PARALLAX SIMPLES PARA HERO
  // ==========================================================================
  
  /**
   * Efeito parallax sutil na seção hero
   */
  function initParallax() {
    var heroSection = document.querySelector('.motoro-hero, .hero-section, .site-hero');
    if (!heroSection) return;

    var heroContent = heroSection.querySelector('.motoro-hero-content, .hero-content');
    var ticking = false;

    function updateParallax() {
      var scrollY = window.pageYOffset;
      var heroHeight = heroSection.offsetHeight;
      
      if (scrollY <= heroHeight) {
        var parallaxValue = scrollY * 0.4;
        var opacityValue = 1 - (scrollY / heroHeight) * 0.7;
        
        if (heroContent) {
          heroContent.style.transform = 'translateY(' + parallaxValue + 'px)';
          heroContent.style.opacity = Math.max(0, opacityValue);
        }
      }
      
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ==========================================================================
  // 6. LAZY LOADING DE IMAGENS
  // ==========================================================================
  
  /**
   * Carregamento preguiçoso de imagens
   */
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Navegador suporta lazy loading nativo
      document.querySelectorAll('img[data-src]').forEach(function(img) {
        img.src = img.dataset.src;
        img.loading = 'lazy';
      });
      return;
    }

    // Fallback com IntersectionObserver
    if (!('IntersectionObserver' in window)) return;

    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('motoro-lazy');
          img.classList.add('motoro-loaded');
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px 0px' });

    document.querySelectorAll('img[data-src]').forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ==========================================================================
  // 7. EFEITO HOVER 3D NOS CARDS
  // ==========================================================================
  
  /**
   * Adiciona efeito 3D sutil ao hover dos cards
   */
  function initCardTilt() {
    var cards = document.querySelectorAll('.motoro-vehicle-card, .motoro-feature-card, [data-tilt]');
    
    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        
        var rotateX = (y - centerY) / 20;
        var rotateY = (centerX - x) / 20;
        
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  // ==========================================================================
  // 8. BOTÃO VOLTAR AO TOPO
  // ==========================================================================
  
  /**
   * Cria e gerencia botão de voltar ao topo
   */
  function initBackToTop() {
    // Criar botão se não existir
    var existingBtn = document.querySelector('.motoro-back-to-top');
    if (existingBtn) return;

    var btn = document.createElement('button');
    btn.className = 'motoro-back-to-top';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    btn.setAttribute('aria-label', 'Back to top');
    
    // Estilos inline para o botão
    btn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:50px;height:50px;border-radius:50%;background:var(--motoro-primary,#1a73e8);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:all 0.3s ease;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);';
    
    document.body.appendChild(btn);

    // Mostrar/esconder baseado no scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 500) {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
      } else {
        btn.style.opacity = '0';
        btn.style.visibility = 'hidden';
      }
    }, { passive: true });

    // Scroll ao topo ao clicar
    btn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Hover effect
    btn.addEventListener('mouseenter', function() {
      btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = 'scale(1)';
    });
  }

  // ==========================================================================
  // 9. TYPEWRITER EFFECT
  // ==========================================================================
  
  /**
   * Efeito de máquina de escrever para títulos
   * @param {HTMLElement} element - Elemento alvo
   * @param {Array} texts - Array de textos para alternar
   * @param {number} speed - Velocidade de digitação
   */
  function typeWriter(element, texts, speed) {
    if (!element || !texts || texts.length === 0) return;
    
    speed = speed || 100;
    var textIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var currentText = '';

    function type() {
      var fullText = texts[textIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      element.innerHTML = currentText + '<span class="motoro-cursor">|</span>';
      
      var typeSpeed = isDeleting ? speed / 2 : speed;
      
      if (!isDeleting && charIndex === fullText.length) {
        typeSpeed = 2000; // Pausa no final
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    }

    type();
  }

  /**
   * Inicializa elementos com efeito typewriter
   */
  function initTypewriter() {
    document.querySelectorAll('[data-typewriter]').forEach(function(el) {
      var texts = el.dataset.typewriter.split('|');
      var speed = parseInt(el.dataset.speed, 10) || 100;
      typeWriter(el, texts, speed);
    });

    // Adicionar estilo do cursor
    if (!document.querySelector('#motoro-cursor-style')) {
      var style = document.createElement('style');
      style.id = 'motoro-cursor-style';
      style.textContent = '.motoro-cursor{animation:blink 1s infinite}@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}';
      document.head.appendChild(style);
    }
  }

  // ==========================================================================
  // 10. MODAL/LIGHTBOX PARA IMAGENS
  // ==========================================================================
  
  /**
   * Modal simples para visualização de imagens
   */
  function initLightbox() {
    // Criar modal se não existir
    if (document.querySelector('#motoro-lightbox')) return;

    var modal = document.createElement('div');
    modal.id = 'motoro-lightbox';
    modal.innerHTML = '<div class="motoro-lightbox-overlay"></div><div class="motoro-lightbox-content"><button class="motoro-lightbox-close">&times;</button><img src="" alt=""></div>';
    modal.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;';
    
    var overlayStyle = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);';
    var contentStyle = 'position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;';
    var closeStyle = 'position:absolute;top:20px;right:30px;font-size:40px;color:#fff;background:none;border:none;cursor:pointer;z-index:1;';
    var imgStyle = 'max-width:90%;max-height:90%;object-fit:contain;animation:motoroScaleIn 0.3s ease;';
    
    modal.querySelector('.motoro-lightbox-overlay').style.cssText = overlayStyle;
    modal.querySelector('.motoro-lightbox-content').style.cssText = contentStyle;
    modal.querySelector('.motoro-lightbox-close').style.cssText = closeStyle;
    modal.querySelector('img').style.cssText = imgStyle;
    
    document.body.appendChild(modal);

    // Adicionar evento de clique às imagens
    document.querySelectorAll('[data-lightbox], .motoro-vehicle-image img').forEach(function(img) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        var src = this.dataset.fullSrc || this.src;
        modal.querySelector('img').src = src;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    // Fechar modal
    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    modal.querySelector('.motoro-lightbox-close').addEventListener('click', closeModal);
    modal.querySelector('.motoro-lightbox-overlay').addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ==========================================================================
  // 11. FILTRO DE INVENTÁRIO
  // ==========================================================================
  
  /**
   * Sistema de filtro para cards de veículos
   */
  function initInventoryFilter() {
    var filterBtns = document.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-category]');
    
    if (filterBtns.length === 0 || cards.length === 0) return;

    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = this.dataset.filter;
        
        // Atualizar botão ativo
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        
        // Filtrar cards
        cards.forEach(function(card) {
          var category = card.dataset.category;
          
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.style.animation = 'motoroFadeInUp 0.5s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // 12. SLIDER/CARROSSEL SIMPLES
  // ==========================================================================
  
  /**
   * Carrossel simples para testimonials ou imagens
   */
  function initSlider() {
    document.querySelectorAll('.motoro-slider').forEach(function(slider) {
      var slides = slider.querySelectorAll('.motoro-slide');
      var dotsContainer = slider.querySelector('.motoro-slider-dots');
      var prevBtn = slider.querySelector('.motoro-slider-prev');
      var nextBtn = slider.querySelector('.motoro-slider-next');
      var currentSlide = 0;
      var autoplayInterval;

      if (slides.length <= 1) return;

      // Criar dots
      if (dotsContainer) {
        slides.forEach(function(_, i) {
          var dot = document.createElement('button');
          dot.className = 'motoro-slider-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          dot.addEventListener('click', function() { goToSlide(i); });
          dotsContainer.appendChild(dot);
        });
      }

      function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Atualizar dots
        if (dotsContainer) {
          var dots = dotsContainer.querySelectorAll('.motoro-slider-dot');
          dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === currentSlide);
          });
        }
      }

      function nextSlide() {
        goToSlide(currentSlide + 1);
      }

      function prevSlide() {
        goToSlide(currentSlide - 1);
      }

      // Event listeners
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);
      if (nextBtn) nextBtn.addEventListener('click', nextSlide);

      // Autoplay
      if (slider.dataset.autoplay !== 'false') {
        var interval = parseInt(slider.dataset.interval, 10) || 5000;
        
        autoplayInterval = setInterval(nextSlide, interval);
        
        slider.addEventListener('mouseenter', function() {
          clearInterval(autoplayInterval);
        });
        
        slider.addEventListener('mouseleave', function() {
          autoplayInterval = setInterval(nextSlide, interval);
        });
      }

      // Touch/Swipe support
      var touchStartX = 0;
      var touchEndX = 0;

      slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      function handleSwipe() {
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      }
    });
  }

  // ==========================================================================
  // 13. VALIDAÇÃO DE FORMULÁRIO
  // ==========================================================================
  
  /**
   * Validação de formulário com feedback visual
   */
  function initFormValidation() {
    document.querySelectorAll('.motoro-contact-form, form[data-validate]').forEach(function(form) {
      form.addEventListener('submit', function(e) {
        var isValid = true;
        var requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(function(field) {
          removeError(field);
          
          if (!field.value.trim()) {
            showError(field, 'This field is required');
            isValid = false;
          } else if (field.type === 'email' && !isValidEmail(field.value)) {
            showError(field, 'Please enter a valid email');
            isValid = false;
          } else if (field.type === 'tel' && !isValidPhone(field.value)) {
            showError(field, 'Please enter a valid phone number');
            isValid = false;
          }
        });
        
        if (!isValid) {
          e.preventDefault();
        }
      });

      // Live validation
      form.querySelectorAll('input, textarea').forEach(function(field) {
        field.addEventListener('blur', function() {
          removeError(field);
          if (field.required && !field.value.trim()) {
            showError(field, 'This field is required');
          }
        });
        
        field.addEventListener('input', function() {
          if (field.classList.contains('has-error')) {
            removeError(field);
          }
        });
      });
    });

    function showError(field, message) {
      field.classList.add('has-error');
      field.style.borderColor = '#ff4444';
      
      var error = document.createElement('span');
      error.className = 'motoro-form-error';
      error.textContent = message;
      error.style.cssText = 'color:#ff4444;font-size:0.85rem;margin-top:0.25rem;display:block;';
      
      field.parentNode.appendChild(error);
    }

    function removeError(field) {
      field.classList.remove('has-error');
      field.style.borderColor = '';
      
      var error = field.parentNode.querySelector('.motoro-form-error');
      if (error) error.remove();
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
      return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
    }
  }

  // ==========================================================================
  // 14. PRELOADER
  // ==========================================================================
  
  /**
   * Preloader para carregamento da página
   */
  function initPreloader() {
    var preloader = document.querySelector('.motoro-preloader');
    
    if (!preloader) {
      // Criar preloader
      preloader = document.createElement('div');
      preloader.className = 'motoro-preloader';
      preloader.innerHTML = '<div class="motoro-preloader-spinner"></div>';
      preloader.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:var(--motoro-dark,#1a1a2e);display:flex;align-items:center;justify-content:center;z-index:99999;transition:opacity 0.5s,visibility 0.5s;';
      
      var spinnerStyle = document.createElement('style');
      spinnerStyle.textContent = '.motoro-preloader-spinner{width:50px;height:50px;border:3px solid rgba(255,255,255,0.1);border-top-color:var(--motoro-primary,#1a73e8);border-radius:50%;animation:motoroRotate 1s linear infinite}';
      document.head.appendChild(spinnerStyle);
      
      document.body.insertBefore(preloader, document.body.firstChild);
    }

    window.addEventListener('load', function() {
      setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        setTimeout(function() {
          preloader.remove();
        }, 500);
      }, 500);
    });
  }

  // ==========================================================================
  // 15. INICIALIZAÇÃO
  // ==========================================================================
  
  /**
   * Inicializa todos os módulos quando o DOM estiver pronto
   */
  function init() {
    initScrollAnimations();
    initCounters();
    initNavScroll();
    initSmoothScroll();
    initParallax();
    initLazyLoading();
    initCardTilt();
    initBackToTop();
    initTypewriter();
    initLightbox();
    initInventoryFilter();
    initSlider();
    initFormValidation();
    
    // Log para debug
    console.log('Motoro Automotive - Interactive features initialized');
  }

  // Executar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Preloader (executar imediatamente)
  // initPreloader(); // Descomente se quiser usar o preloader

  // ==========================================================================
  // 16. FUNÇÕES UTILITÁRIAS GLOBAIS
  // ==========================================================================
  
  // Expor algumas funções úteis globalmente
  window.MotoroAnimations = {
    animateCounter: animateCounter,
    typeWriter: typeWriter,
    initScrollAnimations: initScrollAnimations,
    reinit: init
  };

})();
