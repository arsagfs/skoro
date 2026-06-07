const SITE = {
  title: "СкороМаркет",
  subtitle: "продукты у дома",
  mark: "S",
  catalogVersion: "ru-products-v1",
  hero: "Готовые наборы",
  heroAccent: "и продукты",
  copy: "Соберите корзину для быстрого обеда или ужина: свежие продукты, лапша, овощи и напитки уже в каталоге.",
  cta: "Собрать корзину",
  db: "skoromarket_static_db",
  cart: "skoromarket_static_cart",
  session: "skoromarket_static_user",
  heroImage: "assets/hero-noodles.jpg",
  search: "Найти продукт",
  promos: [["15 мин", "быстрая доставка"], ["от 109 ₽", "товары на каждый день"], ["Самовывоз", "или доставка домой"]],
};

const ADMIN = {
  login: "admin",
  password: "Skoro2026",
};

const PROMO_CODES = {
  SKORO10: { label: "Скидка 10%", type: "percent", value: 10 },
  FOOD300: { label: "Скидка 300 ₽", type: "fixed", value: 300 },
};

const INITIAL_PRODUCTS = [
  { id: "milk", name: "Молоко", category: "Молочное", price: 109, old_price: 139, image: "assets/dj-milk.webp", badge: "15 мин", description: "Молоко в упаковке, карточка товара с реальным фото продукта." },
  { id: "eggs", name: "Яйца", category: "Бакалея", price: 139, old_price: 169, image: "assets/dj-eggs.webp", badge: "Выгодно", description: "Упаковка яиц для завтраков и домашней выпечки." },
  { id: "apple", name: "Яблоко", category: "Фрукты", price: 69, old_price: 89, image: "assets/dj-apple.webp", badge: "Свежие", description: "Сочное яблоко, товарная карточка для фруктовой полки." },
  { id: "strawberry", name: "Клубника", category: "Фрукты", price: 249, old_price: 299, image: "assets/dj-strawberry.webp", badge: "Сезон", description: "Клубника для десертов, завтраков и перекусов." },
  { id: "kiwi", name: "Киви", category: "Фрукты", price: 129, old_price: 159, image: "assets/dj-kiwi.webp", badge: "Витамин", description: "Киви с ярким вкусом, подходит для смузи и фруктовых тарелок." },
  { id: "cucumber", name: "Огурец", category: "Овощи", price: 89, old_price: 119, image: "assets/dj-cucumber.webp", badge: "Хруст", description: "Огурец для салатов, сэндвичей и легких закусок." },
  { id: "green-bell-pepper", name: "Болгарский перец", category: "Овощи", price: 119, old_price: 149, image: "assets/dj-green-pepper.webp", badge: "Эко", description: "Зеленый болгарский перец для салатов и горячих блюд." },
  { id: "potatoes", name: "Картофель", category: "Овощи", price: 99, old_price: 129, image: "assets/dj-potatoes.webp", badge: "Запас", description: "Картофель для гарниров, супов и запекания." },
  { id: "rice", name: "Рис", category: "Бакалея", price: 159, old_price: 199, image: "assets/dj-rice.webp", badge: "Домой", description: "Рис в упаковке для гарниров и домашних блюд." },
  { id: "cooking-oil", name: "Растительное масло", category: "Бакалея", price: 189, old_price: 229, image: "assets/dj-cooking-oil.webp", badge: "Кухня", description: "Растительное масло для жарки, салатов и выпечки." },
  { id: "honey-jar", name: "Мед", category: "Бакалея", price: 279, old_price: 349, image: "assets/dj-honey.webp", badge: "Сладко", description: "Банка меда к чаю, каше или десертам." },
  { id: "nescafe-coffee", name: "Кофе Nescafe", category: "Напитки", price: 399, old_price: 499, image: "assets/dj-coffee.webp", badge: "2 по цене 1", description: "Растворимый кофе Nescafe в фирменной упаковке." },
  { id: "juice", name: "Сок", category: "Напитки", price: 169, old_price: 209, image: "assets/dj-juice.webp", badge: "Витамин", description: "Сок в упаковке для завтрака и перекуса." },
  { id: "water", name: "Вода", category: "Напитки", price: 69, old_price: 89, image: "assets/dj-water.webp", badge: "Холодная", description: "Питьевая вода в бутылке для ежедневного заказа." },
];

