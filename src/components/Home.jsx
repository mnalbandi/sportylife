import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Tablo from './tablo';
import UserInfoPage from './UserInfoPage';
import ProfilePage from './ProfilePage';
import { BearCoach, MonkeyCoach, RabbitCoach, PandaCoach } from "./Coaches";
import PlanPage from './PlanPage';












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
        // بخش لاگین
        const user = existingUsers.find(
          (u) => u.username === formData.username && u.password === formData.password
        );

        if (user) {
          // ۱. استیت‌های سراسری آپدیت می‌شوند
          setCurrentUser(user);
          setSelectedCoach(user.coach);
          
          // ۲. ذخیره کاربر فعلی در لوکال استوریج (برای استفاده در صفحات info و profile)
          localStorage.setItem('currentUser', JSON.stringify(user));

          setMood('dancing');
          
          // ۳. بررسی وجود قد و وزن و مسیریابی هوشمند
          setTimeout(() => {
            if (user.height && user.weight) {
              // اگر قد و وزن قبلاً ثبت شده، برو به صفحه پروفایل
              navigate('/profile');
            } else {
              // اگر ثبت نشده، برو به صفحه دریافت اطلاعات
              navigate('/info');
            }
          }, 1500);
           
        } else {
          setMood('sad');
          setTimeout(() => setMood('idle'), 1500);
          alert('نام کاربری یا رمز عبور اشتباه است.');
        }
      }
    },
    // فراموش نکنید setCurrentUser را هم به آرایه وابستگی‌ها اضافه کنید
    [authMode, formData, selectedCoach, navigate, setCurrentUser] 
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
               <Tablo/>
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
  path="/info"
  element={
    <UserInfoPage 
      currentUser={currentUser}
      activeCoachData={activeCoachData}
      pupilStyle={pupilStyle}
      goHome={goHome}
      selectedCoach={selectedCoach}
      setCurrentUser={setCurrentUser} // اگر استیت currentUser را در App.js دارید، تابع ست‌کننده آن را پاس دهید
    />
  }
/>
<Route path='/profile' element={<ProfilePage/>} />
<Route path='/plan' element={<PlanPage/>} />

      </Routes>
    </main>
  );
};

export default FitnessApp;
