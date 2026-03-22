import React, { memo } from "react";

// ۱. خرس مربی (بدنسازی/وزنه‌برداری) 
const BearCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    <defs>
      <linearGradient id="bearFur" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#5D4037" />
      </linearGradient>
      <linearGradient id="bearBelly" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#DEB887" />
        <stop offset="100%" stopColor="#8B4513" />
      </linearGradient>
      <linearGradient id="metalBar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0E0E0" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#9E9E9E" />
      </linearGradient>
      <linearGradient id="sportShirtRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D32F2F" />
        <stop offset="100%" stopColor="#B71C1C" />
      </linearGradient>
    </defs>

    {/* ================= لایه دوم: بدن، دست‌های عضلانی و تجهیزات ================= */}
    <g id="layer2-body">
      {/* بدن اصلی (عریض‌تر و شانه‌های پهن‌تر) */}
      <rect x="30" y="80" width="140" height="110" rx="55" fill="url(#bearFur)" />
      
      {/* رکابی ورزشی عضلانی */}
      <path d="M 40 140 L 45 180 Q 100 200 155 180 L 160 140 Z" fill="url(#sportShirtRed)" />
      {/* خطوط سینه برای نشان دادن حجم عضلات */}
      <path d="M 50 145 Q 100 170 150 145" stroke="#B71C1C" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 100 155 L 100 185" stroke="#B71C1C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 45 180 Q 70 185 75 140 M 155 180 Q 130 185 125 140" fill="#212121" opacity="0.3" /> 

      {/* ================= دست چپ و دمبل ================= */}
      <path d="M 45 125 Q 5 125 15 160" stroke="url(#bearFur)" strokeWidth="28" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="138" r="14" fill="url(#bearFur)" /> 
      <rect x="2" y="145" width="28" height="12" rx="3" fill="#1E88E5" transform="rotate(-15 15 150)" />
      
      <g transform="translate(14, 165)">
        <rect x="-25" y="-5" width="50" height="10" rx="2" fill="url(#metalBar)" />
        <rect x="-25" y="-20" width="12" height="40" rx="3" fill="#212121" />
        <rect x="-35" y="-16" width="8" height="32" rx="2" fill="#E53935" />
        <rect x="13" y="-20" width="12" height="40" rx="3" fill="#212121" />
        <rect x="27" y="-16" width="8" height="32" rx="2" fill="#E53935" />
      </g>
      <ellipse cx="14" cy="163" rx="12" ry="9" fill="url(#bearFur)" stroke="#3E2723" strokeWidth="1" />
      <path d="M 8 165 Q 14 160 20 165" stroke="#3E2723" strokeWidth="2" fill="none" />

      {/* ================= دست راست و دمبل ================= */}
      <path d="M 155 125 Q 195 125 185 160" stroke="url(#bearFur)" strokeWidth="28" fill="none" strokeLinecap="round" />
      <circle cx="180" cy="138" r="14" fill="url(#bearFur)" /> 
      <rect x="170" y="145" width="28" height="12" rx="3" fill="#1E88E5" transform="rotate(15 185 150)" />
      
      <g transform="translate(186, 165)">
        <rect x="-25" y="-5" width="50" height="10" rx="2" fill="url(#metalBar)" />
        <rect x="-25" y="-20" width="12" height="40" rx="3" fill="#212121" />
        <rect x="-35" y="-16" width="8" height="32" rx="2" fill="#E53935" />
        <rect x="13" y="-20" width="12" height="40" rx="3" fill="#212121" />
        <rect x="27" y="-16" width="8" height="32" rx="2" fill="#E53935" />
      </g>
      <ellipse cx="186" cy="163" rx="12" ry="9" fill="url(#bearFur)" stroke="#3E2723" strokeWidth="1" />
      <path d="M 180 165 Q 186 160 192 165" stroke="#3E2723" strokeWidth="2" fill="none" />
    </g>

    {/* ================= لایه اول: سر (واضح‌تر و تفکیک‌شده) ================= */}
    <g id="layer1-head">
      {/* گوش‌ها با خط دور */}
      <circle cx="50" cy="50" r="25" fill="url(#bearFur)" stroke="#3E2723" strokeWidth="3" />
      <circle cx="150" cy="50" r="25" fill="url(#bearFur)" stroke="#3E2723" strokeWidth="3" />
      <circle cx="50" cy="50" r="12" fill="#D2B48C" />
      <circle cx="150" cy="50" r="12" fill="#D2B48C" />
      
      {/* صورت با خط دور برای وضوح بیشتر از بدن */}
      <circle cx="100" cy="100" r="55" fill="url(#bearFur)" stroke="#3E2723" strokeWidth="3" />
      <ellipse cx="100" cy="118" rx="38" ry="32" fill="url(#bearBelly)" stroke="#6D4C41" strokeWidth="2" />
      
      {/* هدبند ورزشی */}
      <path d="M 45 65 Q 100 80 155 65 L 152 85 Q 100 100 48 85 Z" fill="#1E88E5" />
      <rect x="90" y="70" width="20" height="20" rx="4" fill="#FFFFFF" transform="rotate(45 100 80)" />

      {/* بینی و دهان */}
      <path d="M 85 108 Q 100 128 115 108" stroke="#3E2723" strokeWidth="4" fill="transparent" strokeLinecap="round" />
      <circle cx="100" cy="98" r="10" fill="#3E2723" />
      <path d="M 95 93 Q 100 98 105 93" stroke="#FFF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      
      {/* گونه‌ها */}
      <ellipse cx="65" cy="115" rx="12" ry="8" fill="#FF8A80" opacity="0.6" />
      <ellipse cx="135" cy="115" rx="12" ry="8" fill="#FF8A80" opacity="0.6" />

      {/* چشم‌ها */}
      {isPasswordFocused ? (
        <>
          <path d="M 65 75 Q 75 85 85 75" stroke="#3E2723" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 115 75 Q 125 85 135 75" stroke="#3E2723" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="75" cy="75" r="13" fill="#FFFFFF" />
          <circle cx="125" cy="75" r="13" fill="#FFFFFF" />
          <circle cx="75" cy="75" r="6" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="125" cy="75" r="6" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="72" cy="72" r="2" fill="#FFFFFF" />
          <circle cx="122" cy="72" r="2" fill="#FFFFFF" />
        </>
      )}
    </g>

    {/* ================= لایه سوم: پاها ================= */}
    <g id="layer3-legs">
      <rect x="50" y="170" width="40" height="35" rx="5" fill="#212121" />
      <rect x="110" y="170" width="40" height="35" rx="5" fill="#212121" />
      
      <rect x="55" y="195" width="30" height="30" rx="8" fill="#4E342E" />
      <ellipse cx="70" cy="235" rx="22" ry="14" fill="#FFC107" />
      <ellipse cx="75" cy="232" rx="15" ry="10" fill="#FFA000" />
      <rect x="50" y="243" width="40" height="6" rx="3" fill="#FFFFFF" />

      <rect x="115" y="195" width="30" height="30" rx="8" fill="#4E342E" />
      <ellipse cx="130" cy="235" rx="22" ry="14" fill="#FFC107" />
      <ellipse cx="125" cy="232" rx="15" ry="10" fill="#FFA000" />
      <rect x="110" y="243" width="40" height="6" rx="3" fill="#FFFFFF" />
    </g>
  </svg>
));

