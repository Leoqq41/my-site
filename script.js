// 平滑滚动
function smoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

// 导航栏滚动效果
function navbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// 元素进入视口动画
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .contact-item, .about-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 表单验证
function formValidation() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#ff0000';
                isValid = false;
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });
        
        if (isValid) {
            alert('留言发送成功！');
            form.reset();
        } else {
            alert('请填写所有必填字段！');
        }
    });
}

// 技能卡片悬停效果
function skillCardHover() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 项目卡片悬停效果
function projectCardHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 初始化所有功能
function init() {
    smoothScroll();
    navbarScroll();
    animateOnScroll();
    formValidation();
    skillCardHover();
    projectCardHover();
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);