const IMAGE_OPTIONS = [
  "assets/apples.jpg",
  "assets/banana.jpg",
  "assets/bread.jpg",
  "assets/cheese.jpg",
  "assets/coffee.jpg",
  "assets/croissant.jpg",
  "assets/dj-apple.webp",
  "assets/dj-coffee.webp",
  "assets/dj-cooking-oil.webp",
  "assets/dj-cucumber.webp",
  "assets/dj-eggs.webp",
  "assets/dj-green-pepper.webp",
  "assets/dj-honey.webp",
  "assets/dj-juice.webp",
  "assets/dj-kiwi.webp",
  "assets/dj-milk.webp",
  "assets/dj-potatoes.webp",
  "assets/dj-rice.webp",
  "assets/dj-strawberry.webp",
  "assets/dj-water.webp",
  "assets/eggs.jpg",
  "assets/hero-noodles.jpg",
  "assets/juice.jpg",
  "assets/milk.jpg",
  "assets/pasta.jpg",
  "assets/salad.jpg",
  "assets/tomatoes.jpg",
  "assets/water.jpg",
  "assets/yogurt.jpg",
];

let state = { products: [], category: "Все", query: "", cart: {}, user: null, delivery: "Доставка", authMode: "login", sort: "popular", editing: null, adminQuery: "", promo: "" };
const app = document.querySelector("#app");
const money = (value) => new Intl.NumberFormat("ru-RU").format(value) + " ₽";

const SQLITE_KEY = `${SITE.db}:sqlite`;
const SQLITE_VERSION_KEY = `${SITE.db}:sqlite_catalog_version`;
const ORDERS_KEY = `${SITE.db}:orders`;
let sqlitePromise = null;

