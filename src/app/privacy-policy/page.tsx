
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
                Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <p>At MSS Group, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, make purchases, or interact with our services.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3>a) Personal Information You Provide</h3>
            <ul>
                <li>Name, email address, phone number, shipping and billing addresses.</li>
                <li>Payment details, such as credit/debit card information or payment service account (handled securely).</li>
                <li>Account login credentials if you create an account.</li>
                <li>Feedback, reviews, or messages sent through our website.</li>
            </ul>

            <h3>b) Information About Your Use of Our Website</h3>
            <ul>
                <li>IP address, browser type, device type, and operating system.</li>
                <li>Pages viewed, products browsed, time spent on the site, and click patterns.</li>
                <li>Cookies and similar tracking technologies for a smoother shopping experience.</li>
            </ul>

            <h3>c) Other Information</h3>
            <ul>
                <li>Information you voluntarily provide through forms, newsletters, contests, or surveys.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Process and fulfill your orders, including payment, delivery, and customer support.</li>
                <li>Personalize your shopping experience and show relevant products.</li>
                <li>Send order updates, promotions, newsletters, and other marketing communications (with your consent).</li>
                <li>Analyze website traffic and improve our services.</li>
                <li>Protect against fraud, unauthorized transactions, or illegal activities.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your data in the following situations:</p>
            <ul>
                <li>With service providers or partners helping us with delivery, payment processing, IT services, and marketing.</li>
                <li>If required by law or legal procedures.</li>
                <li>To protect our rights, property, or safety, or that of our customers and employees.</li>
                <li>In connection with a merger, acquisition, or sale of our business assets.</li>
            </ul>
            <p>All partners and service providers are required to handle your information securely and in compliance with this Privacy Policy.</p>

            <h2>4. Cookies and Tracking</h2>
            <p>Our website uses cookies and similar technologies to:</p>
            <ul>
                <li>Improve website performance and functionality.</li>
                <li>Remember your preferences and shopping cart items.</li>
                <li>Deliver personalized content and advertisements.</li>
            </ul>
            <p>You can manage cookies through your browser settings, but some features may not work properly if disabled.</p>

            <h2>5. Data Security</h2>
            <p>We implement strong security measures to protect your information, including:</p>
            <ul>
                <li>Encrypted connections (HTTPS) for data transmission.</li>
                <li>Secure servers with restricted access.</li>
                <li>Continuous monitoring and regular security assessments.</li>
            </ul>
            <p>While we strive for maximum protection, no system is completely foolproof.</p>

            <h2>6. Retention of Your Data</h2>
            <p>We retain your personal information only as long as necessary to:</p>
            <ul>
                <li>Complete transactions and provide services.</li>
                <li>Comply with legal obligations.</li>
                <li>Resolve disputes and enforce agreements.</li>
            </ul>
            <p>After this, your information will be securely deleted or anonymized.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access, correct, or update your personal information.</li>
                <li>Request deletion or restriction of your data.</li>
                <li>Opt-out of marketing emails or promotions.</li>
            </ul>
            <p>To exercise these rights, contact us at info@mssgroupbd.com.</p>

            <h2>8. Third-Party Links</h2>
            <p>Our website may link to other websites. MSS Group is not responsible for the privacy practices of external sites. We encourage you to review their privacy policies.</p>

            <h2>9. International Transfers</h2>
            <p>If your information is processed outside Bangladesh, we ensure it receives an adequate level of protection in line with data protection laws.</p>

            <h2>10. Policy Updates</h2>
            <p>We may update this Privacy Policy periodically. Updates will be posted on this page with the new effective date. Please check back occasionally to stay informed.</p>
        </div>
      </div>
    </div>
  );
}
