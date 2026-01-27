<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factory Facilities | Textile Buying House</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            color: #2c3e50;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Styles */
        header {
            background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
            color: white;
            padding: 1.5rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
        }

        .logo i {
            margin-right: 10px;
            color: #26d0ce;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #26d0ce;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://res.cloudinary.com/demo/image/upload/v1595426852/samples/industrial-factory.jpg');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 6rem 1rem;
            margin-bottom: 4rem;
        }

        .hero h1 {
            font-size: 3.5rem;
            color: white;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 2rem;
        }

        /* Section Styles */
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title h2 {
            font-size: 2.5rem;
            display: inline-block;
            padding-bottom: 10px;
        }

        .section-title h2:after {
            content: '';
            position: absolute;
            width: 100px;
            height: 4px;
            background: linear-gradient(to right, #1a2980, #26d0ce);
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }

        /* Image Gallery Sections */
        .section-gallery {
            margin-bottom: 5rem;
            padding: 2rem;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
        }

        .section-gallery:hover {
            transform: translateY(-5px);
        }

        .gallery-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .image-card {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .image-card img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
        }

        .image-card:hover img {
            transform: scale(1.05);
        }

        .image-caption {
            padding: 1.5rem;
            background-color: white;
        }

        .image-caption h3 {
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }

        /* Auto-moving Gallery */
        .auto-gallery {
            background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
            color: white;
            padding: 4rem 0;
            margin: 5rem 0;
            overflow: hidden;
        }

        .auto-gallery h2 {
            color: white;
            text-align: center;
            margin-bottom: 2rem;
        }

        .auto-gallery-container {
            display: flex;
            width: 200%;
            animation: slide 40s linear infinite;
        }

        .auto-gallery-container:hover {
            animation-play-state: paused;
        }

        .auto-image {
            flex: 0 0 300px;
            margin: 0 15px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .auto-image img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }

        /* Footer */
        footer {
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 4rem 0 2rem;
            margin-top: 4rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .footer-column h3 {
            color: #26d0ce;
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
        }

        .footer-column p {
            margin-bottom: 1rem;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: #34495e;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            color: white;
            transition: background-color 0.3s;
        }

        .social-links a:hover {
            background-color: #26d0ce;
        }

        .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #34495e;
            font-size: 0.9rem;
            color: #bdc3c7;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
            .gallery-container {
                grid-template-columns: 1fr;
            }
            
            .hero h1 {
                font-size: 2.8rem;
            }
        }

        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
            }
            
            .nav-links {
                margin-top: 1rem;
            }
            
            .nav-links li {
                margin: 0 0.5rem;
            }
            
            .hero {
                padding: 4rem 1rem;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .section-title h2 {
                font-size: 2rem;
            }
            
            .section-gallery {
                padding: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .gallery-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <i class="fas fa-industry"></i>
                TextilePro Buying House
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Factory</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>State-of-the-Art Manufacturing Facilities</h1>
            <p>Discover our world-class textile production units equipped with cutting-edge technology and automated systems to deliver premium quality products at competitive prices.</p>
        </div>
    </section>

    <!-- Cutting Division Section -->
    <div class="container">
        <section class="section-gallery">
            <div class="section-title">
                <h2>Cutting Division</h2>
            </div>
            <p class="section-description">Our cutting division features automated cutting machines that ensure precision and minimal fabric wastage. With computerized pattern making and laser cutting technology, we achieve unparalleled accuracy.</p>
            
            <div class="gallery-container">
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426871/samples/automated-cutting.jpg" alt="Automated Fabric Cutting Machine">
                    <div class="image-caption">
                        <h3>Automated Fabric Cutting</h3>
                        <p>Computer-controlled cutting machines for precision and efficiency.</p>
                    </div>
                </div>
                
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426885/samples/laser-cutting.jpg" alt="Laser Cutting Technology">
                    <div class="image-caption">
                        <h3>Laser Cutting Technology</h3>
                        <p>Advanced laser systems for intricate designs and clean cuts.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Knitting Division Section -->
        <section class="section-gallery">
            <div class="section-title">
                <h2>Knitting Division</h2>
            </div>
            <p class="section-description">Our knitting division houses the latest circular and flat knitting machines from leading global manufacturers. We produce a wide range of knit fabrics with consistent quality.</p>
            
            <div class="gallery-container">
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426902/samples/circular-knitting.jpg" alt="Circular Knitting Machines">
                    <div class="image-caption">
                        <h3>Circular Knitting Machines</h3>
                        <p>High-speed machines for seamless fabric production.</p>
                    </div>
                </div>
                
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426915/samples/flat-knitting.jpg" alt="Flat Knitting Machines">
                    <div class="image-caption">
                        <h3>Flat Knitting Machines</h3>
                        <p>Versatile machines for complex patterns and designs.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Washing Machines Section -->
        <section class="section-gallery">
            <div class="section-title">
                <h2>Washing & Finishing</h2>
            </div>
            <p class="section-description">Our washing and finishing department includes industrial washing machines, dryers, and special finishing equipment to ensure fabric softness, color fastness, and desired textures.</p>
            
            <div class="gallery-container">
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426930/samples/industrial-washing.jpg" alt="Industrial Washing Machines">
                    <div class="image-caption">
                        <h3>Industrial Washing Machines</h3>
                        <p>Large capacity machines for fabric washing and treatment.</p>
                    </div>
                </div>
                
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426945/samples/fabric-drying.jpg" alt="Fabric Drying Systems">
                    <div class="image-caption">
                        <h3>Automated Drying Systems</h3>
                        <p>Energy-efficient drying with temperature control.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Iron & Finishing Section -->
        <section class="section-gallery">
            <div class="section-title">
                <h2>Iron & Finishing Division</h2>
            </div>
            <p class="section-description">Our finishing division employs automated ironing machines, steam tunnels, and pressing equipment to give garments their final perfect shape and appearance before packaging.</p>
            
            <div class="gallery-container">
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426960/samples/steam-ironing.jpg" alt="Steam Ironing Machines">
                    <div class="image-caption">
                        <h3>Steam Ironing Machines</h3>
                        <p>Automated steam systems for wrinkle-free finishing.</p>
                    </div>
                </div>
                
                <div class="image-card">
                    <!-- Cloudinary Image Placeholder -->
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426975/samples/pressing-machines.jpg" alt="Garment Pressing Machines">
                    <div class="image-caption">
                        <h3>Garment Pressing Machines</h3>
                        <p>Precision pressing for perfect garment presentation.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Auto-moving Gallery -->
    <section class="auto-gallery">
        <div class="container">
            <h2>Our Manufacturing Process in Action</h2>
            <div class="auto-gallery-container">
                <!-- Cloudinary Image Placeholders -->
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426990/samples/textile-1.jpg" alt="Textile Production">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427005/samples/textile-2.jpg" alt="Quality Control">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427020/samples/textile-3.jpg" alt="Fabric Inspection">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427035/samples/textile-4.jpg" alt="Automated Packaging">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427050/samples/textile-5.jpg" alt="Warehouse Storage">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427065/samples/textile-6.jpg" alt="Shipping Preparation">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595426990/samples/textile-1.jpg" alt="Textile Production">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427005/samples/textile-2.jpg" alt="Quality Control">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427020/samples/textile-3.jpg" alt="Fabric Inspection">
                </div>
                <div class="auto-image">
                    <img src="https://res.cloudinary.com/demo/image/upload/v1595427035/samples/textile-4.jpg" alt="Automated Packaging">
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>TextilePro Buying House</h3>
                    <p>Leading textile manufacturing and sourcing company with state-of-the-art facilities and global standards.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Industry Park, Textile City</p>
                    <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                    <p><i class="fas fa-envelope"></i> info@textileprobuying.com</p>
                </div>
                
                <div class="footer-column">
                    <h3>Factory Divisions</h3>
                    <p>Cutting & Pattern Making</p>
                    <p>Knitting & Weaving</p>
                    <p>Washing & Dyeing</p>
                    <p>Finishing & Quality Control</p>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 TextilePro Buying House. All Rights Reserved. | Designed with Modern Manufacturing Excellence</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add hover effect to image cards
        document.querySelectorAll('.image-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.03)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Animation for section galleries on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Apply animation to all sections
        document.querySelectorAll('.section-gallery').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(section);
        });
    </script>
</body>
</html>
