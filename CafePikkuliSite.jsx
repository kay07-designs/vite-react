
import React, { useState } from 'react'

const ZOMATO_URL = "https://www.zomato.com/patna/cafe-pikkuli-1-kankarbagh/order";
const SWIGGY_URL = "https://www.swiggy.com/city/patna/cafe-pikkuli-kankarbagh-rest1052666";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/93SrSHdKV6Z1BoCy7";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.534705579279!2d85.1589176!3d25.6055987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58d4a45a5e03%3A0xb8b4c91d3193c2d!2sCafe%20Pikkuli!5e0!3m2!1sen!2sin!4v1734627000000!5m2!1sen!2sin";
const PHONE_DISPLAY = "08585987233";
const PHONE_TEL = "+918585987233";

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'order', label: 'Order' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Visit' },
];

const MENU_DATA = [
  { section: 'Momo', items: [
    { name:'Veg Steamed Momo', price:170 },
    { name:'Veg Fried Momo', price:190 },
    { name:'Veg Tandoori Momo', price:210 },
    { name:'Paneer Steamed Momo', price:220 },
    { name:'Veg Steamed Momo In Hot Garlic Sauce', price:220 },
    { name:'Chicken Steamed Momo', price:230 },
    { name:'Paneer Fried Momo', price:240 },
    { name:'Veg Fried Momo In Schezwan Sauce', price:240 },
    { name:'Veg Fried Momo In Barbeque Sauce', price:240 },
    { name:'Chicken Fried Momo', price:250 },
    { name:'Paneer Tandoori Momo', price:260 },
    { name:'Tandoori Chicken Momo', price:270 },
    { name:'Paneer Steamed Momo in Hot Garlic Sauce', price:270 },
    { name:'Chicken Fried Momo in Hot Garlic Sauce', price:280 },
    { name:'Paneer Fried Momo In Schezwan Sauce', price:290 },
    { name:'Paneer Fried Momo In Barbeque Sauce', price:290 },
    { name:'Chicken Fried Momo In Schezwan Sauce', price:300 },
    { name:'Chicken Fried Momo in Barbeque Sauce', price:300 },
  ]},
  { section: 'Salad', items: [
    { name:'Green Salad', price:150 },
    { name:'Kachumber Salad', price:180 },
    { name:'Veg Russian Salad', price:240 },
    { name:'Veg Pasta Salad', price:250 },
    { name:'Chicken Pasta Salad', price:280 },
    { name:'Coleslaw (veg)', price:280 },
    { name:'Greek Salad (veg)', price:280 },
    { name:'Veg Caesar Salad', price:290 },
    { name:'Greek Salad (chicken)', price:340 },
    { name:'Grilled Chicken Salad', price:340 },
    { name:'Chicken Caesar Salad', price:350 },
  ]},
  { section: 'Soup', items: [
    { name:'Veg Clear Soup', price:120 },
    { name:'Tomato Basil Soup', price:150 },
    { name:'Chicken Clear Soup', price:150 },
    { name:'Cream of Mushroom Soup', price:170 },
    { name:'Cream of Broccoli Soup', price:180 },
    { name:'Cream of Tomato', price:180 },
    { name:'Veg Hot & Sour Soup', price:150 },
    { name:'Veg Sweet Corn Soup', price:150 },
    { name:'Veg Manchow Soup', price:150 },
    { name:'Veg Lemon Coriander Soup', price:150 },
    { name:'Veg Talumein Soup', price:160 },
    { name:'Chicken Sweet Corn Soup', price:180 },
    { name:'Chicken Hot & Sour Soup', price:180 },
    { name:'Chicken Manchow Soup', price:180 },
    { name:'Chicken Lemon Coriander Soup', price:180 },
    { name:'Chicken Talumein Soup', price:200 },
    { name:'Chicken in Roasted Pepper Soup', price:230 },
  ]},
  { section: 'Continental Starter', items: [
    { name:'Veg Tacos', price:150 },
    { name:'Nachos With Dip', price:160 },
    { name:'Garlic Bread', price:190 },
    { name:'French Fries', price:190 },
    { name:'Chicken Tacos', price:200 },
    { name:'Chilli Cheese Garlic Bread', price:210 },
    { name:'Potato Wedges', price:210 },
    { name:'Veg Finger', price:210 },
    { name:'Peri Peri French Fries', price:240 },
    { name:'Cheese Garlic Bread', price:250 },
    { name:'French Fries With Cheese Overload', price:250 },
    { name:'Mexican Chicken Nuggets', price:260 },
    { name:'Chicken Finger', price:260 },
    { name:'Baked Veg Crostini', price:290 },
    { name:'Barbeque Chicken Wings', price:290 },
    { name:'Cheese Balls', price:290 },
    { name:'Corn Cheese Balls', price:290 },
    { name:'Paneer Popcorn', price:300 },
    { name:'Baked Chicken Crostini', price:300 },
    { name:'Herb Mushroom', price:300 },
    { name:'Chicken Popcorn', price:310 },
    { name:'Peri Peri Chicken Wings', price:320 },
    { name:'French Fries With Cheese Chicken Overload', price:320 },
    { name:'Mexican Veg Quesadilla', price:320 },
  ]},
  { section: 'Tandoor', items: [
    { name:'Tandoori Aloo', price:220 },
    { name:'Veg Seekh Kebab', price:250 },
    { name:'Paneer Pudina Tikka', price:290 },
    { name:'Paneer Chatkara Tikka', price:290 },
    { name:'Achari Paneer Tikka', price:290 },
    { name:'Mushroom Cheese Kebab', price:290 },
    { name:'Tandoori Chicken (half)', price:300 },
    { name:'Paneer Tikka', price:310 },
    { name:'Dahi Kebab', price:310 },
    { name:'Hara Bhara Kebab', price:320 },
    { name:'Chicken Afghani Kebab', price:350 },
    { name:'Chicken Malai Tikka', price:350 },
    { name:'Chicken Tikka', price:400 },
    { name:'Chicken Lehsuni Tikka', price:410 },
    { name:'Kalmi Kebab', price:410 },
    { name:'Chicken Seekh Kebab', price:430 },
    { name:'Chicken Reshmi Kebab', price:430 },
    { name:'Chicken Kali Mirch Tikka', price:430 },
    { name:'Chicken Galouti Kebab', price:450 },
    { name:'Tangri Kebab', price:450 },
    { name:'Shabnam ke Moti', price:450 },
    { name:'Chicken Badshahi Kebab', price:470 },
    { name:'Tandoori Chicken (full)', price:500 },
    { name:'Veg Tandoori Platter', price:600 },
    { name:'Mutton Seekh Kebab', price:600 },
    { name:'Prawn Malai Kebab', price:600 },
    { name:'Mutton Boti Kebab', price:600 },
    { name:'Non‑Veg Tandoori Platter', price:890 },
  ]},
  { section: 'Indian Main Course (Veg)', items: [
    { name:'Jeera Aloo', price:190 },
    { name:'Kadai Vegetable', price:250 },
    { name:'Vegetable Kolhapuri', price:250 },
    { name:'Egg Masala', price:250 },
    { name:'Aloo Gobi Matar', price:270 },
    { name:'Mixed Veg Curry', price:270 },
    { name:'Vegetable Hyderabadi', price:290 },
    { name:'Mushroom Masala', price:290 },
    { name:'Nizami Handi', price:310 },
    { name:'Palak Paneer', price:310 },
    { name:'Veg Kofta Curry', price:310 },
    { name:'Kadai Paneer', price:310 },
    { name:'Matar Paneer', price:310 },
    { name:'Kumbh Makai Matar', price:320 },
    { name:'Shahi Paneer', price:320 },
    { name:'Paneer Pasanda', price:320 },
    { name:'Paneer Chatpata', price:330 },
    { name:'Malai Kofta Wazwan', price:340 },
    { name:'Paneer Tikka Masala', price:350 },
    { name:'Paneer Butter Masala', price:360 },
  ]},
  { section: 'Indian Main Course (Non‑Veg)', items: [
    { name:'Methi Chicken', price:360 },
    { name:'Palak Chicken', price:360 },
    { name:'Chicken Lababdar', price:390 },
    { name:'Chicken Lahori', price:390 },
    { name:'Butter Chicken', price:390 },
    { name:'Kadai Chicken', price:390 },
    { name:'Dum Ka Murg', price:390 },
    { name:'Murg Masala', price:390 },
    { name:'Patiala Chicken', price:390 },
    { name:'Chicken Do Pyaza', price:390 },
    { name:'Achari Chicken', price:400 },
    { name:'Chicken Korma', price:400 },
    { name:'Chicken Tikka Masala', price:410 },
    { name:'Dehati Chicken Curry', price:410 },
    { name:'Mutton Curry Masala', price:450 },
    { name:'Fish Masala', price:480 },
    { name:"Pikkuli's Paneer Badami Kaliya", price:480 },
    { name:'Kadai Mutton', price:510 },
    { name:'Mutton Rogan Josh', price:510 },
    { name:'Dehati Mutton Curry', price:510 },
    { name:'Mutton Pepper Fry', price:520 },
    { name:'Mutton Keema Masala', price:540 },
    { name:'Prawn Masala', price:550 },
    { name:'Kadai Prawn', price:550 },
    { name:'Prawn Do Pyaza', price:550 },
  ]},
  { section: 'Pizza (6" / 9" / 12")', items: [
    { name:'Margherita Pizza', sizes:{"6\"":160, "9\"":290, "12\"":490} },
    { name:'Mediterranean Pizza', sizes:{"6\"":170, "9\"":310, "12\"":530} },
    { name:'Garden Fresh Pizza', sizes:{"6\"":200, "9\"":370, "12\"":650} },
    { name:'Babycorn Mushroom Corn Pizza', sizes:{"6\"":200, "9\"":370, "12\"":650} },
    { name:'Corn Onion Mushroom Pizza', sizes:{"6\"":200, "9\"":370, "12\"":650} },
    { name:'Spicy Veg Mexican Pizza', sizes:{"6\"":200, "9\"":370, "12\"":650} },
    { name:'Sicilian Veg Pizza', sizes:{"6\"":210, "9\"":390, "12\"":680} },
    { name:'Veg Overload Pikkuli Special Pizza', sizes:{"6\"":230, "9\"":430, "12\"":720} },
    { name:'Paneer Tikka Pizza', sizes:{"6\"":270, "9\"":450, "12\"":760} },
    { name:'Chicken Tikka Pizza', sizes:{"6\"":270, "9\"":450, "12\"":760} },
    { name:'Peri Peri Chicken Pizza', sizes:{"6\"":290, "9\"":480, "12\"":780} },
    { name:'Spicy Chicken Keema Pizza', sizes:{"6\"":320, "9\"":520, "12\"":800} },
    { name:'Herb Grilled Chicken Pizza', sizes:{"6\"":320, "9\"":520, "12\"":800} },
    { name:'Barbeque Chicken Pizza', sizes:{"6\"":320, "9\"":520, "12\"":800} },
    { name:'Chicken Overload Pikkuli Special Pizza', sizes:{"6\"":340, "9\"":580, "12\"":850} },
    { name:'Spicy Prawn Pizza', sizes:{"6\"":510, "9\"":710, "12\"":960} },
    { name:'Extra Cheese', sizes:{"6\"":70, "9\"":100, "12\"":140} },
    { name:'Veg Extra Topping', sizes:{"6\"":90, "9\"":130, "12\"":170} },
    { name:'Chicken Extra Topping', sizes:{"6\"":100, "9\"":140, "12\"":180} },
  ]},
  { section: 'Pasta', items: [
    { name:'Veg Alfredo Pasta (White Sauce)', price:350 },
    { name:'Veg Pink Sauce Pasta', price:350 },
    { name:'Veg Arrabiata Pasta (Red Sauce)', price:350 },
    { name:'Mixed Sauce Veg Masala Mafia Pasta', price:350 },
    { name:'Aglio‑e‑Olio Veg Pasta', price:380 },
    { name:'Mixed Sauce Chicken Masala Mafia Pasta', price:410 },
    { name:'Chicken Spaghetti Bolognese', price:410 },
    { name:'Chicken Alfredo Pasta (White Sauce)', price:430 },
    { name:'Chicken Pink Sauce Pasta', price:430 },
    { name:'Chicken Arrabiata Pasta (Red Sauce)', price:430 },
    { name:'Mutton Spaghetti Bolognese', price:560 },
  ]},
  { section: 'Dal & Rice', items: [
    { name:'Dal Fry', price:240 },
    { name:'Dal Tadka', price:240 },
    { name:'Palak Dal', price:240 },
    { name:'Methi Dal', price:240 },
    { name:'Dal Makhani', price:260 },
    { name:'Steamed Rice', price:160 },
    { name:'Jeera Rice', price:190 },
    { name:'Veg Fried Rice', price:210 },
    { name:'Peas Pulao', price:210 },
    { name:'Vegetable Pulao', price:220 },
    { name:'Garlic Butter Rice', price:220 },
    { name:'Veg Garlic Fried Rice', price:230 },
    { name:'Chicken Garlic Fried Rice', price:250 },
    { name:'Schezwan Veg Fried Rice', price:270 },
    { name:'Chicken Fried Rice', price:250 },
    { name:'Herb Butter Rice', price:270 },
    { name:'Kashmiri Pulao', price:300 },
    { name:'Mixed Fried Rice (Non‑Veg)', price:360 },
    { name:'Prawn Fried Rice', price:450 },
  ]},
  { section: 'Burger', items: [
    { name:'Crispy Veg Burger', price:210 },
    { name:'Spicy Veg Burger', price:225 },
    { name:'Magic Mushroom Veg Burger', price:250 },
    { name:'Tandoori Paneer Burger', price:300 },
    { name:'Classic Chicken Burger', price:310 },
    { name:'Tokyo Chicken Burger', price:310 },
    { name:'Crispy Fillet Chicken Burger', price:310 },
    { name:'Juicy Lucy Chicken Burger', price:310 },
    { name:'Pikkuli Veg Overload Burger', price:325 },
    { name:'Double Decker Chicken Burger', price:370 },
    { name:'Pikkuli Chicken Overload Burger', price:400 },
  ]},
  { section: 'Sandwich', items: [
    { name:'Mexican Veg Grilled Sandwich', price:180 },
    { name:'Bombay Masala Veg Grilled Sandwich', price:180 },
    { name:'Corn & Peas Veg Grilled Sandwich', price:200 },
    { name:'Egg Grilled Sandwich', price:220 },
    { name:'Paneer Tikka Veg Grilled Sandwich', price:260 },
    { name:'Mushroom Cheese Veg Grilled Sandwich', price:260 },
    { name:'Peri Peri Chicken Grilled Sandwich', price:270 },
    { name:'Chicken Tikka Grilled Sandwich', price:270 },
    { name:'Barbeque Chicken Grilled Sandwich', price:270 },
    { name:'Chicken Club Grilled Sandwich', price:350 },
  ]},
  { section: 'Indian Bread', items: [
    { name:'Tandoori Roti', price:50 },
    { name:'Plain Phulka', price:50 },
    { name:'Butter Tandoori Roti', price:60 },
    { name:'Plain Naan', price:60 },
    { name:'Ghee/Butter Phulka', price:60 },
    { name:'Butter Naan', price:70 },
    { name:'Plain Kulcha', price:75 },
    { name:'Plain Lachha Paratha', price:75 },
    { name:'Naan (Garlic/Pudina)', price:90 },
    { name:'Stuffed Kulcha (Aloo/Onion)', price:90 },
    { name:'Lachha Paratha (Pudina/Methi)', price:90 },
    { name:'Stuffed Kulcha (Paneer/Mixed)', price:120 },
    { name:'Chicken Keema Naan', price:150 },
  ]},
  { section: 'Sizzler', items: [
    { name:'Cottage Cheese Sizzler', price:400 },
    { name:'Vegetable Sizzler', price:400 },
    { name:'Chinese Vegetable Sizzler', price:410 },
    { name:'Chinese Chicken Sizzler', price:450 },
    { name:'Tandoori Paneer Tikka Sizzler', price:480 },
    { name:'Chicken Tikka Sizzler', price:480 },
    { name:'Barbeque Chicken Sizzler', price:480 },
    { name:'Grilled Chicken Shaslik Sizzler', price:480 },
  ]},
  { section: 'Accompaniments', items: [
    { name:'Roasted Papad', price:30 },
    { name:'Fried Papad', price:40 },
    { name:'Plain Curd', price:60 },
    { name:'Masala Papad', price:70 },
    { name:'Raita (onion/cucumber/tomato/aloo)', price:80 },
    { name:'Mixed Raita', price:100 },
    { name:'Boondi Raita', price:100 },
  ]},
  { section: 'Dessert', items: [
    { name:'Vanilla Ice Cream', price:150 },
    { name:'Hot Gulab Jamun', price:160 },
    { name:'Hot Brownie', price:180 },
    { name:'Chocolate Shot', price:180 },
    { name:'Choice Of Ice Cream (flavors)', price:190 },
    { name:'Tutti Frutti', price:220 },
    { name:'Fruit Salad', price:220 },
    { name:'Hot Brownie with Vanilla Ice Cream', price:230 },
    { name:'Fruit Blast', price:250 },
    { name:'Dark Forest', price:270 },
    { name:'Trifle Pudding', price:300 },
    { name:'Fruit Salad with Ice Cream', price:300 },
    { name:'Fruit Trifle', price:300 },
    { name:'Hot Chocolate Fudge', price:320 },
    { name:'All American Banana Split', price:320 },
  ]},
];

