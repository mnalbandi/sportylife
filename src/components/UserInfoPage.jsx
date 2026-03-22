import React, { useState, useEffect } from "react";
import "./UserInfoPage.css";
import { useNavigate } from 'react-router-dom'; 

const BearAvatar = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="#8B6914"/>
  <path d="M140 240 Q200 220 260 240 L265 340 Q200 355 135 340 Z" fill="#E8E8E8"/>
  <path d="M140 240 L145 200 Q165 215 185 210 L185 240 Z" fill="#E8E8E8"/>
  <path d="M260 240 L255 200 Q235 215 215 210 L215 240 Z" fill="#E8E8E8"/>
  <path d="M165 225 L165 340" stroke="#4A90D9" strokeWidth="3" fill="none"/>
  <path d="M235 225 L235 340" stroke="#4A90D9" strokeWidth="3" fill="none"/>
  <rect x="182" y="170" width="36" height="45" rx="10" fill="#8B6914"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="#A0791E"/>
  <circle cx="148" cy="110" r="20" fill="#8B6914"/>
  <circle cx="148" cy="110" r="12" fill="#C49A2A"/>
  <circle cx="252" cy="110" r="20" fill="#8B6914"/>
  <circle cx="252" cy="110" r="12" fill="#C49A2A"/>
  <ellipse cx="200" cy="168" rx="28" ry="22" fill="#C49A2A"/>
  <circle cx="182" cy="145" r="9" fill="white"/>
  <circle cx="218" cy="145" r="9" fill="white"/>
  <circle cx="184" cy="146" r="5" fill="#2C1810"/>
  <circle cx="220" cy="146" r="5" fill="#2C1810"/>
  <circle cx="186" cy="144" r="2" fill="white"/>
  <circle cx="222" cy="144" r="2" fill="white"/>
  <path d="M174 136 Q182 131 190 134" stroke="#5C3D0E" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M210 134 Q218 131 226 136" stroke="#5C3D0E" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <ellipse cx="200" cy="162" rx="10" ry="7" fill="#5C3D0E"/>
  <circle cx="196" cy="161" r="3" fill="#7A5020" opacity="0.5"/>
  <circle cx="204" cy="161" r="3" fill="#7A5020" opacity="0.5"/>
  <path d="M186 174 Q200 186 214 174" stroke="#5C3D0E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  <path d="M191 177 Q200 185 209 177 Q200 182 191 177Z" fill="white"/>
  <ellipse cx="120" cy="250" rx="28" ry="22" fill="#8B6914" transform="rotate(-30 120 250)"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="#A0791E"/>
  <ellipse cx="88" cy="290" rx="20" ry="35" fill="#8B6914" transform="rotate(20 88 290)"/>
  <rect x="68" y="308" width="38" height="16" rx="6" fill="#4A90D9"/>
  <rect x="68" y="311" width="38" height="4" rx="2" fill="#2C70B0"/>
  <rect x="68" y="317" width="38" height="4" rx="2" fill="#2C70B0"/>
  <ellipse cx="84" cy="330" rx="18" ry="15" fill="#A0791E"/>
  <ellipse cx="280" cy="250" rx="28" ry="22" fill="#8B6914" transform="rotate(30 280 250)"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="#A0791E"/>
  <ellipse cx="312" cy="290" rx="20" ry="35" fill="#8B6914" transform="rotate(-20 312 290)"/>
  <rect x="294" y="308" width="38" height="16" rx="6" fill="#4A90D9"/>
  <rect x="294" y="311" width="38" height="4" rx="2" fill="#2C70B0"/>
  <rect x="294" y="317" width="38" height="4" rx="2" fill="#2C70B0"/>
  <ellipse cx="316" cy="330" rx="18" ry="15" fill="#A0791E"/>
  <path d="M158 245 Q185 255 200 250 Q185 268 158 262 Z" fill="#D0D0D0" opacity="0.6"/>
  <path d="M242 245 Q215 255 200 250 Q215 268 242 262 Z" fill="#D0D0D0" opacity="0.6"/>
  <ellipse cx="200" cy="295" rx="18" ry="12" fill="#D0D0D0" opacity="0.4"/>
  <ellipse cx="200" cy="318" rx="15" ry="10" fill="#D0D0D0" opacity="0.4"/>
  <rect x="155" y="355" width="48" height="90" rx="20" fill="#8B6914"/>
  <rect x="153" y="355" width="52" height="35" rx="8" fill="#2C70B0"/>
  <rect x="197" y="355" width="48" height="90" rx="20" fill="#8B6914"/>
  <rect x="195" y="355" width="52" height="35" rx="8" fill="#2C70B0"/>
  <line x1="200" y1="355" x2="200" y2="390" stroke="#1A5A9A" strokeWidth="2"/>
  <ellipse cx="179" cy="445" rx="26" ry="12" fill="#2C1810"/>
  <ellipse cx="172" cy="443" rx="20" ry="9" fill="#4A3020"/>
  <ellipse cx="221" cy="445" rx="26" ry="12" fill="#2C1810"/>
  <ellipse cx="228" cy="443" rx="20" ry="9" fill="#4A3020"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <g transform="translate(92,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
  <g transform="translate(308,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