// ۲. میمون مربی (ژیمناستیک) - اصلاح لایه‌بندی و اضافه شدن خط دور (Stroke) برای تفکیک کامل سر
const MonkeyCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    <defs>
      <linearGradient id="monkeyFur" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="100%" stopColor="#4E342E" />
      </linearGradient>
      <linearGradient id="monkeySkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE0B2" />
        <stop offset="100%" stopColor="#FFCC80" />
      </linearGradient>
      <linearGradient id="ringWood" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D7CCC8" />
        <stop offset="100%" stopColor="#8D6E63" />
      </linearGradient>
      <linearGradient id="gymUniform" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1565C0" />
        <stop offset="100%" stopColor="#0D47A1" />
      </linearGradient>
    </defs>

    {/* ================= لایه دوم: تجهیزات، بدن و دست‌ها (زیر سر قرار می‌گیرند) ================= */}
    <g id="layer2-body">
      {/* دم حلقه شده میمون */}
      <path d="M 130 190 Q 180 200 170 240 Q 160 270 140 250" stroke="url(#monkeyFur)" strokeWidth="12" fill="none" strokeLinecap="round" />

      {/* تسمه‌های حلقه‌ها */}
      <rect x="56" y="0" width="8" height="70" fill="#212121" /> 
      <rect x="136" y="0" width="8" height="70" fill="#212121" />

      {/* بازوها (کشیده به سمت بالا - بخشی از آن به درستی زیر سر بزرگ مخفی می‌شود) */}
      <path d="M 75 130 Q 55 100 60 70" stroke="url(#monkeyFur)" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M 125 130 Q 145 100 140 70" stroke="url(#monkeyFur)" strokeWidth="16" fill="none" strokeLinecap="round" />

      {/* حلقه‌های چوبی */}
      <circle cx="60" cy="70" r="16" fill="none" stroke="url(#ringWood)" strokeWidth="8" />
      <circle cx="140" cy="70" r="16" fill="none" stroke="url(#ringWood)" strokeWidth="8" />

      {/* انگشتان و مچ‌بند */}
      <rect x="48" y="75" width="24" height="10" rx="2" fill="#FDD835" transform="rotate(-15 60 80)" />
      <ellipse cx="60" cy="84" rx="12" ry="8" fill="url(#monkeySkin)" />
      
      <rect x="128" y="75" width="24" height="10" rx="2" fill="#FDD835" transform="rotate(15 140 80)" />
      <ellipse cx="140" cy="84" rx="12" ry="8" fill="url(#monkeySkin)" />

      {/* بدن با لباس ژیمناستیک */}
      <ellipse cx="100" cy="180" rx="42" ry="48" fill="url(#gymUniform)" />
      
      {/* نوار طلایی (Chevron) روی سینه */}
      <path d="M 60 160 L 100 185 L 140 160 L 142 170 L 100 195 L 58 170 Z" fill="#FDD835" />
      <path d="M 65 175 L 100 198 L 135 175 L 137 182 L 100 205 L 63 182 Z" fill="#FFFFFF" opacity="0.8" />
    </g>

    {/* ================= لایه سوم: پاها ================= */}
    <g id="layer3-legs">
      <path d="M 85 220 L 80 255" stroke="url(#monkeyFur)" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M 115 220 L 120 255" stroke="url(#monkeyFur)" strokeWidth="18" fill="none" strokeLinecap="round" />

      <rect x="71" y="240" width="18" height="8" fill="#FFFFFF" transform="rotate(-5 80 244)" />
      <rect x="111" y="240" width="18" height="8" fill="#FFFFFF" transform="rotate(5 120 244)" />

      <ellipse cx="78" cy="265" rx="10" ry="16" fill="#E53935" />
      <rect x="73" y="278" width="10" height="4" rx="2" fill="#FFFFFF" />

      <ellipse cx="122" cy="265" rx="10" ry="16" fill="#E53935" />
      <rect x="117" y="278" width="10" height="4" rx="2" fill="#FFFFFF" />
    </g>

    {/* ================= لایه اول: سر (روی همه لایه‌ها قرار گرفت و خط دور اضافه شد) ================= */}
    <g id="layer1-head">
      {/* گوش‌ها با خط دور تیره برای تفکیک */}
      <circle cx="35" cy="115" r="22" fill="url(#monkeySkin)" stroke="#3E2723" strokeWidth="3" />
      <circle cx="165" cy="115" r="22" fill="url(#monkeySkin)" stroke="#3E2723" strokeWidth="3" />
      <circle cx="35" cy="115" r="14" fill="#FFCC80" />
      <circle cx="165" cy="115" r="14" fill="#FFCC80" />
      
      {/* سر اصلی با خط دور (Stroke) برای جداسازی کامل از بدن و دست‌ها */}
      <circle cx="100" cy="120" r="60" fill="url(#monkeyFur)" stroke="#3E2723" strokeWidth="3" />
      
      {/* هدبند زرد ورزشی */}
      <path d="M 45 85 Q 100 95 155 85 L 150 105 Q 100 115 50 105 Z" fill="#FDD835" />
      
      {/* ماسک صورت */}
      <path d="M 55 110 Q 100 70 145 110 L 145 150 Q 100 190 55 150 Z" fill="url(#monkeySkin)" />
      <circle cx="100" cy="155" r="24" fill="#FFE0B2" />
      
      {/* چهره */}
      <path d="M 88 155 Q 100 170 112 155" stroke="#3E2723" strokeWidth="3" fill="transparent" strokeLinecap="round" />
      <circle cx="100" cy="144" r="7" fill="#3E2723" />
      <ellipse cx="65" cy="145" rx="12" ry="8" fill="#FF8A80" opacity="0.6" />
      <ellipse cx="135" cy="145" rx="12" ry="8" fill="#FF8A80" opacity="0.6" />

      {/* چشم‌ها */}
      {isPasswordFocused ? (
        <>
          <path d="M 68 115 Q 78 125 88 115" stroke="#3E2723" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 112 115 Q 122 125 132 115" stroke="#3E2723" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="78" cy="115" r="12" fill="#FFFFFF" />
          <circle cx="122" cy="115" r="12" fill="#FFFFFF" />
          <circle cx="78" cy="115" r="6" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="122" cy="115" r="6" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="75" cy="112" r="2" fill="#FFFFFF" />
          <circle cx="119" cy="112" r="2" fill="#FFFFFF" />
        </>
      )}
    </g>
  </svg>
));

