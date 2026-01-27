// FactoryPage.ts
interface FactorySection {
    id: string;
    title: string;
    icon: string;
    description: string;
    images: string[];
    captions: string[];
}

class FactoryPage {
    private sections: FactorySection[] = [
        {
            id: 'cutting',
            title: 'Cutting Division',
            icon: 'cut',
            description: 'Precision cutting with automated machines',
            images: [
                'https://res.cloudinary.com/demo/image/upload/v1595426871/samples/automated-cutting.jpg',
                'https://res.cloudinary.com/demo/image/upload/v1595486332/samples/cutting-room.jpg'
            ],
            captions: [
                'Automated Fabric Cutting Machines',
                'Precision Cutting Workstation'
            ]
        },
        {
            id: 'knitting',
            title: 'Knitting Division',
            icon: 'th',
            description: 'Modern knitting machines for quality fabrics',
            images: [
                'https://res.cloudinary.com/demo/image/upload/v1595426902/samples/circular-knitting.jpg',
                'https://res.cloudinary.com/demo/image/upload/v1595486365/samples/knitting-machines.jpg'
            ],
            captions: [
                'Modern Circular Knitting Machines',
                'High-Speed Knitting Equipment'
            ]
        },
        {
            id: 'washing',
            title: 'Washing & Finishing',
            icon: 'tint',
            description: 'Industrial washing and finishing systems',
            images: [
                'https://res.cloudinary.com/demo/image/upload/v1595426930/samples/industrial-washing.jpg',
                'https://res.cloudinary.com/demo/image/upload/v1595486398/samples/drying-machine.jpg'
            ],
            captions: [
                'Industrial Washing Machines',
                'Automated Drying Systems'
            ]
        },
        {
            id: 'iron',
            title: 'Iron & Finishing',
            icon: 'tshirt',
            description: 'Professional finishing and pressing',
            images: [
                'https://res.cloudinary.com/demo/image/upload/v1595426960/samples/steam-ironing.jpg',
                'https://res.cloudinary.com/demo/image/upload/v1595486425/samples/pressing-machine.jpg'
            ],
            captions: [
                'Steam Ironing Stations',
                'Garment Pressing Machines'
            ]
        }
    ];

    private movingImages: string[] = [
        'https://res.cloudinary.com/demo/image/upload/v1595426990/samples/textile-1.jpg',
        'https://res.cloudinary.com/demo/image/upload/v1595427005/samples/textile-2.jpg',
        'https://res.cloudinary.com/demo/image/upload/v1595427020/samples/textile-3.jpg',
        'https://res.cloudinary.com/demo/image/upload/v1595427035/samples/textile-4.jpg',
        'https://res.cloudinary.com/demo/image/upload/v1595427050/samples/textile-5.jpg'
    ];

    constructor() {
        this.renderPage();
        this.attachEventListeners();
    }

    private renderPage(): void {
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Factory Facilities | Textile House</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }

                    body {
                        background-color: #f5f7fa;
                        color: #333;
                    }

                    /* Header */
                    .header {
                        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                        color: white;
                        padding: 20px 0;
                        position: sticky;
                        top: 0;
                        z-index: 100;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    }

                    .header-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .logo {
                        font-size: 24px;
                        font-weight: 700;
                    }

                    .logo span {
                        color: #4CAF50;
                    }

                    .nav a {
                        color: white;
                        text-decoration: none;
                        margin-left: 25px;
                        font-weight: 500;
                        transition: color 0.3s;
                    }

                    .nav a:hover {
                        color: #4CAF50;
                    }

                    /* Hero */
                    .hero {
                        background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://res.cloudinary.com/demo/image/upload/v1595486288/samples/factory-interior.jpg');
                        background-size: cover;
                        background-position: center;
                        color: white;
                        text-align: center;
                        padding: 80px 20px;
                        margin-bottom: 50px;
                    }

                    .hero h1 {
                        font-size: 2.8rem;
                        margin-bottom: 15px;
                    }

                    .hero p {
                        font-size: 1.2rem;
                        max-width: 700px;
                        margin: 0 auto 30px;
                    }