</svg>
);

const MonkeyAvatar = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="#8B7355"/>
  <path d="M140 240 Q200 220 260 240 L265 340 Q200 355 135 340 Z" fill="#E8E8E8"/>
  <path d="M140 240 L145 200 Q165 215 185 210 L185 240 Z" fill="#E8E8E8"/>
  <path d="M260 240 L255 200 Q235 215 215 210 L215 240 Z" fill="#E8E8E8"/>
  <path d="M165 225 L165 340" stroke="#E05A00" strokeWidth="3" fill="none"/>
  <path d="M235 225 L235 340" stroke="#E05A00" strokeWidth="3" fill="none"/>
  <rect x="182" y="170" width="36" height="45" rx="10" fill="#8B7355"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="#A08860"/>
  <circle cx="145" cy="105" r="22" fill="#8B7355"/>
  <circle cx="145" cy="105" r="13" fill="#C4A882"/>
  <circle cx="255" cy="105" r="22" fill="#8B7355"/>
  <circle cx="255" cy="105" r="13" fill="#C4A882"/>
  <ellipse cx="200" cy="170" rx="30" ry="24" fill="#C4A882"/>
  <circle cx="182" cy="145" r="9" fill="white"/>
  <circle cx="218" cy="145" r="9" fill="white"/>
  <circle cx="184" cy="146" r="5" fill="#2C1810"/>
  <circle cx="220" cy="146" r="5" fill="#2C1810"/>
  <circle cx="186" cy="144" r="2" fill="white"/>
  <circle cx="222" cy="144" r="2" fill="white"/>
  <path d="M174 136 Q182 131 190 134" stroke="#5C3D0E" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M210 134 Q218 131 226 136" stroke="#5C3D0E" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <ellipse cx="200" cy="163" rx="11" ry="8" fill="#5C3D0E"/>
  <circle cx="196" cy="162" r="3" fill="#7A5020" opacity="0.5"/>
  <circle cx="204" cy="162" r="3" fill="#7A5020" opacity="0.5"/>
  <path d="M186 175 Q200 187 214 175" stroke="#5C3D0E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  <path d="M191 178 Q200 186 209 178 Q200 183 191 178Z" fill="white"/>
  <path d="M180 90 Q175 60 160 50 Q185 55 195 80" fill="#8B7355"/>
  <path d="M220 90 Q225 60 240 50 Q215 55 205 80" fill="#8B7355"/>
  <ellipse cx="120" cy="250" rx="28" ry="22" fill="#8B7355" transform="rotate(-30 120 250)"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="#A08860"/>
  <ellipse cx="88" cy="290" rx="20" ry="35" fill="#8B7355" transform="rotate(20 88 290)"/>
  <rect x="68" y="308" width="38" height="16" rx="6" fill="#E05A00"/>
  <rect x="68" y="311" width="38" height="4" rx="2" fill="#B04000"/>
  <rect x="68" y="317" width="38" height="4" rx="2" fill="#B04000"/>
  <ellipse cx="84" cy="330" rx="18" ry="15" fill="#A08860"/>
  <ellipse cx="280" cy="250" rx="28" ry="22" fill="#8B7355" transform="rotate(30 280 250)"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="#A08860"/>
  <ellipse cx="312" cy="290" rx="20" ry="35" fill="#8B7355" transform="rotate(-20 312 290)"/>
  <rect x="294" y="308" width="38" height="16" rx="6" fill="#E05A00"/>
  <rect x="294" y="311" width="38" height="4" rx="2" fill="#B04000"/>
  <rect x="294" y="317" width="38" height="4" rx="2" fill="#B04000"/>
  <ellipse cx="316" cy="330" rx="18" ry="15" fill="#A08860"/>
  <path d="M158 245 Q185 255 200 250 Q185 268 158 262 Z" fill="#D0D0D0" opacity="0.6"/>
  <path d="M242 245 Q215 255 200 250 Q215 268 242 262 Z" fill="#D0D0D0" opacity="0.6"/>
  <ellipse cx="200" cy="295" rx="18" ry="12" fill="#D0D0D0" opacity="0.4"/>
  <ellipse cx="200" cy="318" rx="15" ry="10" fill="#D0D0D0" opacity="0.4"/>
  <rect x="155" y="355" width="48" height="90" rx="20" fill="#8B7355"/>
  <rect x="153" y="355" width="52" height="35" rx="8" fill="#E05A00"/>
  <rect x="197" y="355" width="48" height="90" rx="20" fill="#8B7355"/>
  <rect x="195" y="355" width="52" height="35" rx="8" fill="#E05A00"/>
  <line x1="200" y1="355" x2="200" y2="390" stroke="#B04000" strokeWidth="2"/>
  <ellipse cx="179" cy="445" rx="26" ry="12" fill="#2C1810"/>
  <ellipse cx="172" cy="443" rx="20" ry="9" fill="#4A3020"/>
  <ellipse cx="221" cy="445" rx="26" ry="12" fill="#2C1810"/>
  <ellipse cx="228" cy="443" rx="20" ry="9" fill="#4A3020"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="none" stroke="#5C3D0E" strokeWidth="2.5"/>
  <g transform="translate(92,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
  <g transform="translate(308,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
