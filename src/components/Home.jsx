import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// --- کاراکترهای SVG (بدون تغییر) ---
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
      <><path d="M 65 80 Q 75 90 85 80" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 80 Q 125 90 135 80" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" /></>
    ) : (
      <><circle cx="75" cy="80" r="12" fill="#FFFFFF" /><circle cx="125" cy="80" r="12" fill="#FFFFFF" />
        <circle cx="75" cy="80" r="6" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="80" r="6" fill="#000000" className="pupil" style={pupilStyle} /></>
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
      <><path d="M 65 90 Q 75 100 85 90" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 90 Q 125 100 135 90" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" /></>
    ) : (
      <><circle cx="75" cy="90" r="14" fill="#FFFFFF" /><circle cx="125" cy="90" r="14" fill="#FFFFFF" />
        <circle cx="75" cy="90" r="7" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="90" r="7" fill="#000000" className="pupil" style={pupilStyle} /></>
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
      <><path d="M 70 100 Q 80 110 90 100" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 110 100 Q 120 110 130 100" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" /></>
    ) : (
      <><circle cx="80" cy="100" r="14" fill="#FFFFFF" /><circle cx="120" cy="100" r="14" fill="#FFFFFF" />
        <circle cx="80" cy="100" r="7" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="120" cy="100" r="7" fill="#000000" className="pupil" style={pupilStyle} /></>
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
      <><path d="M 65 95 Q 75 105 85 95" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 95 Q 125 105 135 95" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" /></>
    ) : (
      <><circle cx="75" cy="95" r="12" fill="#FFFFFF" /><circle cx="125" cy="95" r="12" fill="#FFFFFF" />
        <circle cx="75" cy="95" r="6" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="95" r="6" fill="#000000" className="pupil" style={pupilStyle} /></>
    )}
  </svg>
);

const coaches = [
  { id: 'bear', name: 'خرس بدنسازی', desc: 'آماده‌ای فولاد جا‌به‌جا کنیم؟!', Component: BearCoach },
  { id: 'monkey', name: 'میمون کلستنیکس', desc: 'نیروی جاذبه برای ما بی‌معنیه!', Component: MonkeyCoach },
  { id: 'rabbit', name: 'خرگوش چابک', desc: 'سرعت و انفجار! بهت نشون میدم!', Component: RabbitCoach },
  { id: 'panda', name: 'پاندا یوگا', desc: 'آرامش ذهن و انعطاف بدن...', Component: PandaCoach },
];

const BlinkingCoach = ({ Component, pupilStyle, isPasswordFocused }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    let timeout;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        timeout = setTimeout(triggerBlink, Math.random() * 4000 + 2000);
      }, 150);
    };
    timeout = setTimeout(triggerBlink, Math.random() * 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <Component pupilStyle={pupilStyle} isPasswordFocused={isPasswordFocused || isBlinking} />;
};

