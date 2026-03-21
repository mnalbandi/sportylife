import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const BearCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 260" width="100%" height="100%">
    {/* --- بدن اصلی --- */}
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

    {/* --- چشم‌ها --- */}
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

    {/* === دست چپ + دمبل === */}
    {/* بازو */}
    <rect x="10" y="130" width="30" height="14" rx="7" fill="#8B4513" transform="rotate(-30 10 130)" />
    {/* ساعد */}
    <rect x="2" y="152" width="28" height="12" rx="6" fill="#8B4513" transform="rotate(10 2 152)" />
    {/* میله دمبل */}
    <rect x="-8" y="168" width="44" height="7" rx="3" fill="#616161" />
    {/* وزنه چپ */}
    <ellipse cx="-8" cy="171" rx="7" ry="11" fill="#424242" />
    <ellipse cx="-8" cy="171" rx="4" ry="8" fill="#616161" />
    {/* وزنه راست */}
    <ellipse cx="36" cy="171" rx="7" ry="11" fill="#424242" />
    <ellipse cx="36" cy="171" rx="4" ry="8" fill="#616161" />

    {/* === دست راست + دمبل === */}
    <rect x="160" y="130" width="30" height="14" rx="7" fill="#8B4513" transform="rotate(30 190 130)" />
    <rect x="170" y="152" width="28" height="12" rx="6" fill="#8B4513" transform="rotate(-10 170 152)" />
    <rect x="164" y="168" width="44" height="7" rx="3" fill="#616161" />
    <ellipse cx="164" cy="171" rx="7" ry="11" fill="#424242" />
    <ellipse cx="164" cy="171" rx="4" ry="8" fill="#616161" />
    <ellipse cx="208" cy="171" rx="7" ry="11" fill="#424242" />
    <ellipse cx="208" cy="171" rx="4" ry="8" fill="#616161" />

    {/* === پاها === */}
    {/* پای چپ */}
    <rect x="58" y="175" width="28" height="45" rx="14" fill="#6D3B1E" />
    {/* کفش چپ */}
    <ellipse cx="68" cy="222" rx="20" ry="10" fill="#212121" />
    <ellipse cx="72" cy="220" rx="13" ry="7" fill="#424242" />
    {/* بند کفش */}
    <line x1="62" y1="216" x2="78" y2="216" stroke="#FFFFFF" strokeWidth="2" />
    <line x1="64" y1="220" x2="76" y2="220" stroke="#FFFFFF" strokeWidth="2" />

    {/* پای راست */}
    <rect x="114" y="175" width="28" height="45" rx="14" fill="#6D3B1E" />
    {/* کفش راست */}
    <ellipse cx="132" cy="222" rx="20" ry="10" fill="#212121" />
    <ellipse cx="128" cy="220" rx="13" ry="7" fill="#424242" />
    {/* بند کفش */}
    <line x1="122" y1="216" x2="138" y2="216" stroke="#FFFFFF" strokeWidth="2" />
    <line x1="124" y1="220" x2="136" y2="220" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
));

const MonkeyCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    {/* === حلقه‌های بارفیکس بالا === */}
    {/* تیر افقی */}
    <rect x="10" y="10" width="180" height="8" rx="4" fill="#5D4037" />
    {/* زنجیر چپ */}
    <line x1="45" y1="18" x2="45" y2="38" stroke="#9E9E9E" strokeWidth="3" />
    {/* حلقه چپ */}
    <ellipse cx="45" cy="44" rx="10" ry="7" fill="none" stroke="#9E9E9E" strokeWidth="3" />
    {/* زنجیر راست */}
    <line x1="155" y1="18" x2="155" y2="38" stroke="#9E9E9E" strokeWidth="3" />
    {/* حلقه راست */}
    <ellipse cx="155" cy="44" rx="10" ry="7" fill="none" stroke="#9E9E9E" strokeWidth="3" />

    {/* === بدن اصلی === */}
    <circle cx="30" cy="115" r="25" fill="#D2B48C" />
    <circle cx="170" cy="115" r="25" fill="#D2B48C" />
    <circle cx="100" cy="125" r="70" fill="#A0522D" />
    <path d="M 50 115 Q 100 65 150 115 L 150 155 Q 100 195 50 155 Z" fill="#D2B48C" />
    <circle cx="100" cy="155" r="25" fill="#FFE4B5" />
    <path d="M 85 160 Q 100 175 115 160" stroke="#3E2723" strokeWidth="3" fill="transparent" strokeLinecap="round" />
    <circle cx="100" cy="145" r="6" fill="#3E2723" />
    <ellipse cx="60" cy="160" rx="10" ry="6" fill="#FF8A80" opacity="0.6" />
    <ellipse cx="140" cy="160" rx="10" ry="6" fill="#FF8A80" opacity="0.6" />

    {/* --- چشم‌ها --- */}
    {isPasswordFocused ? (
      <>
        <path d="M 65 115 Q 75 125 85 115" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 115 Q 125 125 135 115" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="75" cy="115" r="14" fill="#FFFFFF" />
        <circle cx="125" cy="115" r="14" fill="#FFFFFF" />
        <circle cx="75" cy="115" r="7" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="115" r="7" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}

    {/* === دست چپ کشیده به سمت حلقه === */}
    <path d="M 48 118 Q 20 90 45 50" stroke="#A0522D" strokeWidth="14" fill="none" strokeLinecap="round" />
    {/* مچ و دست */}
    <circle cx="45" cy="50" r="8" fill="#D2B48C" />

    {/* === دست راست کشیده به سمت حلقه === */}
    <path d="M 152 118 Q 180 90 155 50" stroke="#A0522D" strokeWidth="14" fill="none" strokeLinecap="round" />
    <circle cx="155" cy="50" r="8" fill="#D2B48C" />

    {/* === پاها آویزان === */}
    {/* پای چپ */}
    <path d="M 80 188 Q 70 220 65 250" stroke="#A0522D" strokeWidth="16" fill="none" strokeLinecap="round" />
    {/* کفش چپ */}
    <ellipse cx="60" cy="254" rx="18" ry="9" fill="#E53935" />
    <ellipse cx="63" cy="251" rx="11" ry="6" fill="#EF9A9A" />

    {/* پای راست */}
    <path d="M 120 188 Q 130 220 135 250" stroke="#A0522D" strokeWidth="16" fill="none" strokeLinecap="round" />
    {/* کفش راست */}
    <ellipse cx="140" cy="254" rx="18" ry="9" fill="#E53935" />
    <ellipse cx="137" cy="251" rx="11" ry="6" fill="#EF9A9A" />
  </svg>
));

const RabbitCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    {/* --- گوش‌ها --- */}
    <ellipse cx="60" cy="50" rx="20" ry="60" fill="#E0E0E0" transform="rotate(-15 60 50)" />
    <ellipse cx="140" cy="50" rx="20" ry="60" fill="#E0E0E0" transform="rotate(15 140 50)" />
    <ellipse cx="60" cy="40" rx="10" ry="40" fill="#FFCDD2" transform="rotate(-15 60 40)" />
    <ellipse cx="140" cy="40" rx="10" ry="40" fill="#FFCDD2" transform="rotate(15 140 40)" />

    {/* --- بدن اصلی --- */}
    <circle cx="100" cy="145" r="65" fill="#E0E0E0" />
    <path d="M 90 160 L 100 170 L 110 160" stroke="#3E2723" strokeWidth="3" fill="transparent" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 100 150 L 95 160 L 105 160 Z" fill="#FF8A80" />
    <ellipse cx="65" cy="155" rx="12" ry="8" fill="#FF8A80" opacity="0.5" />
    <ellipse cx="135" cy="155" rx="12" ry="8" fill="#FF8A80" opacity="0.5" />

    {/* --- چشم‌ها --- */}
    {isPasswordFocused ? (
      <>
        <path d="M 70 125 Q 80 135 90 125" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 110 125 Q 120 135 130 125" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="80" cy="125" r="14" fill="#FFFFFF" />
        <circle cx="120" cy="125" r="14" fill="#FFFFFF" />
        <circle cx="80" cy="125" r="7" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="120" cy="125" r="7" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}

    {/* === دست چپ با حرکت دویدن === */}
    <path d="M 45 150 Q 25 135 18 118" stroke="#BDBDBD" strokeWidth="13" fill="none" strokeLinecap="round" />
    <circle cx="18" cy="115" r="9" fill="#E0E0E0" />

    {/* === دست راست با حرکت دویدن (جهت مخالف) === */}
    <path d="M 155 150 Q 175 165 182 182" stroke="#BDBDBD" strokeWidth="13" fill="none" strokeLinecap="round" />
    <circle cx="183" cy="185" r="9" fill="#E0E0E0" />

    {/* === پای چپ - لگد به جلو === */}
    <path d="M 78 205 Q 55 225 40 240" stroke="#BDBDBD" strokeWidth="15" fill="none" strokeLinecap="round" />
    {/* کفش دو چپ */}
    <ellipse cx="32" cy="244" rx="22" ry="10" fill="#1565C0" />
    <ellipse cx="36" cy="241" rx="14" ry="7" fill="#42A5F5" />
    {/* نوار کفش */}
    <line x1="25" y1="243" x2="48" y2="243" stroke="#FFFFFF" strokeWidth="2" />
    {/* خطوط سرعت */}
    <line x1="5" y1="238" x2="25" y2="235" stroke="#42A5F5" strokeWidth="2" strokeDasharray="3,2" opacity="0.7" />
    <line x1="2" y1="245" x2="22" y2="243" stroke="#42A5F5" strokeWidth="2" strokeDasharray="3,2" opacity="0.5" />
    <line x1="4" y1="252" x2="20" y2="251" stroke="#42A5F5" strokeWidth="2" strokeDasharray="3,2" opacity="0.3" />

    {/* === پای راست - پشت === */}
    <path d="M 122 205 Q 145 225 160 240" stroke="#BDBDBD" strokeWidth="15" fill="none" strokeLinecap="round" />
    {/* کفش دو راست */}
    <ellipse cx="168" cy="244" rx="22" ry="10" fill="#1565C0" />
    <ellipse cx="164" cy="241" rx="14" ry="7" fill="#42A5F5" />
    <line x1="155" y1="243" x2="178" y2="243" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
));

const PandaCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    {/* --- بدن اصلی --- */}
    <circle cx="40" cy="85" r="25" fill="#212121" />
    <circle cx="160" cy="85" r="25" fill="#212121" />
    <circle cx="100" cy="135" r="75" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2" />
    <path d="M 85 165 Q 100 180 115 165" stroke="#212121" strokeWidth="4" fill="transparent" strokeLinecap="round" />
    <ellipse cx="100" cy="150" rx="12" ry="8" fill="#212121" />
    <ellipse cx="60" cy="165" rx="15" ry="10" fill="#FF8A80" opacity="0.5" />
    <ellipse cx="140" cy="165" rx="15" ry="10" fill="#FF8A80" opacity="0.5" />
    <ellipse cx="75" cy="120" rx="25" ry="30" fill="#212121" transform="rotate(-20 75 120)" />
    <ellipse cx="125" cy="120" rx="25" ry="30" fill="#212121" transform="rotate(20 125 120)" />

    {/* --- چشم‌ها --- */}
    {isPasswordFocused ? (
      <>
        <path d="M 65 118 Q 75 128 85 118" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 115 118 Q 125 128 135 118" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="75" cy="118" r="12" fill="#FFFFFF" />
        <circle cx="125" cy="118" r="12" fill="#FFFFFF" />
        <circle cx="75" cy="118" r="6" fill="#000000" className="pupil" style={pupilStyle} />
        <circle cx="125" cy="118" r="6" fill="#000000" className="pupil" style={pupilStyle} />
      </>
    )}

    {/* === پوزیشن یوگا - نشسته === */}
    {/* پای چپ ضربدری */}
    <path d="M 55 200 Q 40 225 55 245" stroke="#212121" strokeWidth="14" fill="none" strokeLinecap="round" />
    {/* پای راست ضربدری */}
    <path d="M 145 200 Q 160 225 145 245" stroke="#212121" strokeWidth="14" fill="none" strokeLinecap="round" />
    {/* کف پای چپ */}
    <ellipse cx="72" cy="247" rx="22" ry="10" fill="#212121" />
    <ellipse cx="72" cy="245" rx="14" ry="7" fill="#424242" />
    {/* کف پای راست */}
    <ellipse cx="128" cy="247" rx="22" ry="10" fill="#212121" />
    <ellipse cx="128" cy="245" rx="14" ry="7" fill="#424242" />
    {/* خط وسط - نشستن لوتوس */}
    <path d="M 55 245 Q 100 258 145 245" stroke="#212121" strokeWidth="10" fill="none" strokeLinecap="round" />

    {/* === دست چپ - پوزیشن مدیتیشن === */}
    <path d="M 42 175 Q 30 210 52 232" stroke="#212121" strokeWidth="13" fill="none" strokeLinecap="round" />
    {/* کف دست چپ روی زانو - دایره مدیتیشن */}
    <circle cx="56" cy="235" r="10" fill="#424242" />
    <circle cx="56" cy="235" r="6" fill="#212121" />
    {/* نشانه یوگا - انگشتان */}
    <circle cx="56" cy="235" r="3" fill="#BDBDBD" />

    {/* === دست راست - پوزیشن مدیتیشن === */}
    <path d="M 158 175 Q 170 210 148 232" stroke="#212121" strokeWidth="13" fill="none" strokeLinecap="round" />
    <circle cx="144" cy="235" r="10" fill="#424242" />
    <circle cx="144" cy="235" r="6" fill="#212121" />
    <circle cx="144" cy="235" r="3" fill="#BDBDBD" />

    {/* === ذرات انرژی اطراف === */}
    <circle cx="20" cy="120" r="4" fill="#A5D6A7" opacity="0.8" />
    <circle cx="15" cy="140" r="3" fill="#80CBC4" opacity="0.6" />
    <circle cx="25" cy="160" r="5" fill="#A5D6A7" opacity="0.7" />
    <circle cx="180" cy="120" r="4" fill="#A5D6A7" opacity="0.8" />
    <circle cx="185" cy="140" r="3" fill="#80CBC4" opacity="0.6" />
    <circle cx="175" cy="160" r="5" fill="#A5D6A7" opacity="0.7" />
    {/* خطوط انرژی */}
    <path d="M 18 110 Q 12 120 18 130" stroke="#A5D6A7" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M 182 110 Q 188 120 182 130" stroke="#A5D6A7" strokeWidth="2" fill="none" opacity="0.5" />
  </svg>
));

// --- coaches آرایه خارج از کامپوننت تا در هر رندر دوباره ساخته نشه ---
const coaches = [
  { id: 'bear', name: 'خرس بدنسازی', desc: 'آماده‌ای فولاد جا‌به‌جا کنیم؟!', Component: BearCoach },
  { id: 'monkey', name: 'میمون کلستنیکس', desc: 'نیروی جاذبه برای ما بی‌معنیه!', Component: MonkeyCoach },
  { id: 'rabbit', name: 'خرگوش چابک', desc: 'سرعت و انفجار! بهت نشون میدم!', Component: RabbitCoach },
  { id: 'panda', name: 'پاندا یوگا', desc: 'آرامش ذهن و انعطاف بدن...', Component: PandaCoach },
];