</svg>
);

const RabbitAvatar = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="#E8E0D0"/>
  <path d="M140 240 Q200 220 260 240 L265 340 Q200 355 135 340 Z" fill="#FFFFFF"/>
  <path d="M140 240 L145 200 Q165 215 185 210 L185 240 Z" fill="#FFFFFF"/>
  <path d="M260 240 L255 200 Q235 215 215 210 L215 240 Z" fill="#FFFFFF"/>
  <path d="M165 225 L165 340" stroke="#FF6B9D" strokeWidth="3" fill="none"/>
  <path d="M235 225 L235 340" stroke="#FF6B9D" strokeWidth="3" fill="none"/>
  <rect x="182" y="170" width="36" height="45" rx="10" fill="#E8E0D0"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="#F0E8D8"/>
  <ellipse cx="155" cy="88" rx="14" ry="38" fill="#F0E8D8" transform="rotate(-10 155 88)"/>
  <ellipse cx="155" cy="88" rx="8" ry="28" fill="#FFB3C8" transform="rotate(-10 155 88)"/>
  <ellipse cx="245" cy="88" rx="14" ry="38" fill="#F0E8D8" transform="rotate(10 245 88)"/>
  <ellipse cx="245" cy="88" rx="8" ry="28" fill="#FFB3C8" transform="rotate(10 245 88)"/>
  <ellipse cx="200" cy="170" rx="26" ry="20" fill="#FFD0DC"/>
  <circle cx="182" cy="145" r="9" fill="white"/>
  <circle cx="218" cy="145" r="9" fill="white"/>
  <circle cx="184" cy="147" r="5" fill="#2C1840"/>
  <circle cx="220" cy="147" r="5" fill="#2C1840"/>
  <circle cx="186" cy="145" r="2" fill="white"/>
  <circle cx="222" cy="145" r="2" fill="white"/>
  <path d="M174 135 Q182 130 190 133" stroke="#8B5A7A" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M210 133 Q218 130 226 135" stroke="#8B5A7A" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <ellipse cx="200" cy="163" rx="9" ry="6" fill="#FF8FAB"/>
  <circle cx="196" cy="162" r="2.5" fill="#FF6B8F" opacity="0.6"/>
  <circle cx="204" cy="162" r="2.5" fill="#FF6B8F" opacity="0.6"/>
  <path d="M186 174 Q200 186 214 174" stroke="#8B5A7A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  <path d="M191 177 Q200 185 209 177 Q200 182 191 177Z" fill="white"/>
  <circle cx="185" cy="158" r="5" fill="#FFB3C8" opacity="0.7"/>
  <circle cx="215" cy="158" r="5" fill="#FFB3C8" opacity="0.7"/>
  <ellipse cx="120" cy="250" rx="28" ry="22" fill="#E8E0D0" transform="rotate(-30 120 250)"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="#F0E8D8"/>
  <ellipse cx="88" cy="290" rx="20" ry="35" fill="#E8E0D0" transform="rotate(20 88 290)"/>
  <rect x="68" y="308" width="38" height="16" rx="6" fill="#FF6B9D"/>
  <rect x="68" y="311" width="38" height="4" rx="2" fill="#CC4477"/>
  <rect x="68" y="317" width="38" height="4" rx="2" fill="#CC4477"/>
  <ellipse cx="84" cy="330" rx="18" ry="15" fill="#F0E8D8"/>
  <ellipse cx="280" cy="250" rx="28" ry="22" fill="#E8E0D0" transform="rotate(30 280 250)"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="#F0E8D8"/>
  <ellipse cx="312" cy="290" rx="20" ry="35" fill="#E8E0D0" transform="rotate(-20 312 290)"/>
  <rect x="294" y="308" width="38" height="16" rx="6" fill="#FF6B9D"/>
  <rect x="294" y="311" width="38" height="4" rx="2" fill="#CC4477"/>
  <rect x="294" y="317" width="38" height="4" rx="2" fill="#CC4477"/>
  <ellipse cx="316" cy="330" rx="18" ry="15" fill="#F0E8D8"/>
  <path d="M158 245 Q185 255 200 250 Q185 268 158 262 Z" fill="#E0E0E0" opacity="0.6"/>
  <path d="M242 245 Q215 255 200 250 Q215 268 242 262 Z" fill="#E0E0E0" opacity="0.6"/>
  <ellipse cx="200" cy="295" rx="18" ry="12" fill="#E0E0E0" opacity="0.4"/>
  <ellipse cx="200" cy="318" rx="15" ry="10" fill="#E0E0E0" opacity="0.4"/>
  <rect x="155" y="355" width="48" height="90" rx="20" fill="#E8E0D0"/>
  <rect x="153" y="355" width="52" height="35" rx="8" fill="#FF6B9D"/>
  <rect x="197" y="355" width="48" height="90" rx="20" fill="#E8E0D0"/>
  <rect x="195" y="355" width="52" height="35" rx="8" fill="#FF6B9D"/>
  <line x1="200" y1="355" x2="200" y2="390" stroke="#CC4477" strokeWidth="2"/>
  <ellipse cx="179" cy="445" rx="26" ry="12" fill="#8B7A6A"/>
  <ellipse cx="172" cy="443" rx="20" ry="9" fill="#A08878"/>
  <ellipse cx="221" cy="445" rx="26" ry="12" fill="#8B7A6A"/>
  <ellipse cx="228" cy="443" rx="20" ry="9" fill="#A08878"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="none" stroke="#C0A090" strokeWidth="2.5"/>
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="none" stroke="#C0A090" strokeWidth="2.5"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="none" stroke="#C0A090" strokeWidth="2.5"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="none" stroke="#C0A090" strokeWidth="2.5"/>
  <g transform="translate(92,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
  <g transform="translate(308,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
