// GamePage.jsx
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";
import { BearAvatar, MonkeyAvatar, RabbitAvatar, PandaAvatar } from "./UserInfoPage";

// ─── Avatar Components Map ────────────────────────────────────────────────────
const AVATAR_COMPONENTS = {
  bear:   BearAvatar,
  monkey: MonkeyAvatar,
  rabbit: RabbitAvatar,
  panda:  PandaAvatar,
};

// ─── Mock Games Data ──────────────────────────────────────────────────────────
const games = [
  { id: "fitness-race",   name: "مسابقه تناسب اندام", icon: "🏃", color: "#ff6b6b", route: "/game/fitness-race"   },
  { id: "yoga-challenge", name: "چالش یوگا",           icon: "🧘", color: "#4ecdc4", route: "/game/yoga-challenge" },
  { id: "workout-battle", name: "نبرد ورزشی",          icon: "⚔️", color: "#95e1d3", route: "/game/workout-battle" },
  { id: "cardio-dash",    name: "دوی هوازی",           icon: "💨", color: "#f38181", route: "/game/cardio-dash"    },
];

// ─── Leaderboard Data ─────────────────────────────────────────────────────────
const LEADERBOARD_DATA = [
  { rank: 1, name: "ShadowBlade", score: 4820, wins: 48 },
  { rank: 2, name: "NeonFox",     score: 4310, wins: 43 },
  { rank: 3, name: "VoidRunner",  score: 3970, wins: 39 },
  { rank: 4, name: "StarCrush",   score: 3540, wins: 35 },
  { rank: 5, name: "IronGhost",   score: 3010, wins: 30 },
];

// ─── localStorage helpers ─────────────────────────────────────────────────────
const CHATS_KEY = "fitness_chats";

const loadAllChats = () => {
  try {
    return JSON.parse(localStorage.getItem(CHATS_KEY) || "{}");
  } catch {
    return {};
  }
};

const makeChatId = (a, b) => [a, b].sort().join("__");

const loadChat = (myId, otherId) => {
  const all = loadAllChats();
  return all[makeChatId(myId, otherId)] || { messages: [] };
};

const saveChat = (myId, otherId, chatObj) => {
  const all = loadAllChats();
  all[makeChatId(myId, otherId)] = chatObj;
  localStorage.setItem(CHATS_KEY, JSON.stringify(all));
};

