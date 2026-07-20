import { useState } from 'react';
import './styles/tokens.css';
import Navigation from './components/Navigation/Navigation';
import Button from './components/Button/Button';
import FormField from './components/FormField/FormField';
import Alert from './components/Alert/Alert';
import Card from './components/Card/Card';
import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAlert, setActiveAlert] = useState(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Contact', href: '#contact' },
  ];

  const accordionItems = [
    { title: 'What is Northstar Learning Collective?', content: 'A fictional educational organization used as the demo client for this design system.' },
    { title: 'How do I enroll in a course?', content: 'Visit the course catalog, select a course, and follow the enrollment steps.' },
    { title: 'Is financial aid available?', content: 'Yes, fictional financial aid options are described on the aid page.' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setActiveAlert('error');
      return;
    }
    setActiveAlert('success');
  };

  return (
    <div>
      <Navigation logoText="Northstar" links={navLinks} activeHref="#home" />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Hero */}
        <section style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          padding: '3rem 0 2rem 0',
          flexWrap: 'wrap',
          textAlign: 'left',
        }}>
          <div style={{ maxWidth: '360px', textAlign: 'center' }}>
            <img src="/logo.svg" alt="" style={{ width: '48px', height: '48px', marginBottom: '1rem' }} />
            <h1 style={{
              color: 'var(--color-navy-700)',
              fontFamily: 'var(--font-family-serif)',
              fontWeight: 600,
              fontSize: 'var(--font-size-3xl)',
              margin: 0,
            }}>
              Northstar Design System
            </h1>
            <p style={{ color: 'var(--color-grey-700)', margin: '1rem 0 0 0' }}>
              A reusable, accessible component library built for Northstar Learning Collective,
              a fictional educational organization.
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-navy-700)', fontSize: '1.25rem' }}>Buttons</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        {/* Login Card */}
        <section style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-navy-700)', fontSize: '1.25rem' }}>Form Fields — Login Example</h2>
          <form
            onSubmit={handleLogin}
            style={{
              marginTop: '1rem',
              maxWidth: '360px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '1.5rem',
              backgroundColor: 'var(--color-white)',
              backgroundImage: 'url(/pattern-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid var(--color-grey-300)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <h3 style={{ margin: 0, color: 'var(--color-navy-700)' }}>Log In</h3>
            <FormField label="Email address" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <FormField label="Password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" variant="primary">Log In</Button>
          </form>
        </section>

        {/* Alerts */}
        <section style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-navy-700)', fontSize: '1.25rem' }}>Alerts</h2>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="secondary" size="sm" onClick={() => setActiveAlert('success')}>Trigger Success</Button>
            <Button variant="secondary" size="sm" onClick={() => setActiveAlert('error')}>Trigger Error</Button>
            <Button variant="secondary" size="sm" onClick={() => setActiveAlert('info')}>Trigger Info</Button>
          </div>
          <div style={{ marginTop: '1rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
            {activeAlert === 'success' && <Alert variant="success" title="Success" onDismiss={() => setActiveAlert(null)}>Your changes have been saved.</Alert>}
            {activeAlert === 'error' && <Alert variant="error" title="Error" onDismiss={() => setActiveAlert(null)}>Email and password are required.</Alert>}
            {activeAlert === 'info' && <Alert variant="info" onDismiss={() => setActiveAlert(null)}>New features are available in your dashboard.</Alert>}
          </div>
        </section>

        {/* Cards */}
        <section style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-navy-700)', fontSize: '1.25rem' }}>Cards</h2>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card
              imageUrl="/hero-illustration.png"
              imageAlt="Illustration of a student studying on a laptop"
              title="Static Card"
              description="This card just displays information and isn't clickable."
            />
            <Card
              imageUrl="/collaboration.png"
              imageAlt="Illustration of three people collaborating at a table"
              title="Interactive Card"
              description="This card is clickable and keyboard-focusable."
              onClick={() => alert('Card clicked!')}
              footer={<span style={{ fontSize: '0.8rem', color: 'var(--color-navy-700)' }}>View details →</span>}
            />
          </div>
        </section>

        {/* Accordion */}
        <section style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-navy-700)', fontSize: '1.25rem' }}>Accordion</h2>
          <div style={{ marginTop: '1rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
            <Accordion items={accordionItems} />
          </div>
        </section>

        {/* Modal */}
        <section style={{ marginTop: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-navy-700)', fontSize: '1.25rem' }}>Modal</h2>
          <div style={{ marginTop: '1rem' }}>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          </div>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Confirm Enrollment"
            footer={<><Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button><Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button></>}
          >
            Are you sure you want to enroll in this course? This is a fictional confirmation for demo purposes.
          </Modal>
        </section>

      </main>

      <Footer orgName="Northstar Learning Collective" links={footerLinks} />
    </div>
  );
}

export default App;