document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('dashboard-iframe');
    const placeholder = document.getElementById('loading-placeholder');

    function loadIframe() {
        // Set the src attribute to your Cognos BI dashboard URL
        iframe.src = 'https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FNew%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018fa0575689_00000002';
        
        // Show the iframe and hide the placeholder once the iframe is loaded
        iframe.onload = function() {
            placeholder.style.display = 'none';
            iframe.style.display = 'block';
        };
    }

    // Use IntersectionObserver for lazy loading
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadIframe();
                observer.unobserve(entry.target);
            }
        });
    });

    // Start observing the iframe container
    observer.observe(document.querySelector('.dashboard-container'));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