function bufferToBase64(buffer) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < buffer.length; index += chunkSize) {
    binary += String.fromCharCode(...buffer.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function base64ToBuffer(value) {
  const binary = atob(value);
  const buffer = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) buffer[index] = binary.charCodeAt(index);
  return buffer;
}

async function openDb() {
  if (sqlitePromise) return sqlitePromise;
  sqlitePromise = (async () => {
    if (typeof initSqlJs !== "function") throw new Error("SQLite не загрузился");
    const SQL = await initSqlJs({ locateFile: (file) => `vendor/${file}` });
    const saved = localStorage.getItem(SQLITE_KEY);
    const db = saved ? new SQL.Database(base64ToBuffer(saved)) : new SQL.Database();
    db.run(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price INTEGER NOT NULL,
        old_price INTEGER NOT NULL,
        image TEXT NOT NULL,
        badge TEXT,
        description TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS users (
        email TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);
    saveDb(db);
    return db;
  })();
  return sqlitePromise;
}

function saveDb(db) {
  localStorage.setItem(SQLITE_KEY, bufferToBase64(db.export()));
}

function rowsFromResult(result) {
  if (!result.length) return [];
  const [{ columns, values }] = result;
  return values.map((row) => Object.fromEntries(columns.map((column, index) => [column, row[index]])));
}

async function storeAll(name) {
  const db = await openDb();
  const table = name === "users" ? "users" : "products";
  const rows = rowsFromResult(db.exec(`SELECT * FROM ${table} ORDER BY rowid`));
  if (table === "products") return rows.map((row) => ({ ...row, price: Number(row.price), old_price: Number(row.old_price) }));
  return rows;
}

async function storePut(name, item) {
  const db = await openDb();
  if (name === "users") {
    db.run(
      `INSERT INTO users (email, name, password)
       VALUES (?, ?, ?)
       ON CONFLICT(email) DO UPDATE SET name = excluded.name, password = excluded.password`,
      [item.email, item.name, item.password]
    );
  } else {
    db.run(
      `INSERT INTO products (id, name, category, price, old_price, image, badge, description)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         name = excluded.name,
         category = excluded.category,
         price = excluded.price,
         old_price = excluded.old_price,
         image = excluded.image,
         badge = excluded.badge,
         description = excluded.description`,
      [item.id, item.name, item.category, Number(item.price), Number(item.old_price), item.image, item.badge || "", item.description]
    );
  }
  saveDb(db);
}

async function storeDelete(name, key) {
  const db = await openDb();
  db.run(name === "users" ? "DELETE FROM users WHERE email = ?" : "DELETE FROM products WHERE id = ?", [key]);
  saveDb(db);
}

async function seedProducts() {
  const products = await storeAll("products");
  const versionKey = `${SITE.db}:catalogVersion`;
  if (products.length && localStorage.getItem(versionKey) === SITE.catalogVersion) return products;
  const defaultsById = new Map(INITIAL_PRODUCTS.map((product) => [product.id, product]));
  if (products.length) {
    for (const product of products) {
      const fresh = defaultsById.get(product.id);
      if (fresh) await storePut("products", { ...product, name: fresh.name });
    }
    for (const product of INITIAL_PRODUCTS) {
      if (!products.some((item) => item.id === product.id)) await storePut("products", product);
    }
    localStorage.setItem(versionKey, SITE.catalogVersion);
    return await storeAll("products");
  }
  for (const product of INITIAL_PRODUCTS) await storePut("products", product);
  localStorage.setItem(versionKey, SITE.catalogVersion);
  return INITIAL_PRODUCTS;
}

function loadCart() {
  state.cart = JSON.parse(localStorage.getItem(SITE.cart) || "{}");
}
function saveCart() {
  localStorage.setItem(SITE.cart, JSON.stringify(state.cart));
}
function cartItems() {
  return Object.entries(state.cart).map(([id, qty]) => ({ product: state.products.find((item) => item.id === id), qty })).filter((item) => item.product && item.qty > 0);
}
function cartTotal() {
  return cartItems().reduce((sum, item) => sum + item.product.price * item.qty, 0);
}
function activePromo() {
  return PROMO_CODES[state.promo.trim().toUpperCase()] || null;
}
function promoDiscount(total = cartTotal()) {
  const promo = activePromo();
  if (!promo) return 0;
  const discount = promo.type === "percent" ? Math.round(total * promo.value / 100) : promo.value;
  return Math.min(total, discount);
}
function payableTotal() {
  return Math.max(0, cartTotal() - promoDiscount());
}
function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}
function userOrders() {
  return loadOrders().filter((order) => order.email === state.user?.email);
}
function setCart(id, qty) {
  if (qty <= 0) delete state.cart[id];
  else state.cart[id] = qty;
  saveCart();
  render();
}
function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/ё/g, "е").trim();
}
function filteredProducts() {
  const needle = normalizeText(state.query);
  const items = state.products.filter((product) => {
    const haystack = normalizeText(`${product.name} ${product.category} ${product.description} ${product.badge} ${product.price} ${product.old_price}`);
    return (state.category === "Все" || product.category === state.category) && (!needle || haystack.includes(needle));
  });
  if (state.sort === "price") return items.sort((a, b) => a.price - b.price);
  if (state.sort === "discount") return items.sort((a, b) => b.old_price - b.price - (a.old_price - a.price));
  return items;
}
function renderCatalogHead(products) {
  return `<div class="head"><div><h2>Лента товаров</h2><span id="resultCount">${products.length} позиций</span></div><select id="sort"><option value="popular" ${state.sort === "popular" ? "selected" : ""}>Популярное</option><option value="price" ${state.sort === "price" ? "selected" : ""}>По цене</option><option value="discount" ${state.sort === "discount" ? "selected" : ""}>По скидке</option></select></div>`;
}
function renderProductGrid(products) {
  return products.length ? products.map(renderProduct).join("") : `<div class="empty-state"><h3>Ничего не найдено</h3><p>Попробуйте изменить запрос или выбрать другую категорию.</p></div>`;
}
function updateCatalog() {
  const products = filteredProducts();
  const count = document.querySelector("#resultCount");
  const grid = document.querySelector("#productGrid");
  if (count) count.textContent = `${products.length} позиций`;
  if (grid) grid.innerHTML = renderProductGrid(products);
  bindProductEvents();
}

