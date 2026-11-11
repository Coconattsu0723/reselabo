const navigationItems = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "About", href: "about.html", page: "about" },
  { label: "初めての方へ", href: "first-visit.html", page: "first-visit" },
  { label: "施術メニュー・料金", href: "menu-price.html", page: "menu-price" },
  { label: "Reservation", href: "reservation.html", page: "reservation" },
];

const newsItems = [
  {
    date: "2026.07.12",
    category: "お知らせ",
    title: "初回体験のWeb予約受付を開始しました",
  },
  {
    date: "2026.07.15",
    category: "診療時間",
    title: "7月21日（火）の受付時間変更について",
  },
  {
    date: "2026.07.25",
    category: "休診案内",
    title: "夏季休診期間のお知らせ",
  },
];

const clinicInfo = {
  postalCode: "〒000-0000",
  address: "神奈川県横浜市リセラボ区リセラボ町1丁目2-3",
  phone: "TEL 000-0000-0000",
  hours: "受付時間 10:00-20:00 / 不定休",
};

function renderHeader() {
  const target = document.querySelector("#site-header");
  if (!target) return;
  const currentPage = document.body.dataset.page;
  const isHomePage = currentPage === "home";

  const navLinks = navigationItems
    .map((item) => {
      const currentAttr = item.page === currentPage ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${currentAttr}>${item.label}</a>`;
    })
    .join("");

  const headerPhone = isHomePage
    ? `
          <p class="site-nav__phone">
            <span>${clinicInfo.phone}</span>
            <span>10:00-20:00</span>
          </p>
      `
    : `
          <p class="site-nav__phone site-nav__phone--detailed">
            <span class="site-nav__phone-label">お電話でのご予約・お問い合わせ</span>
            <span class="site-nav__phone-number">
              <img class="icon site-nav__phone-icon" src="assets/images/icons/icon-phone.png" alt="" aria-hidden="true" />
              <span>${clinicInfo.phone}</span>
            </span>
            <span class="site-nav__phone-hours">10:00-20:00</span>
          </p>
      `;

  const headerReservationLink = isHomePage
    ? `<a class="button site-nav__cta" href="reservation.html">Web予約</a>`
    : `
          <a class="button site-nav__cta site-nav__cta--with-icon" href="reservation.html">
            <span>Web予約</span>
            <span class="site-nav__cta-icon-frame" aria-hidden="true">
              <img class="icon site-nav__cta-icon" src="assets/images/icons/icon-calendar.png" alt="" />
            </span>
          </a>
      `;

  target.innerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-header__logo" href="index.html" aria-label="リセラボ整骨院 Topへ">
          <img src="assets/images/common/reselabo_logo.png" alt="reselabo seikotsuin" />
        </a>
        <button class="hamburger" type="button" aria-label="メニューを開く" aria-controls="site-nav" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="site-nav" class="site-nav" aria-label="サイト内ナビゲーション">
          <div class="site-nav__links">${navLinks}</div>
          ${headerPhone}
          ${headerReservationLink}
        </nav>
      </div>
    </header>
  `;
}

function renderNewsList() {
  const target = document.querySelector("#news-list");
  if (!target) return;

  target.innerHTML = newsItems
    .map(
      (item) => `
        <article class="news-item">
          <span class="news-item__meta">
            <span>${item.date}</span>
            <span class="news-item__category">${item.category}</span>
          </span>
          <span class="news-item__title">${item.title}</span>
        </article>
      `,
    )
    .join("");
}

function renderFooter() {
  const target = document.querySelector("#site-footer");
  if (!target) return;
  const currentPage = document.body.dataset.page;

  const footerLinks = navigationItems
    .map((item) => {
      const currentAttr = item.page === currentPage ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${currentAttr}>${item.label}</a>`;
    })
    .join("");

  target.innerHTML = `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__pc-info">
          <div class="site-footer__pc-access">
            <div class="site-footer__pc-access-left">
              <img class="site-footer__exterior" src="assets/images/clinic/exterior.png" alt="リセラボ整骨院 横浜みなと店の外観" />
              <div class="clinic-info">
                <p><span>住所</span>${clinicInfo.postalCode}<br />${clinicInfo.address}</p>
                <p><span>受付時間</span>10:00-20:00</p>
                <p><span>電話番号</span>${clinicInfo.phone}</p>
              </div>
            </div>
            <div class="site-footer__map-wrap">
              <img class="site-footer__map" src="assets/images/reselabo_map_transparent.png" alt="リセラボ整骨院 横浜みなと店周辺の簡易地図" />
            </div>
          </div>
          <div class="site-footer__pc-middle">
            <img class="site-footer__pc-logo" src="assets/images/common/reselabo_logo.png" alt="reselabo seikotsuin" />
            <div class="site-footer__pc-details">
              <div class="hours-table-wrap">
                <table class="hours-table" aria-label="受付時間">
                  <thead><tr><th scope="col">受付時間</th><th scope="col">月</th><th scope="col">火</th><th scope="col">水</th><th scope="col">木</th><th scope="col">金</th><th scope="col">土</th><th scope="col">日祝</th></tr></thead>
                  <tbody>
                    <tr><th scope="row">10:00〜13:00</th><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td>—</td></tr>
                    <tr><th scope="row">15:00〜20:00</th><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td>—</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="site-footer__pc-contact">
                <div class="footer-actions footer-actions--pc">
                  <a class="footer-action footer-action--web" href="reservation.html">
                    <img class="icon icon--footer-action" src="assets/images/icons/icon-calendar.png" alt="" aria-hidden="true" />
                    <span>Web予約</span>
                  </a>
                  <a class="footer-action footer-action--phone" href="tel:0000000000">
                    <img class="icon icon--footer-action" src="assets/images/icons/icon-phone.png" alt="" aria-hidden="true" />
                    <span>電話予約</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__sp-info">
          <div class="site-footer__top">
            <img class="site-footer__logo" src="assets/images/common/reselabo_logo.png" alt="reselabo seikotsuin" />
            <div class="site-footer__store">
              <p>${clinicInfo.postalCode}</p>
              <p><strong>${clinicInfo.address}</strong></p>
              <p class="site-footer__phone">${clinicInfo.phone}</p>
              <p>${clinicInfo.hours}</p>
            </div>
          </div>
          <div class="footer-actions">
            <a class="footer-action footer-action--web" href="reservation.html">
              <img class="icon icon--footer-action" src="assets/images/icons/icon-calendar.png" alt="" aria-hidden="true" />
              <span>Web予約</span>
            </a>
            <a class="footer-action footer-action--phone" href="tel:0000000000">
              <img class="icon icon--footer-action" src="assets/images/icons/icon-phone.png" alt="" aria-hidden="true" />
              <span>電話予約</span>
            </a>
          </div>
        </div>
        <nav class="footer-nav" aria-label="フッターナビゲーション">${footerLinks}</nav>
        <p class="site-footer__credit">©2026 reselabo seikotsuin</p>
        <p class="site-footer__demo-note">※本サイトはポートフォリオ用の架空サイトです。掲載している住所・電話番号はダミーです。</p>
      </div>
    </footer>
  `;
}

function renderFixedCta() {
  const target = document.querySelector("#fixed-cta");
  if (!target) return;

  target.innerHTML = `
    <a class="fixed-cta" href="reservation.html" aria-label="Web予約ページへ">
      <span class="fixed-cta__icon-frame" aria-hidden="true">
        <img class="icon icon--cta" src="assets/images/icons/icon-calendar.png" alt="" />
      </span>
      <span class="fixed-cta__label">WEB予約</span>
    </a>
  `;
}

function setupHamburgerMenu() {
  const button = document.querySelector(".hamburger");
  const nav = document.querySelector("#site-nav");
  if (!button || !nav) return;

  const desktopMedia = window.matchMedia("(min-width: 1024px)");

  const closeMenu = (returnFocus = false) => {
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
    if (!desktopMedia.matches) nav.setAttribute("inert", "");
    if (returnFocus) button.focus();
  };

  const openMenu = () => {
    nav.removeAttribute("inert");
    nav.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "メニューを閉じる");
  };

  const syncMenuForViewport = () => {
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
    if (desktopMedia.matches) {
      nav.removeAttribute("inert");
    } else {
      nav.setAttribute("inert", "");
    }
  };

  button.addEventListener("click", () => {
    if (desktopMedia.matches) return;
    if (nav.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu(true);
    }
  });

  syncMenuForViewport();
  if (typeof desktopMedia.addEventListener === "function") {
    desktopMedia.addEventListener("change", syncMenuForViewport);
  } else {
    desktopMedia.addListener(syncMenuForViewport);
  }
}

renderHeader();
renderNewsList();
renderFooter();
renderFixedCta();
setupHamburgerMenu();
