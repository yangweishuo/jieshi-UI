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

  // 选项卡切换功能
  const tabItems = document.querySelectorAll('.tab-item');
  if (tabItems.length > 0) {
    tabItems.forEach(tab => {
      tab.addEventListener('click', function() {
        // 移除所有选项卡的激活状态
        tabItems.forEach(item => item.classList.remove('active'));
        // 激活当前选项卡
        this.classList.add('active');
      });
    });
  }
  
  // 状态筛选器切换
  const statusFilters = document.querySelectorAll('.status-filter');
  if (statusFilters.length > 0) {
    statusFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // 移除所有筛选器的激活状态
        statusFilters.forEach(item => item.classList.remove('active'));
        // 激活当前筛选器
        this.classList.add('active');
      });
    });
  }
  
  // 返回按钮点击事件
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      // 模拟返回上一页功能
      history.back();
    });
  }
  
  // 发布按钮点击事件
  const publishBtn = document.querySelector('.publish-btn');
  if (publishBtn) {
    publishBtn.addEventListener('click', function() {
      alert('发布新内容');
    });
  }
  
  // 创建按钮点击事件
  const createBtn = document.querySelector('.create-btn');
  if (createBtn) {
    createBtn.addEventListener('click', function() {
      alert('创建新内容');
    });
  }
  
  // 更多按钮点击事件
  const moreBtn = document.querySelector('.more-btn');
  if (moreBtn) {
    moreBtn.addEventListener('click', function() {
      alert('查看更多公告');
    });
  }

  // 夜间模式切换函数
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    // 根据保存的状态设置开关
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      darkModeToggle.checked = true;
      toggleDarkMode(true);
    } else {
      darkModeToggle.checked = false;
      toggleDarkMode(false);
    }
    
    // 监听夜间模式开关变化
    darkModeToggle.addEventListener('change', function() {
      toggleDarkMode(this.checked);
    });
  } else {
    // 如果页面上没有开关但保存了夜间模式状态，也应用夜间模式
    if (savedDarkMode === 'enabled') {
      toggleDarkMode(true);
    }
  }
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

// 夜间模式切换函数
function toggleDarkMode(isDark) {
  const root = document.documentElement;
  
  if (isDark) {
    // 启用夜间模式
    root.style.setProperty('--primary-color', '#3498db');
    root.style.setProperty('--secondary-color', '#00B0FF');
    root.style.setProperty('--accent-color', '#7C4DFF');
    root.style.setProperty('--dark-blue', '#04142c');
    root.style.setProperty('--light-text', '#FFFFFF');
    root.style.setProperty('--dark-text', '#FFFFFF');
    
    // 修改背景色和卡片颜色
    document.body.style.backgroundColor = '#121212';
    document.querySelectorAll('.card, .theme-section, .notification-section, .security-section').forEach(card => {
      card.style.backgroundColor = '#1E1E1E';
      card.style.borderColor = '#333';
    });
    
    // 修改字体颜色
    document.querySelectorAll('.section-title, .menu-title, .status-title, .score-label, .device-name').forEach(text => {
      text.style.color = '#E0E0E0';
    });
    
    document.querySelectorAll('.menu-desc, .status-desc, .score-desc, .device-details, .notification-desc, .mode-desc').forEach(text => {
      text.style.color = '#A0A0A0';
    });
    
    // 存储夜间模式状态
    localStorage.setItem('darkMode', 'enabled');
  } else {
    // 关闭夜间模式，恢复默认样式
    root.style.setProperty('--primary-color', '#3498db');
    root.style.setProperty('--secondary-color', '#00B0FF');
    root.style.setProperty('--accent-color', '#7C4DFF');
    root.style.setProperty('--dark-blue', '#04142c');
    root.style.setProperty('--light-text', '#FFFFFF');
    root.style.setProperty('--dark-text', '#333333');
    
    // 恢复背景色和卡片颜色
    document.body.style.backgroundColor = '#f5f5f5';
    document.querySelectorAll('.card, .theme-section, .notification-section, .security-section').forEach(card => {
      card.style.backgroundColor = '#FFFFFF';
      card.style.borderColor = 'rgba(0, 0, 0, 0.03)';
    });
    
    // 恢复字体颜色
    document.querySelectorAll('.section-title, .menu-title, .status-title, .score-label, .device-name').forEach(text => {
      text.style.color = '#333333';
    });
    
    document.querySelectorAll('.menu-desc, .status-desc, .score-desc, .device-details, .notification-desc, .mode-desc').forEach(text => {
      text.style.color = '#666666';
    });
    
    // 存储夜间模式状态
    localStorage.setItem('darkMode', 'disabled');
  }
}

// 初始化所有模块
window.addEventListener('load', function() {
  initSocialFeed();
}); 