function MenuItem({ item }){
  if(item.sizes){
    return (
      <div className="rounded-2xl p-4 bg-white border border-slate-200">
        <div className="font-semibold">{item.name}</div>
        <div className="mt-2 grid grid-cols-3 gap-3 text-sm text-slate-700">
          {Object.entries(item.sizes).map(([size, price]) => (
            <div key={size} className="flex items-center justify-between border rounded-lg px-3 py-1">
              <span>{size}</span>
              <span>₹{price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl p-4 bg-white border border-slate-200 flex items-center justify-between">
      <div className="font-medium">{item.name}</div>
      <div className="font-semibold">₹{item.price}</div>
    </div>
  );
}

export default function CafePikkuliSite(){
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-slate-800">
      <div className="w-full bg-sky-900 text-white text-center text-sm py-2 px-4">
        Open daily <span className="font-semibold">11:00–23:00</span> • Call <a href={`tel:${PHONE_TEL}`} className="underline">{PHONE_DISPLAY}</a>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🕊️</span>
            <span className="font-semibold tracking-wide">Cafe Pikkuli</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium px-2 py-1 hover:text-sky-900">{n.label}</a>
            ))}
            <a href={ZOMATO_URL} target="_blank" rel="noopener" className="ml-2 rounded-full bg-sky-900 text-white text-sm px-4 py-2 shadow">Order on Zomato</a>
          </nav>
          <button className="md:hidden border rounded-lg px-3 py-2" onClick={()=>setOpen(!open)}>Menu</button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={()=>setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-slate-50">{n.label}</a>
            ))}
            <a href={ZOMATO_URL} target="_blank" rel="noopener" onClick={()=>setOpen(false)} className="block px-3 py-2 rounded-lg bg-sky-900 text-white text-center">Order on Zomato</a>
          </div>
        )}
      </header>

      <section id="home" className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1521017432531-fbd92d1cf0b5?q=80&w=2400&auto=format&fit=crop" alt="Cafe interior" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs bg-white/80">Open daily 11:00–23:00</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Welcome to <span className="text-sky-900">Cafe Pikkuli</span></h1>
            <p className="mt-5 text-lg text-slate-700">Specialty coffee, seasonal brunch, and a full multicuisine menu.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={ZOMATO_URL} target="_blank" rel="noopener" className="rounded-full bg-slate-900 text-white px-6 py-3 font-medium shadow">Order on Zomato</a>
              <a href={SWIGGY_URL} target="_blank" rel="noopener" className="rounded-full border border-slate-300 px-6 py-3 font-medium bg-white/80">Order on Swiggy</a>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-white/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight">Menu</h2>
            <a href="#order" className="text-sky-900 hover:underline">Go to Order →</a>
          </div>
          <div className="mt-8 space-y-10">
            {MENU_DATA.map(sec => (
              <div key={sec.section}>
                <h3 className="text-xl font-bold mb-4 flex items=center gap-3"><span className="w-1.5 h-6 bg-sky-900 rounded-full"></span>{sec.section}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {sec.items.map(it => <MenuItem key={it.name + (it.price||'') } item={it} />)}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">Prices in ₹, inclusive of taxes. Please inform us of any allergies.</p>
        </div>
      </section>

      <section id="order" className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Order Food</h2>
          <p className="mt-3 text-slate-700">Choose your preferred partner below.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a href={ZOMATO_URL} target="_blank" rel="noopener" className="rounded-2xl bg-slate-900 text-white py-6 text-lg font-semibold shadow hover:shadow-lg">Order on Zomato</a>
            <a href={SWIGGY_URL} target="_blank" rel="noopener" className="rounded-2xl border border-slate-300 py-6 text-lg font-semibold bg-white">Order on Swiggy</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">External ordering handled by the partner site/app.</p>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white/60">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Gallery</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1,2,3,4,5,6,7,8,9].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <img src={`https://source.unsplash.com/collection/404339/${310 + i}x${310 + i}`} alt={`Cafe Pikkuli ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Visit Us</h2>
            <p className="mt-4">📍 142 M.I.G, 119/A, P+C Colony Rd, near Lohiya Park, PC Colony, Kankarbagh, Hanuman Nagar, Patna, Bihar 800020</p>
            <div className="mt-4 text-slate-800">📞 <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
            <div className="mt-2 text-slate-800">📍 <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener">View on Google Maps</a></div>
            <div className="mt-4">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Cafe+Pikkuli,+Patna" target="_blank" rel="noopener" className="inline-block rounded-full bg-sky-900 text-white px-6 py-3 text-sm font-medium shadow">🚗 Get Directions</a>
            </div>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <div className="font-medium">Open Hours</div>
              <div className="text-slate-600">11:00 – 23:00 (Mon – Sun)</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow">
            <iframe title="Cafe Pikkuli Location Map" src={GOOGLE_MAPS_EMBED} className="w-full h-[400px] border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-200 bg-white/70 text-center">
        <div className="mb-3 space-x-3">
          <a href={ZOMATO_URL} target="_blank" rel="noopener" className="inline-block rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow">Order on Zomato</a>
          <a href={SWIGGY_URL} target="_blank" rel="noopener" className="inline-block rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium bg-white">Order on Swiggy</a>
        </div>
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Cafe Pikkuli • 11:00–23:00 • {PHONE_DISPLAY}</p>
      </footer>
    </div>
  )
}