function render() {
  if (location.hash === "#admin") {
    if (isAdminUser()) return renderAdmin();
    location.hash = "";
  }
  const categories = ["Все", ...new Set(state.products.map((product) => product.category))];
  const products = filteredProducts();
  const count = cartItems().reduce((sum, item) => sum + item.qty, 0);
  const adminButton = isAdminUser() ? '<button id="adminOpen">Админ</button>' : "";
  const accountButton = state.user ? '<button id="accountOpen">Кабинет</button>' : '<button id="authOpen">Войти</button>';
  const logoutButton = state.user ? '<button id="logoutTop">Выйти</button>' : "";
  app.innerHTML = `
    <main>
      <header class="topbar">
        <div class="brand"><span>${SITE.mark}</span><div><strong>${SITE.title}</strong><small>${SITE.subtitle}</small></div></div>
        <input id="search" class="search" value="${state.query}" placeholder="${SITE.search}" />
        <div class="actions">${adminButton}${accountButton}${logoutButton}<button id="cartFocus">Корзина <b>${count}</b></button></div>
      </header>
      <section class="hero">
        <div class="hero-card">
          <div class="hero-nav"><button type="button" id="scrollCatalogTop">←</button><div><button type="button">♡</button><button type="button">⋮</button></div></div>
          <div class="hero-copy">
            <h1>${SITE.hero}<span>${SITE.heroAccent}</span></h1>
            <p>${SITE.copy}</p>
            <div class="hero-meta"><span>Время: 15 мин</span><span>Итого от: 109 ₽</span></div>
            <div class="hero-actions"><button id="scrollCatalog">${SITE.cta}</button><button type="button" id="cartFocusHero">+</button></div>
          </div>
          <img src="${SITE.heroImage}" alt="${SITE.title}" />
        </div>
      </section>
      <section class="promo">${SITE.promos.map(([a, b]) => `<div><strong>${a}</strong><span>${b}</span></div>`).join("")}</section>
      <section class="layout" id="catalog">
        <aside class="filters"><h2>Категории</h2>${categories.map((category) => `<button class="${category === state.category ? "active" : ""}" data-category="${category}">${category}</button>`).join("")}</aside>
        <section class="catalog-section">${renderCatalogHead(products)}<div class="grid" id="productGrid">${renderProductGrid(products)}</div></section>
        ${renderCart()}
      </section>
      ${renderAuth()}
      ${renderProfile()}
    </main>`;
  bindEvents();
}