</svg>
);

const PandaAvatar = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="#2C2C2C"/>
  <path d="M140 240 Q200 220 260 240 L265 340 Q200 355 135 340 Z" fill="#FFFFFF"/>
  <path d="M140 240 L145 200 Q165 215 185 210 L185 240 Z" fill="#2C2C2C"/>
  <path d="M260 240 L255 200 Q235 215 215 210 L215 240 Z" fill="#2C2C2C"/>
  <path d="M165 225 L165 340" stroke="#4A90D9" strokeWidth="3" fill="none"/>
  <path d="M235 225 L235 340" stroke="#4A90D9" strokeWidth="3" fill="none"/>
  <rect x="182" y="170" width="36" height="45" rx="10" fill="#2C2C2C"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="#FFFFFF"/>
  <circle cx="148" cy="108" r="22" fill="#2C2C2C"/>
  <circle cx="252" cy="108" r="22" fill="#2C2C2C"/>
  <ellipse cx="200" cy="165" rx="32" ry="26" fill="#EEEEEE"/>
  <ellipse cx="200" cy="140" rx="42" ry="35" fill="#FFFFFF"/>
  <circle cx="182" cy="138" r="10" fill="white"/>
  <circle cx="218" cy="138" r="10" fill="white"/>
  <circle cx="184" cy="139" r="6" fill="#1A1A1A"/>
  <circle cx="220" cy="139" r="6" fill="#1A1A1A"/>
  <circle cx="186" cy="137" r="2.5" fill="white"/>
  <circle cx="222" cy="137" r="2.5" fill="white"/>
  <ellipse cx="182" cy="138" rx="14" ry="14" fill="none" stroke="#2C2C2C" strokeWidth="2"/>
  <ellipse cx="218" cy="138" rx="14" ry="14" fill="none" stroke="#2C2C2C" strokeWidth="2"/>
  <path d="M174 126 Q182 121 190 124" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M210 124 Q218 121 226 126" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <ellipse cx="200" cy="162" rx="11" ry="8" fill="#1A1A1A"/>
  <circle cx="196" cy="161" r="3" fill="#333333" opacity="0.5"/>
  <circle cx="204" cy="161" r="3" fill="#333333" opacity="0.5"/>
  <path d="M186 173 Q200 185 214 173" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  <path d="M191 176 Q200 184 209 176 Q200 181 191 176Z" fill="white"/>
  <ellipse cx="120" cy="250" rx="28" ry="22" fill="#2C2C2C" transform="rotate(-30 120 250)"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="#2C2C2C"/>
  <ellipse cx="88" cy="290" rx="20" ry="35" fill="#2C2C2C" transform="rotate(20 88 290)"/>
  <rect x="68" y="308" width="38" height="16" rx="6" fill="#4A90D9"/>
  <rect x="68" y="311" width="38" height="4" rx="2" fill="#2C70B0"/>
  <rect x="68" y="317" width="38" height="4" rx="2" fill="#2C70B0"/>
  <ellipse cx="84" cy="330" rx="18" ry="15" fill="#2C2C2C"/>
  <ellipse cx="280" cy="250" rx="28" ry="22" fill="#2C2C2C" transform="rotate(30 280 250)"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="#2C2C2C"/>
  <ellipse cx="312" cy="290" rx="20" ry="35" fill="#2C2C2C" transform="rotate(-20 312 290)"/>
  <rect x="294" y="308" width="38" height="16" rx="6" fill="#4A90D9"/>
  <rect x="294" y="311" width="38" height="4" rx="2" fill="#2C70B0"/>
  <rect x="294" y="317" width="38" height="4" rx="2" fill="#2C70B0"/>
  <ellipse cx="316" cy="330" rx="18" ry="15" fill="#2C2C2C"/>
  <path d="M158 245 Q185 255 200 250 Q185 268 158 262 Z" fill="#E0E0E0" opacity="0.5"/>
  <path d="M242 245 Q215 255 200 250 Q215 268 242 262 Z" fill="#E0E0E0" opacity="0.5"/>
  <ellipse cx="200" cy="295" rx="18" ry="12" fill="#E0E0E0" opacity="0.3"/>
  <ellipse cx="200" cy="318" rx="15" ry="10" fill="#E0E0E0" opacity="0.3"/>
  <rect x="155" y="355" width="48" height="90" rx="20" fill="#2C2C2C"/>
  <rect x="153" y="355" width="52" height="35" rx="8" fill="#1A1A1A"/>
  <rect x="197" y="355" width="48" height="90" rx="20" fill="#2C2C2C"/>
  <rect x="195" y="355" width="52" height="35" rx="8" fill="#1A1A1A"/>
  <line x1="200" y1="355" x2="200" y2="390" stroke="#333333" strokeWidth="2"/>
  <ellipse cx="179" cy="445" rx="26" ry="12" fill="#1A1A1A"/>
  <ellipse cx="172" cy="443" rx="20" ry="9" fill="#2C2C2C"/>
  <ellipse cx="221" cy="445" rx="26" ry="12" fill="#1A1A1A"/>
  <ellipse cx="228" cy="443" rx="20" ry="9" fill="#2C2C2C"/>
  <ellipse cx="200" cy="150" rx="58" ry="55" fill="none" stroke="#1A1A1A" strokeWidth="2.5"/>
  <ellipse cx="200" cy="280" rx="75" ry="85" fill="none" stroke="#1A1A1A" strokeWidth="2.5"/>
  <ellipse cx="108" cy="228" rx="32" ry="26" fill="none" stroke="#1A1A1A" strokeWidth="2.5"/>
  <ellipse cx="292" cy="228" rx="32" ry="26" fill="none" stroke="#1A1A1A" strokeWidth="2.5"/>
  <g transform="translate(92,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
  <g transform="translate(308,210)">
    <polygon points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2" fill="#FFD700" opacity="0.9"/>
  </g>
