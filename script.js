// Enhanced JavaScript for eDataWorker Portfolio with Image Loading

document.addEventListener('DOMContentLoaded', function() {
  
  // Add Font Awesome icons
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(fontAwesome);
  
  // Simple image loading function
  function loadImages(imageList, containerId, type = 'logo') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container ${containerId} not found`);
      return;
    }
    
    // Clear loading placeholder
    container.innerHTML = '';
    
    // Check if we have images to load
    if (!imageList || imageList.length === 0) {
      // Show placeholder if no images
      if (type === 'logo') {
        container.innerHTML = `
          <div class="logo-item">
            <div class="logo-placeholder">
              <i class="fas fa-images"></i>
              <div>No logos found</div>
              <small>Add images to /mysite/logo/ folder</small>
            </div>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="testimonial-card">
            <div class="testimonial-placeholder">
              <i class="fas fa-image"></i>
              <div>No testimonials found</div>
              <small>Add screenshots to /mysite/testimonial/ folder</small>
            </div>
          </div>
        `;
      }
      return;
    }
    
    // Load each image
    imageList.forEach((image, index) => {
      if (type === 'logo') {
        const logoItem = document.createElement('div');
        logoItem.className = 'logo-item fade-in';
        logoItem.innerHTML = `
          <img src="${image.url}" 
               class="logo-image" 
               alt="${image.alt || 'Logo ' + (index + 1)}"
               onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\"logo-placeholder\"><i class=\"fas fa-image\"></i><div>Logo ${index + 1}</div><small>Image not found</small></div>';">
        `;
        container.appendChild(logoItem);
      } else {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card fade-in';
        
        // Use the testimonial data if provided, otherwise use defaults
        const text = image.text || "Excellent service and quality work.";
        const author = image.author || "Happy Client";
        const platform = image.platform || "Platform";
        
        testimonialCard.innerHTML = `
          <img src="${image.url}" 
               class="testimonial-image" 
               alt="${image.alt || 'Testimonial ' + (index + 1)}"
               onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\"testimonial-placeholder\"><i class=\"fas fa-image\"></i><div>Testimonial ${index + 1}</div><small>Screenshot not found</small></div><p class=\"testimonial-text\">\"${text}\"</p><strong class=\"testimonial-author\">- ${author}</strong><small style=\"color: var(--gray); display: block; margin-top: 5px;\">${platform}</small>';">
          <p class="testimonial-text">"${text}"</p>
          <strong class="testimonial-author">- ${author}</strong>
          <small style="color: var(--gray); display: block; margin-top: 5px;">${platform}</small>
        `;
        container.appendChild(testimonialCard);
      }
    });
  }
  
  // Define your logo images here
  // Update these with your actual logo image paths
  const logoImages = [
    { 
      url: '/mysite/logo/logo1.png',
      alt: 'TechCorp Logo'
    },
    { 
      url: '/mysite/logo/logo2.png',
      alt: 'HealthPlus Logo'
    },
    { 
      url: '/mysite/logo/logo3.png',
      alt: 'EcoGreen Logo'
    },
    { 
      url: '/mysite/logo/logo4.png',
      alt: 'FoodHub Logo'
    },
    { 
      url: '/mysite/logo/logo5.png',
      alt: 'CreativeMind Logo'
    },
    { 
      url: '/mysite/logo/logo6.png',
      alt: 'SwiftServe Logo'
    },
    { 
      url: '/mysite/logo/logo7.png',
      alt: 'BuildRight Logo'
    },
    { 
      url: '/mysite/logo/logo8.png',
      alt: 'EduLearn Logo'
    }
  ];
  
  // Define your testimonial screenshots here
  // Update these with your actual testimonial image paths
  const testimonialImages = [
    { 
      url: '/mysite/testimonial/testimonial1.jpg',
      alt: 'Testimonial from Upwork',
      text: "Amazing work! Delivered perfectly and on time.",
      author: "Business Owner",
      platform: "Upwork"
    },
    { 
      url: '/mysite/testimonial/testimonial2.jpg',
      alt: 'Testimonial from Freelancer.com',
      text: "Professional, responsive and highly skilled. Highly recommended!",
      author: "Startup Founder",
      platform: "Freelancer.com"
    },
    { 
      url: '/mysite/testimonial/testimonial3.jpg',
      alt: 'Testimonial from Guru.com',
      text: "Great communication and excellent quality work.",
      author: "Freelancer Client",
      platform: "Guru.com"
    },
    { 
      url: '/mysite/testimonial/testimonial4.jpg',
      alt: 'Testimonial from Upwork',
      text: "Exceeded expectations. Will hire again!",
      author: "Satisfied Client",
      platform: "Upwork"
    }
  ];
  
  // Load the images
  loadImages(logoImages, 'logoGallery', 'logo');
  loadImages(testimonialImages, 'testimonialGallery', 'testimonial');
  
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .price-card, .logo-item, .testimonial-card');
    
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
      // Allow actual form submission to FormSubmit.co
      // Just add a visual feedback
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Change button text to indicate loading
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Re-enable after 5 seconds in case form submission fails
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 5000);
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
  
  // Function to easily update image paths
  window.updateImagePaths = function() {
    console.log('=== HOW TO ADD YOUR IMAGES ===');
    console.log('1. Create folders: /mysite/logo/ and /mysite/testimonial/');
    console.log('2. Upload your logo images as: logo1.png, logo2.png, etc.');
    console.log('3. Upload testimonial screenshots as: testimonial1.jpg, testimonial2.jpg, etc.');
    console.log('4. Update the image paths in the JavaScript file (script.js)');
    console.log('5. Reload the page to see your images');
    
    // Show current image configuration
    console.log('\nCurrent logo images:', logoImages);
    console.log('Current testimonial images:', testimonialImages);
  };
  
  // Run this to see instructions
  setTimeout(() => {
    console.log('eDataWorker Portfolio loaded successfully!');
    console.log('Type updateImagePaths() in console for setup instructions.');
  }, 1000);
});