// ─── GamePage Component ───────────────────────────────────────────────────────
const GamePage = () => {
  const navigate = useNavigate();

  const [currentUser,    setCurrentUser]    = useState(null);
  const [onlineUsers,    setOnlineUsers]    = useState([]);
  const [isSidebarOpen,  setIsSidebarOpen]  = useState(false);
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [messages,       setMessages]       = useState([]);
  const [messageInput,   setMessageInput]   = useState("");
  const [activeTab,      setActiveTab]      = useState("games");

  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // ─── Load current user + online users ────────────────────────────────────────
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("currentUser"));
    if (!stored) { navigate("/"); return; }
    setCurrentUser(stored);

    const allUsers = JSON.parse(localStorage.getItem("fitness_users") || "[]");
    const others = allUsers
      .filter(u => u.username !== stored.username)
      .map(u => ({
        id:       u.username,
        username: u.username,
        avatar:   u.coach || "bear",
        status:   Math.random() > 0.4 ? "آنلاین" : "در بازی",
      }));
    setOnlineUsers(others);
  }, [navigate]);

  // ─── Open chat ────────────────────────────────────────────────────────────────
  const openChat = useCallback((user) => {
    setActiveChatUser(user);
    setIsSidebarOpen(false);
    setMessageInput("");

    const stored = JSON.parse(localStorage.getItem("currentUser"));
    const chat   = loadChat(stored.username, user.id);
    setMessages(chat.messages);

    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const closeChat = useCallback(() => {
    setActiveChatUser(null);
    setMessages([]);
    setMessageInput("");
  }, []);

  // ─── Send message (no auto-reply) ────────────────────────────────────────────
  const sendMessage = useCallback((e) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeChatUser || !currentUser) return;

    const now = new Date().toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
    const newMsg = {
      id:        Date.now(),
      text:      messageInput.trim(),
      sender:    currentUser.username,
      timestamp: now,
    };

    setMessages(prev => {
      const updated = [...prev, newMsg];
      saveChat(currentUser.username, activeChatUser.id, {
        participants: [currentUser.username, activeChatUser.id],
        messages:     updated,
      });
      return updated;
    });

    setMessageInput("");
  }, [messageInput, activeChatUser, currentUser]);

  const toggleSidebar  = useCallback(() => setIsSidebarOpen(p => !p), []);
  const navigateToGame = useCallback((r) => navigate(r), [navigate]);
  const goBack         = useCallback(() => navigate("/profile"), [navigate]);

  // ─── Unread counts ────────────────────────────────────────────────────────────
  const unreadCounts = useMemo(() => {
    if (!currentUser) return {};
    const counts = {};
    const all    = loadAllChats();
    onlineUsers.forEach(u => {
      const chat = all[makeChatId(currentUser.username, u.id)];
      if (chat?.messages?.length) {
        counts[u.id] = chat.messages.filter(m => m.sender !== currentUser.username).length;
      }
    });
    return counts;
  }, [currentUser, onlineUsers]);

  const ActiveChatAvatar = activeChatUser ? AVATAR_COMPONENTS[activeChatUser.avatar] : null;
  const MyAvatar         = currentUser    ? AVATAR_COMPONENTS[currentUser.coach || "bear"] : null;

  if (!currentUser) {
    return (
      <div className="gp-loading">
        <div className="gp-spinner" />
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    <div className="gp-page">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="gp-header">
        <button className="gp-back-btn" onClick={goBack}>← بازگشت</button>
        <h1 className="gp-title">🎮 بازی‌های آنلاین</h1>
        <button
          className={`gp-menu-btn ${isSidebarOpen ? "gp-menu-btn--open" : ""}`}
          onClick={toggleSidebar}
          aria-label="منوی کاربران"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ── Tab Bar ────────────────────────────────────────────────────────── */}
      <div className="gp-tabs">
        <button
          className={`gp-tab ${activeTab === "games" ? "gp-tab--active" : ""}`}
          onClick={() => setActiveTab("games")}
        >
          🕹️ بازی‌ها
        </button>
        <button
          className={`gp-tab ${activeTab === "leaderboard" ? "gp-tab--active" : ""}`}
          onClick={() => setActiveTab("leaderboard")}
        >
          🏆 جدول امتیازات
        </button>
      </div>

      {/* ── Games Grid ─────────────────────────────────────────────────────── */}
      {activeTab === "games" && (
        <section className="gp-grid">
          {games.map(g => (
            <div
              key={g.id}
              className="gp-card"
              style={{ "--gc": g.color }}
              onClick={() => navigateToGame(g.route)}
            >
              <div className="gp-card-glow" />
              <span className="gp-card-icon">{g.icon}</span>
              <h3 className="gp-card-name">{g.name}</h3>
              <div className="gp-card-btn">بازی کن ▶</div>
            </div>
          ))}
        </section>
      )}

      {/* ── Leaderboard ────────────────────────────────────────────────────── */}
      {activeTab === "leaderboard" && (
        <section className="gp-leaderboard">
          <h3 className="gp-lb-title">🏆 برترین بازیکنان</h3>
          <table className="gp-lb-table">
            <thead>
              <tr>
                <th>رتبه</th>
                <th>بازیکن</th>
                <th>امتیاز</th>
                <th>برد</th>
              </tr>
            </thead>
            <tbody>
              {LEADERBOARD_DATA.map(row => (
                <tr key={row.rank} className={row.rank === 1 ? "gp-lb-gold" : ""}>
                  <td><span className="gp-lb-rank">#{row.rank}</span></td>
                  <td>{row.name}</td>
                  <td>{row.score.toLocaleString()}</td>
                  <td>{row.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* ── Sidebar Overlay ────────────────────────────────────────────────── */}
      {isSidebarOpen && (
        <div className="gp-overlay" onClick={toggleSidebar} />
      )}

      {/* ── Sidebar ────────────────────────────────────────────────────────── */}
      <aside className={`gp-sidebar ${isSidebarOpen ? "gp-sidebar--open" : ""}`}>
        <div className="gp-sidebar-head">
          <h2>کاربران</h2>
          <span className="gp-badge">{onlineUsers.length} نفر</span>
        </div>

        <ul className="gp-user-list">
          {onlineUsers.length === 0 ? (
            <li className="gp-no-users">هیچ کاربری ثبت‌نام نکرده</li>
          ) : (
            onlineUsers.map(user => {
              const Av     = AVATAR_COMPONENTS[user.avatar];
              const unread = unreadCounts[user.id] || 0;
              return (
                <li
                  key={user.id}
                  className={`gp-user-item ${activeChatUser?.id === user.id ? "gp-user-item--active" : ""}`}
                  onClick={() => openChat(user)}
                >
                  <div className="gp-av-wrap">
                    <div className="gp-av-ring">
                      {Av && <Av />}
                    </div>
                    <span className="gp-dot" />
                  </div>
                  <div className="gp-user-meta">
                    <span className="gp-user-name">{user.username}</span>
                    <span className="gp-user-status">{user.status}</span>
                  </div>
                  {unread > 0 && (
                    <span className="gp-unread">{unread}</span>
                  )}
                </li>
              );
            })
          )}
        </ul>
      </aside>

      {/* ── Chat Window ────────────────────────────────────────────────────── */}
      {activeChatUser && (
        <div className="gp-chat">

          <div className="gp-chat-head">
            <div className="gp-chat-user">
              <div className="gp-chat-av">
                {ActiveChatAvatar && <ActiveChatAvatar />}
              </div>
              <div>
                <div className="gp-chat-name">{activeChatUser.username}</div>
                <div className="gp-chat-status">
                  <span className="gp-dot-sm" />{activeChatUser.status}
                </div>
              </div>
            </div>
            <button className="gp-chat-close" onClick={closeChat} aria-label="بستن">✕</button>
          </div>

          <div className="gp-chat-body">
            {messages.length === 0 && (
              <p className="gp-chat-empty">اولین پیام رو بفرست 👋</p>
            )}

            {messages.map(msg => {
              const isMe = msg.sender === currentUser.username;
              return (
                <div
                  key={msg.id}
                  className={`gp-bubble-row ${isMe ? "gp-bubble-row--me" : "gp-bubble-row--them"}`}
                >
                  <div className="gp-bubble-av">
                    {isMe
                      ? MyAvatar && <MyAvatar />
                      : ActiveChatAvatar && <ActiveChatAvatar />
                    }
                  </div>
                  <div className="gp-bubble">
                    <p className="gp-bubble-text">{msg.text}</p>
                    <span className="gp-bubble-time">{msg.timestamp}</span>
                  </div>
                </div>
              );
            })}

            <div ref={messagesEndRef} />
          </div>

          <form className="gp-chat-form" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              className="gp-chat-input"
              type="text"
              placeholder="پیام بنویس..."
              value={messageInput}
              onChange={e => setMessageInput(e.target.value)}
            />
            <button
              type="submit"
              className="gp-chat-send"
              disabled={!messageInput.trim()}
              aria-label="ارسال"
            >
              ➤
            </button>
          </form>
        </div>
      )}

    </div>
  );
};

export default GamePage;