function renderProduct(product) {
  const qty = state.cart[product.id] || 0;
  return `<article class="card"><div class="photo"><img src="${product.image}" alt="${product.name}" /><span>${product.badge}</span></div><small>${product.category}</small><h3>${product.name}</h3><p>${product.description}</p><div class="price"><strong>${money(product.price)}</strong><del>${money(product.old_price)}</del></div>${qty ? `<div class="qty"><button data-dec="${product.id}">-</button><b>${qty}</b><button data-inc="${product.id}">+</button></div>` : `<button class="buy" data-add="${product.id}">В корзину</button>`}</article>`;
}
function renderCart() {
  const items = cartItems();
  const promo = activePromo();
  const discount = promoDiscount();
  const promoText = state.promo
    ? (promo ? `${promo.label}: -${money(discount)}` : "Промокод не найден")
    : "Попробуйте SKORO10 или FOOD300";
  return `<aside class="cart" id="cart"><h2>Корзина</h2><div class="cart-list">${items.length ? items.map(({ product, qty }) => `<div class="cart-row"><div><strong>${product.name}</strong><span>${qty} x ${money(product.price)}</span></div><div class="qty"><button data-dec="${product.id}">-</button><b>${qty}</b><button data-inc="${product.id}">+</button></div></div>`).join("") : "<p>Добавьте товары из ленты.</p>"}</div><div class="promo-code"><input id="promoCode" value="${state.promo}" placeholder="Промокод" /><button id="applyPromo" type="button">OK</button></div><div class="promo-hint">${promoText}</div>${discount ? `<div class="cart-discount"><span>Скидка</span><b>-${money(discount)}</b></div>` : ""}<div class="total"><span>Итого</span><b>${money(payableTotal())}</b></div><div class="segments"><button class="${state.delivery === "Доставка" ? "active" : ""}" data-delivery="Доставка">Доставка</button><button class="${state.delivery === "Самовывоз" ? "active" : ""}" data-delivery="Самовывоз">Самовывоз</button></div><textarea id="address" rows="3" placeholder="Адрес доставки или пункт самовывоза"></textarea><button class="checkout" id="checkout" ${items.length ? "" : "disabled"}>Оформить заказ</button><div class="notice" id="orderNotice"></div></aside>`;
}
function renderAuth() {
  const loginField = state.authMode === "login"
    ? '<input name="email" type="text" placeholder="Email или логин" required />'
    : '<input name="email" type="email" placeholder="Email" required />';
  return `<div class="modal" id="authModal"><section class="auth"><div class="segments"><button class="${state.authMode === "login" ? "active" : ""}" data-auth-mode="login">Вход</button><button class="${state.authMode === "register" ? "active" : ""}" data-auth-mode="register">Регистрация</button></div><h2>${state.authMode === "login" ? "Войти" : "Создать профиль"}</h2><form id="authForm">${state.authMode === "register" ? '<input name="name" placeholder="Имя" />' : ""}${loginField}<input name="password" type="password" placeholder="Пароль" required /><button class="checkout">${state.authMode === "login" ? "Войти" : "Зарегистрироваться"}</button>${state.user ? '<button type="button" id="logout">Выйти</button>' : ""}<button type="button" id="authClose">Закрыть</button></form><div class="notice" id="authNotice"></div></section></div>`;
}

function renderProfile() {
  if (!state.user) return "";
  const orders = userOrders();
  const history = orders.length
    ? orders.map((order) => `<article class="order-row"><div><strong>Заказ #${order.id}</strong><span>${order.date} · ${order.delivery}</span></div><b>${money(order.total)}</b><p>${order.items.map((item) => `${item.name} x ${item.qty}`).join(", ")}</p>${order.promo ? `<small>Промокод: ${order.promo}, скидка ${money(order.discount)}</small>` : ""}</article>`).join("")
    : '<div class="empty-state"><h3>История заказов пуста</h3><p>После оформления покупки заказ появится здесь.</p></div>';
  return `<div class="modal" id="profileModal"><section class="auth profile"><div class="profile-head"><div><h2>Личный кабинет</h2><span>${state.user.name}</span></div><button type="button" id="profileClose">Закрыть</button></div><div class="profile-meta"><span>${state.user.email}</span><span>${orders.length} заказов</span></div><h3>История заказов</h3><div class="order-history">${history}</div><button type="button" class="checkout" id="profileLogout">Выйти из аккаунта</button></section></div>`;
}

