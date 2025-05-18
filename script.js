// 戒视 APP - 主脚本文件

document.addEventListener('DOMContentLoaded', function() {
  // 导航项点击效果
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 波纹效果
  const rippleButtons = document.querySelectorAll('.ripple');
  rippleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple-effect');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // 社交圈模块的粒子效果
  function createParticles() {
    const socialIcon = document.querySelector('.social-nav-icon.active');
    if (socialIcon) {
      const particleContainer = socialIcon.querySelector('.particle-flow');
      
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 30;
        const posY = Math.random() * 30;
        const duration = Math.random() * 2 + 1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.bottom = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, duration * 1000);
      }
    }
  }

  // 每100ms创建新粒子
  setInterval(createParticles, 100);

  // 打卡动画效果
  const checkInBtn = document.querySelector('.check-in-btn');
  if (checkInBtn) {
    checkInBtn.addEventListener('click', function() {
      const checkInCard = document.querySelector('.check-in-card');
      checkInCard.classList.add('checked');
      
      // 触发粒子爆炸效果
      const particleContainer = document.createElement('div');
      particleContainer.classList.add('particle-explosion');
      checkInCard.appendChild(particleContainer);
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('explosion-particle');
        
        const size = Math.random() * 6 + 2;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const duration = Math.random() * 1 + 0.5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
        particle.style.animationDuration = `${duration}s`;
        
        particleContainer.appendChild(particle);
      }
      
      setTimeout(() => {
        particleContainer.remove();
      }, 2000);
    });
  }

  // 全息徽章效果
  const badges = document.querySelectorAll('.holographic-badge');
  badges.forEach(badge => {
    badge.addEventListener('mousemove', function(e) {
      const rect = badge.getBoundingClientRect();
      const x = e.clientX - rect.left; // 鼠标在徽章上的X位置
      const y = e.clientY - rect.top; // 鼠标在徽章上的Y位置
      
      // 计算旋转角度
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * 15; // 最大旋转15度
      const rotateY = (centerX - x) / centerX * 15;
      
      // 应用3D旋转效果
      badge.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      // 光效位置随鼠标移动
      const light = badge.querySelector('.badge-light');
      if (light) {
        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
      }
    });
    
    badge.addEventListener('mouseleave', function() {
      badge.style.transform = 'rotateX(0) rotateY(0)';
    });
  });

  // 模拟短视频时间统计数据
  function updateStats() {
    const statsElements = document.querySelectorAll('.stat-value');
    statsElements.forEach(element => {
      let value = parseInt(element.getAttribute('data-target'));
      let current = parseInt(element.textContent);
      
      if (current < value) {
        element.textContent = current + 1;
        setTimeout(updateStats, 100);
      }
    });
  }

  // 初始化统计数字滚动动画
  setTimeout(updateStats, 1000);
});

// 社交圈动态模块的初始化
function initSocialFeed() {
  // 模拟点赞操作
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 切换激活状态
      this.classList.toggle('active');
      
      // 获取计数器元素
      const counter = this.querySelector('.like-count');
      let count = parseInt(counter.textContent);
      
      // 增加或减少点赞数
      if (this.classList.contains('active')) {
        counter.textContent = count + 1;
        // 触发点赞粒子动画
        createLikeParticles(this);
      } else {
        counter.textContent = count - 1;
      }
    });
  });
}

// 点赞粒子效果
function createLikeParticles(button) {
  const particleContainer = document.createElement('div');
  particleContainer.classList.add('like-particles');
  button.appendChild(particleContainer);
  
  // 创建多个心形粒子
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.classList.add('heart-particle');
    
    const size = Math.random() * 10 + 5;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40 + 20;
    const duration = Math.random() * 1 + 0.5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    particle.style.animationDuration = `${duration}s`;
    
    particleContainer.appendChild(particle);
  }
  
  setTimeout(() => {
    particleContainer.remove();
  }, 1500);
}

// 初始化所有模块
window.addEventListener('load', function() {
  initSocialFeed();
}); 