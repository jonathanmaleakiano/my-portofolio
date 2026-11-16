/* =========================================================
   MALEAKLAB E-COMMERCE — DATA & INTERACTIVE CONTROLLER
   ========================================================= */
(() => {
  'use strict';

  /* -------------------------------------------------------
     1. KATALOG PRODUK LENGKAP (18 PRODUK SESUAI FIGMA)
     Catatan: Isi properti `image` dengan path file gambar
     Anda nanti (misal: "assets/img/urbex-meldive.jpg").
     ------------------------------------------------------- */
  const PRODUCTS = [
    // === ATASAN (9) ===
    {
      id: 'urbex-meldive-black',
      name: 'MALEAKLAB Kemeja Long Sleeve Overshirt URBEX MELDIVE BLACK',
      category: 'Atasan',
      price: 182000,
      image: 'asset/atasan1.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB MELDIVE adalah Kemeja/Overshirt pria dan wanita yang dibuat dari bahan berkualitas tinggi dengan aplikasi satu pocket di bagian depan. Dilengkapi dengan Buckle Hook dan Typografi dengan aplikasi sablon plastisol pada puller zipper dengan cutting Regular size membuatnya pas untuk dipakai dalam kegiatan apapun.',
      specsTitle: 'Material:',
      specs: ['Premium Parachute Polyester', 'Front Pocket', 'Buckel Hook', 'Cutting Regular Fit'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'polo-crown-line',
      name: 'MALEAKLAB Kaos Polo Pria Kerah Regular Fit Cotton CVC Lengan Pendek CROWN LINE WHITE BLACK - Polo Shirt Hitam Original',
      category: 'Atasan',
      price: 129000,
      image: 'asset/atasan4.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB kaos polo kerah CROWN LINE WHITE BLACK untuk pria dengan potongan regular fit, bahan cotton cvc. Cocok untuk kerja, kuliah, acara semi formal, dan harian.',
      specsTitle: 'Detail produk:',
      specs: ['Jenis: Kaos Polo Pria Kerah', 'Potongan: Regular Fit', 'Bahan: Cotton CVC', 'Fitur: Embroidery Logo Crown', 'Warna: Hitam'],
      care: []
    },
    {
      id: 'tshirt-holly-black',
      name: 'MALEAKLAB Kaos T-Shirt HOLLY BLACK',
      category: 'Atasan',
      price: 119000,
      image: 'asset/atasan5.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB HOLLY Adalah kaos Pria dan Wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang lembut dan tidak berbulu, Grafis Logotype screen print mengusung desain imajinatif yang membawa nuansa fantasi escapism dan menggunakan material cotton 24s dengan cuttingan Regular fit cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material :',
      specs: ["Cotton 24's 180gsm", 'Regular Fit', 'Grafis Logotype Screen Print'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'tshirt-swell-black',
      name: 'MALEAKLAB Kaos T-Shirt OVERSIZE SWELL 16s BLACK',
      category: 'Atasan',
      price: 125000,
      image: 'asset/atasan3.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB SWELL Adalah kaos pria dan wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang harsh, tidak berbulu, Grafis disablon dengan Plastisol Ink dengan cuttingan Oversize cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material:',
      specs: ["Heavyweight Cotton 16's, 230 GSM", 'Cutting Oversize', 'Sablon Plastisol Ink'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'tshirt-mazal-black',
      name: 'MALEAKLAB Kaos T-Shirt BOXY FIT 16s MAZAL BLACK',
      category: 'Atasan',
      price: 125000,
      image: 'asset/atasan6.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB MAZAL Adalah kaos pria dan wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang harsh, tidak berbulu dengan cuttingan Boxy Fit cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material :',
      specs: ["Heavyweight Cotton 16's, 230 GSM", 'Cutting Boxy Fit', 'Sablon : Plastisol'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'tshirt-legend-tiny-black',
      name: 'MALEAKLAB Kaos T-Shirt LEGEND TINY BLACK',
      category: 'Atasan',
      price: 119000,
      image: 'asset/atasan7.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB LEGEND TINY BLACK Adalah kaos Pria dan Wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang lembut dan tidak berbulu, Grafis Logotype screen print (High Density) dan menggunakan material cotton 24s dengan cuttingan Regular fit cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material :',
      specs: ["Cotton 24's 180gsm", 'Regular Fit', 'Grafis Logotype Screen Print Timbul (High Density)'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'tshirt-mazal-white',
      name: 'MALEAKLAB Kaos T-Shirt BOXY FIT 16s MAZAL WHITE',
      category: 'Atasan',
      price: 125000,
      image: 'asset/atasan2.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB MAZAL Adalah kaos pria dan wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang harsh, tidak berbulu dengan cuttingan Boxy Fit cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material :',
      specs: ["Heavyweight Cotton 16's, 230 GSM", 'Cutting Boxy Fit', 'Sablon : Plastisol'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'tshirt-legend-denim',
      name: 'MALEAKLAB Kaos T-Shirt LEGEND TINY ON WHITE FADED DENIM',
      category: 'Atasan',
      price: 119000,
      image: 'asset/atasan8.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB LEGEND TINY ON WHITE FADED DENIM Adalah kaos Pria dan Wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang lembut dan tidak berbulu, Grafis Logotype screen print (High Density) dan menggunakan material cotton 24s dengan cuttingan Regular fit cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material :',
      specs: ["Cotton 24's 180gsm", 'Regular Fit', 'Grafis Logotype Screen Print Timbul (High Density)'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'tshirt-swell-white',
      name: 'MALEAKLAB Kaos T-Shirt OVERSIZE SWELL 16s WHITE',
      category: 'Atasan',
      price: 125000,
      image: 'asset/atasan9.jpg',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      desc: 'MALEAKLAB SWELL Adalah kaos pria dan wanita yang dibuat dari bahan cotton berkualitas tinggi dan nyaman digunakan, bahan memiliki karakter kain yang harsh, tidak berbulu, Grafis disablon dengan Plastisol Ink dengan cuttingan Oversize cocok digunakan untuk aktivitas sehari-hari.',
      specsTitle: 'Material:',
      specs: ["Heavyweight Cotton 16's, 230 GSM", 'Cutting Oversize', 'Sablon Plastisol Ink'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },

    // === BAWAHAN (6) ===
    {
      id: 'cargo-siera-black',
      name: 'MALEAKLAB Long Pants Cargo SIERA BLACK Regular Fit',
      category: 'Bawahan',
      price: 120000,
      image: 'asset/bawahan1.jpg',
      sizes: ['28', '30', '32', '34'],
      desc: 'MALEAKLAB Long Pants SIERA adalah Celana Panjang Parasut pria dan wanita yang dibuat dari bahan Premium Polyester berkualitas tinggi yang nyaman dipakai sepanjang hari. Terdapat 6 pocket Utama (2 side pocket & 4 pocket cargo dilengkapi velcro pada bagian lidah saku). Pada bagian pinggang dan open leg menggunakan karet stopper untuk lebih mudah men-adjustable. Juga ada tambahan ring kait pada bagian pinggang.',
      specsTitle: 'Material :',
      specs: ['Premium Polyester', 'Regular Cutting', '6 Pocket (2 Side Pocket & 4 Pocket Cargo with velcro)', 'Ring kait', 'Stopper Adjustable'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'cargo-lucas-army',
      name: 'MALEAKLAB Long Pants Cargo LUCAS ARMY Slim Fit',
      category: 'Bawahan',
      price: 149000,
      image: 'asset/bawahan3.jpg',
      sizes: ['28', '30', '32', '34'],
      desc: 'MALEAKLAB Long Pants LUCAS adalah Celana Panjang Parasut pria dan wanita yang dibuat dari bahan Premium Polyester berkualitas tinggi yang nyaman dipakai sepanjang hari. Terdapat 6 pocket Utama (2 side pocket & 4 pocket cargo dilengkapi velcro pada bagian lidah saku). Pada bagian pinggang menggunakan karet stopper untuk lebih mudah men-adjustable.',
      specsTitle: 'Material :',
      specs: ['Premium Polyester', 'Slim Cutting', '6 Pocket (2 Side Pocket & 4 Pocket Cargo with velcro)', 'Stopper Adjustable'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'cargo-zetiv-black',
      name: 'MALEAKLAB Long Pants Cargo Reflective ZETIV BLACK',
      category: 'Bawahan',
      price: 169000,
      image: 'asset/bawahan2.jpg',
      sizes: ['28', '30', '32', '34'],
      desc: 'MALEAKLAB Cargo Pants ZETIV adalah Celana Panjang Cargo pria dan wanita yang dibuat dari bahan Premium Polyester berkualitas tinggi yang nyaman dipakai sepanjang hari. Terdapat Adjustable Stopper pada bagian pinggang dan open leg. Memiliki 2 side pocket dan 4 pocket cargo dilengkapi velcro, juga terdapat list piping reflective.',
      specsTitle: 'Material :',
      specs: ['Premium Polyester', 'Regular fit Cutting', 'Woven Label', 'Stopper Adjustable (Pada bagian pinggang dan open leg)', 'Velcro (Penutup saku)', 'List Piping Reflective'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'boardshort-noir',
      name: 'MALEAKLAB Celana Pendek Boardshort Pria NOIR - Short Pants Celana Santai Original',
      category: 'Bawahan',
      price: 125000,
      image: 'asset/bawahan4.jpg',
      sizes: ['28', '30', '32', '34'],
      desc: 'MALEAKLAB Screamous celana pendek boardshort NOIR untuk pria. Cocok untuk santai, pantai, dan harian.',
      specsTitle: 'Detail produk:',
      specs: ['Jenis: Celana Pendek Boardshort Pria', 'Bahan: Premium Polyester Crinkle', 'Grafis Logotype Screen Print', '2 saku samping & 1 saku belakang', 'Tali serut adjustable'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'sweatpants-zello',
      name: 'MALEAKLAB Celana Sweat Pants ZELLO',
      category: 'Bawahan',
      price: 159000,
      image: 'asset/bawahan5.jpg',
      sizes: ['28', '30', '32', '34'],
      desc: 'MALEAKLAB Long Pants ZELLO adalah Celana Panjang pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Dibuat dari bahan Premium Fleece Polyester dengan grafis logotype dengan aplikasi embroidery pada bagian depan. Memiliki cuttingan Loose Fit dilengkapi list piping berwarna putih.',
      specsTitle: 'Material :',
      specs: ['Premium Fleece Polyester', 'Loose Cutting', 'Grafis dengan aplikasi Embroidery', 'List Piping white', '3 Pocket (2 side pocket 1 back pocket)'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },
    {
      id: 'boardshort-mitrov-black',
      name: 'MALEAKLAB Celana Board Short Pants MITROV BLACK',
      category: 'Bawahan',
      price: 125000,
      image: 'asset/bawahan6.jpg',
      sizes: ['28', '30', '32', '34'],
      desc: 'MALEAKLAB Short Pants MITROV adalah Celana Pendek yang dibuat dari bahan berkualitas tinggi dan nyaman dipakai sepanjang hari. Mengusung design sporty, terdapat dua saku di bagian kanan dan kiri, pada bagian pinggang menggunakan karet stopper untuk lebih mudah men-adjustable, juga terdapat woven label.',
      specsTitle: 'Spesifikasi :',
      specs: ['Parachute Polyester', 'Stopper Adjustable'],
      care: ['Jangan langsung disetrika pada bagian graphic printing/sablon.', 'Untuk pemakaian lebih lama disarankan pencucian menggunakan handwash.']
    },

    // === AKSESORIS (3) ===
    {
      id: 'wallet-moven',
      name: 'MALEAKLAB Dompet Pria Lipat Bifold Wallet MOVEN',
      category: 'Aksesoris',
      price: 99000,
      image: 'asset/aks1.jpg',
      sizes: ['All Size (18 cm x 12 cm)'],
      desc: 'MALEAKLAB MOVEN adalah Dompet Pria dan Wanita yang dibuat dari bahan berkualitas tinggi untuk utilitas sehari-hari. Menggunakan material Synthetic leather/faux leather, terdapat Bill Compartement, Card Slot, ID Window, dan Mengusung desain Logotype menggunakan laser marking pada bagian depan dan dalam.',
      specsTitle: 'Material & Fitur:',
      specs: ['Synthetic leather/faux leather', 'Grafis Logotype laser marking', 'Bill Compartement & Card Slot & ID Window', 'Packaging Box', 'Size Chart: All Size (18 cm x 12 cm)'],
      care: []
    },
    {
      id: 'duffle-soile-black',
      name: 'MALEAKLAB Tas Fitness Gym Travel Duffle Bag SOILE BLACK',
      category: 'Aksesoris',
      price: 145000,
      image: 'asset/aks2.jpg',
      sizes: ['All Variant (48 cm x 23 cm)'],
      desc: 'MALEAKLAB SOILE adalah Tas Travel Duffle Bag dengan ukuran medium yang cocok untuk digunakan membawa barang-barang seperti pakaian, sepatu dan barang-barang lainnya. Dibalut dengan bahan cordura berkualitas tinggi dan tambahan detail label originals, cocok dibawa untuk Traveling, Olahraga dan lainnya.',
      specsTitle: 'Material & Spesifikasi :',
      specs: ['Material: Cordura', '1 Kompartemen saku samping', 'Size Chart: All Variant (Width 48 cm, Height 23 cm)'],
      care: []
    },
    {
      id: 'belt-crown-black',
      name: 'MALEAKLAB Ikat Pinggang Pria Belt Buckle Metal CROWN LOGO BLACK - Gesper Hitam Original',
      category: 'Aksesoris',
      price: 103000,
      image: 'asset/aks3.jpg',
      sizes: ['All Size (120 cm x 4 cm)'],
      desc: 'MALEAKLAB ikat pinggang belt CROWN LOGO BLACK untuk pria dengan bahan buckle metal. Cocok untuk kerja dan harian.',
      specsTitle: 'Detail produk:',
      specs: ['Jenis: Ikat Pinggang Pria Belt', 'Bahan: Buckle Metal & Webbing Cotton', 'Fitur: Emboss', 'Warna: Hitam', 'Panduan ukuran: All Size (120 cm x 4 cm)'],
      care: []
    }
  ];

  const SIZE_CHARTS = {
    Atasan: {
      image: 'asset/size-chart-baju.jpg',
      headers: ['SIZE', 'LEBAR DADA', 'TINGGI BELAKANG', 'PANJANG LENGAN'],
      rows: [
        ['S', '56 cm', '64 cm', '57 cm'],
        ['M', '58 cm', '66 cm', '59 cm'],
        ['L', '60 cm', '68 cm', '61 cm'],
        ['XL', '62 cm', '70 cm', '63 cm'],
        ['XXL', '64 cm', '72 cm', '65 cm']
      ]
    },
    Bawahan: {
      image: 'asset/size-chart-celana.jpg',
      headers: ['SIZE', 'WAIST', 'HEIGHT', 'OPEN LEG'],
      rows: [
        ['28', '28-48 cm', '98 cm', '20 cm'],
        ['30', '29-49 cm', '100 cm', '22 cm'],
        ['32', '30-50 cm', '102 cm', '24 cm'],
        ['34', '31-51 cm', '104 cm', '26 cm']
      ]
    }
  };

  /* -------------------------------------------------------
     2. STATE APLIKASI
     ------------------------------------------------------- */
  const state = {
    route: 'home',
    category: 'All',
    search: '',
    activeProduct: PRODUCTS[0],
    selectedSize: PRODUCTS[0].sizes[0],
    cart: JSON.parse(localStorage.getItem('maleaklab_cart') || '[]'),
    heroIndex: 0
  };

  const WHATSAPP_NUMBER = '6282110981079'; // Ganti dengan nomor WhatsApp toko Anda

  /* -------------------------------------------------------
     3. UTILITAS
     ------------------------------------------------------- */
  const formatIDR = (num) => 'Rp ' + num.toLocaleString('id-ID');

  const saveCart = () => {
    localStorage.setItem('maleaklab_cart', JSON.stringify(state.cart));
    renderCart();
  };

  const showToast = (message) => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  const renderSlotImage = (slotEl, imageUrl, altText) => {
    slotEl.querySelectorAll('.slot-real-img').forEach((img) => img.remove());
    if (imageUrl) {
      slotEl.classList.add('has-image');
      const img = document.createElement('img');
      img.className = 'slot-real-img';
      img.src = imageUrl;
      img.alt = altText;
      img.loading = 'lazy';
      slotEl.prepend(img);
    } else {
      slotEl.classList.remove('has-image');
    }
  };

  /* -------------------------------------------------------
     4. ROUTING & VISIBILITY SECTIONS
     ------------------------------------------------------- */
  const navigateTo = (routeName) => {
    state.route = routeName;

    document.querySelectorAll('.page-view').forEach((view) => {
      view.classList.toggle('is-active', view.dataset.view === routeName);
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.route === routeName);
    });

    // Sesuaikan visibilitas strip "BORN TO STAND OUT" dan "Cara Memesan" seperti di Figma
    const standoutStrip = document.getElementById('standout-strip');
    const howToOrder = document.getElementById('how-to-order');

    standoutStrip.hidden = ['home', 'product', 'location'].includes(routeName);
    howToOrder.hidden = routeName === 'about';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    observeReveals();
    closeDrawers();
  };

  /* -------------------------------------------------------
     5. RENDER HOME LATEST (5 PRODUK TERBARU)
     ------------------------------------------------------- */
  const renderHomeLatest = () => {
    const grid = document.getElementById('home-latest-grid');
    const featuredIds = [
      'urbex-meldive-black',
      'cargo-siera-black',
      'tshirt-mazal-white',
      'cargo-zetiv-black',
      'tshirt-swell-black'
    ];
    const items = featuredIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

    grid.innerHTML = items
      .map(
        (p) => `
      <article class="latest-card" data-product-id="${p.id}" tabindex="0" aria-label="${p.name}">
        <div class="img-slot latest-img-slot" data-size="240 × 300 px" data-label="${p.name.slice(0, 26)}...">
          ${p.image ? `<img class="slot-real-img" src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
        </div>
      </article>`
      )
      .join('');

    grid.innerHTML = items
      .map(
        (p) => `
      <article class="latest-card" data-product-id="${p.id}" tabindex="0" aria-label="${p.name}">
        <div class="img-slot latest-img-slot ${p.image ? 'has-image' : ''}" data-size="240 × 300 px" data-label="${p.name.slice(0, 26)}...">
          ${p.image ? `<img class="slot-real-img" src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
        </div>
      </article>`
      )
      .join('');
  };

  /* -------------------------------------------------------
     6. RENDER KATALOG PRODUK + FILTER + LIVE SEARCH
     ------------------------------------------------------- */
  const renderProductGrid = () => {
    const grid = document.getElementById('product-grid');
    const emptyEl = document.getElementById('catalog-empty');
    const headingEl = document.getElementById('catalog-heading');
    const countEl = document.getElementById('catalog-count');

    const keyword = state.search.trim().toLowerCase();
    const filtered = PRODUCTS.filter((p) => {
      const matchCat = state.category === 'All' || p.category === state.category;
      const matchSearch =
        !keyword ||
        p.name.toLowerCase().includes(keyword) ||
        p.desc.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword);
      return matchCat && matchSearch;
    });

    headingEl.textContent = state.category === 'All' ? 'Semua Produk' : `Kategori: ${state.category}`;
    countEl.textContent = `${filtered.length} Produk`;

    document.querySelectorAll('.cat-pill').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.category === state.category);
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyEl.hidden = false;
      return;
    }

    emptyEl.hidden = true;
    grid.innerHTML = filtered
      .map(
        (p) => `
      <article class="product-card reveal is-visible" data-product-id="${p.id}">
        <div class="img-slot product-img-slot ${p.image ? 'has-image' : ''}" data-size="410 × 410 px" data-label="Foto ${p.category}">
          ${p.image ? `<img class="slot-real-img" src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
        </div>
        <div class="product-card-overlay">
          <span class="product-card-cat">${p.category}</span>
          <h2 class="product-card-title">${p.name}</h2>
          <div class="product-card-foot">
            <span class="product-card-price">${formatIDR(p.price)}</span>
            <div class="card-actions-mini">
              <button type="button" class="mini-btn" data-quickview="${p.id}">Quick View</button>
              <button type="button" class="mini-btn" data-quickcart="${p.id}">+ Cart</button>
            </div>
          </div>
        </div>
      </article>`
      )
      .join('');
  };

  /* -------------------------------------------------------
     7. RENDER HALAMAN DETAIL PRODUK
     ------------------------------------------------------- */
  const openProductDetail = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    state.activeProduct = product;
    state.selectedSize = product.sizes[0];

    const imgSlot = document.getElementById('detail-img-slot');
    imgSlot.setAttribute('data-label', product.name);
    renderSlotImage(imgSlot, product.image, product.name);

    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-price').textContent = formatIDR(product.price);
    document.getElementById('detail-desc').textContent = product.desc;

    // Specs & Care
    const specsWrap = document.getElementById('detail-specs');
    let specsHtml = `<h4>${product.specsTitle}</h4><ul>${product.specs.map((s) => `<li>${s}</li>`).join('')}</ul>`;
    if (product.care.length > 0) {
      specsHtml += `<h4>Cara perawatan:</h4><ul>${product.care.map((c) => `<li>${c}</li>`).join('')}</ul>`;
    }
    specsWrap.innerHTML = specsHtml;

    // Size Chips
    const sizeChipsWrap = document.getElementById('detail-size-chips');
    sizeChipsWrap.innerHTML = product.sizes
      .map(
        (size, idx) =>
          `<button type="button" class="size-chip ${idx === 0 ? 'is-active' : ''}" data-size="${size}">${size}</button>`
      )
      .join('');

    // Sembunyikan tombol Size Guide untuk Aksesoris (sesuai Figma)
    const sizeGuideBtn = document.getElementById('detail-size-guide-btn');
    sizeGuideBtn.hidden = product.category === 'Aksesoris';

    navigateTo('detail');
  };

  /* -------------------------------------------------------
     8. MODALS (SIZE GUIDE & QUICK VIEW)
     ------------------------------------------------------- */
  const openSizeModal = (tab = 'Atasan') => {
    const modal = document.getElementById('size-modal');
    modal.hidden = false;
    renderSizeTable(tab === 'Bawahan' ? 'Bawahan' : 'Atasan');
  };

  const renderSizeTable = (tab) => {
    document.querySelectorAll('.size-tab-btn').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.sizeTab === tab);
    });

    const chart = SIZE_CHARTS[tab];
    const table = document.getElementById('size-chart-table');
    table.innerHTML = `
      <thead><tr>${chart.headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${chart.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    `;

    const diagramSlot = document.getElementById('size-diagram-slot');
    diagramSlot.setAttribute('data-label', `Ilustrasi Pengukuran ${tab}`);
    renderSlotImage(diagramSlot, chart.image, `Ilustrasi Pengukuran ${tab}`); 

    const renderSizeTable = (tab) => {
    document.querySelectorAll('.size-tab-btn').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.sizeTab === tab);
    });
  };
  };

  const openQuickView = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    state.activeProduct = product;
    const imgSlot = document.getElementById('qv-img-slot');
    imgSlot.setAttribute('data-label', product.name);
    renderSlotImage(imgSlot, product.image, product.name);

    document.getElementById('qv-category').textContent = product.category;
    document.getElementById('qv-title').textContent = product.name;
    document.getElementById('qv-price').textContent = formatIDR(product.price);
    document.getElementById('qv-desc').textContent = product.desc;

    document.getElementById('quickview-modal').hidden = false;
  };

  const closeAllModals = () => {
    document.querySelectorAll('.modal-backdrop').forEach((m) => (m.hidden = true));
  };

  /* -------------------------------------------------------
     9. KERANJANG BELANJA (CART DRAWER)
     ------------------------------------------------------- */
  const addToCart = (product, size = product.sizes[0]) => {
    const existing = state.cart.find((item) => item.id === product.id && item.size === size);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        qty: 1
      });
    }
    saveCart();
    showToast(`Ditambahkan: ${product.name.slice(0, 32)}... (${size})`);
  };

  const renderCart = () => {
    const badge = document.getElementById('cart-badge');
    const itemsWrap = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');

    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    badge.textContent = totalQty;
    totalEl.textContent = formatIDR(totalPrice);

    if (state.cart.length === 0) {
      itemsWrap.innerHTML = `<p style="text-align:center;color:#666;margin-top:40px;">Keranjang Anda masih kosong.</p>`;
      return;
    }

    itemsWrap.innerHTML = state.cart
      .map(
        (item, idx) => `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <div class="cart-item-meta">Ukuran: ${item.size} &bull; ${formatIDR(item.price)}</div>
          <div class="cart-qty">
            <button type="button" class="qty-btn" data-cart-dec="${idx}" aria-label="Kurangi jumlah">-</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" data-cart-inc="${idx}" aria-label="Tambah jumlah">+</button>
          </div>
        </div>
        <button type="button" class="close-btn" data-cart-del="${idx}" aria-label="Hapus item">&times;</button>
      </div>`
      )
      .join('');
  };

  const openCartDrawer = () => {
    document.getElementById('cart-drawer').classList.add('is-open');
    document.getElementById('cart-backdrop').classList.add('is-open');
  };

  const openMobileDrawer = () => {
    document.getElementById('mobile-drawer').classList.add('is-open');
    document.getElementById('mobile-backdrop').classList.add('is-open');
    document.getElementById('hamburger-btn').setAttribute('aria-expanded', 'true');
  };

  const closeDrawers = () => {
    document.getElementById('cart-drawer').classList.remove('is-open');
    document.getElementById('cart-backdrop').classList.remove('is-open');
    document.getElementById('mobile-drawer').classList.remove('is-open');
    document.getElementById('mobile-backdrop').classList.remove('is-open');
    document.getElementById('hamburger-btn').setAttribute('aria-expanded', 'false');
  };

  /* -------------------------------------------------------
     10. HERO CAROUSEL & SCROLL OBSERVER
     ------------------------------------------------------- */
  const setHeroSlide = (index) => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    state.heroIndex = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === state.heroIndex));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === state.heroIndex));
  };

  const observeReveals = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.page-view.is-active .reveal').forEach((el) => observer.observe(el));
  };

  /* -------------------------------------------------------
     11. EVENT LISTENERS (EVENT DELEGATION EFISIEN)
     ------------------------------------------------------- */
  const bindEvents = () => {
    // Scroll Sticky Header & Back to Top
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      document.getElementById('site-header').classList.toggle('is-scrolled', y > 20);
      document.getElementById('back-to-top').classList.toggle('is-visible', y > 350);
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Global Click Delegation
    document.addEventListener('click', (e) => {
      const routeEl = e.target.closest('[data-route]');
      if (routeEl) {
        e.preventDefault();
        navigateTo(routeEl.dataset.route);
        return;
      }

      const catEl = e.target.closest('[data-category]');
      if (catEl) {
        state.category = catEl.dataset.category;
        renderProductGrid();
        navigateTo('product');
        return;
      }

      const qvBtn = e.target.closest('[data-quickview]');
      if (qvBtn) {
        e.stopPropagation();
        openQuickView(qvBtn.dataset.quickview);
        return;
      }

      const qcBtn = e.target.closest('[data-quickcart]');
      if (qcBtn) {
        e.stopPropagation();
        const prod = PRODUCTS.find((p) => p.id === qcBtn.dataset.quickcart);
        if (prod) addToCart(prod);
        return;
      }

      const prodCard = e.target.closest('[data-product-id]');
      if (prodCard) {
        openProductDetail(prodCard.dataset.productId);
        return;
      }

      if (e.target.closest('[data-close-modal]') || e.target.classList.contains('modal-backdrop')) {
        closeAllModals();
      }
    });

    // Live Search
    document.getElementById('product-search-input').addEventListener('input', (e) => {
      state.search = e.target.value;
      renderProductGrid();
    });

    document.getElementById('reset-filter-btn').addEventListener('click', () => {
      state.category = 'All';
      state.search = '';
      document.getElementById('product-search-input').value = '';
      renderProductGrid();
    });

    // Product Detail Interactions
    document.getElementById('detail-back-btn').addEventListener('click', () => navigateTo('product'));

    document.getElementById('detail-size-chips').addEventListener('click', (e) => {
      const chip = e.target.closest('.size-chip');
      if (!chip) return;
      state.selectedSize = chip.dataset.size;
      document.querySelectorAll('.size-chip').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
    });

    document.getElementById('detail-size-guide-btn').addEventListener('click', () => {
      openSizeModal(state.activeProduct.category);
    });

    document.getElementById('detail-add-cart-btn').addEventListener('click', () => {
      addToCart(state.activeProduct, state.selectedSize);
      openCartDrawer();
    });

    document.getElementById('detail-wa-btn').addEventListener('click', () => {
      const p = state.activeProduct;
      const msg = encodeURIComponent(
        `Halo MALEAKLAB! Saya ingin memesan:\n- Produk: ${p.name}\n- Ukuran: ${state.selectedSize}\n- Harga: ${formatIDR(p.price)}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
    });

    // Quick View & Size Tabs
    document.querySelectorAll('.size-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => renderSizeTable(btn.dataset.sizeTab));
    });

    document.getElementById('qv-add-cart-btn').addEventListener('click', () => {
      addToCart(state.activeProduct);
      closeAllModals();
      openCartDrawer();
    });

    document.getElementById('qv-full-detail-btn').addEventListener('click', () => {
      closeAllModals();
      openProductDetail(state.activeProduct.id);
    });

    // Drawers
    document.getElementById('open-cart-btn').addEventListener('click', openCartDrawer);
    document.getElementById('close-cart-btn').addEventListener('click', closeDrawers);
    document.getElementById('cart-backdrop').addEventListener('click', closeDrawers);
    document.getElementById('hamburger-btn').addEventListener('click', openMobileDrawer);
    document.getElementById('close-mobile-btn').addEventListener('click', closeDrawers);
    document.getElementById('mobile-backdrop').addEventListener('click', closeDrawers);

    // Cart Item Quantity Controls
    document.getElementById('cart-items').addEventListener('click', (e) => {
      const dec = e.target.closest('[data-cart-dec]');
      const inc = e.target.closest('[data-cart-inc]');
      const del = e.target.closest('[data-cart-del]');

      if (dec) {
        const idx = Number(dec.dataset.cartDec);
        if (state.cart[idx].qty > 1) state.cart[idx].qty -= 1;
        else state.cart.splice(idx, 1);
        saveCart();
      } else if (inc) {
        state.cart[Number(inc.dataset.cartInc)].qty += 1;
        saveCart();
      } else if (del) {
        state.cart.splice(Number(del.dataset.cartDel), 1);
        saveCart();
      }
    });

    document.getElementById('checkout-wa-btn').addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Keranjang Anda masih kosong.');
        return;
      }
      const lines = state.cart.map(
        (i, idx) => `${idx + 1}. ${i.name} (${i.size}) x${i.qty} = ${formatIDR(i.price * i.qty)}`
      );
      const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
      const msg = encodeURIComponent(`Halo MALEAKLAB! Saya mau pesan:\n${lines.join('\n')}\n\nTotal: ${formatIDR(total)}`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
    });

    // Hero Dots + Autoplay
    document.getElementById('hero-dots').addEventListener('click', (e) => {
      const dot = e.target.closest('.hero-dot');
      if (dot) setHeroSlide(Number(dot.dataset.slide));
    });
    setInterval(() => {
      if (state.route === 'home') setHeroSlide(state.heroIndex + 1);
    }, 5500);

    // Login Form Demo Handler
    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      if (!email) {
        showToast('Mohon isi Email atau No. Telepon.');
        return;
      }
      showToast(`Selamat datang kembali, ${email}!`);
      navigateTo('home');
    });

    document.getElementById('google-login-btn').addEventListener('click', () => {
      showToast('Login Google berhasil (Mode Demo).');
      navigateTo('home');
    });

    document.getElementById('forgot-password-btn').addEventListener('click', () => {
      showToast('Link reset password dikirim ke email Anda (Mode Demo).');
    });

    // ESC Key to Close Modals & Drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
        closeDrawers();
      }
    });
  };

  /* -------------------------------------------------------
     12. INISIALISASI
     ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderHomeLatest();
    renderProductGrid();
    renderCart();
    bindEvents();
    navigateTo('home');
  });
})();

