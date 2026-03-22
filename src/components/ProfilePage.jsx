// ProfilePage.jsx
import React, { useState, useEffect, useMemo, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

import { BearCoach, MonkeyCoach, RabbitCoach, PandaCoach } from "./Coaches";
import { BearAvatar, MonkeyAvatar, RabbitAvatar, PandaAvatar } from "./UserInfoPage";

// ─── Mappings ────────────────────────────────────────────────────────────────
const AVATAR_COMPONENTS = {
  bear:   BearAvatar,
  monky: MonkeyAvatar,
  rabbit: RabbitAvatar,
  panda:  PandaAvatar,
};



const coachesMap = {
  bear:   { name: "خرس بدنساز",       Component: BearCoach   },
  monkey: { name: "میمون کالیستنیکس",  Component: MonkeyCoach },
  rabbit: { name: "خرگوش چابک",       Component: RabbitCoach },
  panda:  { name: "پاندا یوگا",        Component: PandaCoach  },
};

const coachQuestions = [
  { id: "body",    text: "وضعیت بدنی من چطوره؟", icon: "📊" },
  { id: "workout", text: "امروز چه تمرینی کنم؟",  icon: "🏋️" },
  { id: "motivation", text: "بهم انگیزه بده!",    icon: "🔥" },
];

// ─── BMI Helper ───────────────────────────────────────────────────────────────
const getBmiData = (heightCm, weightKg) => {
  const heightM = heightCm / 100;
  const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

  let status, color, statusIcon;
  if      (bmi < 18.5)  { status = "کمبود وزن" ;  color = "#00b8ff"; statusIcon = "❄️"; }
  else if (bmi <= 24.9) { status = "وزن نرمال";  color = "#00ff88"; statusIcon = "✅"; }
  else if (bmi <= 29.9) { status = "اضافه وزن";  color = "#ffcc00"; statusIcon = "⚠️"; }
  else                  { status = "چاقی";        color = "#ff4444"; statusIcon = "🔴"; }

  const percent = Math.min(Math.max(((bmi - 15) / (40 - 15)) * 100, 2), 98);
  return { value: bmi, status, color, statusIcon, percent };
};

// ─── Blinking Coach ───────────────────────────────────────────────────────────
const BlinkingCoach = memo(({ Component, pupilStyle }) => {
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

  return <Component pupilStyle={pupilStyle} isPasswordFocused={isBlinking} />;
});

// ─── Main Component ───────────────────────────────────────────────────────────
const ProfilePage = () => {
  const navigate = useNavigate();

  const [userData,      setUserData]      = useState(null);
  const [bmiData,       setBmiData]       = useState({
    value: 0, status: "", percent: 0, color: "#00ff88", statusIcon: "",
  });
  const [coachReply,    setCoachReply]    = useState("در حال ارتباط با مربی...");
  const [activeBubble,  setActiveBubble]  = useState(null);
  const [isReplying,    setIsReplying]    = useState(false);
  const [pupilPos,      setPupilPos]      = useState({ x: 0, y: 0 });

  // ── NEW: workout options state ──────────────────────────────────────────────
  const [showWorkoutOptions, setShowWorkoutOptions] = useState(false);

  // ── Mouse → pupil tracking ──────────────────────────────────────────────────
  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPupilPos({
          x: (e.clientX / window.innerWidth)  * 10 - 5,
          y: (e.clientY / window.innerHeight) * 10 - 5,
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const pupilStyle = useMemo(
    () => ({ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }),
    [pupilPos.x, pupilPos.y]
  );

  // ── Load user data ──────────────────────────────────────────────────────────
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!storedUser || !storedUser.height || !storedUser.weight) {
      navigate("/info");
      return;
    }
    setUserData(storedUser);
    setBmiData(getBmiData(storedUser.height, storedUser.weight));
    const coachName = coachesMap[storedUser.coach]?.name || "مربی";
    setCoachReply(`سلام قهرمان! من ${coachName} هستم. آماده‌ام کمکت کنم 💪`);
  }, [navigate]);

  // ── Coach interaction ───────────────────────────────────────────────────────
  const handleCoachInteraction = useCallback((questionId) => {
    if (isReplying) return;

    // Reset workout options on every new question
    setShowWorkoutOptions(false);
    setActiveBubble(questionId);
    setIsReplying(true);
    setCoachReply("...");

    setTimeout(() => {
      const bmi = bmiData.value;

      if (questionId === "workout") {
        // ── Show the two workout options ──────────────────────────────────
        setCoachReply("می‌خوای چیکار کنی؟ 🤔");
        setShowWorkoutOptions(true);
        setIsReplying(false);
        return;
      }

      let reply = "";
      if (questionId === "body") {
        if      (bmi < 18.5)  reply = `شاخص توده بدنیت ${bmi} هست. باید روی تغذیه و حجم‌گیری تمرکز کنیم! 🍗`;
        else if (bmi <= 24.9) reply = `وضعیتت عالیه! BMI برابر ${bmi} یعنی دقیقاً تو محدوده نرمالی 🎯`;
        else                  reply = `BMI تو ${bmi} هست. باید هوازی رو بیشتر کنیم و مراقب کالری‌ها باشیم 🏃`;
      } else if (questionId === "motivation") {
        reply = `هیچکس از روز اول قهرمان نبوده ${userData?.username}! تو از دیروز قوی‌تری. بریم! 🔥`;
      } else {
        reply = "من همیشه اینجام تا کمکت کنم.";
      }

      setCoachReply(reply);
      setIsReplying(false);
    }, 600);
  }, [isReplying, bmiData.value, userData]);

  // ── Workout option click → navigate ────────────────────────────────────────
  const handleWorkoutOptionClick = useCallback((option) => {
    setShowWorkoutOptions(false);
    setCoachReply(
      option === "new"
        ? "بریم یه برنامه جدید بسازیم! 🚀"
        : "بریم برنامه‌هات رو ببینیم! 📋"
    );
    setTimeout(() => navigate("/plan"), 600);
  }, [navigate]);

  // ── Logout ──────────────────────────────────────────────────────────────────
  const handleLogout = useCallback(() => {
    localStorage.removeItem("currentUser");
    navigate("/");
  }, [navigate]);

  // ── Loading guard ────────────────────────────────────────────────────────────
  if (!userData) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  const UserAvatarComponent  = AVATAR_COMPONENTS[userData.avatar] || null;
  const activeCoach          = coachesMap[userData.coach] || coachesMap.bear;
  const ActiveCoachComponent = activeCoach.Component;

  return (
    <div className="profile-container">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="profile-header">
        <div
          className="header-bg-glow"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${bmiData.color}22 0%, transparent 70%)`,
          }}
        />

        <div className="avatar-ring" style={{ "--ring-color": bmiData.color }}>
          <div className="avatar-inner">
            {UserAvatarComponent
              ? <UserAvatarComponent />
              : (
                <svg viewBox="0 0 200 260">
                  <circle cx="100" cy="100" r="50" fill="#444" />
                  <path d="M40 220 Q100 150 160 220" fill="#444" />
                </svg>
              )
            }
          </div>
        </div>

        <h1 className="user-name">{userData.username}</h1>

        <div className="user-stats-row">
          <span className="stat-chip">📏 {userData.height} cm</span>
          <span className="stat-chip">⚖️ {userData.weight} kg</span>
          <span
            className="stat-chip"
            style={{ color: bmiData.color, borderColor: `${bmiData.color}55` }}
          >
            {bmiData.statusIcon} {bmiData.status}
          </span>
        </div>
      </div>

      {/* ── BMI Card ────────────────────────────────────────────────────────── */}
      <div dir="ltr" className="card bmi-card">
        <div className="card-header">
          <span className="card-icon">📈</span>
          <h2 className="card-title">شاخص توده بدنی</h2>
          <span
            className="bmi-badge"
            style={{
              background:  `${bmiData.color}22`,
              color:        bmiData.color,
              border:      `1px solid ${bmiData.color}55`,
            }}
          >
            {bmiData.value}
          </span>
        </div>

        <div className="bmi-bar-wrap">
          <div className="bmi-gradient-bar" />
          <div
            className="bmi-pointer"
            style={{ left: `${bmiData.percent}%`, "--ptr-color": bmiData.color }}
          >
            <div className="bmi-pointer-dot" />
            <div className="bmi-pointer-label">{bmiData.value}</div>
          </div>
        </div>

        <div className="bmi-labels">
          <span>کمبود وزن</span>
          <span>نرمال</span>
          <span>اضافه وزن</span>
          <span>چاقی</span>
        </div>

        <div className="bmi-ranges">
          {[
            { label: "< 18.5",    color: "#00b8ff", active: bmiData.value < 18.5 },
            { label: "18.5–24.9", color: "#00ff88", active: bmiData.value >= 18.5 && bmiData.value <= 24.9 },
            { label: "25–29.9",   color: "#ffcc00", active: bmiData.value >= 25   && bmiData.value <= 29.9 },
            { label: "≥ 30",      color: "#ff4444", active: bmiData.value >= 30 },
          ].map((r) => (
            <div
              key={r.label}
              className={`bmi-range-item ${r.active ? "bmi-range-active" : ""}`}
              style={r.active
                ? { background: `${r.color}22`, borderColor: `${r.color}88`, color: r.color }
                : {}
              }
            >
              {r.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Coach Card ──────────────────────────────────────────────────────── */}
      <div className="card coach-card">
        <div className="card-header">
          <span className="card-icon">🏅</span>
          <h2 className="card-title">مربی اختصاصی</h2>
          <span className="coach-name-badge">{activeCoach.name}</span>
        </div>

        {/* Question Bubbles */}
        <div className="question-bubbles">
          {coachQuestions.map((q) => (
            <button
              key={q.id}
              className={`q-bubble ${activeBubble === q.id ? "q-bubble--active" : ""}`}
              onClick={() => handleCoachInteraction(q.id)}
              disabled={isReplying}
            >
              <span>{q.icon}</span>
              <span>{q.text}</span>
            </button>
          ))}
        </div>

        {/* Coach Figure + Reply */}
        <div className="coach-chat-area">
          <div className="coach-figure">
            <BlinkingCoach Component={ActiveCoachComponent} pupilStyle={pupilStyle} />
          </div>

          <div className={`reply-bubble ${isReplying ? "reply-bubble--loading" : ""}`}>
            {isReplying ? (
              <span className="typing-dots">
                <span /><span /><span />
              </span>
            ) : (
              <>
                <p>{coachReply}</p>

                {/* ── Workout options ──────────────────────────────────── */}
                {showWorkoutOptions && (
                  <div className="workout-options">
                    <button
                      className="workout-option-btn workout-option-btn--new"
                      onClick={() => handleWorkoutOptionClick("new")}
                    >
                      ✨ ساخت برنامه جدید
                    </button>
                    <button
                      className="workout-option-btn workout-option-btn--existing"
                      onClick={() => handleWorkoutOptionClick("existing")}
                    >
                      📋 برنامه‌های من
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Logout ──────────────────────────────────────────────────────────── */}
      <button className="logout-btn" onClick={handleLogout}>
        <span>🚪</span> خروج از حساب
      </button>

    </div>
  );
};

export default ProfilePage;