// ۳. خرگوش مربی (هوازی/دویدن) - بدون تغییر
const RabbitCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    <defs>
      <linearGradient id="rabbitFur" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </linearGradient>
      <linearGradient id="rabbitEar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFCDD2" />
        <stop offset="100%" stopColor="#F8BBD0" />
      </linearGradient>
      <linearGradient id="sportTop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00BCD4" />
        <stop offset="100%" stopColor="#0097A7" />
      </linearGradient>
    </defs>

    <g id="layer1-head">
      <g transform="rotate(-15 60 55)">
        <ellipse cx="60" cy="55" rx="18" ry="55" fill="url(#rabbitFur)" stroke="#E0E0E0" strokeWidth="1" />
        <ellipse cx="60" cy="50" rx="8" ry="40" fill="url(#rabbitEar)" />
      </g>
      <g transform="rotate(15 140 55)">
        <ellipse cx="140" cy="55" rx="18" ry="55" fill="url(#rabbitFur)" stroke="#E0E0E0" strokeWidth="1" />
        <ellipse cx="140" cy="50" rx="8" ry="40" fill="url(#rabbitEar)" />
      </g>

      <ellipse cx="100" cy="130" rx="60" ry="50" fill="url(#rabbitFur)" stroke="#E0E0E0" strokeWidth="1" />
      
      <path d="M 45 105 Q 100 115 155 105 L 152 120 Q 100 130 48 120 Z" fill="#E91E63" />

      <polygon points="95,138 105,138 100,145" fill="#FF8A80" />
      <path d="M 90 145 Q 100 155 110 145" stroke="#3E2723" strokeWidth="3" fill="transparent" strokeLinecap="round" />
      <rect x="96" y="146" width="8" height="6" rx="2" fill="#FFF" stroke="#E0E0E0" strokeWidth="1" />
      
      <ellipse cx="58" cy="140" rx="14" ry="9" fill="#FF8A80" opacity="0.6" />
      <ellipse cx="142" cy="140" rx="14" ry="9" fill="#FF8A80" opacity="0.6" />

      {isPasswordFocused ? (
        <>
          <path d="M 65 115 Q 75 125 85 115" stroke="#3E2723" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 115 115 Q 125 125 135 115" stroke="#3E2723" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="75" cy="115" r="14" fill="#FFFFFF" />
          <circle cx="125" cy="115" r="14" fill="#FFFFFF" />
          <circle cx="75" cy="115" r="7" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="125" cy="115" r="7" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="72" cy="112" r="3" fill="#FFFFFF" />
          <circle cx="122" cy="112" r="3" fill="#FFFFFF" />
        </>
      )}
    </g>

    <g id="layer2-body">
      <ellipse cx="100" cy="195" rx="45" ry="55" fill="url(#rabbitFur)" />
      
      <path d="M 60 180 Q 100 200 140 180 L 143 210 Q 100 220 57 210 Z" fill="url(#sportTop)" />
      <path d="M 60 180 L 75 140 M 140 180 L 125 140" stroke="url(#sportTop)" strokeWidth="8" fill="none" />

      <path d="M 75 160 Q 100 190 125 160" stroke="#424242" strokeWidth="2" fill="none" />
      <circle cx="100" cy="182" r="6" fill="#BDBDBD" />
      <rect x="104" y="179" width="6" height="4" fill="#BDBDBD" />

      <path d="M 60 170 Q 45 200 52 225" stroke="url(#rabbitFur)" strokeWidth="18" fill="none" strokeLinecap="round" />
      <rect x="42" y="200" width="18" height="8" rx="2" fill="#E91E63" transform="rotate(-20 50 200)" />
      
      <path d="M 140 170 Q 155 200 148 225" stroke="url(#rabbitFur)" strokeWidth="18" fill="none" strokeLinecap="round" />
      <rect x="140" y="200" width="18" height="8" rx="2" fill="#E91E63" transform="rotate(20 150 200)" />
    </g>

    <g id="layer3-legs">
      <path d="M 80 235 L 75 255" stroke="#BDBDBD" strokeWidth="16" fill="none" strokeLinecap="round" />
      <ellipse cx="65" cy="265" rx="22" ry="11" fill="#76FF03" />
      <ellipse cx="65" cy="262" rx="14" ry="7" fill="#64DD17" />
      <rect x="45" y="272" width="40" height="5" rx="2.5" fill="#FFFFFF" />

      <path d="M 120 235 L 125 255" stroke="#BDBDBD" strokeWidth="16" fill="none" strokeLinecap="round" />
      <ellipse cx="135" cy="265" rx="22" ry="11" fill="#76FF03" />
      <ellipse cx="135" cy="262" rx="14" ry="7" fill="#64DD17" />
      <rect x="115" y="272" width="40" height="5" rx="2.5" fill="#FFFFFF" />
    </g>
  </svg>
));

