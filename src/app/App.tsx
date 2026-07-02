import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Instagram, Phone, ChevronLeft } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import laurelLogo from "@/imports/SaveClip.App_437357278_445735091265468_3334946637468012603_n.jpg";

// ─── Premium SVG Icons ────────────────────────────────────────────────────────

const IcoDumbbell = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="9" width="4" height="6" rx="1.5" />
    <rect x="18" y="9" width="4" height="6" rx="1.5" />
    <path d="M6 12h12" /><path d="M6 10.5v3M18 10.5v3" />
  </svg>
);
const IcoGroup = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="7" r="3.5" /><path d="M2 20v-1a7 7 0 0 1 14 0v1" />
    <circle cx="18.5" cy="8" r="2.5" /><path d="M22 20v-1a5 5 0 0 0-4-4.9" />
  </svg>
);
const IcoDance = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4.5" r="2" />
    <path d="M12 6.5v4M8.5 9l3.5 2 3.5-2M8.5 8L6 6.5M15.5 8L18 6.5" />
    <path d="M9 13.5l-2 4.5M15 13.5l2 4.5M9.5 13.5h5" />
  </svg>
);
const IcoYoga = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v5M8 8.5C5 9.5 3.5 12 4 15c2 .5 4-.5 5.5-3M16 8.5c3 1 4.5 3.5 4 6.5-2 .5-4-.5-5.5-3" />
    <path d="M7.5 15l-1 3.5M16.5 15l1 3.5M9.5 18.5h5" />
  </svg>
);
const IcoLotus = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21v-7" />
    <path d="M12 14c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6z" />
    <path d="M12 14c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6z" />
    <path d="M12 14c-1.5-2.5-1.5-6.5 0-9 1.5 2.5 1.5 6.5 0 9z" />
    <path d="M5 19c2-1.5 4.5-2 7-1.5M19 19c-2-1.5-4.5-2-7-1.5" />
  </svg>
);
const IcoGem = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M2 9h20M12 3l4 6-4 12-4-12z" />
  </svg>
);
const IcoStar = ({ size = 16, className = "", filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);
const IcoCheck = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const IcoArrow = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const IcoShield = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L3 7v6c0 5 4 9 9 11 5-2 9-6 9-11V7z" />
  </svg>
);
const IcoTrophy = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 2h10v9a5 5 0 0 1-10 0z" />
    <path d="M7 5H3a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4M17 5h4a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4" />
    <path d="M12 17v3M8 22h8" />
  </svg>
);
const IcoSparkle = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
const IcoHeart = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IcoClock = ({ size = 12, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
  </svg>
);
const IcoCalendar = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IcoChart = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18" /><path d="M7 16l4-4 4 4 4-6" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  { id: 1, Icon: IcoDumbbell, title: "Персональные тренировки",  desc: "Индивидуальные занятия, направленные на ваши цели, с сертифицированными тренерами.", duration: "60 мин", price: "150,000 UZS" },
  { id: 2, Icon: IcoGroup,    title: "Групповой фитнес",         desc: "Энергичные групповые тренировки, подходящие для любого уровня подготовки.",            duration: "45 мин", price: "80,000 UZS"  },
  { id: 3, Icon: IcoDance,    title: "Зумба",                   desc: "Зажигательные латиноамериканские танцевальные классы — как праздник каждый день.",      duration: "60 мин", price: "90,000 UZS"  },
  { id: 4, Icon: IcoYoga,     title: "Йога и Пилатес",          desc: "Обретите баланс и укрепите корпус с помощью осознанного движения.",                     duration: "60 мин", price: "100,000 UZS" },
  { id: 5, Icon: IcoLotus,    title: "СПА и массаж",            desc: "Восстанавливающий массаж и уходы за телом для полного восстановления.",                 duration: "90 мин", price: "250,000 UZS" },
  { id: 6, Icon: IcoGem,      title: "Косметология",            desc: "Передовые процедуры по уходу за кожей и красотой от сертифицированных специалистов.",   duration: "60 мин", price: "200,000 UZS" },
];