</svg>
);

export { BearAvatar, MonkeyAvatar, RabbitAvatar, PandaAvatar };

const AVAILABLE_AVATARS = [
  { id: "bear", name: "خرس", Component: BearAvatar },
  { id: "monky", name: "میمون", Component: MonkeyAvatar },
  { id: "rabbit", name: "خرگوش", Component: RabbitAvatar },
  { id: "panda", name: "پاندا", Component: PandaAvatar },
];

const UserInfoPage = ({
  currentUser,
  activeCoachData,
  pupilStyle,
  goHome,
  selectedCoach,
  setCurrentUser,
}) => {
  const navigate = useNavigate();

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    if (currentUser) {
      if (currentUser.height) setHeight(currentUser.height);
      if (currentUser.weight) setWeight(currentUser.weight);
      if (currentUser.avatar) setSelectedAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const handleSaveProfile = () => {
    if (!height || !weight || !selectedAvatar) {
      setSaveMessage("⚠️ لطفاً قد، وزن و آواتار را انتخاب کن");
      return;
    }

    const updatedUser = {
      ...currentUser,
      height,
      weight,
      avatar: selectedAvatar,
    };

    const existingUsers = JSON.parse(localStorage.getItem("fitness_users")) || [];
    const index = existingUsers.findIndex((u) => u.username === currentUser.username);

    if (index !== -1) {
      existingUsers[index] = updatedUser;
      localStorage.setItem("fitness_users", JSON.stringify(existingUsers));
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    if (setCurrentUser) setCurrentUser(updatedUser);

    setSaveMessage("✅ اطلاعات با موفقیت ذخیره شد! در حال انتقال...");
    setTimeout(() => { navigate('/profile'); }, 2000);
  };

  return (
    <div className="user-page" role="main" aria-label="صفحه اطلاعات کاربر">
      <div className="coach-container" aria-label="آواتار مربی">
        {activeCoachData && <activeCoachData.Component pupilStyle={pupilStyle} />}
      </div>

      <h1 className="title">{`خوش آمدی ${currentUser?.username || "ورزشکار"} 💪`}</h1>
      <p className="subtitle">{`مربی ${selectedCoach || "شما"} از شما قد و وزن رو میخواد تا برنامه بهتری بتونه بده`}</p>

      <div className="input-row">
        <div className="input-wrapper">
          <input
            type="number"
            placeholder="قد (سانتی‌متر)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="input-field"
            aria-label="قد (سانتی متر)"
            min="0"
          />
          <span className="input-icon">📏</span>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            placeholder="وزن (کیلوگرم)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input-field"
            aria-label="وزن (کیلوگرم)"
            min="0"
          />
          <span className="input-icon">⚖️</span>
        </div>
      </div>

      <h4 className="avatar-title">آواتار ورزشیودت رو انتخاب کن</h4>

      <div className="avatar-grid" role="list" aria-label="لیست آواتارها">
        {AVAILABLE_AVATARS.map((avatar) => {
          const AvatarComponent = avatar.Component;
          const active = selectedAvatar === avatar.id;
          return (
            <div
              key={avatar.id}
              role="listitem"
              tabIndex={0}
              className={`avatar-card${active ? " active" : ""}`}
              onClick={() => setSelectedAvatar(avatar.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedAvatar(avatar.id);
              }}
              aria-pressed={active}
              aria-label={`انتخاب آواتار ${avatar.name}`}
            >
              <div className="avatar-img-container">
                <AvatarComponent />
              </div>
              <span className="avatar-name">{avatar.name}</span>
            </div>
          );
        })}
      </div>

      <button onClick={handleSaveProfile} className="start-btn" aria-label="ذخیره اطلاعات و شروع تمرین">
        شروع تمرین 🚀
      </button>

      {saveMessage && (
        <p
          className={saveMessage.includes("⚠️") ? "message-error" : "message-success"}
          role="alert"
          aria-live="polite"
        >
          {saveMessage}
        </p>
      )}

      <button onClick={goHome} className="logout-btn" aria-label="خروج از حساب">
        خروج از حساب
      </button>
    </div>
  );
};

export default UserInfoPage;