const FitnessApp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCoach, setSelectedCoach] = useState(null);
  const [authMode, setAuthMode] = useState('register');
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [mood, setMood] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [currentUser, setCurrentUser] = useState(null); // نگهداری کاربر وارد شده

  useEffect(() => {
    if (location.pathname === '/auth' && focusedField === 'username') {
      const activeInput = document.activeElement;
      if (activeInput) {
        const rect = activeInput.getBoundingClientRect();
        const inputCenterX = rect.left + rect.width / 2;
        const inputCenterY = rect.top + rect.height / 2;
        const x = (inputCenterX / window.innerWidth) * 10 - 5;
        const y = (inputCenterY / window.innerHeight) * 10 - 5;
        setPupilPos({ x, y });
      }
      return;
    }
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 10 - 5;
      const y = (e.clientY / window.innerHeight) * 10 - 5;
      setPupilPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [location.pathname, focusedField]);

  const pupilStyle = { transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` };

  // --- منطق جدید ثبت‌نام و ورود ---
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('fitness_users') || '[]');

    if (authMode === 'register') {
      // منطق ثبت‌نام
      if (formData.username.length < 4 || formData.password.length < 6) {
        setMood('sad');
        setTimeout(() => setMood('idle'), 1500);
        return;
      }
      
      const userExists = existingUsers.find(u => u.username === formData.username);
      if (userExists) {
        alert("این نام کاربری قبلاً ثبت شده است.");
        return;
      }

      const newUser = {
        username: formData.username,
        password: formData.password,
        coach: selectedCoach || 'bear' // ذخیره مربی انتخابی
      };

      existingUsers.push(newUser);
      localStorage.setItem('fitness_users', JSON.stringify(existingUsers));
      
      setMood('dancing');
      setTimeout(() => navigate('/success'), 2000);

    } else {
      // منطق ورود
      const user = existingUsers.find(
        u => u.username === formData.username && u.password === formData.password
      );

      if (user) {
        setCurrentUser(user);
        setSelectedCoach(user.coach); // مربیِ خود کاربر را ست کن
        setMood('dancing');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        setMood('sad');
        setTimeout(() => setMood('idle'), 1500);
        alert("نام کاربری یا رمز عبور اشتباه است.");
      }
    }
  };

  return (
    <main className="app-wrapper">
      <Routes>
        <Route path="/" element={
          <section className="container fade-in">
            <header className={`header ${selectedCoach ? 'hidden' : ''}`}>
              <h1>کدوم مربی رو انتخاب می‌کنی؟</h1>
            </header>
            <button className={`back-btn-top ${selectedCoach ? 'visible' : ''}`} onClick={() => setSelectedCoach(null)}>بازگشت</button>
            <div className="coaches-row">
              {coaches.map((coach) => (
                <div key={coach.id} className={`coach ${selectedCoach === coach.id ? 'active' : ''} ${selectedCoach && selectedCoach !== coach.id ? 'hidden-coach' : ''}`} onClick={() => setSelectedCoach(coach.id)}>
                  <div className="svg-wrapper">
                    <BlinkingCoach Component={coach.Component} pupilStyle={pupilStyle} />
                  </div>
                  <h3 className="coach-name">{coach.name}</h3>
                  {selectedCoach === coach.id && <div className="speech-bubble">{coach.desc}</div>}
                  <div className="action-buttons">
                    <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); setAuthMode('register'); navigate('/auth'); }}>ثبت‌نام</button>
                    <button className="btn btn-outline" onClick={(e) => { e.stopPropagation(); setAuthMode('login'); navigate('/auth'); }}>ورود</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        } />

        <Route path="/auth" element={
          <section className="split-screen fade-in">
            <div className={`characters-half ${mood === 'sad' ? 'mood-sad' : ''} ${mood === 'dancing' ? 'mood-dancing' : ''}`}>
              <div className="compact-coaches-container">
                {coaches.map(coach => (
                  <div key={coach.id} className="compact-coach">
                    <BlinkingCoach Component={coach.Component} pupilStyle={pupilStyle} isPasswordFocused={focusedField === 'password'} />
                  </div>
                ))}
              </div>
            </div>
            <div className="form-half">
              <div id="k1" className="form-box">
                <h2>{authMode === 'register' ? 'ثبت‌نام جدید' : 'ورود به حساب'}</h2>
                <form className="auth-form" onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="آیدی (نام کاربری)" onFocus={() => setFocusedField('username')} onBlur={() => setFocusedField(null)} onChange={(e) => setFormData({...formData, username: e.target.value})} required />
                  <input type="password" placeholder="رمز عبور" onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                  <button type="submit" className="btn btn-primary submit-btn">
                    {authMode === 'register' ? 'تایید و ثبت‌نام' : 'ورود'}
                  </button>
                  <button type="button" className="btn btn-outline back-form-btn" onClick={() => navigate('/')}>بازگشت</button>
                </form>
              </div>
            </div>
          </section>
        } />

        <Route path="/success" element={
          <div className="success-section fade-in">
            <div className="success-card">
              <h2>ثبت‌نام با موفقیت انجام شد!</h2>
              <p>حالا می‌توانید وارد شوید.</p>
              <button className="btn btn-primary" onClick={() => { setAuthMode('login'); navigate('/auth'); }}>بریم برای ورود</button>
            </div>
          </div>
        } />

        <Route path="/dashboard" element={
          <div className="next-page-section fade-in">
            <div style={{width: '150px', margin: '0 auto'}}>
               {/* نمایش مربیِ مخصوص این کاربر */}
               {selectedCoach && <BlinkingCoach Component={coaches.find(c => c.id === selectedCoach).Component} pupilStyle={pupilStyle} />}
            </div>
            <h1>خوش آمدی {currentUser?.username}! 💪</h1>
            <p>مربی {selectedCoach} منتظر تمرین امروزته.</p>
            <button className="btn btn-outline" onClick={() => navigate('/')}>خروج از حساب</button>
          </div>
        } />
      </Routes>
    </main>
  );
};

export default FitnessApp;