function adminProduct() {
  return state.editing || { id: "", name: "", category: "", price: "", old_price: "", image: "assets/", badge: "", description: "" };
}
function slugify(value) {
  const map = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya" };
  return normalizeText(value).split("").map((char) => map[char] ?? char).join("").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `product-${Date.now()}`;
}
function categories() {
  return [...new Set([...INITIAL_PRODUCTS, ...state.products].map((product) => product.category).filter(Boolean))];
}
function adminProducts() {
  const needle = normalizeText(state.adminQuery);
  return state.products.filter((product) => !needle || normalizeText(`${product.id} ${product.name} ${product.category} ${product.description}`).includes(needle));
}
function renderImageOptions() {
  return IMAGE_OPTIONS.map((image) => `<option value="${image}"></option>`).join("");
}
function isAdminUser() {
  return state.user?.role === "admin";
}
function renderAdmin() {
  if (!isAdminUser()) return render();
  const item = adminProduct();
  const list = adminProducts();
  app.innerHTML = `
    <main class="admin-page">
      <header class="topbar"><div class="brand"><span>${SITE.mark}</span><div><strong>${SITE.title}</strong><small>админ-панель</small></div></div><div></div><div class="actions"><button id="adminLogout">Выйти</button><button id="siteOpen">На сайт</button></div></header>
      <section class="admin-layout">
        <form class="admin-form" id="productForm">
          <div class="admin-form-title"><div><h1>${state.editing ? "Редактировать товар" : "Добавить товар"}</h1><span>${state.editing ? item.id : "Новая позиция каталога"}</span></div><button type="button" id="newProduct">Новый товар</button></div>
          <div class="admin-preview"><img id="adminPreviewImage" src="${item.image || "assets/dj-milk.webp"}" alt="Предпросмотр" /><div><strong id="adminPreviewName">${item.name || "Название товара"}</strong><span id="adminPreviewMeta">${item.category || "Категория"} · ${item.price ? money(Number(item.price)) : "Цена"}</span></div></div>
          <label>ID<input name="id" value="${item.id}" ${state.editing ? "readonly" : ""} required /></label>
          <label>Название<input name="name" value="${item.name}" required /></label>
          <label>Категория<input name="category" value="${item.category}" list="categoryOptions" required /></label>
          <div class="admin-two"><label>Цена<input name="price" type="number" min="1" value="${item.price}" required /></label><label>Старая цена<input name="old_price" type="number" min="1" value="${item.old_price}" required /></label></div>
          <label>Фото<input name="image" value="${item.image}" list="imageOptions" required /></label>
          <label>Бейдж<input name="badge" value="${item.badge}" /></label>
          <label>Описание<textarea name="description" rows="4" required>${item.description}</textarea></label>
          <datalist id="categoryOptions">${categories().map((category) => `<option value="${category}"></option>`).join("")}</datalist>
          <datalist id="imageOptions">${renderImageOptions()}</datalist>
          <div class="admin-actions"><button class="checkout">${state.editing ? "Сохранить изменения" : "Добавить товар"}</button><button type="button" id="resetAdmin">Очистить</button></div>
          <div class="notice" id="adminNotice"></div>
        </form>
        <section class="admin-table"><div class="head admin-head"><div><h2>Товары</h2><span id="adminCount">${list.length} из ${state.products.length} позиций</span></div><input id="adminSearch" value="${state.adminQuery}" placeholder="Найти товар в админке" /></div><div id="adminRows">${renderAdminRows(list)}</div></section>
      </section>
    </main>`;
  bindAdminEvents();
}
function renderAdminRows(products) {
  return products.length ? products.map(renderAdminRow).join("") : `<div class="empty-state"><h3>Товары не найдены</h3><p>Очистите поиск или добавьте новую позицию.</p></div>`;
}
function renderAdminRow(product) {
  return `<article class="admin-row"><img src="${product.image}" alt="${product.name}" /><div><strong>${product.name}</strong><span>${product.id} · ${product.category} · ${money(product.price)}</span><p>${product.description}</p></div><div class="admin-row-actions"><button data-edit="${product.id}">Редактировать</button><button data-delete="${product.id}">Удалить</button></div></article>`;
}
function updateAdminList() {
  const list = adminProducts();
  const rows = document.querySelector("#adminRows");
  const count = document.querySelector("#adminCount");
  if (rows) rows.innerHTML = renderAdminRows(list);
  if (count) count.textContent = `${list.length} из ${state.products.length} позиций`;
  bindAdminRowEvents();
}
function updateAdminPreview() {
  const form = document.querySelector("#productForm");
  if (!form) return;
  const data = Object.fromEntries(new FormData(form).entries());
  document.querySelector("#adminPreviewImage").src = data.image || "assets/dj-milk.webp";
  document.querySelector("#adminPreviewName").textContent = data.name || "Название товара";
  document.querySelector("#adminPreviewMeta").textContent = `${data.category || "Категория"} · ${data.price ? money(Number(data.price)) : "Цена"}`;
}