// ۴. پاندا مربی (یوگا/مدیتیشن) - بدون تغییر
const PandaCoach = memo(({ pupilStyle, isPasswordFocused }) => (
  <svg viewBox="0 0 200 280" width="100%" height="100%">
    <defs>
      <linearGradient id="pandaBlack" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#424242" />
        <stop offset="100%" stopColor="#111111" />
      </linearGradient>
      <linearGradient id="pandaWhite" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E0E0E0" />
      </linearGradient>
      <linearGradient id="yogaMat" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8E24AA" />
        <stop offset="100%" stopColor="#AB47BC" />
      </linearGradient>
      <radialGradient id="energyGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#A5D6A7" stopOpacity="1" />
        <stop offset="100%" stopColor="#A5D6A7" stopOpacity="0" />
      </radialGradient>
    </defs>

    <g id="layer3-legs">
      <polygon points="20,270 180,270 160,250 40,250" fill="url(#yogaMat)" stroke="#7B1FA2" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 20 270 Q 15 270 15 265 L 35 250" stroke="#7B1FA2" strokeWidth="2" fill="none" />

      <path d="M 50 215 Q 35 245 55 255" stroke="url(#pandaBlack)" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M 150 215 Q 165 245 145 255" stroke="url(#pandaBlack)" strokeWidth="18" fill="none" strokeLinecap="round" />
      
      <ellipse cx="65" cy="260" rx="16" ry="10" fill="url(#pandaBlack)" />
      <ellipse cx="65" cy="258" rx="8" ry="5" fill="#616161" />
      <ellipse cx="135" cy="260" rx="16" ry="10" fill="url(#pandaBlack)" />
      <ellipse cx="135" cy="258" rx="8" ry="5" fill="#616161" />
      
      <path d="M 60 258 Q 100 270 140 258" stroke="url(#pandaBlack)" strokeWidth="12" fill="none" strokeLinecap="round" />

      <circle cx="25" cy="110" r="15" fill="url(#energyGlow)" />
      <circle cx="25" cy="110" r="4" fill="#A5D6A7" />
      <circle cx="175" cy="110" r="15" fill="url(#energyGlow)" />
      <circle cx="175" cy="110" r="4" fill="#A5D6A7" />
    </g>

    <g id="layer2-body">
      <circle cx="100" cy="205" r="60" fill="url(#pandaWhite)" stroke="#E0E0E0" strokeWidth="2" />
      
      <path d="M 50 170 Q 100 150 150 170 L 155 220 Q 100 240 45 220 Z" fill="#81C784" />
      <ellipse cx="100" cy="170" rx="40" ry="10" fill="#A5D6A7" />

      <path d="M 45 160 Q 25 200 48 230" stroke="url(#pandaBlack)" strokeWidth="16" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="235" r="12" fill="url(#pandaBlack)" />
      <circle cx="50" cy="235" r="4" fill="#E0E0E0" /> 
      
      <path d="M 155 160 Q 175 200 152 230" stroke="url(#pandaBlack)" strokeWidth="16" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="235" r="12" fill="url(#pandaBlack)" />
      <circle cx="150" cy="235" r="4" fill="#E0E0E0" />
    </g>

    <g id="layer1-head">
      <circle cx="45" cy="80" r="22" fill="url(#pandaBlack)" />
      <circle cx="155" cy="80" r="22" fill="url(#pandaBlack)" />
      <circle cx="45" cy="80" r="10" fill="#212121" />
      <circle cx="155" cy="80" r="10" fill="#212121" />

      <circle cx="100" cy="125" r="65" fill="url(#pandaWhite)" stroke="#E0E0E0" strokeWidth="2" />
      
      <path d="M 40 95 Q 100 110 160 95 L 155 110 Q 100 125 45 110 Z" fill="#FF9800" />
      <circle cx="100" cy="108" r="5" fill="#FFFFFF" />

      <ellipse cx="68" cy="115" rx="22" ry="28" fill="url(#pandaBlack)" transform="rotate(-20 68 115)" />
      <ellipse cx="132" cy="115" rx="22" ry="28" fill="url(#pandaBlack)" transform="rotate(20 132 115)" />

      <ellipse cx="100" cy="142" rx="14" ry="10" fill="#FFF" />
      <path d="M 90 148 Q 100 160 110 148" stroke="#111" strokeWidth="3" fill="transparent" strokeLinecap="round" />
      <ellipse cx="100" cy="140" r="6" fill="#111" />
      
      <ellipse cx="55" cy="145" rx="14" ry="9" fill="#FF8A80" opacity="0.6" />
      <ellipse cx="145" cy="145" rx="14" ry="9" fill="#FF8A80" opacity="0.6" />

      {isPasswordFocused ? (
        <>
          <path d="M 60 115 Q 70 125 80 115" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 120 115 Q 130 125 140 115" stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="70" cy="115" r="10" fill="#FFFFFF" />
          <circle cx="130" cy="115" r="10" fill="#FFFFFF" />
          <circle cx="70" cy="115" r="5" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="130" cy="115" r="5" fill="#000000" className="pupil" style={pupilStyle} />
          <circle cx="68" cy="113" r="2" fill="#FFFFFF" />
          <circle cx="128" cy="113" r="2" fill="#FFFFFF" />
        </>
      )}
    </g>
  </svg>
));

export { BearCoach, MonkeyCoach, RabbitCoach, PandaCoach };
