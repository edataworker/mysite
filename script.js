// Enhanced JavaScript for eDataWorker Portfolio

document.addEventListener('DOMContentLoaded', function() {
  
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .price-card, .logo-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
  };
  
  // Dynamic logo gallery with proper image handling
  const logoGallery = document.getElementById('logoGallery');
  if (logoGallery) {
    const logos = [
      { 
        name: 'TechCorp Logo', 
        description: 'Technology Company',
        color: '#4361ee' 
      },
      { 
        name: 'HealthPlus Logo', 
        description: 'Healthcare Brand',
        color: '#f72585' 
      },
      { 
        name: 'EcoGreen Logo', 
        description: 'Eco-friendly Products',
        color: '#4cc9f0' 
      },
      { 
        name: 'FoodHub Logo', 
        description: 'Food Delivery Service',
        color: '#4ade80' 
      },
      { 
        name: 'CreativeMind Logo', 
        description: 'Design Agency',
        color: '#7209b7' 
      },
      { 
        name: 'SwiftServe Logo', 
        description: 'Service Provider',
        color: '#3a0ca3' 
      },
      { 
        name: 'BuildRight Logo', 
        description: 'Construction Firm',
        color: '#4895ef' 
      },
      { 
        name: 'EduLearn Logo', 
        description: 'Education Platform',
        color: '#f72585' 
      }
    ];
    
    logos.forEach(logo => {
      const logoItem = document.createElement('div');
      logoItem.className = 'logo-item fade-in';
      
      // Create placeholder with icon
      logoItem.innerHTML = `
        <div class="logo-placeholder">
          <i class="fas fa-palette"></i>
          <div>
            <strong style="color: ${logo.color}">${logo.name}</strong>
            <br>
            <span>${logo.description}</span>
          </div>
        </div>
      `;
      
      logoGallery.appendChild(logoItem);
    });
    
    // Instructions for adding actual logo images
    console.log('To add your actual logos:');
    console.log('1. Replace the placeholder div with <img src="path/to/your-logo.png" class="logo-image" alt="Logo Name">');
    console.log('2. Make sure your logos are in PNG format with transparent background');
    console.log('3. Recommended size: 400x400px minimum, but will auto-scale');
  }
  
  // Dynamic testimonials with screenshot placeholders
  const testimonialsSection = document.querySelector('#testimonials .grid');
  if (testimonialsSection) {
    // Clear existing placeholder content
    testimonialsSection.innerHTML = '';
    
    // Create testimonial cards with screenshot placeholders
    const testimonials = [
      {
        text: "Amazing work! Delivered perfectly and on time.",
        author: "Business Owner",
        platform: "Upwork"
      },
      {
        text: "Professional, responsive and highly skilled. Highly recommended!",
        author: "Startup Founder",
        platform: "Freelancer.com"
      },
      {
        text: "Great communication and excellent quality work.",
        author: "Freelancer Client",
        platform: "Guru.com"
      }
    ];
    
    testimonials.forEach(testimonial => {
      const card = document.createElement('div');
      card.className = 'card fade-in';
      
      card.innerHTML = `
        <div class="testimonial-placeholder">
          <i class="fas fa-image"></i>
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <strong class="testimonial-author">- ${testimonial.author}</strong>
        <small style="color: var(--gray); display: block; margin-top: 5px;">${testimonial.platform}</small>
      `;
      
      testimonialsSection.appendChild(card);
    });
    
    // Instructions for adding screenshot images
    console.log('To add your review screenshots:');
    console.log('1. Take screenshots of your reviews from Upwork, Freelancer, Guru.com');
    console.log('2. Replace the testimonial-placeholder div with:');
    console.log('   <img src="path/to/screenshot.jpg" class="testimonial-image" alt="Review from Platform">');
    console.log('3. Recommended screenshot size: 800x600px for best quality');
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission feedback
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission for demo
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      const originalBg = submitBtn.style.background;
      
      // Change button text to indicate loading
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'var(--success)';
        
        // Reset form after success
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = originalBg;
        }, 3000);
      }, 2000);
    });
  }
  
  // Initialize animations
  animateOnScroll();
  
  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll('#services .card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderTopColor = 'var(--secondary)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.borderTopColor = 'var(--primary)';
    });
  });
  
  // Dynamic year in footer
  const footer = document.querySelector('footer p');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
  }
  
  // Add a simple typing effect to the header tagline
  const tagline = document.querySelector('header p');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
  }
  
  // Add Font Awesome icons for better visuals
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(fontAwesome);
});