                    /* Main Container */
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 20px;
                    }

                    /* Section Styling */
                    .section {
                        background: white;
                        border-radius: 10px;
                        padding: 30px;
                        margin-bottom: 40px;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    }

                    .section-title {
                        display: flex;
                        align-items: center;
                        margin-bottom: 25px;
                        padding-bottom: 15px;
                        border-bottom: 2px solid #1e3c72;
                    }

                    .section-title i {
                        background: #1e3c72;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 15px;
                    }

                    .section-title h2 {
                        font-size: 1.8rem;
                        color: #1e3c72;
                    }

                    /* Image Gallery */
                    .image-gallery {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 25px;
                    }

                    .image-card {
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        transition: all 0.3s ease;
                    }

                    .image-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                    }

                    .image-card img {
                        width: 100%;
                        height: 250px;
                        object-fit: cover;
                        display: block;
                    }

                    .image-card p {
                        padding: 15px;
                        background: #f8f9fa;
                        font-weight: 500;
                        color: #1e3c72;
                    }

                    /* Auto Moving Gallery */
                    .moving-gallery {
                        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                        padding: 40px 0;
                        margin: 50px 0;
                        overflow: hidden;
                    }

                    .moving-title {
                        text-align: center;
                        color: white;
                        margin-bottom: 30px;
                        font-size: 1.8rem;
                    }

                    .moving-container {
                        display: flex;
                        width: 250%;
                        animation: slide 25s linear infinite;
                    }

                    .moving-container:hover {
                        animation-play-state: paused;
                    }

                    .moving-image {
                        flex: 0 0 300px;
                        margin: 0 15px;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 6px 12px rgba(0,0,0,0.2);
                    }

                    .moving-image img {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                    }

                    @keyframes slide {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    /* Footer */
                    .footer {
                        background: #1e3c72;
                        color: white;
                        padding: 40px 0 20px;
                        margin-top: 50px;
                    }

                    .footer-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 20px;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 30px;
                    }

                    .footer-column h3 {
                        color: #4CAF50;
                        margin-bottom: 20px;
                        font-size: 1.3rem;
                    }

                    .footer-column p {
                        margin-bottom: 10px;
                        font-size: 0.95rem;
                    }

                    .social-icons {
                        display: flex;
                        gap: 15px;
                        margin-top: 20px;
                    }

                    .social-icons a {
                        color: white;
                        background: rgba(255,255,255,0.1);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: background 0.3s;
                    }

                    .social-icons a:hover {
                        background: #4CAF50;
                    }

                    .copyright {
                        text-align: center;
                        margin-top: 30px;
                        padding-top: 20px;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        font-size: 0.9rem;
                        color: #aaa;
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                        .header-container {
                            flex-direction: column;
                            text-align: center;
                        }
                        
                        .nav {
                            margin-top: 15px;
                        }
                        
                        .nav a {
                            margin: 0 10px;
                        }
                        
                        .hero h1 {
                            font-size: 2.2rem;
                        }
                        
                        .image-gallery {
                            grid-template-columns: 1fr;
                        }
                        
                        .moving-container {
                            width: 400%;
                        }
                    }
                </style>
            </head>
            <body>
                <!-- Header -->
                <div class="header">
                    <div class="header-container">
                        <div class="logo">TEXTILE<span>HOUSE</span></div>
                        <div class="nav">
                            <a href="#">Home</a>
                            <a href="#" style="color:#4CAF50;">Factory</a>
                            <a href="#">Products</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>

                <!-- Hero -->
                <div class="hero">
                    <h1>Our Manufacturing Facilities</h1>
                    <p>Advanced textile production with modern technology and quality assurance</p>
                </div>

                <!-- Main Content -->
                <div class="container">
                    ${this.renderSections()}
                </div>

                <!-- Auto Moving Gallery -->
                <div class="moving-gallery">
                    <h2 class="moving-title">Production Process</h2>
                    <div class="moving-container" id="movingContainer">
                        ${this.renderMovingGallery()}
                    </div>
                </div>

                <!-- Footer -->
                <div class="footer">
                    <div class="footer-container">
                        <div class="footer-column">
                            <h3>Textile House</h3>
                            <p>Quality textile manufacturing with global standards</p>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        
                        <div class="footer-column">
                            <h3>Contact</h3>
                            <p><i class="fas fa-map-marker-alt"></i> Industrial Zone, Textile City</p>
                            <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                            <p><i class="fas fa-envelope"></i> info@textilehouse.com</p>
                        </div>
                        
                        <div class="footer-column">
                            <h3>Divisions</h3>
                            <p>Cutting Division</p>
                            <p>Knitting Division</p>
                            <p>Washing & Finishing</p>
                            <p>Quality Control</p>
                        </div>
                    </div>
                    
                    <div class="copyright">
                        &copy; 2023 Textile House. All rights reserved.
                    </div>
                </div>

                <script>
                    // Simple animation for image cards
                    const imageCards = document.querySelectorAll('.image-card');
                    
                    imageCards.forEach(card => {
                        card.addEventListener('mouseenter', () => {
                            card.style.transform = 'translateY(-8px)';
                            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                        });
                        
                        card.addEventListener('mouseleave', () => {
                            card.style.transform = 'translateY(0)';
                            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                        });
                    });
                    
                    // Simple smooth scroll
                    document.querySelectorAll('.nav a').forEach(link => {
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        });
                    });
                </script>
            </body>
            </html>
        `;

        document.write(html);
    }

    private renderSections(): string {
        return this.sections.map(section => `
            <div class="section" id="${section.id}">
                <div class="section-title">
                    <i class="fas fa-${section.icon}"></i>
                    <h2>${section.title}</h2>
                </div>
                <div class="image-gallery">
                    ${section.images.map((image, index) => `
                        <div class="image-card">
                            <img src="${image}" alt="${section.title} ${index + 1}">
                            <p>${section.captions[index]}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    private renderMovingGallery(): string {
        // Duplicate images for seamless animation
        const allImages = [...this.movingImages, ...this.movingImages];
        return allImages.map((image, index) => `
            <div class="moving-image">
                <img src="${image}" alt="Production ${index + 1}">
            </div>
        `).join('');
    }

    private attachEventListeners(): void {
        // Event listeners are already in the rendered HTML script tag
        // This method is kept for TypeScript structure
    }

    // Public methods for external use
    public getSections(): FactorySection[] {
        return this.sections;
    }

    public updateSectionImage(sectionId: string, imageIndex: number, newUrl: string): void {
        const section = this.sections.find(s => s.id === sectionId);
        if (section && imageIndex < section.images.length) {
            section.images[imageIndex] = newUrl;
        }
    }

    public updateMovingImages(newImages: string[]): void {
        this.movingImages = newImages;
    }
}

// Initialize the factory page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const factoryPage = new FactoryPage();
    
    // Example: How to use the public methods
    console.log('Factory sections:', factoryPage.getSections());
});

// Export for module usage
export { FactoryPage, type FactorySection };
