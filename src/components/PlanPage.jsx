import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanPage.css';

const PlanPage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userPlans, setUserPlans] = useState([]);
  const [activeTab, setActiveTab] = useState('browse'); // browse | myplans

  // دیتابیس برنامه‌های ورزشی بر اساس مربی
  const workoutDatabase = useMemo(() => ({
    bear: [
      {
        id: 'bear-1',
        name: 'برنامه قدرتی مبتدی',
        duration: '8 هفته',
        level: 'مبتدی',
        days: 3,
        exercises: [
          { name: 'اسکات', sets: 3, reps: '8-10', rest: '90s' },
          { name: 'پرس سینه', sets: 3, reps: '8-10', rest: '90s' },
          { name: 'ددلیفت', sets: 3, reps: '6-8', rest: '120s' },
          { name: 'پرس سرشانه', sets: 3, reps: '8-10', rest: '90s' },
        ]
      },
      {
        id: 'bear-2',
        name: 'برنامه حجمی پیشرفته',
        duration: '12 هفته',
        level: 'پیشرفته',
        days: 5,
        exercises: [
          { name: 'اسکات', sets: 4, reps: '10-12', rest: '60s' },
          { name: 'لگ پرس', sets: 4, reps: '12-15', rest: '60s' },
          { name: 'پرس سینه', sets: 4, reps: '10-12', rest: '60s' },
          { name: 'پرس شیب‌دار', sets: 3, reps: '10-12', rest: '60s' },
          { name: 'زیربغل', sets: 4, reps: '8-10', rest: '90s' },
        ]
      },
      {
        id: 'bear-3',
        name: 'برنامه قدرت خالص',
        duration: '6 هفته',
        level: 'حرفه‌ای',
        days: 4,
        exercises: [
          { name: 'اسکات سنگین', sets: 5, reps: '3-5', rest: '180s' },
          { name: 'پرس سینه سنگین', sets: 5, reps: '3-5', rest: '180s' },
          { name: 'ددلیفت سنگین', sets: 5, reps: '1-3', rest: '240s' },
        ]
      }
    ],
    monkey: [
      {
        id: 'monkey-1',
        name: 'کلستنیکس پایه',
        duration: '6 هفته',
        level: 'مبتدی',
        days: 3,
        exercises: [
          { name: 'شنا', sets: 3, reps: '5-8', rest: '90s' },
          { name: 'بارفیکس', sets: 3, reps: '3-5', rest: '90s' },
          { name: 'دیپ', sets: 3, reps: '5-8', rest: '90s' },
          { name: 'پلانک', sets: 3, reps: '30-45s', rest: '60s' },
        ]
      },
      {
        id: 'monkey-2',
        name: 'مهارت‌های پیشرفته',
        duration: '12 هفته',
        level: 'پیشرفته',
        days: 4,
        exercises: [
          { name: 'شنای یک دست', sets: 3, reps: '3-5', rest: '120s' },
          { name: 'بارفیکس وزنه‌دار', sets: 4, reps: '6-8', rest: '120s' },
          { name: 'هندستند', sets: 3, reps: '20-30s', rest: '90s' },
          { name: 'فرانت لور', sets: 3, reps: '10-15s', rest: '90s' },
        ]
      },
      {
        id: 'monkey-3',
        name: 'استاتیک و دینامیک',
        duration: '10 هفته',
        level: 'حرفه‌ای',
        days: 5,
        exercises: [
          { name: 'پلانچ', sets: 5, reps: '5-10s', rest: '120s' },
          { name: 'فول پلانچ پوش‌آپ', sets: 3, reps: '3-5', rest: '180s' },
          { name: 'بک لور', sets: 4, reps: '10-15s', rest: '90s' },
          { name: 'ماسل‌آپ', sets: 4, reps: '5-8', rest: '120s' },
        ]
      }
    ],
    rabbit: [
      {
        id: 'rabbit-1',
        name: 'سرعت و چابکی مبتدی',
        duration: '6 هفته',
        level: 'مبتدی',
        days: 3,
        exercises: [
          { name: 'دوی سرعتی', sets: 5, reps: '50m', rest: '120s' },
          { name: 'جامپ اسکات', sets: 3, reps: '15', rest: '60s' },
          { name: 'برپی', sets: 3, reps: '10', rest: '60s' },
          { name: 'لانج پرشی', sets: 3, reps: '10', rest: '60s' },
        ]
      },
      {
        id: 'rabbit-2',
        name: 'HIIT پیشرفته',
        duration: '8 هفته',
        level: 'پیشرفته',
        days: 4,
        exercises: [
          { name: 'اسپرینت', sets: 8, reps: '100m', rest: '90s' },
          { name: 'باکس جامپ', sets: 4, reps: '12', rest: '60s' },
          { name: 'کتل‌بل سوئینگ', sets: 4, reps: '20', rest: '60s' },
          { name: 'بتل روپ', sets: 3, reps: '30s', rest: '60s' },
        ]
      },
      {
        id: 'rabbit-3',
        name: 'انفجار و قدرت',
        duration: '10 هفته',
        level: 'حرفه‌ای',
        days: 5,
        exercises: [
          { name: 'پاور کلین', sets: 5, reps: '3-5', rest: '180s' },
          { name: 'اسنچ', sets: 5, reps: '2-3', rest: '180s' },
          { name: 'باکس جامپ سنگین', sets: 4, reps: '5', rest: '120s' },
          { name: 'دوی تپه', sets: 6, reps: '30s', rest: '120s' },
        ]
      }
    ],
    panda: [
      {
        id: 'panda-1',
        name: 'یوگا مبتدی',
        duration: '4 هفته',
        level: 'مبتدی',
        days: 3,
        exercises: [
          { name: 'سلام به خورشید', sets: 3, reps: '5 دور', rest: '30s' },
          { name: 'حالت کودک', sets: 1, reps: '2 دقیقه', rest: '0s' },
          { name: 'حالت درخت', sets: 2, reps: '30s', rest: '30s' },
          { name: 'حالت گربه-گاو', sets: 3, reps: '10', rest: '30s' },
        ]
      },
      {
        id: 'panda-2',
        name: 'یوگا پیشرفته',
        duration: '8 هفته',
        level: 'پیشرفته',
        days: 4,
        exercises: [
          { name: 'هدستند', sets: 3, reps: '30-60s', rest: '60s' },
          { name: 'چرخ کامل', sets: 3, reps: '5', rest: '60s' },
          { name: 'کبوتر پرنده', sets: 2, reps: '45s', rest: '30s' },
          { name: 'حالت کلاغ', sets: 3, reps: '20-30s', rest: '60s' },
        ]
      },
      {
        id: 'panda-3',
        name: 'مدیتیشن و انعطاف',
        duration: '12 هفته',
        level: 'حرفه‌ای',
        days: 5,
        exercises: [
          { name: 'اسپلیت کامل', sets: 1, reps: '3 دقیقه', rest: '0s' },
          { name: 'پل کامل', sets: 3, reps: '45s', rest: '60s' },
          { name: 'حالت عقرب', sets: 3, reps: '30s', rest: '60s' },
          { name: 'مدیتیشن عمیق', sets: 1, reps: '15 دقیقه', rest: '0s' },
        ]
      }
    ]
  }), []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/');
      return;
    }
    setCurrentUser(user);

    const allUsers = JSON.parse(localStorage.getItem('fitness_users') || '[]');
    const foundUser = allUsers.find(u => u.username === user.username);
    if (foundUser && foundUser.savedPlans) {
      setUserPlans(foundUser.savedPlans);
    }
  }, [navigate]);

  const availablePlans = useMemo(() => {
    if (!currentUser?.coach) return [];
    return workoutDatabase[currentUser.coach] || [];
  }, [currentUser, workoutDatabase]);

  const handleSavePlan = (plan) => {
    const allUsers = JSON.parse(localStorage.getItem('fitness_users') || '[]');
    const userIndex = allUsers.findIndex(u => u.username === currentUser.username);
    
    if (userIndex !== -1) {
      const existingPlans = allUsers[userIndex].savedPlans || [];
      const planExists = existingPlans.some(p => p.id === plan.id);
      
      if (!planExists) {
        allUsers[userIndex].savedPlans = [...existingPlans, { ...plan, savedAt: new Date().toISOString() }];
        localStorage.setItem('fitness_users', JSON.stringify(allUsers));
        setUserPlans(allUsers[userIndex].savedPlans);
        alert('برنامه با موفقیت ذخیره شد!');
      } else {
        alert('این برنامه قبلاً ذخیره شده است.');
      }
    }
  };

  const handleRemovePlan = (planId) => {
    const allUsers = JSON.parse(localStorage.getItem('fitness_users') || '[]');
    const userIndex = allUsers.findIndex(u => u.username === currentUser.username);
    
    if (userIndex !== -1) {
      allUsers[userIndex].savedPlans = (allUsers[userIndex].savedPlans || []).filter(p => p.id !== planId);
      localStorage.setItem('fitness_users', JSON.stringify(allUsers));
      setUserPlans(allUsers[userIndex].savedPlans);
    }
  };

  if (!currentUser) return null;

  return (
    <div className="plan-page">
      <header className="plan-header">
        <button className="back-btn" onClick={() => navigate('/profile')}>
          ← بازگشت
        </button>
        <h1>برنامه‌های ورزشی</h1>
      </header>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          مرور برنامه‌ها
        </button>
        <button 
          className={`tab ${activeTab === 'myplans' ? 'active' : ''}`}
          onClick={() => setActiveTab('myplans')}
        >
          برنامه‌های من ({userPlans.length})
        </button>
      </div>

      {activeTab === 'browse' && (
        <div className="plans-grid">
          {availablePlans.map(plan => (
            <div key={plan.id} className="plan-card">
              <div className="plan-header-card">
                <h3>{plan.name}</h3>
                <span className={`level-badge ${plan.level}`}>{plan.level}</span>
              </div>
              <div className="plan-info">
                <p>⏱ مدت: {plan.duration}</p>
                <p>📅 {plan.days} روز در هفته</p>
              </div>
              <div className="exercises-list">
                {plan.exercises.map((ex, idx) => (
                  <div key={idx} className="exercise-item">
                    <span className="exercise-name">{ex.name}</span>
                    <span className="exercise-details">
                      {ex.sets} ست × {ex.reps} | استراحت: {ex.rest}
                    </span>
                  </div>
                ))}
              </div>
              <button 
                className="save-plan-btn"
                onClick={() => handleSavePlan(plan)}
              >
                ذخیره برنامه
              </button>
              <button 
                className="view-detail-btn"
                onClick={() => setSelectedPlan(plan)}
              >
                مشاهده جزئیات
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'myplans' && (
        <div className="plans-grid">
          {userPlans.length === 0 ? (
            <div className="empty-state">
              <p>هنوز برنامه‌ای ذخیره نکرده‌اید</p>
              <button onClick={() => setActiveTab('browse')}>مرور برنامه‌ها</button>
            </div>
          ) : (
            userPlans.map(plan => (
              <div key={plan.id} className="plan-card saved">
                <div className="plan-header-card">
                  <h3>{plan.name}</h3>
                  <span className={`level-badge ${plan.level}`}>{plan.level}</span>
                </div>
                <div className="plan-info">
                  <p>⏱ مدت: {plan.duration}</p>
                  <p>📅 {plan.days} روز در هفته</p>
                  <p className="saved-date">ذخیره شده: {new Date(plan.savedAt).toLocaleDateString('fa-IR')}</p>
                </div>
                <div className="exercises-list">
                  {plan.exercises.map((ex, idx) => (
                    <div key={idx} className="exercise-item">
                      <span className="exercise-name">{ex.name}</span>
                      <span className="exercise-details">
                        {ex.sets} ست × {ex.reps} | استراحت: {ex.rest}
                      </span>
                    </div>
                  ))}
                </div>
                <button 
                  className="remove-plan-btn"
                  onClick={() => handleRemovePlan(plan.id)}
                >
                  حذف برنامه
                </button>
                <button 
                  className="view-detail-btn"
                  onClick={() => setSelectedPlan(plan)}
                >
                  مشاهده جزئیات
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {selectedPlan && (
        <div className="modal-overlay" onClick={() => setSelectedPlan(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPlan(null)}>×</button>
            <h2>{selectedPlan.name}</h2>
            <div className="modal-details">
              <p><strong>سطح:</strong> {selectedPlan.level}</p>
              <p><strong>مدت:</strong> {selectedPlan.duration}</p>
              <p><strong>تعداد روز:</strong> {selectedPlan.days} روز در هفته</p>
            </div>
            <h3>تمرینات:</h3>
            <div className="exercises-detail">
              {selectedPlan.exercises.map((ex, idx) => (
                <div key={idx} className="exercise-detail-item">
                  <h4>{idx + 1}. {ex.name}</h4>
                  <p>ست‌ها: {ex.sets}</p>
                  <p>تکرار: {ex.reps}</p>
                  <p>استراحت: {ex.rest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanPage;