const TRAINERS = [
  { name: "Нилуфар Рашидова", role: "Главный тренер",    exp: "8 лет", spec: "HIIT и силовые",    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=520&fit=crop&auto=format" },
  { name: "Зульфия Каримова",  role: "Инструктор йоги",  exp: "6 лет", spec: "Йога и пилатес",    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=520&fit=crop&auto=format" },
  { name: "Малика Юсупова",    role: "Тренер зумбы",     exp: "5 лет", spec: "Танцевальный фитнес", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=520&fit=crop&auto=format" },
  { name: "Дилором Назарова",  role: "Спа-терапевт",     exp: "7 лет", spec: "Массаж и терапия",  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=520&fit=crop&auto=format" },
];

const TESTIMONIALS = [
  { name: "Азиза М.",   text: "Laurel полностью изменил мою жизнь. Тренеры невероятно поддерживают, а спа — мирового уровня.", rating: 5, months: "Участница 8 месяцев"  },
  { name: "Сабрина К.", text: "Лучший женский фитнес-клуб в Ташкенте. Я чувствую себя в безопасности, мотивированной и избалованной каждый визит.", rating: 5, months: "Участница 14 месяцев" },
  { name: "Нодира Т.",  text: "Занятия зумбой просто потрясающие — я жду каждого занятия. Персонал делает тебя частью семьи.", rating: 5, months: "Участница 6 месяцев"  },
];

const SCHEDULE = [
  { time: "07:00", mon: "Yoga",    tue: "Pilates", wed: "Yoga",    thu: "Pilates", fri: "Yoga",    sat: "Zumba",   sun: ""      },
  { time: "09:00", mon: "Zumba",   tue: "HIIT",    wed: "Zumba",   thu: "HIIT",    fri: "Zumba",   sat: "Yoga",    sun: "Zumba" },
  { time: "11:00", mon: "Pilates", tue: "Yoga",    wed: "HIIT",    thu: "Yoga",    fri: "Pilates", sat: "HIIT",    sun: "Yoga"  },
  { time: "17:00", mon: "HIIT",    tue: "Zumba",   wed: "Yoga",    thu: "Zumba",   fri: "HIIT",    sat: "Pilates", sun: ""      },
  { time: "19:00", mon: "Yoga",    tue: "Pilates", wed: "Zumba",   thu: "HIIT",    fri: "Yoga",    sat: "",        sun: ""      },
];

const PRICING = [
  { name: "Базовый",   price: "299,000", period: "UZS / месяц", highlight: false, features: ["Полный доступ к тренажёрному залу", "Групповые занятия (8/мес.)", "Раздевалка и душевые", "Оценка физической подготовки"] },
  { name: "Премиум",   price: "499,000", period: "UZS / месяц", highlight: true,  features: ["Неограниченный доступ в зал", "Все групповые занятия", "1 персональная тренировка/мес.", "Доступ в сауну", "Консультация по питанию"] },
  { name: "VIP Люкс",  price: "799,000", period: "UZS / месяц", highlight: false, features: ["Всё из Премиума", "4 персональные тренировки/мес.", "Ежемесячная спа-процедура", "Косметологический сеанс", "Приоритетная запись", "Эксклюзивный лаунж"] },
];

const TIME_SLOTS = ["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00","18:00","19:00"];

const CLASS_COLORS: Record<string, string> = {
  Yoga:    "bg-purple-900/40 text-purple-200 border border-purple-700/30",
  Pilates: "bg-sky-900/40    text-sky-200    border border-sky-700/30",
  Zumba:   "bg-pink-900/40   text-pink-200   border border-pink-700/30",
  HIIT:    "bg-orange-900/40 text-orange-200 border border-orange-700/30",
};

const GOLD = "#C9A84C";

// Display mapping for schedule day headers: English key → Russian display
const DAY_DISPLAY: Record<string, string> = {
  Mon: "Пн", Tue: "Вт", Wed: "Ср", Thu: "Чт", Fri: "Пт", Sat: "Сб", Sun: "Вс",
};

function getNext14Days() {
  const DAY   = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
  const MONTH = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
  return Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i + 1);
    return { key: d.toISOString().slice(0, 10), day: DAY[d.getDay()], date: d.getDate(), month: MONTH[d.getMonth()] };
  });
}

// ─── Shared animation presets ─────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

// ─── Section label ────────────────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-8 h-px bg-[#C9A84C]" />
    <span className="text-[#C9A84C] text-[10px] tracking-[0.5em] uppercase">{children}</span>
    <div className="w-8 h-px bg-[#C9A84C]" />
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "О нас",       href: "about"    },
  { label: "Услуги",      href: "services" },
  { label: "Расписание",  href: "schedule" },
  { label: "Тренеры",     href: "trainers" },
  { label: "Цены",        href: "pricing"  },
  { label: "Приложение",  href: "app"      },
  { label: "Запись",      href: "booking"  },
];

