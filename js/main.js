// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız alındı. En kısa sürede size dönüş yapacağız.');
    this.reset();
});

// Carousel otomatik geçiş hızını ayarla
const carousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
    interval: 5000, // 5 saniye
    touch: true // dokunmatik cihaz desteği
});

// Carousel'ı mouse wheel ile kontrol etme
document.querySelector('#heroCarousel').addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        carousel.next();
    } else {
        carousel.prev();
    }
});

// Sayaç animasyonu
function animateCounter(element) {
    const target = parseInt(element.textContent);
    let count = 0;
    const duration = 2000; // 2 saniye
    const increment = target / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 16);
}

// Sayaçları görünür olduğunda başlat
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.counter').forEach(counter => {
                animateCounter(counter);
            });
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.stats-container'));

// Navbar scroll efekti
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth reveal animasyonu için intersection observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Hover efektleri için
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.service-icon').style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.service-icon').style.transform = 'scale(1) rotate(0)';
    });
}); 