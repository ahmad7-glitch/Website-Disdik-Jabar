// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Toggle menu visibility with animation
            if (mobileMenu.classList.contains('hidden')) {
                // Show menu
                mobileMenu.classList.remove('hidden');
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        mobileMenu.style.transform = 'translateY(0)';
                    });
                });
            } else {
                // Hide menu
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.addEventListener('transitionend', function handler() {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.removeEventListener('transitionend', handler);
                });
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});

// Chat Bot Widget
document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.querySelector('.chat-widget');
    const chatBubble = document.querySelector('.chat-bubble');
    
    if (chatWidget && chatBubble) {
        let bubbleTimeout;

        // Show chat bubble on hover
        chatWidget.addEventListener('mouseenter', () => {
            clearTimeout(bubbleTimeout);
            chatBubble.classList.remove('hidden');
        });

        // Hide chat bubble when mouse leaves
        chatWidget.addEventListener('mouseleave', () => {
            bubbleTimeout = setTimeout(() => {
                chatBubble.classList.add('hidden');
            }, 300);
        });

        // Chat widget click handler
        chatWidget.addEventListener('click', () => {
            // Placeholder for chat functionality
            alert('Chat feature coming soon!');
        });
    }
});

// Add smooth scroll behavior to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', observeElements);