// --- BlinkingCoach با useRef برای timer تا re-render کمتر ---
const BlinkingCoach = memo(({ Component, pupilStyle, isPasswordFocused }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let timeout;

    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        // استفاده از تاخیر تصادفی برای طبیعی‌تر بودن
        timeout = setTimeout(triggerBlink, Math.random() * 4000 + 2000);
      }, 150);
    };

    timeout = setTimeout(triggerBlink, Math.random() * 3000);
    return () => clearTimeout(timeout);
  }, []); // آرایه خالی: فقط یک بار mount می‌شه

  // useMemo برای جلوگیری از ساخت مجدد prop ترکیبی
  const combinedPasswordFocus = useMemo(
    () => isPasswordFocused || isBlinking,
    [isPasswordFocused, isBlinking]
  );

  return <Component pupilStyle={pupilStyle} isPasswordFocused={combinedPasswordFocus} />;
});

const FitnessApp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCoach, setSelectedCoach] = useState(null);
  const [authMode, setAuthMode] = useState('register');
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [mood, setMood] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [currentUser, setCurrentUser] = useState(null);

  // --- throttle برای mousemove تا هر 16ms یک‌بار اجرا بشه (60fps) ---
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

    let rafId;
    const handleMouseMove = (e) => {
      // استفاده از requestAnimationFrame برای throttle طبیعی
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 10 - 5;
        const y = (e.clientY / window.innerHeight) * 10 - 5;
        setPupilPos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname, focusedField]);

  // --- useMemo برای pupilStyle تا آبجکت جدید فقط وقتی لازمه ساخته بشه ---
  const pupilStyle = useMemo(
    () => ({ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }),
    [pupilPos.x, pupilPos.y]
  );

  // --- useCallback برای handler های فرم ---
  const handleUsernameChange = useCallback(
    (e) => setFormData((prev) => ({ ...prev, username: e.target.value })),
    []
  );
  const handlePasswordChange = useCallback(
    (e) => setFormData((prev) => ({ ...prev, password: e.target.value })),
    []
  );
  const handleUsernameFocus = useCallback(() => setFocusedField('username'), []);
  const handlePasswordFocus = useCallback(() => setFocusedField('password'), []);
  const handleFieldBlur = useCallback(() => setFocusedField(null), []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const existingUsers = JSON.parse(localStorage.getItem('fitness_users') || '[]');

      if (authMode === 'register') {
        if (formData.username.length < 4 || formData.password.length < 6) {
          setMood('sad');
          setTimeout(() => setMood('idle'), 1500);
          return;
        }

        const userExists = existingUsers.find((u) => u.username === formData.username);
        if (userExists) {
          alert('این نام کاربری قبلاً ثبت شده است.');
          return;
        }

        const newUser = {
          username: formData.username,
          password: formData.password,
          coach: selectedCoach || 'bear',
        };

        existingUsers.push(newUser);
        localStorage.setItem('fitness_users', JSON.stringify(existingUsers));

        setMood('dancing');
        setTimeout(() => navigate('/success'), 2000);
      } else {
        const user = existingUsers.find(
          (u) => u.username === formData.username && u.password === formData.password
        );

        if (user) {
          setCurrentUser(user);
          setSelectedCoach(user.coach);
          setMood('dancing');
          setTimeout(() => navigate('/dashboard'), 1500);
        } else {
          setMood('sad');
          setTimeout(() => setMood('idle'), 1500);
          alert('نام کاربری یا رمز عبور اشتباه است.');
        }
      }
    },
    [authMode, formData, selectedCoach, navigate]
  );

  // --- useCallback برای navigation handler ها ---
  const goToRegister = useCallback(
    (e) => {
      e.stopPropagation();
      setAuthMode('register');
      navigate('/auth');
    },
    [navigate]
  );

  const goToLogin = useCallback(
    (e) => {
      e.stopPropagation();
      setAuthMode('login');
      navigate('/auth');
    },
    [navigate]
  );

  const goToLoginFromSuccess = useCallback(() => {
    setAuthMode('login');
    navigate('/auth');
  }, [navigate]);

  const goHome = useCallback(() => navigate('/'), [navigate]);

  // --- useMemo برای پیدا کردن مربی فعلی ---
  const activeCoachData = useMemo(
    () => coaches.find((c) => c.id === selectedCoach),
    [selectedCoach]
  );

  return (
    <main className="app-wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <section className="container fade-in">
              <header className={`header ${selectedCoach ? 'hidden' : ''}`}>
                <h1>کدوم مربی رو انتخاب می‌کنی؟</h1>
              </header>
              <button
                className={`back-btn-top ${selectedCoach ? 'visible' : ''}`}
                onClick={() => setSelectedCoach(null)}
              >
                بازگشت
              </button>
              <div className="coaches-row">
                {coaches.map((coach) => (
                  <div
                    key={coach.id}
                    className={`coach ${selectedCoach === coach.id ? 'active' : ''} ${
                      selectedCoach && selectedCoach !== coach.id ? 'hidden-coach' : ''
                    }`}
                    onClick={() => setSelectedCoach(coach.id)}
                  >
                    <div className="svg-wrapper">
                      <BlinkingCoach Component={coach.Component} pupilStyle={pupilStyle} />
                    </div>
                    <h3 className="coach-name">{coach.name}</h3>
                    {selectedCoach === coach.id && (
                      <div className="speech-bubble">{coach.desc}</div>
                    )}
                    <div className="action-buttons">
                      <button className="btn btn-primary" onClick={goToRegister}>
                        ثبت‌نام
                      </button>
                      <button className="btn btn-outline" onClick={goToLogin}>
                        ورود
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          }
        />

        <Route
          path="/auth"
          element={
            <section
              className={`split-screen fade-in ${mood === 'sad' ? 'mood-sad' : ''} ${
                mood === 'dancing' ? 'mood-dancing' : ''
              }`}
            >
              <div className="characters-half">
                <div className="compact-coaches-container">
                  {coaches.map((coach) => (
                    <div key={coach.id} className="compact-coach">
                      <BlinkingCoach
                        Component={coach.Component}
                        pupilStyle={pupilStyle}
                        isPasswordFocused={focusedField === 'password'}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-half">
                <div id="k1" className="form-box">
                  <h2>{authMode === 'register' ? 'ثبت‌نام جدید' : 'ورود به حساب'}</h2>
                  <form className="auth-form" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      placeholder="آیدی (نام کاربری)"
                      onFocus={handleUsernameFocus}
                      onBlur={handleFieldBlur}
                      onChange={handleUsernameChange}
                      required
                    />
                    <input
                      type="password"
                      placeholder="رمز عبور"
                      onFocus={handlePasswordFocus}
                      onBlur={handleFieldBlur}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button type="submit" className="btn btn-primary submit-btn">
                      {authMode === 'register' ? 'تایید و ثبت‌نام' : 'ورود'}
                    </button>
                    <button type="button" className="btn btn-outline back-form-btn" onClick={goHome}>
                      بازگشت
                    </button>
                  </form>
                </div>
              </div>
            </section>
          }
        />

        <Route
          path="/success"
          element={
            <div className="success-section fade-in">
              <div className="success-card">
                <h2>ثبت‌نام با موفقیت انجام شد!</h2>
                <p>حالا می‌توانید وارد شوید.</p>
                <button className="btn btn-primary" onClick={goToLoginFromSuccess}>
                  بریم برای ورود
                </button>
              </div>
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <div className="next-page-section fade-in">
              <div style={{ width: '150px', margin: '0 auto' }}>
                {activeCoachData && (
                  <BlinkingCoach
                    Component={activeCoachData.Component}
                    pupilStyle={pupilStyle}
                  />
                )}
              </div>
              <h1>خوش آمدی {currentUser?.username}! 💪</h1>
              <p>مربی {selectedCoach} منتظر تمرین امروزته.</p>
              <button className="btn btn-outline" onClick={goHome}>
                خروج از حساب
              </button>
            </div>
          }
        />
      </Routes>
    </main>
  );
};

export default FitnessApp;