function bindEvents() {
  document.querySelector("#adminOpen")?.addEventListener("click", () => { location.hash = "admin"; });
  document.querySelector("#search")?.addEventListener("input", (event) => { state.query = event.target.value; updateCatalog(); });
  document.querySelector("#sort")?.addEventListener("change", (event) => { state.sort = event.target.value; render(); });
  document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => { state.category = button.dataset.category; render(); }));
  bindProductEvents();
  document.querySelector("#scrollCatalog")?.addEventListener("click", () => document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" }));
  document.querySelector("#scrollCatalogTop")?.addEventListener("click", () => document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" }));
  document.querySelector("#cartFocus")?.addEventListener("click", () => document.querySelector("#cart").scrollIntoView({ behavior: "smooth" }));
  document.querySelector("#cartFocusHero")?.addEventListener("click", () => document.querySelector("#cart").scrollIntoView({ behavior: "smooth" }));
  document.querySelector("#authOpen")?.addEventListener("click", () => document.querySelector("#authModal").classList.add("open"));
  document.querySelector("#accountOpen")?.addEventListener("click", () => document.querySelector("#profileModal")?.classList.add("open"));
  document.querySelector("#authClose")?.addEventListener("click", () => document.querySelector("#authModal").classList.remove("open"));
  document.querySelector("#profileClose")?.addEventListener("click", () => document.querySelector("#profileModal")?.classList.remove("open"));
  document.querySelectorAll("[data-auth-mode]").forEach((button) => button.addEventListener("click", () => { state.authMode = button.dataset.authMode; render(); document.querySelector("#authModal").classList.add("open"); }));
  document.querySelector("#authForm")?.addEventListener("submit", submitAuth);
  document.querySelector("#logout")?.addEventListener("click", logout);
  document.querySelector("#logoutTop")?.addEventListener("click", logout);
  document.querySelector("#profileLogout")?.addEventListener("click", logout);
  document.querySelector("#promoCode")?.addEventListener("input", (event) => { state.promo = event.target.value; });
  document.querySelector("#applyPromo")?.addEventListener("click", () => {
    state.promo = document.querySelector("#promoCode")?.value.trim().toUpperCase() || "";
    render();
    document.querySelector("#cart")?.scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#checkout")?.addEventListener("click", checkout);
}
function bindProductEvents() {
  document.querySelectorAll("[data-add]").forEach((button) => { button.onclick = () => setCart(button.dataset.add, 1); });
  document.querySelectorAll("[data-inc]").forEach((button) => { button.onclick = () => setCart(button.dataset.inc, (state.cart[button.dataset.inc] || 0) + 1); });
  document.querySelectorAll("[data-dec]").forEach((button) => { button.onclick = () => setCart(button.dataset.dec, (state.cart[button.dataset.dec] || 0) - 1); });
  document.querySelectorAll("[data-delivery]").forEach((button) => { button.onclick = () => { state.delivery = button.dataset.delivery; render(); }; });
}
function bindAdminEvents() {
  document.querySelector("#siteOpen")?.addEventListener("click", () => { location.hash = ""; });
  document.querySelector("#adminLogout")?.addEventListener("click", () => {
    state.editing = null;
    logout();
  });
  document.querySelector("#productForm")?.addEventListener("submit", saveProduct);
  document.querySelector("#newProduct")?.addEventListener("click", () => { state.editing = null; renderAdmin(); });
  document.querySelector("#resetAdmin")?.addEventListener("click", () => { state.editing = null; renderAdmin(); });
  document.querySelector("#adminSearch")?.addEventListener("input", (event) => { state.adminQuery = event.target.value; updateAdminList(); });
  const form = document.querySelector("#productForm");
  const idInput = form?.elements.id;
  const nameInput = form?.elements.name;
  if (idInput) idInput.dataset.auto = state.editing ? "false" : "true";
  idInput?.addEventListener("input", () => { idInput.dataset.auto = "false"; });
  nameInput?.addEventListener("input", () => {
    if (!state.editing && idInput?.dataset.auto !== "false") idInput.value = slugify(nameInput.value);
    updateAdminPreview();
  });
  ["category", "price", "image"].forEach((name) => form?.elements[name]?.addEventListener("input", updateAdminPreview));
  bindAdminRowEvents();
}
function bindAdminRowEvents() {
  document.querySelectorAll("[data-edit]").forEach((button) => button.addEventListener("click", () => { state.editing = state.products.find((product) => product.id === button.dataset.edit); renderAdmin(); }));
  document.querySelectorAll("[data-delete]").forEach((button) => button.addEventListener("click", () => deleteProduct(button.dataset.delete)));
}

async function submitAuth(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const users = await storeAll("users");
  const email = data.email.trim().toLowerCase();
  if (state.authMode === "register") {
    if (users.some((user) => user.email === email)) return showNotice("authNotice", "Такой email уже зарегистрирован.");
    const user = { name: data.name || "Пользователь", email, password: data.password };
    await storePut("users", user);
    state.user = { name: user.name, email: user.email };
  } else {
    if (email === ADMIN.login && data.password === ADMIN.password) {
      state.user = { name: "Администратор", email: ADMIN.login, role: "admin" };
      localStorage.setItem(SITE.session, JSON.stringify(state.user));
      render();
      return;
    }
    const user = users.find((item) => item.email === email && item.password === data.password);
    if (!user) return showNotice("authNotice", "Неверный email или пароль.");
    state.user = { name: user.name, email: user.email };
  }
  localStorage.setItem(SITE.session, JSON.stringify(state.user));
  render();
}
function logout() {
  state.user = null;
  localStorage.removeItem(SITE.session);
  render();
}
function showNotice(id, text) {
  const notice = document.querySelector(`#${id}`);
  notice.textContent = text;
  notice.classList.add("show");
}
async function saveProduct(event) {
  event.preventDefault();
  const product = Object.fromEntries(new FormData(event.target).entries());
  product.id = slugify(product.id);
  product.price = Number(product.price);
  product.old_price = Number(product.old_price);
  if (!product.old_price || product.old_price < product.price) product.old_price = product.price;
  await storePut("products", product);
  state.products = await storeAll("products");
  state.editing = null;
  renderAdmin();
}
async function deleteProduct(id) {
  if (!confirm("Удалить товар?")) return;
  await storeDelete("products", id);
  delete state.cart[id];
  saveCart();
  state.products = await storeAll("products");
  state.editing = null;
  renderAdmin();
}
function checkout() {
  const notice = document.querySelector("#orderNotice");
  if (!state.user) {
    notice.textContent = "Для оформления войдите или зарегистрируйтесь.";
    notice.classList.add("show");
    return;
  }
  const items = cartItems();
  if (!items.length) return;
  const total = payableTotal();
  const discount = promoDiscount();
  const order = {
    id: Date.now().toString().slice(-6),
    email: state.user.email,
    date: new Date().toLocaleString("ru-RU"),
    delivery: state.delivery,
    address: document.querySelector("#address").value || "уточним при подтверждении",
    subtotal: cartTotal(),
    discount,
    promo: activePromo() ? state.promo.trim().toUpperCase() : "",
    total,
    items: items.map(({ product, qty }) => ({ id: product.id, name: product.name, price: product.price, qty })),
  };
  saveOrders([order, ...loadOrders()]);
  notice.textContent = `${state.user.name}, заказ #${order.id} на ${money(total)} принят. ${state.delivery}: ${order.address}.`;
  notice.classList.add("show");
  state.cart = {};
  state.promo = "";
  saveCart();
  setTimeout(render, 900);
}
async function start() {
  try {
    loadCart();
    state.user = JSON.parse(localStorage.getItem(SITE.session) || "null");
    state.products = await seedProducts();
    render();
  } catch (error) {
    app.innerHTML = `<main><section class="auth"><h2>Не удалось запустить сайт</h2><p>${error.message}</p><p>Откройте проект через локальный сервер или через Vercel.</p></section></main>`;
  }
}
window.addEventListener("hashchange", render);
start();