function Navbar({ onBooking }: { onBooking: () => void }) {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#080808]/95 backdrop-blur-md shadow-2xl shadow-black/60" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ImageWithFallback src={laurelLogo} alt="Laurel" className="w-9 h-9 rounded-full object-cover border border-[#C9A84C]/30" />
          <div>
            <div className="font-playfair text-[#C9A84C] text-base font-semibold tracking-[0.3em] leading-none">LAUREL</div>
            <div className="text-[#F2E8D9]/35 text-[8px] tracking-[0.4em] uppercase">Fit & Spa</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={`#${href}`}
               className="text-[#F2E8D9]/55 hover:text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase transition-colors duration-300">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onBooking}
            className="hidden md:block px-6 py-2.5 bg-[#C9A84C] text-[#080808] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#D4B85A] transition-colors rounded-sm">
            Записаться
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-[#F2E8D9]">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#080808]/98 border-t border-[#C9A84C]/15 px-6 py-6 space-y-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={`#${href}`} onClick={() => setOpen(false)}
               className="block text-[#F2E8D9]/65 hover:text-[#C9A84C] text-sm tracking-widest uppercase py-1.5 transition-colors">{label}</a>
          ))}
          <button onClick={() => { onBooking(); setOpen(false); }}
            className="w-full mt-2 py-3 bg-[#C9A84C] text-[#080808] text-xs font-bold tracking-widest uppercase rounded-sm">
            Записаться на приём
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ onBooking }: { onBooking: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1800&h=1000&fit=crop&auto=format"
             alt="Женский фитнес" className="w-full h-full object-cover" style={{ objectPosition: "60% center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>
      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A84C]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] tracking-[0.5em] uppercase font-medium">Только для женщин · Ташкент</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair text-5xl md:text-7xl text-[#F2E8D9] font-bold leading-[1.1] mb-6">
            Где Сила встречает<br />
            <em className="text-[#C9A84C] not-italic">Красоту</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }}
            className="text-[#F2E8D9]/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Премиальное пространство, созданное исключительно для женщин. Раскрой свой потенциал, восстанови дух и выйди преображённой.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={onBooking}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#080808] font-bold tracking-[0.18em] uppercase text-[11px] hover:bg-[#D4B85A] transition-colors rounded-sm">
              Записаться бесплатно
              <IcoArrow size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <a href="#app"
               className="flex items-center justify-center gap-3 px-8 py-4 border border-[#C9A84C]/40 text-[#C9A84C] font-medium tracking-[0.18em] uppercase text-[11px] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 rounded-sm">
              Смотреть приложение
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}
            className="flex gap-10 md:gap-16">
            {[["7.5K+","Участниц"],["15+","Тренеров"],["8","Услуг"],["5★","Рейтинг"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-playfair text-2xl md:text-3xl text-[#C9A84C] font-bold">{n}</div>
                <div className="text-[#F2E8D9]/35 text-[9px] tracking-widest uppercase mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-8 bg-[#C9A84C]" />
        <span className="text-[#C9A84C] text-[8px] tracking-[0.5em] uppercase">Листай</span>
      </motion.div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img variants={cardItem} src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=620&fit=crop&auto=format"
              alt="Фитнес" className="w-full h-72 md:h-80 object-cover rounded-sm" />
            <motion.img variants={cardItem} src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=620&fit=crop&auto=format"
              alt="СПА" className="w-full h-72 md:h-80 object-cover rounded-sm mt-10" />
          </div>
          <div className="absolute -left-4 -bottom-4 w-24 h-24 border border-[#C9A84C]/20 rounded-sm pointer-events-none" />
          <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#080808] px-4 py-1.5 text-[9px] font-bold tracking-[0.35em] uppercase">Est. 2019</div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionLabel>Наша история</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold mb-6 leading-tight">
            Пространство, созданное<br /><em className="text-[#C9A84C] not-italic">для тебя</em>
          </h2>
          <p className="text-[#F2E8D9]/55 leading-relaxed mb-5 text-sm md:text-base">
            Laurel Fit & Spa был основан с единственной целью: создать пространство, где женщины чувствуют себя как дома, достигая выдающихся результатов. В сердце Ташкента мы объединяем передовой фитнес с роскошным спа — в среде исключительно для женщин.
          </p>
          <p className="text-[#F2E8D9]/55 leading-relaxed mb-10 text-sm md:text-base">
            Наши сертифицированные тренеры и специалисты по оздоровлению обладают многолетним опытом, обеспечивая каждый визит движением к вашим целям — физически, ментально и духовно.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {[
              { Icon: IcoShield,  label: "100% только для женщин", desc: "Приватно и комфортно"       },
              { Icon: IcoTrophy,  label: "Сертифицированные тренеры", desc: "Международные стандарты" },
              { Icon: IcoSparkle, label: "Роскошные объекты",       desc: "Премиальное оборудование"  },
              { Icon: IcoHeart,   label: "Холистическое здоровье",  desc: "Тело, разум и красота"     },
            ].map(({ Icon, label, desc }) => (
              <motion.div key={label} whileHover={{ x: 3 }} transition={{ duration: 0.25 }} className="flex gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#C9A84C]/10 border border-[#C9A84C]/18 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-[#F2E8D9] text-sm font-medium">{label}</div>
                  <div className="text-[#F2E8D9]/35 text-xs mt-0.5">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services({ onBooking }: { onBooking: () => void }) {
  return (
    <section id="services" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Что мы предлагаем</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold mb-4">
            Наши <em className="text-[#C9A84C] not-italic">Услуги</em>
          </h2>
          <p className="text-[#F2E8D9]/40 max-w-sm mx-auto text-sm">Каждая услуга разработана исключительно для женщин — сочетание эффективности и элегантности.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ id, Icon, title, desc, duration, price }) => (
            <motion.div key={id} variants={cardItem}
              whileHover={{ y: -8, boxShadow: `0 24px 60px rgba(201,168,76,0.12)` }}
              transition={{ duration: 0.3 }}
              onClick={onBooking}
              className="group bg-[#111111] border border-[#C9A84C]/10 hover:border-[#C9A84C]/45 p-8 rounded-sm cursor-pointer">
              {/* Icon container with subtle glow on hover */}
              <div className="relative w-12 h-12 mb-6">
                <div className="absolute inset-0 rounded-sm bg-[#C9A84C]/8 group-hover:bg-[#C9A84C]/20 border border-[#C9A84C]/18 group-hover:border-[#C9A84C]/45 transition-all duration-400" />
                <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                     style={{ boxShadow: "0 0 20px rgba(201,168,76,0.25)" }} />
                <div className="relative h-full flex items-center justify-center">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
              </div>
              <h3 className="font-playfair text-xl text-[#F2E8D9] font-semibold mb-3">{title}</h3>
              <p className="text-[#F2E8D9]/42 text-sm leading-relaxed mb-6">{desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#C9A84C]/10">
                <div className="flex items-center gap-1.5 text-[#F2E8D9]/30 text-xs">
                  <IcoClock size={11} /> {duration}
                </div>
                <div className="text-[#C9A84C] text-xs font-medium">от {price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Schedule ─────────────────────────────────────────────────────────────────

function Schedule() {
  // English keys used for data lookup; display names in Russian via DAY_DISPLAY
  const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  return (
    <section id="schedule" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Еженедельное расписание</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold">
            Расписание <em className="text-[#C9A84C] not-italic">занятий</em>
          </h2>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-[#C9A84C]/12">
                <th className="text-[#F2E8D9]/22 text-[9px] tracking-widest uppercase text-left py-3 px-4 w-20 font-medium">Время</th>
                {DAYS.map(d => <th key={d} className="text-[#F2E8D9]/22 text-[9px] tracking-widest uppercase text-center py-3 px-2 font-medium">{DAY_DISPLAY[d]}</th>)}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, i) => (
                <tr key={i} className="border-b border-[#C9A84C]/6 hover:bg-[#C9A84C]/3 transition-colors">
                  <td className="py-3 px-4"><span className="text-[#C9A84C] text-sm font-medium font-mono">{row.time}</span></td>
                  {DAYS.map(d => {
                    const val = row[d.toLowerCase() as keyof typeof row] as string;
                    return (
                      <td key={d} className="py-2.5 px-2 text-center">
                        {val ? <span className={`inline-block px-2 py-0.5 text-[9px] rounded-sm font-medium ${CLASS_COLORS[val] ?? ""}`}>{val}</span>
                              : <span className="text-[#F2E8D9]/10 text-xs">—</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Trainers ─────────────────────────────────────────────────────────────────

function Trainers() {
  return (
    <section id="trainers" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Наша команда</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold">
            Познакомься с <em className="text-[#C9A84C] not-italic">тренерами</em>
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((t, i) => (
            <motion.div key={i} variants={cardItem}
              whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer">
              <img src={t.img} alt={t.name} className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/25 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/35 rounded-sm transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[#C9A84C] text-[9px] tracking-[0.35em] uppercase mb-1">{t.role}</div>
                <div className="font-playfair text-[#F2E8D9] font-semibold text-lg leading-tight">{t.name}</div>
                <div className="text-[#F2E8D9]/40 text-xs mt-1">{t.exp} · {t.spec}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing({ onBooking }: { onBooking: () => void }) {
  return (
    <section id="pricing" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Членство</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold mb-4">
            Выбери свой <em className="text-[#C9A84C] not-italic">план</em>
          </h2>
          <p className="text-[#F2E8D9]/40 text-sm max-w-xs mx-auto">Инвестируй в себя. Каждый план включает доступ к нашему премиальному пространству для женщин.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((plan, idx) => (
            <motion.div key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.13, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className={`relative rounded-sm p-8 border ${plan.highlight ? "bg-[#C9A84C] border-[#C9A84C]" : "bg-[#111111] border-[#C9A84C]/15 hover:border-[#C9A84C]/45"}`}>
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#080808] text-[#C9A84C] text-[8px] px-4 py-1 tracking-[0.3em] uppercase border border-[#C9A84C]/35">
                  Самый популярный
                </div>
              )}
              <div className={`text-[9px] tracking-[0.35em] uppercase mb-2 font-medium ${plan.highlight ? "text-[#080808]/60" : "text-[#C9A84C]"}`}>{plan.name}</div>
              <div className={`font-playfair text-4xl font-bold mb-1 ${plan.highlight ? "text-[#080808]" : "text-[#F2E8D9]"}`}>{plan.price}</div>
              <div className={`text-xs mb-8 ${plan.highlight ? "text-[#080808]/50" : "text-[#F2E8D9]/30"}`}>{plan.period}</div>
              <div className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-2.5">
                    <IcoCheck size={13} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#080808]" : "text-[#C9A84C]"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-[#080808]/70" : "text-[#F2E8D9]/55"}`}>{f}</span>
                  </div>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onBooking}
                className={`w-full py-3 text-[10px] font-bold tracking-[0.25em] uppercase rounded-sm transition-colors ${
                  plan.highlight ? "bg-[#080808] text-[#C9A84C] hover:bg-[#111111]"
                                 : "bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808]"
                }`}>
                Начать
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Booking ──────────────────────────────────────────────────────────────────

function BookingSection() {
  const [step, setStep]                       = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate]       = useState("");
  const [selectedTime, setSelectedTime]       = useState("");
  const [form, setForm]                       = useState({ name: "", phone: "", email: "", note: "" });
  const days                                  = getNext14Days();

  const reset = () => { setStep(1); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); setForm({ name:"", phone:"", email:"", note:"" }); };

  return (
    <section id="booking" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <SectionLabel>Онлайн запись</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold mb-3">
            Запишись на <em className="text-[#C9A84C] not-italic">приём</em>
          </h2>
          <p className="text-[#F2E8D9]/40 text-sm">Забронируй сеанс за несколько минут. Без звонков.</p>
        </motion.div>

        {step < 4 && (
          <div className="flex items-center justify-center mb-12">
            {[1,2,3].map((s, i) => (
              <React.Fragment key={s}>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border transition-all ${
                    step > s  ? "bg-[#C9A84C] border-[#C9A84C] text-[#080808]"
                    : step === s ? "border-[#C9A84C] text-[#C9A84C]"
                    : "border-[#F2E8D9]/15 text-[#F2E8D9]/20"}`}>
                    {step > s ? <IcoCheck size={13} /> : s}
                  </div>
                  <span className={`text-[9px] tracking-wider hidden sm:block ${step >= s ? "text-[#C9A84C]" : "text-[#F2E8D9]/20"}`}>
                    {["Услуга","Дата и время","Данные"][s-1]}
                  </span>
                </div>
                {i < 2 && <div className={`w-16 h-px mx-3 transition-colors ${step > s ? "bg-[#C9A84C]/50" : "bg-[#F2E8D9]/10"}`} />}
              </React.Fragment>
            ))}
          </div>
        )}

        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="font-playfair text-xl text-[#F2E8D9] mb-6 text-center">Выберите услугу</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICES.map(s => (
                <motion.button key={s.id} whileHover={{ y: -4, borderColor: `${GOLD}70` }} whileTap={{ scale: 0.97 }}
                  onClick={() => { setSelectedService(s.title); setStep(2); }}
                  className="p-5 text-left border border-[#C9A84C]/12 bg-[#111111] rounded-sm transition-all group">
                  <s.Icon size={18} className="text-[#C9A84C] mb-3" />
                  <div className="text-[#F2E8D9] text-sm font-medium">{s.title}</div>
                  <div className="text-[#F2E8D9]/30 text-xs mt-1">{s.duration}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <button onClick={() => setStep(1)} className="flex items-center gap-2 text-[#F2E8D9]/30 hover:text-[#C9A84C] text-[10px] tracking-wider uppercase mb-8 transition-colors">
              <ChevronLeft size={14} /> Назад
            </button>
            <div className="bg-[#111111] border border-[#C9A84C]/15 rounded-sm px-4 py-3 mb-8 flex items-center gap-2">
              <IcoCheck size={13} className="text-[#C9A84C]" />
              <span className="text-[#F2E8D9]/45 text-xs">Услуга: <span className="text-[#C9A84C] font-medium">{selectedService}</span></span>
            </div>
            <h3 className="font-playfair text-xl text-[#F2E8D9] mb-5">Выберите дату</h3>
            <div className="flex gap-2 overflow-x-auto pb-4 mb-10" style={{ scrollbarWidth: "none" }}>
              {days.map(d => (
                <motion.button key={d.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedDate(d.key)}
                  className={`shrink-0 w-14 py-3 text-center rounded-sm border transition-all ${
                    selectedDate === d.key ? "bg-[#C9A84C] border-[#C9A84C] text-[#080808]"
                    : "border-[#C9A84C]/15 bg-[#111111] text-[#F2E8D9]/50 hover:border-[#C9A84C]/40"}`}>
                  <div className="text-[9px] uppercase tracking-wider opacity-70">{d.day}</div>
                  <div className="font-playfair text-xl font-bold leading-none my-0.5">{d.date}</div>
                  <div className="text-[9px] opacity-50">{d.month}</div>
                </motion.button>
              ))}
            </div>
            {selectedDate && (
              <>
                <h3 className="font-playfair text-xl text-[#F2E8D9] mb-5">Выберите время</h3>
                <div className="grid grid-cols-5 gap-2 mb-8">
                  {TIME_SLOTS.map(t => (
                    <motion.button key={t} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 text-xs font-medium rounded-sm border transition-all ${
                        selectedTime === t ? "bg-[#C9A84C] border-[#C9A84C] text-[#080808]"
                        : "border-[#C9A84C]/15 bg-[#111111] text-[#F2E8D9]/50 hover:border-[#C9A84C]/40"}`}>{t}
                    </motion.button>
                  ))}
                </div>
              </>
            )}
            <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
              onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime}
              className="w-full py-4 bg-[#C9A84C] disabled:opacity-25 disabled:cursor-not-allowed text-[#080808] font-bold tracking-[0.22em] uppercase text-[11px] rounded-sm hover:bg-[#D4B85A] transition-colors">
              Продолжить
            </motion.button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <button onClick={() => setStep(2)} className="flex items-center gap-2 text-[#F2E8D9]/30 hover:text-[#C9A84C] text-[10px] tracking-wider uppercase mb-8 transition-colors">
              <ChevronLeft size={14} /> Назад
            </button>
            <div className="bg-[#111111] border border-[#C9A84C]/15 rounded-sm px-5 py-4 mb-8 grid grid-cols-3 gap-4">
              {[["Услуга",selectedService],["Дата",selectedDate],["Время",selectedTime]].map(([lbl,val]) => (
                <div key={lbl}>
                  <div className="text-[#F2E8D9]/22 text-[9px] uppercase tracking-wider mb-0.5">{lbl}</div>
                  <div className="text-[#C9A84C] text-sm font-medium truncate">{val}</div>
                </div>
              ))}
            </div>
            <form onSubmit={e => { e.preventDefault(); setStep(4); }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#F2E8D9]/40 text-[9px] tracking-[0.3em] uppercase mb-2">Полное имя *</label>
                  <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Ваше имя"
                    className="w-full bg-[#111111] border border-[#C9A84C]/15 focus:border-[#C9A84C]/55 text-[#F2E8D9] px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#F2E8D9]/15 text-sm" />
                </div>
                <div>
                  <label className="block text-[#F2E8D9]/40 text-[9px] tracking-[0.3em] uppercase mb-2">Телефон *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+998 90 000 00 00"
                    className="w-full bg-[#111111] border border-[#C9A84C]/15 focus:border-[#C9A84C]/55 text-[#F2E8D9] px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#F2E8D9]/15 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[#F2E8D9]/40 text-[9px] tracking-[0.3em] uppercase mb-2">Эл. почта</label>
                <input type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} placeholder="your@email.com"
                  className="w-full bg-[#111111] border border-[#C9A84C]/15 focus:border-[#C9A84C]/55 text-[#F2E8D9] px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#F2E8D9]/15 text-sm" />
              </div>
              <div>
                <label className="block text-[#F2E8D9]/40 text-[9px] tracking-[0.3em] uppercase mb-2">Примечание (необязательно)</label>
                <textarea value={form.note} onChange={e => setForm({...form,note:e.target.value})} rows={3} placeholder="Особые пожелания или информация о здоровье..."
                  className="w-full bg-[#111111] border border-[#C9A84C]/15 focus:border-[#C9A84C]/55 text-[#F2E8D9] px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#F2E8D9]/15 text-sm resize-none" />
              </div>
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit"
                className="w-full py-4 bg-[#C9A84C] text-[#080808] font-bold tracking-[0.22em] uppercase text-[11px] rounded-sm hover:bg-[#D4B85A] transition-colors mt-2">
                Подтвердить запись
              </motion.button>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
            className="text-center py-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-[#C9A84C]/12 border border-[#C9A84C]/35 flex items-center justify-center mx-auto mb-6">
              <IcoCheck size={32} className="text-[#C9A84C]" />
            </motion.div>
            <h3 className="font-playfair text-3xl md:text-4xl text-[#F2E8D9] font-bold mb-4">Запись подтверждена!</h3>
            <p className="text-[#F2E8D9]/45 mb-6 text-sm">Спасибо, <span className="text-[#C9A84C] font-semibold">{form.name}</span>. Ждём вас!</p>
            <div className="inline-block bg-[#111111] border border-[#C9A84C]/18 rounded-sm px-8 py-5 mb-8 text-left space-y-1.5">
              <div className="text-[#C9A84C] font-semibold text-sm">{selectedService}</div>
              <div className="text-[#F2E8D9]/50 text-sm">{selectedDate} в {selectedTime}</div>
              {form.phone && <div className="text-[#F2E8D9]/25 text-xs">Мы свяжемся с вами по номеру {form.phone}</div>}
            </div>
            <br />
            <button onClick={reset} className="px-8 py-3 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase rounded-sm hover:bg-[#C9A84C]/10 transition-colors">
              Записаться ещё раз
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── App Design Showcase ──────────────────────────────────────────────────────

function PhoneScreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[230px] h-[490px] rounded-[38px] border-[6px] border-[#1c1c1c] bg-[#080808] overflow-hidden shrink-0"
         style={{ boxShadow: "0 0 60px rgba(201,168,76,0.10), 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(201,168,76,0.12)" }}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-b-2xl z-10" />
      {/* Status bar */}
      <div className="flex justify-between px-4 pt-6 pb-0 text-[7px] text-[#F2E8D9]/25">
        <span>9:41</span><span>◼◼◼</span>
      </div>
      <div className="h-full overflow-hidden">{children}</div>
    </div>
  );
}

function AppShowcase() {
  const [active, setActive] = useState(1);
  const touchStartX = React.useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) setActive(a => diff > 0 ? Math.min(a + 1, 2) : Math.max(a - 1, 0));
  };

  const HomeScreen = () => (
    <div className="px-4 pt-2 pb-16 font-['Jost']">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[#F2E8D9]/35 text-[9px]">Доброе утро,</div>
          <div className="text-[#F2E8D9] font-semibold text-[13px]">Азиза ✨</div>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center">
          <span className="text-[#C9A84C] text-[9px] font-bold">А</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[["12","Тренировок","В этом месяце"],["8.4k","Калорий","Сожжено"]].map(([v,l,s]) => (
          <div key={l} className="bg-[#181818] rounded-xl p-3 border border-[#C9A84C]/8">
            <div className="text-[#C9A84C] text-[20px] font-bold leading-none font-playfair">{v}</div>
            <div className="text-[#F2E8D9] text-[9px] mt-0.5">{l}</div>
            <div className="text-[#F2E8D9]/25 text-[8px]">{s}</div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-[#C9A84C]/18 to-transparent border border-[#C9A84C]/25 rounded-xl p-3.5 mb-3">
        <div className="text-[#C9A84C] text-[7px] tracking-[0.4em] uppercase mb-1">Следующий класс</div>
        <div className="text-[#F2E8D9] font-semibold text-[12px] font-playfair">Yoga & Pilates</div>
        <div className="text-[#F2E8D9]/40 text-[9px] mt-0.5 flex items-center gap-1">
          <IcoClock size={8} className="text-[#C9A84C]" /> Сегодня · 09:00
        </div>
        <div className="mt-2.5 bg-[#C9A84C] text-[#080808] text-[8px] font-bold text-center py-1.5 rounded-lg tracking-widest">
          ВОЙТИ
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          [<IcoCalendar size={14} className="text-[#C9A84C]" />,"Запись"],
          [<IcoChart size={14} className="text-[#C9A84C]" />,"Трекер"],
          [<IcoLotus size={14} className="text-[#C9A84C]" />,"СПА"],
        ].map(([icon, lbl], i) => (
          <div key={i as number} className="bg-[#181818] border border-[#C9A84C]/8 rounded-xl p-2.5 text-center flex flex-col items-center gap-1">
            {icon}
            <div className="text-[#F2E8D9]/45 text-[8px]">{lbl as string}</div>
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#0f0f0f] border-t border-[#C9A84C]/10 flex items-center justify-around px-3">
        {[[<IcoHeart size={14} />, "Главная", true],[<IcoCalendar size={14} />, "Запись", false],[<IcoDumbbell size={14} />, "Тренинг", false],[<IcoGem size={14} />, "СПА", false]].map(([ic, lbl, on], i) => (
          <div key={i} className={`flex flex-col items-center gap-0.5 ${on ? "text-[#C9A84C]" : "text-[#F2E8D9]/20"}`}>
            {ic}{/* @ts-ignore */}
            <span className="text-[7px]">{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ClassesScreen = () => (
    <div className="px-4 pt-2 pb-16">
      <div className="text-[#F2E8D9] font-bold text-[13px] mb-1 font-playfair">Занятия</div>
      <div className="flex gap-2 mb-3">
        {["Сегодня","Завтра","Все"].map((tab, i) => (
          <div key={tab} className={`px-2.5 py-1 rounded-full text-[8px] font-medium ${i === 0 ? "bg-[#C9A84C] text-[#080808]" : "bg-[#1a1a1a] text-[#F2E8D9]/35"}`}>{tab}</div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { name:"Yoga Flow",   time:"07:00", trainer:"Нилуфар", spots:"3 осталось", grad:"from-purple-900/40" },
          { name:"Zumba Party", time:"09:00", trainer:"Малика",  spots:"Мест нет",   grad:"from-pink-900/40"   },
          { name:"HIIT Power",  time:"11:00", trainer:"Зульфия", spots:"8 мест",     grad:"from-orange-900/40" },
          { name:"Pilates",     time:"17:00", trainer:"Нилуфар", spots:"5 мест",     grad:"from-sky-900/40"    },
        ].map(c => (
          <div key={c.name} className={`bg-gradient-to-r ${c.grad} to-transparent border border-white/5 rounded-xl p-3`}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#F2E8D9] text-[10px] font-semibold font-playfair">{c.name}</div>
                <div className="text-[#F2E8D9]/35 text-[8px] mt-0.5">{c.trainer} · {c.time}</div>
              </div>
              <span className={`text-[7px] px-1.5 py-0.5 rounded-full ${c.spots==="Мест нет" ? "bg-red-900/60 text-red-300" : "bg-[#C9A84C]/20 text-[#C9A84C]"}`}>
                {c.spots}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#0f0f0f] border-t border-[#C9A84C]/10 flex items-center justify-around px-3">
        {[[<IcoHeart size={14} />, "Главная", false],[<IcoCalendar size={14} />, "Запись", true],[<IcoDumbbell size={14} />, "Тренинг", false],[<IcoGem size={14} />, "СПА", false]].map(([ic, lbl, on], i) => (
          <div key={i} className={`flex flex-col items-center gap-0.5 ${on ? "text-[#C9A84C]" : "text-[#F2E8D9]/20"}`}>
            {ic}{/* @ts-ignore */}
            <span className="text-[7px]">{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const BookScreen = () => (
    <div className="px-4 pt-2 pb-16">
      <div className="text-[#F2E8D9] font-bold text-[13px] mb-4 font-playfair">Быстрая запись</div>
      <div className="space-y-3">
        <div>
          <div className="text-[#F2E8D9]/30 text-[7px] uppercase tracking-wider mb-1.5">Услуга</div>
          <div className="bg-[#1a1a1a] border border-[#C9A84C]/30 rounded-xl px-3 py-2 text-[#C9A84C] text-[10px] flex items-center gap-2">
            <IcoDumbbell size={12} /> Персональные тренировки
          </div>
        </div>
        <div>
          <div className="text-[#F2E8D9]/30 text-[7px] uppercase tracking-wider mb-1.5">Дата</div>
          <div className="flex gap-1.5">
            {[["Чт","3"],["Пт","4"],["Сб","5"]].map(([d,n],i) => (
              <div key={d} className={`flex-1 py-1.5 text-center rounded-xl text-[8px] ${i===1 ? "bg-[#C9A84C] text-[#080808] font-bold" : "bg-[#1a1a1a] text-[#F2E8D9]/35"}`}>
                {d}<br />{n}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[#F2E8D9]/30 text-[7px] uppercase tracking-wider mb-1.5">Время</div>
          <div className="grid grid-cols-3 gap-1">
            {["09:00","10:00","11:00","14:00","15:00","16:00"].map((t,i) => (
              <div key={t} className={`py-1.5 text-center rounded-lg text-[8px] ${i===2 ? "bg-[#C9A84C] text-[#080808] font-bold" : "bg-[#1a1a1a] text-[#F2E8D9]/35"}`}>{t}</div>
            ))}
          </div>
        </div>
        <div className="bg-[#C9A84C] rounded-xl py-2.5 text-center text-[#080808] font-bold text-[10px] tracking-widest mt-1">
          Подтвердить
        </div>
        <div className="bg-[#181818] border border-[#C9A84C]/10 rounded-xl p-3">
          <div className="text-[#C9A84C] text-[7px] tracking-widest uppercase mb-1">Ваше следующее занятие</div>
          <div className="text-[#F2E8D9] text-[10px] font-medium font-playfair">Yoga & Pilates</div>
          <div className="text-[#F2E8D9]/30 text-[8px]">Завтра · 09:00 · Нилуфар</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#0f0f0f] border-t border-[#C9A84C]/10 flex items-center justify-around px-3">
        {[[<IcoHeart size={14} />, "Главная", false],[<IcoCalendar size={14} />, "Запись", false],[<IcoDumbbell size={14} />, "Тренинг", true],[<IcoGem size={14} />, "СПА", false]].map(([ic, lbl, on], i) => (
          <div key={i} className={`flex flex-col items-center gap-0.5 ${on ? "text-[#C9A84C]" : "text-[#F2E8D9]/20"}`}>
            {ic}{/* @ts-ignore */}
            <span className="text-[7px]">{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const screens = [<HomeScreen />, <ClassesScreen />, <BookScreen />];
  const labels  = ["Главная", "Занятия", "Запись"];

  return (
    <section id="app" className="py-28 bg-[#050505] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Мобильное приложение</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-6xl text-[#F2E8D9] font-bold mb-4">
            Приложение <em className="text-[#C9A84C] not-italic">Laurel</em>
          </h2>
          <p className="text-[#F2E8D9]/45 max-w-sm mx-auto text-sm">
            Премиальный мобильный опыт, который помещает твой путь к здоровью в карман — разработан под стать роскоши нашего пространства.
          </p>
        </motion.div>

        {/* Mobile: single phone with swipe. Desktop: three phones */}
        <div
          className="flex justify-center items-end mb-12"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile — one phone, animated slide */}
          <div className="md:hidden flex flex-col items-center">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <PhoneScreen>{screens[active]}</PhoneScreen>
            </motion.div>
            <div className="text-[#C9A84C] text-xs tracking-widest uppercase mt-4">{labels[active]}</div>
            <div className="flex items-center gap-2 mt-3 text-[#F2E8D9]/25 text-[10px]">
              <span>← </span><span>Листайте для переключения</span><span> →</span>
            </div>
          </div>

          {/* Desktop — three phones */}
          <div className="hidden md:flex items-end gap-8">
            {screens.map((screen, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  onClick={() => setActive(i)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  style={{
                    transform: i === 0 ? "rotate(-5deg)" : i === 2 ? "rotate(5deg)" : "rotate(0deg)",
                    opacity: active === i ? 1 : 0.45,
                    scale: active === i ? 1.05 : 0.95,
                    transition: "opacity 0.3s, scale 0.3s",
                  }}
                >
                  <PhoneScreen>{screen}</PhoneScreen>
                </motion.div>
                <div className={`text-center mt-4 text-xs tracking-widest uppercase transition-colors ${active === i ? "text-[#C9A84C]" : "text-[#F2E8D9]/20"}`}>
                  {labels[i]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selector dots */}
        <div className="flex justify-center gap-2 mb-16">
          {[0,1,2].map(i => (
            <button key={i} onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${active === i ? "w-8 h-2 bg-[#C9A84C]" : "w-2 h-2 bg-[#F2E8D9]/15 hover:bg-[#C9A84C]/40"}`} />
          ))}
        </div>

        {/* Feature list */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { Icon: IcoCalendar, label: "Мгновенная запись",    desc: "Забронируй любой класс или сеанс за секунды"       },
            { Icon: IcoChart,    label: "Трекер прогресса",     desc: "Отслеживай тренировки, калории и достижения"       },
            { Icon: IcoLotus,    label: "СПА и оздоровление",   desc: "Записывайся на спа-процедуры и beauty-сеансы легко" },
          ].map(({ Icon, label, desc }) => (
            <motion.div key={label} variants={cardItem}
              whileHover={{ y: -4 }} transition={{ duration: 0.25 }}
              className="flex gap-4 bg-[#111111] border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 p-5 rounded-sm">
              <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/18 rounded-sm flex items-center justify-center shrink-0">
                <Icon size={17} className="text-[#C9A84C]" />
              </div>
              <div>
                <div className="text-[#F2E8D9] text-sm font-medium mb-0.5">{label}</div>
                <div className="text-[#F2E8D9]/35 text-xs">{desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App store badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {[["🍎","Скачать в","App Store"],["▶","Доступно в","Google Play"]].map(([em,sub,main]) => (
            <motion.div key={main as string} whileHover={{ y: -3, borderColor: `${GOLD}60` }} transition={{ duration: 0.25 }}
              className="flex items-center gap-3 px-6 py-3.5 bg-[#111111] border border-[#C9A84C]/18 rounded-sm cursor-pointer">
              <div className="text-2xl">{em}</div>
              <div>
                <div className="text-[#F2E8D9]/28 text-[8px] uppercase tracking-widest">{sub}</div>
                <div className="text-[#F2E8D9] text-sm font-medium">{main}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-28 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Отзывы</SectionLabel>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F2E8D9] font-bold">
            Слова наших <em className="text-[#C9A84C] not-italic">участниц</em>
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={cardItem} whileHover={{ y: -6, borderColor: `${GOLD}50` }} transition={{ duration: 0.3 }}
              className="bg-[#111111] border border-[#C9A84C]/10 p-8 rounded-sm">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => <IcoStar key={j} size={13} className="text-[#C9A84C]" filled />)}
              </div>
              <p className="text-[#F2E8D9]/65 leading-relaxed mb-6 font-playfair italic text-[15px]">"{t.text}"</p>
              <div className="border-t border-[#C9A84C]/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-[#F2E8D9] text-sm font-semibold">{t.name}</div>
                  <div className="text-[#F2E8D9]/28 text-xs mt-0.5">{t.months}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/22 flex items-center justify-center">
                  <span className="text-[#C9A84C] text-xs font-bold">{t.name[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onBooking }: { onBooking: () => void }) {
  return (
    <footer className="bg-[#040404] border-t border-[#C9A84C]/10">
      <div className="bg-[#C9A84C] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-playfair text-3xl md:text-4xl text-[#080808] font-bold mb-3">Готова начать своё преобразование?</h3>
          <p className="text-[#080808]/55 mb-7 text-sm">Первое занятие — бесплатно. Без обязательств.</p>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={onBooking}
            className="px-10 py-4 bg-[#080808] text-[#C9A84C] font-bold tracking-[0.22em] uppercase text-[11px] hover:bg-[#111111] transition-colors rounded-sm">
            Записаться на пробное занятие
          </motion.button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="font-playfair text-[#C9A84C] text-2xl font-bold tracking-[0.25em] mb-0.5">LAUREL</div>
          <div className="text-[#F2E8D9]/20 text-[8px] tracking-[0.45em] uppercase mb-5">Fit & Spa</div>
          <p className="text-[#F2E8D9]/30 text-sm leading-relaxed mb-6">{"Премиальный женский фитнес и спа-центр Ташкента."}</p>
          <div className="flex gap-2.5">
            <a href="https://instagram.com/laurel_uz" target="_blank" rel="noreferrer"
               className="w-8 h-8 border border-[#C9A84C]/22 rounded-sm flex items-center justify-center text-[#F2E8D9]/35 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all">
              <Instagram size={14} />
            </a>
            <a href="tel:+998000000000"
               className="w-8 h-8 border border-[#C9A84C]/22 rounded-sm flex items-center justify-center text-[#F2E8D9]/35 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all">
              <Phone size={14} />
            </a>
          </div>
        </div>
        <div>
          <div className="text-[#F2E8D9] text-[9px] tracking-[0.35em] uppercase mb-5 font-medium">Услуги</div>
          <div className="space-y-2.5">
            {["Персональные тренировки","Групповой фитнес","Зумба","Йога и Пилатес","СПА и массаж","Косметология"].map(s => (
              <div key={s} className="text-[#F2E8D9]/30 hover:text-[#C9A84C] text-sm cursor-pointer transition-colors">{s}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[#F2E8D9] text-[9px] tracking-[0.35em] uppercase mb-5 font-medium">Часы работы</div>
          <div className="space-y-2.5 text-sm">
            {[["Пн — Пт","07:00 — 21:00"],["Суббота","08:00 — 20:00"],["Воскресенье","09:00 — 18:00"]].map(([d,h]) => (
              <div key={d} className="flex justify-between gap-4">
                <span className="text-[#F2E8D9]/30">{d}</span>
                <span className="text-[#F2E8D9]/55">{h}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[#F2E8D9] text-[9px] tracking-[0.35em] uppercase mb-5 font-medium">Контакты</div>
          <div className="space-y-4 text-sm">
            {[
              [<MapPin size={14} />, "Ташкент, Узбекистан\nLaurel Fitness & Spa"],
              [<Phone size={14} />, "+998 90 000 00 00"],
              [<Instagram size={14} />, "@laurel_uz"],
            ].map(([ic, txt], i) => (
              <div key={i} className="flex gap-3">
                <div className="text-[#C9A84C] shrink-0 mt-0.5">{ic}</div>
                <span className="text-[#F2E8D9]/35 whitespace-pre-line">{txt as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#C9A84C]/8 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[#F2E8D9]/15 text-xs">
          <div>© 2024 Laurel Fit & Spa. Все права защищены.</div>
          <div className="text-[#F2E8D9]/25 text-xs">
            Дизайн-концепт от{" "}
            <a href="https://prompter.uz/services" target="_blank" rel="noreferrer" className="text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors">
              Prompter LLC
            </a>
          </div>
          <div className="flex gap-6">
            {["Политика конфиденциальности","Условия использования"].map(l => (
              <span key={l} className="hover:text-[#C9A84C] cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const scrollToBooking = () => setTimeout(() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }), 50);

  return (
    <div className="min-h-screen bg-[#080808]" style={{ fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.2); border-radius: 2px; }
      `}</style>
      <Navbar onBooking={scrollToBooking} />
      <Hero onBooking={scrollToBooking} />
      <About />
      <Services onBooking={scrollToBooking} />
      <Schedule />
      <Trainers />
      <Pricing onBooking={scrollToBooking} />
      <BookingSection />
      <AppShowcase />
      <Testimonials />
      <Footer onBooking={scrollToBooking} />

      {/* Prompter LLC showcase badge */}
      <a
        href="https://prompter.uz/services"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-[#111111]/90 backdrop-blur-sm border border-[#C9A84C]/20 rounded-sm text-[9px] tracking-[0.15em] uppercase text-[#F2E8D9]/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-all duration-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
        Дизайн-концепт · Prompter LLC
      </a>
    </div>
  );
}
