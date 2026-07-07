import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BarChart3,
  ClipboardCheck,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Target,
  UserRound,
  Wrench,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: '汪金',
  title: '精益工程师 / IE工程师 / 工业工程师',
  headline: '工业工程 · 精益改善 · 质量管理',
  slogan: '从产线到数据，让制造更精益',
  status: '在读硕士 · 工业工程与管理',
  phone: '155-0806-9338',
  phoneHref: '15508069338',
  email: 'Wang1565104662@163.com',
  location: '四川省南充市',
};

const educationItems = [
  {
    period: '2025.9 - 2028.6',
    school: '新疆大学',
    detail: '工业工程与管理 · 硕士研究生',
  },
  {
    period: '2018.9 - 2022.6',
    school: '西南科技大学',
    detail: '工业工程 · 本科',
  },
];

const experienceItems = [
  {
    period: '2022.7 - 2024.1',
    company: '天津市特变电工变压器有限公司',
    role: '生产管理部 · REFA 精益专员',
    detail: '主导工时测定、质量改进项目推进、工艺标准化和绕线工段培训体系建设。',
  },
  {
    period: '2024.8 - 2024.9',
    company: '川开电气有限公司',
    role: '工业工程中心 · 工业工程师',
    detail: '完成 KYN28A-12/K1 线流程写实、人员配置分析和看板物料可视化优化。',
  },
];

const toolkit = ['Office', 'Visio', 'AutoCAD', 'ERP/MES'];
const methods = ['工时测定', '流程写实', '质量追溯', '看板管理'];

const projects = [
  {
    title: '铁芯质量提升项目',
    image: '/assets/project-iron-core.webp',
    summary: '建立供应商质量宣贯、检验标准、8D 追溯闭环，合格率 99.08% → 99.74%，年节约 7.1 万元。',
    tags: ['质量管理', '供应商管控', 'PDCA'],
  },
  {
    title: '匝数错误防控体系',
    image: '/assets/project-winding-error.webp',
    summary: '设计自检、拍照留痕、班组复核、装配验证四层防错机制，推动关键质量风险前置控制。',
    tags: ['质量预防', '过程控制', '防错设计'],
  },
  {
    title: 'K1 产线流程写实与效率提升',
    image: '/assets/project-k1-line.webp',
    summary: '完成全工位工时测定与人员配置分析，周排产 42 → 79 台，人效 32.81% → 42.50%。',
    tags: ['IE 改善', '工时测定', '产线复盘'],
  },
  {
    title: '高压绕线工段培训体系搭建',
    image: '/assets/project-training-system.webp',
    summary: '构建技能矩阵、OJT 计划、SOP 作业指导书与考核验证，实现新员工上机流程覆盖。',
    tags: ['人才培养', '标准化', '知识沉淀'],
  },
];

const strengths = [
  {
    icon: Gauge,
    title: 'IE / 精益改善',
    text: '工时测定、流程写实、标准工时分析、瓶颈识别、5S 现场改善、看板与目视化管理。',
  },
  {
    icon: ShieldCheck,
    title: '质量管理',
    text: '质量改进项目推进、PDCA、8D 报告、供应商质量管控、追溯台账与过程防错机制。',
  },
  {
    icon: Wrench,
    title: '工艺与现场认知',
    text: '熟悉干式变压器绕线、浇注、装配流程，以及 KYN28A-12 开关柜产线物料与工序管理。',
  },
  {
    icon: BarChart3,
    title: '数据与工具应用',
    text: '掌握 Office、Visio、AutoCAD、ERP/MES 等工具，关注 AI 与工业互联网在现场改善中的应用。',
  },
];

