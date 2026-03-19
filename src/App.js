import { useState, useEffect } from 'react';
import './App.css';

// =========================================================
// کامپوننت‌های وکتور کاراکترها (بدون تغییر در ساختار اصلی)
// =========================================================

const BearCoach = ({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <rect x="40" y="40" width="120" height="140" rx="60" fill="#8B4513" />
    <circle cx="50" cy="50" r="25" fill="#8B4513" />
    <circle cx="150" cy="50" r="25" fill="#8B4513" />
    <circle cx="50" cy="50" r="15" fill="#D2B48C" />
    <circle cx="150" cy="50" r="15" fill="#D2B48C" />
    <ellipse cx="100" cy="120" rx="35" ry="30" fill="#D2B48C" />
    <path d="M 85 110 Q 100 130 115 110" stroke="#3E2723" strokeWidth="4" fill="transparent" strokeLinecap="round" />
    <circle cx="100" cy="100" r="8" fill="#3E2723" />
    <ellipse cx="65" cy="125" rx="12" ry="8" fill="#FF8A80" opacity="0.6" />
    <ellipse cx="135" cy="125" rx="12" ry="8" fill="#FF8A80" opacity="0.6" />
    {isPasswordFocused ? (
      <>
        <path d="M 65 80 Q 75 90 85 80" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 80 Q 125 90 135 80" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="75" cy="80" r="12" fill="#FFFFFF" />
        <circle cx="125" cy="80" r="12" fill="#FFFFFF" />
        <circle cx="75" cy="80" r="6" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="80" r="6" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}
  </svg>
);

const MonkeyCoach = ({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <circle cx="30" cy="90" r="25" fill="#D2B48C" />
    <circle cx="170" cy="90" r="25" fill="#D2B48C" />
    <circle cx="100" cy="100" r="70" fill="#A0522D" />
    <path d="M 50 90 Q 100 40 150 90 L 150 130 Q 100 170 50 130 Z" fill="#D2B48C" />
    <circle cx="100" cy="130" r="25" fill="#FFE4B5" />
    <path d="M 85 135 Q 100 150 115 135" stroke="#3E2723" strokeWidth="3" fill="transparent" strokeLinecap="round" />
    <circle cx="100" cy="120" r="6" fill="#3E2723" />
    <ellipse cx="60" cy="135" rx="10" ry="6" fill="#FF8A80" opacity="0.6" />
    <ellipse cx="140" cy="135" rx="10" ry="6" fill="#FF8A80" opacity="0.6" />
    {isPasswordFocused ? (
      <>
        <path d="M 65 90 Q 75 100 85 90" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 90 Q 125 100 135 90" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="75" cy="90" r="14" fill="#FFFFFF" />
        <circle cx="125" cy="90" r="14" fill="#FFFFFF" />
        <circle cx="75" cy="90" r="7" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="90" r="7" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}
  </svg>
);

const RabbitCoach = ({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <ellipse cx="60" cy="50" rx="20" ry="60" fill="#E0E0E0" transform="rotate(-15 60 50)" />
    <ellipse cx="140" cy="50" rx="20" ry="60" fill="#E0E0E0" transform="rotate(15 140 50)" />
    <ellipse cx="60" cy="40" rx="10" ry="40" fill="#FFCDD2" transform="rotate(-15 60 40)" />
    <ellipse cx="140" cy="40" rx="10" ry="40" fill="#FFCDD2" transform="rotate(15 140 40)" />
    <circle cx="100" cy="120" r="65" fill="#E0E0E0" />
    <path d="M 90 135 L 100 145 L 110 135" stroke="#3E2723" strokeWidth="3" fill="transparent" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 100 125 L 95 135 L 105 135 Z" fill="#FF8A80" />
    <ellipse cx="65" cy="130" rx="12" ry="8" fill="#FF8A80" opacity="0.5" />
    <ellipse cx="135" cy="130" rx="12" ry="8" fill="#FF8A80" opacity="0.5" />
    {isPasswordFocused ? (
      <>
        <path d="M 70 100 Q 80 110 90 100" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 110 100 Q 120 110 130 100" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="80" cy="100" r="14" fill="#FFFFFF" />
        <circle cx="120" cy="100" r="14" fill="#FFFFFF" />
        <circle cx="80" cy="100" r="7" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="120" cy="100" r="7" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}
  </svg>
);

const PandaCoach = ({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <circle cx="40" cy="60" r="25" fill="#212121" />
    <circle cx="160" cy="60" r="25" fill="#212121" />
    <circle cx="100" cy="110" r="75" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2" />
    <path d="M 85 140 Q 100 155 115 140" stroke="#212121" strokeWidth="4" fill="transparent" strokeLinecap="round" />
    <ellipse cx="100" cy="125" rx="12" ry="8" fill="#212121" />
    <ellipse cx="60" cy="140" rx="15" ry="10" fill="#FF8A80" opacity="0.5" />
    <ellipse cx="140" cy="140" rx="15" ry="10" fill="#FF8A80" opacity="0.5" />
    <ellipse cx="75" cy="95" rx="25" ry="30" fill="#212121" transform="rotate(-20 75 95)" />
    <ellipse cx="125" cy="95" rx="25" ry="30" fill="#212121" transform="rotate(20 125 95)" />
    {isPasswordFocused ? (
      <>
        <path d="M 65 95 Q 75 105 85 95" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 95 Q 125 105 135 95" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="75" cy="95" r="12" fill="#FFFFFF" />
        <circle cx="125" cy="95" r="12" fill="#FFFFFF" />
        <circle cx="75" cy="95" r="6" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="95" r="6" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}
  </svg>
);

const coaches = [
  { id: 'bear', name: 'خرس بدنسازی', desc: 'آماده‌ای فولاد جا‌به‌جا کنیم؟!', Component: BearCoach },
  { id: 'monkey', name: 'میمون کلستنیکس', desc: 'نیروی جاذبه برای ما بی‌معنیه!', Component: MonkeyCoach },
  { id: 'rabbit', name: 'خرگوش چابک', desc: 'سرعت و انفجار! بهت نشون میدم!', Component: RabbitCoach },
  { id: 'panda', name: 'پاندا یوگا', desc: 'آرامش ذهن و انعطاف بدن...', Component: PandaCoach },
];

// =========================================================
// کامپوننت پوشش‌دهنده برای مدیریت چشمک‌زدن رندوم
// =========================================================
const BlinkingCoach = ({ Component, pupilStyle, isPasswordFocused }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let timeout;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        // زمان رندوم بین 2 تا 6 ثانیه برای چشمک بعدی
        timeout = setTimeout(triggerBlink, Math.random() * 4000 + 2000);
      }, 150); // مدت زمان بسته بودن چشم
    };

    // شروع با تاخیر رندوم اولیه برای اینکه همه با هم نزنند
    timeout = setTimeout(triggerBlink, Math.random() * 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <Component pupilStyle={pupilStyle} isPasswordFocused={isPasswordFocused || isBlinking} />;
};

// =========================================================
// کامپوننت اصلی برنامه
// =========================================================
function App() {
  const [view, setView] = useState('intro'); // intro, auth, success, dashboard
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [authMode, setAuthMode] = useState('register'); // register, login
  
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [mood, setMood] = useState('idle'); // idle, sad, dancing
  const [focusedField, setFocusedField] = useState(null); // 'username', 'password', or null

  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (view === 'auth' && focusedField === 'username') {
        const isMobile = window.innerWidth <= 768;
        setPupilPos({ x: isMobile ? 0 : 4, y: isMobile ? 5 : 2 });
        return;
      }
      const x = (e.clientX / window.innerWidth) * 10 - 5;
      const y = (e.clientY / window.innerHeight) * 10 - 5;
      setPupilPos({ x, y });
    };

    const handleMouseLeave = () => {
      if (view === 'auth' && focusedField === 'username') return;
      setPupilPos({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [view, focusedField]);

  const pupilStyle = { transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` };

  const handleSelectCoach = (id) => {
    setSelectedCoach(id === selectedCoach ? null : id);
  };

  const goToAuth = (mode) => {
    setAuthMode(mode);
    setView('auth');
    setMood('idle');
    setFormData({ username: '', password: '' });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setMood('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (authMode === 'register') {
      if (formData.username.length < 4) newErrors.username = 'آیدی باید حداقل ۴ حرف باشد!';
      if (formData.password.length < 8) newErrors.password = 'رمز باید حداقل ۸ حرف باشد!';
    } else {
      if (!formData.username) newErrors.username = 'آیدی را وارد کن!';
      if (!formData.password) newErrors.password = 'رمز را وارد کن!';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMood('sad');
      setTimeout(() => setMood('idle'), 800);
    } else {
      setErrors({});
      setMood('dancing');
      setTimeout(() => setView('success'), 2500);
    }
  };

  return (
    <main className="app-wrapper">
      
      {/* صفحه اول: انتخاب مربی */}
      {view === 'intro' && (
        <section className="container fade-in">
          <header className={`header ${selectedCoach ? 'hidden' : ''}`}>
            <h1>کدوم مربی رو انتخاب می‌کنی؟</h1>
            <p>روی هرکدوم کلیک کن تا باهاش آشنا بشی!</p>
          </header>

          <button 
            className={`back-btn-top ${selectedCoach ? 'visible' : ''}`}
            onClick={() => setSelectedCoach(null)}
          >
            بازگشت به انتخاب
          </button>

          <article className="coaches-row">
            {coaches.map((coach) => {
              const isActive = selectedCoach === coach.id;
              const isHidden = selectedCoach && !isActive;
              return (
                <div 
                  key={coach.id}
                  className={`coach ${isActive ? 'active' : ''} ${isHidden ? 'hidden-coach' : ''}`}
                  onClick={() => handleSelectCoach(coach.id)}
                >
                  <figure className="svg-wrapper">
                    {/* استفاده از کامپوننت چشمک‌زن */}
                    <BlinkingCoach Component={coach.Component} pupilStyle={pupilStyle} />
                  </figure>
                  <h3 className="coach-name">{coach.name}</h3>
                  
                  {isActive && (
                    <blockquote className="speech-bubble">
                      {coach.desc}
                    </blockquote>
                  )}

                  <div className="action-buttons">
                    <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); goToAuth('register'); }}>ثبت‌نام با این مربی</button>
                    <button className="btn btn-outline" onClick={(e) => { e.stopPropagation(); goToAuth('login'); }}>ورود به حساب</button>
                  </div>
                </div>
              );
            })}
          </article>
        </section>
      )}

      {/* صفحه دوم: فرم ثبت‌نام/ورود */}
      {view === 'auth' && (
        <section className="split-screen fade-in">
          <aside className={`characters-half ${mood === 'sad' ? 'mood-sad' : ''} ${mood === 'dancing' ? 'mood-dancing' : ''}`}>
            <div className="compact-coaches-container">
              {coaches.map(coach => (
                <figure key={coach.id} className="compact-coach">
                  {/* استفاده از کامپوننت چشمک‌زن با رعایت وضعیت فوکوس پسورد */}
                  <BlinkingCoach 
                    Component={coach.Component} 
                    pupilStyle={pupilStyle} 
                    isPasswordFocused={focusedField === 'password'} 
                  />
                </figure>
              ))}
            </div>
          </aside>
          
          <article className="form-half">
            <div className="form-box">
              <h2>{authMode === 'register' ? 'ثبت‌نام ورزشکار' : 'ورود ورزشکار'}</h2>
              <p className="form-subtitle">مربی‌ها منتظرت هستن...</p>

              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="username">آیدی یونیک:</label>
                  <input 
                    id="username"
                    type="text" 
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('username')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="مثال: hero_99"
                    autoComplete="off"
                  />
                  <div className="error-container">
                    {errors.username && <span className="error-text">{errors.username}</span>}
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="password">رمز عبور قوی:</label>
                  <input 
                    id="password"
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                  />
                  <div className="error-container">
                    {errors.password && <span className="error-text">{errors.password}</span>}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  {authMode === 'register' ? 'شروع ماجراجویی' : 'ورود به باشگاه'}
                </button>
                <button type="button" className="btn btn-outline back-form-btn" onClick={() => setView('intro')}>
                  برگشت به انتخاب مربی
                </button>
              </form>
            </div>
          </article>
        </section>
      )}

      {/* صفحه موفقیت */}
      {view === 'success' && (
        <section className="success-section fade-in">
          <article className="success-card">
            <h2>ورودت به تیم موفقیت‌آمیز بود!</h2>
            <p>درحال انتقال به باشگاه ورزشی شما...</p>
            <button className="btn btn-primary submit-btn" onClick={() => setView('dashboard')}>ادامه</button>
          </article>
        </section>
      )}

      {/* داشبورد */}
      {view === 'dashboard' && (
        <section className="next-page-section fade-in">
          <h1>سلام قهرمان! به باشگاه خوش اومدی 💪</h1>
        </section>
      )}

    </main>
  );
}

export default App;
