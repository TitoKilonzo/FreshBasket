/* ============================================================
   FRESHBASKET — Shared JavaScript
   ============================================================ */

const SELLER_PHONE = '+254743336009';
const WA_BASE = `https://wa.me/${SELLER_PHONE.replace('+','')}`;

const PRODUCTS = [
  {id:1,  name:'Tomatoes',      img:'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&q=80&auto=format', cat:'Vegetables',    price:60,  weight:'500g',    badge:'Fresh'},
  {id:2,  name:'Spinach',       img:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80&auto=format', cat:'Vegetables',    price:35,  weight:'Bunch'},
  {id:3,  name:'Carrots',       img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80&auto=format', cat:'Vegetables',    price:50,  weight:'500g'},
  {id:4,  name:'Onions',        img:'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&q=80&auto=format', cat:'Vegetables',    price:45,  weight:'500g',    badge:'Popular'},
  {id:5,  name:'Garlic',        img:'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400&q=80&auto=format', cat:'Vegetables',    price:40,  weight:'100g'},
  {id:6,  name:'Bell Pepper',   img:'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80&auto=format', cat:'Vegetables',    price:55,  weight:'250g'},
  {id:7,  name:'Bananas',       img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80&auto=format', cat:'Fruits',        price:80,  weight:'1kg',     badge:'Popular'},
  {id:8,  name:'Avocado',       img:'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80&auto=format', cat:'Fruits',        price:30,  weight:'Each'},
  {id:9,  name:'Mango',         img:'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80&auto=format', cat:'Fruits',        price:25,  weight:'Each',    badge:'In Season'},
  {id:10, name:'Watermelon',    img:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80&auto=format', cat:'Fruits',        price:150, weight:'Whole'},
  {id:11, name:'Oranges',       img:'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80&auto=format', cat:'Fruits',        price:70,  weight:'500g'},
  {id:12, name:'Pineapple',     img:'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80&auto=format', cat:'Fruits',        price:120, weight:'Each'},
  {id:13, name:'Fresh Milk',    img:'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80&auto=format', cat:'Dairy & Eggs',  price:65,  weight:'500ml',   badge:'Fresh'},
  {id:14, name:'Eggs',          img:'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80&auto=format', cat:'Dairy & Eggs',  price:160, weight:'Tray/30'},
  {id:15, name:'Yoghurt',       img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80&auto=format', cat:'Dairy & Eggs',  price:90,  weight:'400g'},
  {id:16, name:'Butter',        img:'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80&auto=format', cat:'Dairy & Eggs',  price:120, weight:'250g'},
  {id:17, name:'Maize Flour',   img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80&auto=format', cat:'Grains & Pantry',price:210, weight:'2kg',     badge:'Value'},
  {id:18, name:'White Rice',    img:'https://images.unsplash.com/photo-1536304993881-ff86d42818e4?w=400&q=80&auto=format', cat:'Grains & Pantry',price:180, weight:'1kg'},
  {id:19, name:'Lentils',       img:'https://images.unsplash.com/photo-1614977645540-7abd88ba8571?w=400&q=80&auto=format', cat:'Grains & Pantry',price:90,  weight:'500g'},
  {id:20, name:'Sugar',         img:'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80&auto=format', cat:'Grains & Pantry',price:130, weight:'1kg'},
  {id:21, name:'Chicken',       img:'https://images.unsplash.com/photo-1604503468506-a8da13d11680?w=400&q=80&auto=format', cat:'Meat & Fish',   price:480, weight:'1kg',     badge:'Fresh'},
  {id:22, name:'Beef',          img:'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&q=80&auto=format', cat:'Meat & Fish',   price:550, weight:'500g'},
  {id:23, name:'Tilapia',       img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80&auto=format', cat:'Meat & Fish',   price:350, weight:'500g'},
];

/* ── Cart (localStorage) ── */
let cart = JSON.parse(localStorage.getItem('fb_cart') || '{}');

function saveCart(){ localStorage.setItem('fb_cart', JSON.stringify(cart)); }

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  cart[id] = cart[id] ? {...cart[id], qty: cart[id].qty+1} : {...p, qty:1};
  saveCart(); refreshCartUI(); renderProducts && renderProducts();
  showToast(`${p.name} added to cart`);
}
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart(); refreshCartUI(); renderProducts && renderProducts();
}
function removeItem(id){ delete cart[id]; saveCart(); refreshCartUI(); renderProducts && renderProducts(); }
function cartTotal(){ return Object.values(cart).reduce((s,i)=>s+i.price*i.qty,0); }
function cartCount(){ return Object.values(cart).reduce((s,i)=>s+i.qty,0); }

function refreshCartUI(){
  const cnt = cartCount();
  document.querySelectorAll('.cart-badge').forEach(el=>{
    el.textContent = cnt;
    el.classList.toggle('bump', cnt>0);
    setTimeout(()=>el.classList.remove('bump'),300);
  });
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  if(!body) return;

  if(cnt===0){
    body.innerHTML=`<div class="cart-empty"><i class="fa-solid fa-basket-shopping"></i><p>Your basket is empty.<br>Browse our fresh products!</p></div>`;
    if(foot) foot.style.display='none';
    return;
  }
  if(foot) foot.style.display='block';
  body.innerHTML = Object.values(cart).map(item=>`
    <div class="cart-item">
      <img class="ci-img" src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="ci-info">
        <h4>${item.name}</h4>
        <p>KES ${item.price.toLocaleString()} &times; ${item.qty}</p>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <div class="ci-right">
        <span class="ci-price">KES ${(item.price*item.qty).toLocaleString()}</span>
        <button class="rm-btn" onclick="removeItem(${item.id})" title="Remove"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`).join('');
  document.getElementById('cartTotalAmt').textContent = `KES ${cartTotal().toLocaleString()}`;
}

/* ── Cart Drawer ── */
function toggleCart(){
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

/* ── Order Modal ── */
function openOrderModal(){
  if(cartCount()===0){ showToast('Your cart is empty!'); return; }
  const list = document.getElementById('orderList');
  const items = Object.values(cart);
  list.innerHTML = items.map(i=>`
    <div class="ol-item"><span>${i.name} &times; ${i.qty}</span><span>KES ${(i.price*i.qty).toLocaleString()}</span></div>`).join('');
  document.getElementById('orderTotal').textContent = `KES ${cartTotal().toLocaleString()}`;
  document.getElementById('orderModal').classList.add('open');
}
function closeOrderModal(){ document.getElementById('orderModal').classList.remove('open'); }

/* Build WhatsApp order message */
function waOrderLink(){
  const items = Object.values(cart);
  let msg = `Hello FreshBasket! I'd like to place an order:\n\n`;
  items.forEach(i=>{ msg += `• ${i.name} x${i.qty} — KES ${(i.price*i.qty).toLocaleString()}\n`; });
  msg += `\nTotal: KES ${cartTotal().toLocaleString()}\n\nPlease confirm availability and delivery.`;
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

/* ── Nav Hamburger ── */
function initNav(){
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if(ham && links){
    ham.addEventListener('click',()=>{
      ham.classList.toggle('open');
      links.classList.toggle('open');
    });
    // Close nav on link click (mobile)
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      ham.classList.remove('open'); links.classList.remove('open');
    }));
  }
  // Highlight active page
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.dataset.page === page) a.classList.add('active');
  });
}

/* ── Toast ── */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}

/* ── Product Card Builder ── */
function buildProductCard(p){
  return `
    <div class="product-card" onclick="addToCart(${p.id})">
      <div class="pc-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="pc-badge">${p.badge}</span>` : ''}
      </div>
      <div class="pc-body">
        <div class="pc-cat">${p.cat}</div>
        <h3>${p.name}</h3>
        <div class="pc-weight">${p.weight}</div>
        <div class="pc-footer">
          <div class="pc-price">KES ${p.price}<small> /${p.weight}</small></div>
          <button class="add-btn ${cart[p.id]?'added':''}" id="ab-${p.id}" title="Add to cart">
            <i class="fa-solid ${cart[p.id]?'fa-check':'fa-plus'}"></i>
          </button>
        </div>
      </div>
    </div>`;
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded',()=>{
  initNav();
  refreshCartUI();
  // Close cart on overlay click
  const ov = document.getElementById('cartOverlay');
  if(ov) ov.addEventListener('click', closeCart);
});