const navItems = [
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#strengths', label: '优势' },
  { href: '#contact', label: '联系' },
];

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function usePortfolioMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      document.documentElement.classList.add('motion-ready');
      document.querySelectorAll('[data-reveal]').forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    document.documentElement.classList.add('motion-ready');

    const ctx = gsap.context(() => {
      gsap.set('.opening-screen', { autoAlpha: 1 });
      gsap.set('.opening-line', { scaleX: 0, transformOrigin: 'left center' });
      gsap.set('.opening-word span', { yPercent: 120, rotateX: -40 });
      gsap.set('.navbar', { y: -28, autoAlpha: 0 });
      gsap.set('.portfolio-line span', {
        yPercent: 110,
        scaleY: 0.55,
        transformOrigin: 'center bottom',
        clipPath: 'inset(0 0 100% 0)',
      });
      gsap.set('.hero-identity p, .hero-identity h1', { y: 36, autoAlpha: 0, filter: 'blur(8px)' });
      gsap.set('.hero-bg', { scale: 1.08, filter: 'blur(10px)' });

      const opening = gsap.timeline({ defaults: { ease: 'power3.out' } });

      opening
        .to('.opening-word span', {
          yPercent: 0,
          rotateX: 0,
          duration: 1.05,
          stagger: 0.08,
        })
        .to('.opening-line', { scaleX: 1, duration: 1.1 }, '-=0.65')
        .to('.opening-screen', {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.2,
          ease: 'expo.inOut',
        }, '+=0.15')
        .to('.hero-bg', { scale: 1, filter: 'blur(0px)', duration: 1.65, ease: 'expo.out' }, '-=0.9')
        .to('.navbar', { y: 0, autoAlpha: 1, duration: 0.85 }, '-=1.15')
        .to('.portfolio-line span', {
          yPercent: 0,
          scaleY: 1,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.35,
          ease: 'expo.out',
        }, '-=0.7')
        .to('.hero-identity p, .hero-identity h1', {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          duration: 1.05,
          stagger: 0.16,
        }, '-=0.7')
        .set('.opening-screen', { display: 'none' });

      gsap.utils.toArray('.section-title .eyebrow, .contact-section h2').forEach((title) => {
        gsap.fromTo(
          title,
          {
            y: 120,
            scaleX: 1.12,
            scaleY: 0.78,
            autoAlpha: 0,
            filter: 'blur(10px)',
            transformOrigin: 'left bottom',
          },
          {
            y: 0,
            scaleX: 1,
            scaleY: 1,
            autoAlpha: 1,
            filter: 'blur(0px)',
            duration: 1.35,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 82%',
              once: true,
            },
          },
        );
      });

      [
        ['#about', '.resume-block'],
        ['#projects', '.project-card'],
        ['#strengths', '.strength-card'],
        ['#contact', '.contact-link, .contact-button, footer'],
      ].forEach(([trigger, selector]) => {
        gsap.fromTo(
          selector,
          { y: 88, autoAlpha: 0, filter: 'blur(8px)' },
          {
            y: 0,
            autoAlpha: 1,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.13,
            scrollTrigger: {
              trigger,
              start: 'top 70%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray('.project-card').forEach((card) => {
        const image = card.querySelector('.project-image img');
        if (!image) return;

        gsap.fromTo(
          image,
          { scale: 1.18, yPercent: -6, clipPath: 'inset(18% 0 18% 0)' },
          {
            scale: 1.04,
            yPercent: 0,
            clipPath: 'inset(0% 0 0% 0)',
            duration: 1.35,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              once: true,
            },
          },
        );

        gsap.to(image, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      });

      gsap.to('.post-hero-grainient', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.post-hero-stage',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
}

function useCardGlow() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.glow-card'));
    let frameId = 0;
    let pendingPointer = null;

    const getEdgeProximity = (rect, x, y) => {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;

      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);

      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    };

    const getCursorAngle = (rect, x, y) => {
      const dx = x - rect.width / 2;
      const dy = y - rect.height / 2;
      if (dx === 0 && dy === 0) return 0;

      const radians = Math.atan2(dy, dx);
      const degrees = radians * (180 / Math.PI) + 90;
      return degrees < 0 ? degrees + 360 : degrees;
    };

    const updateGlow = () => {
      if (!pendingPointer) {
        frameId = 0;
        return;
      }

      const { card, clientX, clientY } = pendingPointer;
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const edge = getEdgeProximity(rect, x, y);
      const angle = getCursorAngle(rect, x, y);

      card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`);
      card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
      frameId = 0;
      pendingPointer = null;
    };

    const handlePointerMove = (event) => {
      pendingPointer = {
        card: event.currentTarget,
        clientX: event.clientX,
        clientY: event.clientY,
      };

      if (!frameId) {
        frameId = window.requestAnimationFrame(updateGlow);
      }
    };

    const handlePointerLeave = (event) => {
      if (pendingPointer?.card === event.currentTarget) {
        pendingPointer = null;
      }
      event.currentTarget.style.setProperty('--edge-proximity', '0');
    };

    cards.forEach((card) => {
      card.addEventListener('pointermove', handlePointerMove);
      card.addEventListener('pointerleave', handlePointerLeave);
    });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      cards.forEach((card) => {
        card.removeEventListener('pointermove', handlePointerMove);
        card.removeEventListener('pointerleave', handlePointerLeave);
      });
    };
  }, []);
}

function ContactLink({ icon: Icon, label, href }) {
  return (
    <a className="contact-link" href={href}>
      <Icon size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </a>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <nav aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        联系我
        <ArrowUpRight size={17} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grainient" />
      </div>
      <Navbar />
      <div className="hero-inner shell">
        <div className="hero-cover-copy">
          <div className="portfolio-line">
            <span>PROJECTS</span>
          </div>
          <div className="hero-identity">
            <p>{profile.slogan}</p>
            <h1>{profile.name}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about-resume" data-reveal>
        <div className="resume-column">
          <div className="section-title compact-title">
            <p className="eyebrow">Professional Experience</p>
          </div>

          <div className="resume-grid">
            <section className="resume-block glow-card">
              <span className="edge-light" aria-hidden="true" />
              <h3>Education</h3>
              <div className="resume-list">
                {educationItems.map((item) => (
                  <article className="resume-row education-row" key={item.school}>
                    <div>
                      <strong>{item.school}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <time>{item.period}</time>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block experience-block glow-card">
              <span className="edge-light" aria-hidden="true" />
              <h3>Experience</h3>
              <div className="resume-list">
                {experienceItems.map((item) => (
                  <article className="resume-row experience-row" key={item.company}>
                    <div>
                      <strong>{item.company}</strong>
                      <span>{item.role}</span>
                      <p>{item.detail}</p>
                    </div>
                    <time>{item.period}</time>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block glow-card">
              <span className="edge-light" aria-hidden="true" />
              <h3>Toolkits</h3>
              <div className="toolkit-grid">
                {toolkit.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>

            <section className="resume-block glow-card">
              <span className="edge-light" aria-hidden="true" />
              <h3>Methods</h3>
              <div className="method-grid">
                {methods.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <div className="section-title projects-heading" data-reveal>
          <p className="eyebrow">Selected Projects</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card glow-card" key={project.title} data-reveal>
              <span className="edge-light" aria-hidden="true" />
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" fetchPriority="low" />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="shell">
        <div className="section-title centered" data-reveal>
          <p className="eyebrow">Capabilities</p>
        </div>
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article className="strength-card glow-card" key={title} data-reveal>
              <span className="edge-light" aria-hidden="true" />
              <div className="icon-box">
                <Icon size={28} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-inner" data-reveal>
        <h2>期待与企业一起，让改善落地见效</h2>
        <p className="contact-lead">欢迎与我联系</p>
        <div className="contact-panel">
          <ContactLink icon={Phone} label={profile.phone} href={`tel:${profile.phoneHref}`} />
          <ContactLink icon={Mail} label={profile.email} href={`mailto:${profile.email}`} />
          <ContactLink icon={MapPin} label={profile.location} href="#top" />
        </div>
        <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>
          发送邮件
          <ArrowUpRight size={19} />
        </a>
        <footer>© 2026 汪金 · All Rights Reserved</footer>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  useCardGlow();
  usePortfolioMotion();

  return (
    <>
      <div className="opening-screen" aria-hidden="true">
        <div className="opening-word">
          <span>LEAN</span>
          <span>IE</span>
          <span>PORTFOLIO</span>
        </div>
        <div className="opening-line" />
      </div>
      <Hero />
      <div className="post-hero-stage">
        <div className="post-hero-grainient" aria-hidden="true" />
        <div className="post-hero-content">
          <About />
          <Projects />
          <Strengths />
          <Contact />
        </div>
      </div>
      <div className="floating-tools" aria-hidden="true">
        <Factory size={18} />
        <ClipboardCheck size={18} />
        <Target size={18} />
        <Ruler size={18} />
        <UserRound size={18} />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
