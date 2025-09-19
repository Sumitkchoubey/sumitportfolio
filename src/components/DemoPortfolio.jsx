import React, { useState } from 'react';
import { Play, Upload, MessageSquare, BarChart3, Mic, FileText, User, MapPin, Phone, Mail, Linkedin, Github, Calendar, Award, Code, Database, Brain, Server, X } from 'lucide-react';

const DemoPortfolio = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const demos = [
    {
      id: 1,
      title: "Audio to Text & Video Script Generator",
      description: "Advanced AI-powered tool that converts audio content to accurate text transcriptions and generates engaging video scripts automatically.",
      features: [
        "Real-time audio transcription with 95%+ accuracy",
        "Multi-language support (Hindi, English, Bengali)",
        "Automated video script generation",
        "Content optimization for different platforms"
      ],
      icon: <Mic style={{ width: '32px', height: '32px' }} />,
      color: "purple-blue",
      videoUrl: "./videos/audio-to-text-demo.mp4",
    },
    {
      id: 2,
      title: "CSV Analyzer & Chart Generator",
      description: "Intelligent data analysis platform that automatically processes CSV files, analyzes patterns, and creates insightful visualizations.",
      features: [
        "Smart column detection and data type inference",
        "Automated statistical analysis",
        "Dynamic chart generation (Bar, Line, Pie, Scatter)",
        "Export capabilities for reports and presentations"
      ],
      icon: <BarChart3 style={{ width: '32px', height: '32px' }} />,
      color: "green-teal",
      videoUrl: "./videos/csv-analyzer-demo.mp4"
    },
    {
      id: 3,
      title: "RAG Application Chatbot",
      description: "Sophisticated conversational AI powered by Retrieval-Augmented Generation for context-aware responses and document understanding.",
      features: [
        "Context-aware conversations using RAG architecture",
        "Document ingestion and knowledge base creation",
        "Multi-format support (PDF, TXT, DOC)",
        "Intelligent response generation with source citations"
      ],
      icon: <MessageSquare style={{ width: '32px', height: '32px' }} />,
      color: "orange-red",
      videoUrl: "./videos/rag-chatbot-demo.mp4"
    }
  ];

  const skills = [
    { name: "Python", icon: <Code style={{ width: '20px', height: '20px' }} /> },
    { name: "Machine Learning", icon: <Brain style={{ width: '20px', height: '20px' }} /> },
    { name: "Deep Learning", icon: <Brain style={{ width: '20px', height: '20px' }} /> },
    { name: "TensorFlow", icon: <Server style={{ width: '20px', height: '20px' }} /> },
    { name: "PyTorch", icon: <Server style={{ width: '20px', height: '20px' }} /> },
    { name: "Docker", icon: <Database style={{ width: '20px', height: '20px' }} /> },
    { name: "MongoDB", icon: <Database style={{ width: '20px', height: '20px' }} /> },
    { name: "Apache Kafka", icon: <Server style={{ width: '20px', height: '20px' }} /> },
    { name: "Power BI", icon: <BarChart3 style={{ width: '20px', height: '20px' }} /> },
    { name: "Flask", icon: <Code style={{ width: '20px', height: '20px' }} /> },
    { name: "Pandas", icon: <Code style={{ width: '20px', height: '20px' }} /> },
    { name: "Scikit-learn", icon: <Brain style={{ width: '20px', height: '20px' }} /> }
  ];

  const experiences = [
    {
      title: "Freelance ML Engineer & AI Developer",
      company: "SMFusion AI & Independent Projects",
      period: "January 2025 - Present",
      location: "Remote",
      description: [
        "Developing AI-powered demo applications including audio-to-text conversion and RAG chatbots",
        "Creating data analysis tools with automated visualization capabilities",
        "Building machine learning solutions for various client requirements",
        "Currently seeking new opportunities while maintaining active project portfolio"
      ]
    },
    {
      title: "ML Engineer",
      company: "RChilli INC",
      period: "November 2022 - January 2025",
      location: "Remote",
      description: [
        "Developed Named Entity Recognition (NER) models for Hebrew and Thai language resumes using Deep Learning",
        "Implemented containerized ML solutions using Docker for scalable deployment",
        "Worked on multilingual NLP applications with focus on resume parsing and analysis",
        "Optimized model performance and accuracy for production environments"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "F(X) Data Labs",
      period: "March 2022 - November 2022",
      location: "Ahmedabad, Gujarat",
      description: [
        "Built resume ranking systems based on job descriptions using Python and Word2Vec",
        "Implemented TF-IDF models for semantic matching and relevance scoring",
        "Developed automated candidate screening solutions for HR processes"
      ]
    },
    {
      title: "Python Developer & ML Engineer",
      company: "1Touch Development Pvt Ltd",
      period: "April 2021 - January 2022",
      location: "Zirakpur, Punjab",
      description: [
        "Built OCR systems for extracting customer data from receipts using Flair models",
        "Developed recommendation engines using Python and Deep Learning",
        "Utilized AWS SageMaker for model deployment and scaling"
      ]
    },
    {
      title: "Python Developer with Data Analysis",
      company: "Neurapses Technology",
      period: "June 2019 - March 2021",
      location: "Kolkata, West Bengal",
      description: [
        "Developed Question Answering Systems using BERT, XLNet, and TF-IDF",
        "Built text recognition systems using CNN and LSTM models",
        "Created web scraping solutions with sentiment analysis capabilities"
      ]
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      fontFamily: 'Arial, sans-serif',
      width: '100%'
    },
    header: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '16px 0',
      width: '100%'
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Changed from space-between to center
      flexWrap: 'wrap',
      gap: '24px'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    avatar: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #9333ea, #2563eb)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      margin: 0
    },
    title: {
      color: '#c084fc',
      margin: 0
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      fontSize: '14px',
      color: '#d1d5db'
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    hero: {
      padding: '80px 24px',
      textAlign: 'center',
      width: '100%'
    },
    heroContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center' // Ensure text is centered
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '24px',
      textAlign: 'center'
    },
    heroGradient: {
      display: 'block',
      background: 'linear-gradient(135deg, #c084fc, #f472b6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroDescription: {
      fontSize: '20px',
      color: '#d1d5db',
      marginBottom: '48px',
      maxWidth: '768px',
      margin: '0 auto 48px auto',
      lineHeight: '1.6',
      textAlign: 'center'
    },
    section: {
      padding: '64px 24px',
      width: '100%'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: '48px'
    },
    centeredContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%'
    },
    demoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      justifyItems: 'center' // Center grid items
    },
    demoCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '400px' // Limit card width
    },
    demoCardHover: {
      transform: 'scale(1.05)',
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    demoIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
      margin: '0 auto 24px auto' // Center the icon
    },
    demoIconPurple: {
      background: 'linear-gradient(135deg, #9333ea, #2563eb)'
    },
    demoIconGreen: {
      background: 'linear-gradient(135deg, #059669, #0d9488)'
    },
    demoIconOrange: {
      background: 'linear-gradient(135deg, #ea580c, #dc2626)'
    },
    demoTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '12px',
      textAlign: 'center'
    },
    demoDescription: {
      color: '#d1d5db',
      marginBottom: '24px',
      lineHeight: '1.5',
      textAlign: 'center'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '24px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '8px',
      fontSize: '14px',
      color: '#9ca3af'
    },
    featureBullet: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#c084fc',
      marginTop: '8px',
      flexShrink: 0
    },
    demoButton: {
      width: '100%',
      padding: '12px 24px',
      borderRadius: '12px',
      border: 'none',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      cursor: 'pointer',
      transition: 'opacity 0.3s ease'
    },
    demoButtonPurple: {
      background: 'linear-gradient(135deg, #9333ea, #2563eb)'
    },
    demoButtonGreen: {
      background: 'linear-gradient(135deg, #059669, #0d9488)'
    },
    demoButtonOrange: {
      background: 'linear-gradient(135deg, #ea580c, #dc2626)'
    },
    skillsSection: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      justifyItems: 'center' // Center grid items
    },
    skillCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'border-color 0.3s ease',
      width: '100%',
      maxWidth: '250px' // Limit card width
    },
    skillCardHover: {
      borderColor: 'rgba(196, 132, 252, 0.5)'
    },
    skillContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Center skill content
      gap: '12px'
    },
    skillIcon: {
      color: '#c084fc'
    },
    skillName: {
      color: 'white',
      fontSize: '14px',
      fontWeight: '500'
    },
    experienceSection: {
      maxWidth: '1024px',
      margin: '0 auto',
      width: '100%'
    },
    experienceCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '32px'
    },
    experienceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    experienceTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      margin: '0 0 4px 0'
    },
    experienceCompany: {
      color: '#c084fc',
      fontWeight: '500',
      margin: 0
    },
    experienceDate: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#d1d5db',
      fontSize: '14px',
      marginBottom: '4px'
    },
    experienceLocation: {
      color: '#9ca3af',
      fontSize: '14px'
    },
    experienceDescription: {
      listStyle: 'none',
      padding: 0
    },
    experienceItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '8px',
      color: '#d1d5db'
    },
    contactSection: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      textAlign: 'center'
    },
    contactContent: {
      maxWidth: '1024px',
      margin: '0 auto',
      textAlign: 'center'
    },
    contactDescription: {
      color: '#d1d5db',
      marginBottom: '32px',
      textAlign: 'center'
    },
    contactLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      borderRadius: '12px',
      color: 'white',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease'
    },
    contactEmail: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    contactLinkedIn: {
      backgroundColor: '#2563eb'
    },
    contactGitHub: {
      backgroundColor: '#374151'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      borderRadius: '16px',
      padding: '32px',
      maxWidth: '1024px',
      width: '100%',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    modalTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      margin: 0
    },
    closeButton: {
      color: 'white',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    videoContainer: {
      aspectRatio: '16/9',
      backgroundColor: 'black',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '24px',
      position: 'relative'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    placeholderContent: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2))',
      textAlign: 'center',
      padding: '32px'
    },
    placeholderIcon: {
      width: '80px',
      height: '80px',
      margin: '0 auto 24px auto',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalFooter: {
      textAlign: 'center'
    },
    modalDescription: {
      color: '#d1d5db',
      marginBottom: '16px'
    },
    requestDemoButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'linear-gradient(135deg, #9333ea, #2563eb)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'opacity 0.3s ease'
    }
  };

  const getIconStyle = (color) => {
    switch (color) {
      case 'purple-blue':
        return styles.demoIconPurple;
      case 'green-teal':
        return styles.demoIconGreen;
      case 'orange-red':
        return styles.demoIconOrange;
      default:
        return styles.demoIconPurple;
    }
  };

  const getButtonStyle = (color) => {
    switch (color) {
      case 'purple-blue':
        return styles.demoButtonPurple;
      case 'green-teal':
        return styles.demoButtonGreen;
      case 'orange-red':
        return styles.demoButtonOrange;
      default:
        return styles.demoButtonPurple;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.avatar}>
              <User style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <div>
              <h1 style={styles.name}>Sumit Kumar Choubey</h1>
              <p style={styles.title}>ML Engineer & AI Developer</p>
            </div>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.contactInfo}>
              <MapPin style={{ width: '16px', height: '16px' }} />
              <span>Kandi, West Bengal</span>
            </div>
            <div style={styles.contactInfo}>
              <Phone style={{ width: '16px', height: '16px' }} />
              <span>+91 8637071713</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>
            AI-Powered Solutions
            <span style={styles.heroGradient}>
              Demo Portfolio
            </span>
          </h2>
          <p style={styles.heroDescription}>
            Explore cutting-edge AI applications built with 5+ years of experience in Machine Learning,
            Deep Learning, and Full-Stack Development. Ready to transform your ideas into intelligent solutions.
          </p>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section style={styles.section}>
        <div style={styles.centeredContent}>
          <h3 style={styles.sectionTitle}>Product Demonstrations</h3>
          <div style={styles.demoGrid}>
            {demos.map((demo) => (
              <div
                key={demo.id}
                style={styles.demoCard}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.demoCardHover);
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{...styles.demoIcon, ...getIconStyle(demo.color)}}>
                  {demo.icon}
                </div>
                
                <h4 style={styles.demoTitle}>{demo.title}</h4>
                <p style={styles.demoDescription}>{demo.description}</p>
                
                <ul style={styles.featureList}>
                  {demo.features.map((feature, index) => (
                    <li key={index} style={styles.featureItem}>
                      <div style={styles.featureBullet}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedDemo(demo)}
                  style={{...styles.demoButton, ...getButtonStyle(demo.color)}}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                  }}
                >
                  <Play style={{ width: '20px', height: '20px' }} />
                  <span>Watch Demo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{...styles.section, ...styles.skillsSection}}>
        <div style={styles.centeredContent}>
          <h3 style={styles.sectionTitle}>Technical Expertise</h3>
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={index}
                style={styles.skillCard}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(196, 132, 252, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={styles.skillContent}>
                  <div style={styles.skillIcon}>{skill.icon}</div>
                  <span style={styles.skillName}>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.section}>
        <div style={styles.experienceSection}>
          <h3 style={styles.sectionTitle}>Professional Experience</h3>
          <div>
            {experiences.map((exp, index) => (
              <div key={index} style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <div>
                    <h4 style={styles.experienceTitle}>{exp.title}</h4>
                    <p style={styles.experienceCompany}>{exp.company}</p>
                  </div>
                  <div>
                    <div style={styles.experienceDate}>
                      <Calendar style={{ width: '16px', height: '16px' }} />
                      <span>{exp.period}</span>
                    </div>
                    <p style={styles.experienceLocation}>{exp.location}</p>
                  </div>
                </div>
                <ul style={styles.experienceDescription}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={styles.experienceItem}>
                      <div style={styles.featureBullet}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{...styles.section, ...styles.contactSection}}>
        <div style={styles.contactContent}>
          <h3 style={styles.sectionTitle}>Let's Connect</h3>
          <p style={styles.contactDescription}>
            Ready to bring AI innovation to your projects. Currently seeking new opportunities and exciting challenges.
          </p>
          <div style={styles.contactLinks}>
            <a
              href="mailto:sumitkumarchoubey8@gmail.com"
              style={{...styles.contactLink, ...styles.contactEmail}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <Mail style={{ width: '20px', height: '20px' }} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-kumar-choubey-51564a102/"
              style={{...styles.contactLink, ...styles.contactLinkedIn}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2563eb';
              }}
            >
              <Linkedin style={{ width: '20px', height: '20px' }} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Sumitkcho ubey/QuestionAnsweringsystem/tree/main/question_answer"
              style={{...styles.contactLink, ...styles.contactGitHub}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1f2937';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#374151';
              }}
            >
              <Github style={{ width: '20px', height: '20px' }} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {selectedDemo && (
        <div style={styles.modal} onClick={() => setSelectedDemo(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h4 style={styles.modalTitle}>{selectedDemo.title}</h4>
              <button
                onClick={() => setSelectedDemo(null)}
                style={styles.closeButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <X style={{ width: '24px', height: '24px' }} />
              </button>
            </div>
            
            <div style={styles.videoContainer}>
              {selectedDemo.videoUrl ? (
                <video
                  style={styles.video}
                  controls
                  autoPlay
                  muted
                >
                  <source src={selectedDemo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div style={styles.placeholderContent}>
                  <div>
                    <div style={{...styles.placeholderIcon, ...getIconStyle(selectedDemo.color)}}>
                      <Play style={{ width: '40px', height: '40px', color: 'white' }} />
                    </div>
                    <p style={{ color: 'white', marginBottom: '16px' }}>Demo video coming soon!</p>
                    <p style={{ color: '#d1d5db', fontSize: '14px' }}>Contact Sumit to schedule a live demonstration.</p>
                  </div>
                </div>
              )}
            </div>
            
            <div style={styles.modalFooter}>
              <p style={styles.modalDescription}>{selectedDemo.description}</p>
              <a
                href="mailto:sumitkumarchoubey8@gmail.com"
                style={styles.requestDemoButton}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1';
                }}
              >
                <Mail style={{ width: '20px', height: '20px' }} />
                <span>Request Full Demo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoPortfolio;