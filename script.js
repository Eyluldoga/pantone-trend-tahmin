// --- VERİ SETİ (KATEGORİ BAZLI, 5 YIL x 3 KATEGORİ x 7 RENK = 105 TEMSİLİ VERİ) ---
const pantoneColorsCategorized = [
    // 2025 Moda Paleti (Örnek)
    { year: 2025, category: "kadın", name: "Hot Choclate", hex: "#5D322E" },
    { year: 2025, category: "kadın", name: "Chili Oil", hex: "#8B3F3C" },
    { year: 2025, category: "kadın", name: "Poppy Red", hex: "#D7393A" },
    { year: 2025, category: "kadın", name: "Lemon Grass", hex: "#767957ff" },
    { year: 2025, category: "kadın", name: "Brandied Melon", hex: "#4a1908ff" },
    { year: 2025, category: "kadın", name: "Lyons Blue", hex: "#004D6B" },
    { year: 2025, category: "kadın", name: "Damson", hex: "#7D3F59" },

    { year: 2025, category: "erkek", name: "Navy Blazer", hex: "#232837" },
    { year: 2025, category: "erkek", name: "Camel", hex: "#A97B51" },
    { year: 2025, category: "erkek", name: "Bordeaux", hex: "#7B1C28" },
    { year: 2025, category: "erkek", name: "Ultimate Gray", hex: "#6C6E72" },
    { year: 2025, category: "erkek", name: "Warm Sand", hex: "#190b2dff" },
    { year: 2025, category: "erkek", name: "Future Pink", hex: "#F3697A" },
    { year: 2025, category: "erkek", name: "Baby Tech Blue", hex: "#7279c1ff" },

    { year: 2025, category: "çocuk", name: "Secret Blush", hex: "#F5B3BC" },
    { year: 2025, category: "çocuk", name: "Sky Gaze", hex: "#B8D2E4" },
    { year: 2025, category: "çocuk", name: "Dreamy Lilac", hex: "#B3B0D2" },
    { year: 2025, category: "çocuk", name: "Soft Jade", hex: "#A8D6C0" },
    { year: 2025, category: "çocuk", name: "Tranquil Peach", hex: "#F8CF95" },
    { year: 2025, category: "çocuk", name: "Milky Glow", hex: "#F6F0E0" },
    { year: 2025, category: "çocuk", name: "Nebula Blue", hex: "#A1BACC" },
    
    // 2024 Moda Paleti
    { year: 2024, category: "kadın", name: "Rooibos Tea", hex: "#945447" },
    { year: 2024, category: "kadın", name: "Orangeade", hex: "#C86B42" },
    { year: 2024, category: "kadın", name: "Watercress", hex: "#5F754B" },
    { year: 2024, category: "kadın", name: "Desert Flower", hex: "#E19B86" },
    { year: 2024, category: "kadın", name: "Chambray Blue", hex: "#3a2436ff" },
    { year: 2024, category: "kadın", name: "Pastel Lilac", hex: "#644ab4ff" },
    { year: 2024, category: "kadın", name: "Marlin", hex: "#3E4770" },
    
    { year: 2024, category: "erkek", name: "Peach Fuzz", hex: "#F0BEA7" },
    { year: 2024, category: "erkek", name: "Camel", hex: "#A97B51" },
    { year: 2024, category: "erkek", name: "Bordeaux", hex: "#7B1C28" },
    { year: 2024, category: "erkek", name: "Navy Blazer", hex: "#232837" },
    { year: 2024, category: "erkek", name: "Ultimate Gray", hex: "#6C6E72" },
    { year: 2024, category: "erkek", name: "Dark Blue", hex: "#2C384B" },
    { year: 2024, category: "erkek", name: "Warm Sand", hex: "#D7B387" },

    { year: 2024, category: "çocuk", name: "Ice Denim Blue", hex: "#A1C6D2" },
    { year: 2024, category: "çocuk", name: "Soft Beam Yellow", hex: "#FDDD8C" },
    { year: 2024, category: "çocuk", name: "Virtual Lavender Kids", hex: "#B3B0D2" },
    { year: 2024, category: "çocuk", name: "Cream Byte", hex: "#F8F1D2" },
    { year: 2024, category: "çocuk", name: "Neo Mint Kids", hex: "#A8D6C0" },
    { year: 2024, category: "çocuk", name: "Baby Tech Blue", hex: "#78B9C8" },
    { year: 2024, category: "çocuk", name: "Future Pink", hex: "#F5949E" },

    // 2023 Moda Paleti
    { year: 2023, category: "kadın", name: "Fiery Red", hex: "#BD1F31" },
    { year: 2023, category: "kadın", name: "Beetroot Purple", hex: "#C41E7A" },
    { year: 2023, category: "kadın", name: "Tangelo", hex: "#105537ff" },
    { year: 2023, category: "kadın", name: "Peach Pink", hex: "#b1411fff" },
    { year: 2023, category: "kadın", name: "Empire Yellow", hex: "#116b39ff" },
    { year: 2023, category: "kadın", name: "Chrystal Rose", hex: "#7c2a31ff" },
    { year: 2023, category: "kadın", name: "Classic Green", hex: "#00893F" },

    { year: 2023, category: "erkek", name: "Viva Magenta", hex: "#BB2649" },
    { year: 2023, category: "erkek", name: "Camel", hex: "#A97B51" },
    { year: 2023, category: "erkek", name: "Bordeaux", hex: "#7B1C28" },
    { year: 2023, category: "erkek", name: "Navy Blazer", hex: "#232837" },
    { year: 2023, category: "erkek", name: "Ultimate Gray", hex: "#6C6E72" },
    { year: 2023, category: "erkek", name: "Dark Blue", hex: "#2C384B" },
    { year: 2023, category: "erkek", name: "Warm Sand", hex: "#D7B387" },


    { year: 2023, category: "çocuk", name: "Baby Sage", hex: "#B9DBCF" },
    { year: 2023, category: "çocuk", name: "Vanilla Milk", hex: "#F4E8D7" },
    { year: 2023, category: "çocuk", name: "Light Mauve", hex: "#D4C7D5" },
    { year: 2023, category: "çocuk", name: "Warm Pebble", hex: "#E4D7C1" },
    { year: 2023, category: "çocuk", name: "Misty Blue", hex: "#AEC4D0" },
    { year: 2023, category: "çocuk", name: "Soft Coral", hex: "#EBA699" },
    { year: 2023, category: "çocuk", name: "Ice Pink", hex: "#F5D3D6" },

    // 2022 Moda Paleti
    { year: 2022, category: "kadın", name: "Soft Coral", hex: "#EBA699" },
    { year: 2022, category: "kadın", name: "Digital Lavender", hex: "#B6A9D2" },
    { year: 2022, category: "kadın", name: "Pantone Pastel Lilac", hex: "#C5C0D7" },
    { year: 2022, category: "kadın", name: "Peach Cream", hex: "#F8E0C9" },
    { year: 2022, category: "kadın", name: "Ice Pink", hex: "#F5D3D6" },
    { year: 2022, category: "kadın", name: "Honey Ginger", hex: "#C9B99E" },
    { year: 2022, category: "kadın", name: "Ocean Mist", hex: "#C7E1D8" },

    { year: 2022, category: "erkek", name: "Navy Blue", hex: "#050525ff" },
    { year: 2022, category: "erkek", name: "Ultimate Gray", hex: "#939597" },
    { year: 2022, category: "erkek", name: "Rhodo Red", hex: "#cc6666" },
    { year: 2022, category: "erkek", name: "Summer Green", hex: "#6b8e23" },
    { year: 2022, category: "erkek", name: "Winery", hex: "#800040" },
    { year: 2022, category: "erkek", name: "Potting Soil", hex: "#4a3b3a" },
    { year: 2022, category: "erkek", name: "Perfect Pale", hex: "#8d864bff" },

    { year: 2022, category: "çocuk", name: "Ocean Mist", hex: "#C7E1D8" },
    { year: 2022, category: "çocuk", name: "Honey Ginger", hex: "#C9B99E" },
    { year: 2022, category: "çocuk", name: "Ice Pink", hex: "#F5D3D6" },
    { year: 2022, category: "çocuk", name: "Peach Cream", hex: "#F8E0C9" },
    { year: 2022, category: "çocuk", name: "Pantone Pastel Lilac", hex: "#C5C0D7" },
    { year: 2022, category: "çocuk", name: "Digital Lavender", hex: "#B6A9D2" },
    { year: 2022, category: "çocuk", name: "Tropical Sky", hex: "#96D8D7" },

    // 2021 Moda Paleti
    { year: 2021, category: "kadın", name: "Pirouette", hex: "#F9C1CF" },
    { year: 2021, category: "kadın", name: "Pickled Pepper", hex: "#96AA43" },
    { year: 2021, category: "kadın", name: "Purple Rose", hex: "#A780B8" },
    { year: 2021, category: "kadın", name: "Orange Ochre", hex: "#D08040" },
    { year: 2021, category: "kadın", name: "Beach Glass", hex: "#A0DED8" },
    { year: 2021, category: "kadın", name: "Marigold", hex: "#FAA932" },
    { year: 2021, category: "kadın", name: "Indigo Bunting", hex: "#004593" },

    { year: 2021, category: "erkek", name: "Charcoal Gray", hex: "#36454f" },
    { year: 2021, category: "erkek", name: "Classic Blue", hex: "#0f4c81" },
    { year: 2021, category: "erkek", name: "Military Green", hex: "#556b2f" },
    { year: 2021, category: "erkek", name: "Orange Ochre", hex: "#cc7722" },
    { year: 2021, category: "erkek", name: "Sleet", hex: "#9da1a5" },
    { year: 2021, category: "erkek", name: "Buttercream", hex: "#fff9c7" },
    { year: 2021, category: "erkek", name: "Deep Lake", hex: "#00555e" },

    { year: 2021, category: "çocuk", name: "Candy Pink", hex: "#F2C5C9" },
    { year: 2021, category: "çocuk", name: "Seafoam Green", hex: "#B4DCD5" },
    { year: 2021, category: "çocuk", name: "Tropical Sky", hex: "#96D8D7" },
    { year: 2021, category: "çocuk", name: "Apple Green", hex: "#A5D98B" },
    { year: 2021, category: "çocuk", name: "Soft Lemon", hex: "#8FDCDE" },
    { year: 2021, category: "çocuk", name: "Aqua Pop", hex: "#8FDCDE" },
    { year: 2021, category: "çocuk", name: "Mango Sorbet", hex: "#FBC05A" }
];

const categories = ["kadın", "erkek", "çocuk"];

// --- HSL DÖNÜŞÜM FONKSİYONLARI ---

/** HEX'i HSL'ye Çevirir (Ton: 0-360, Doygunluk/Açıklık: 0-100) */
function hexToHsl(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 7) { 
        r = parseInt(hex.substring(1, 3), 16) / 255;
        g = parseInt(hex.substring(3, 5), 16) / 255;
        b = parseInt(hex.substring(5, 7), 16) / 255;
    }

    let min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h = 0, s = 0,
        l = (max + min) / 2;

    if (delta !== 0) {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        switch (max) {
            case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
            case g: h = (b - r) / delta + 2; break;
            case b: h = (r - g) / delta + 4; break;
        }
        h /= 6;
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

/** HSL değerlerini CSS uyumlu HSL stringine çevirir. */
function hslToCssString(h, s, l) {
    return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}


// --- TAHMİN MANTIĞI: HSL MESAFESİ VE 3 RENK SEÇİMİ ---

/** İki HSL rengi arasındaki ağırlıklı mesafeyi hesaplar. */
function getHslDistance(hsl1, hsl2) {
    const dh = Math.min(Math.abs(hsl1.h - hsl2.h), 360 - Math.abs(hsl1.h - hsl2.h));
    const ds = hsl1.s - hsl2.s;
    const dl = hsl1.l - hsl2.l;
    
    // Ağırlıklı Öklid mesafesi
    const distance = Math.sqrt(
        (dh * dh * 0.5) + // Ton (dairesel, daha az ağırlık)
        (ds * ds * 1.5) + // Doygunluk (daha fazla ağırlık)
        (dl * dl)         // Açıklık (orta ağırlık)
    );
    return distance;
}

/** Belirtilen kategori için HSL ortalamasını ve bu ortalamaya en yakın 3 trend rengini bulur. */
function predictColorForCategory(category) {
    const categoryColors = pantoneColorsCategorized.filter(c => c.category === category);
    
    // 1. HSL Ortalamasını Bul (Merkez Tahmini)
    let totalH = 0, totalS = 0, totalL = 0, count = 0;
    categoryColors.forEach(color => {
        const hsl = hexToHsl(color.hex);
        totalH += hsl.h;
        totalS += hsl.s;
        totalL += hsl.l;
        count++;
    });

    if (count === 0) return { palette: [] };

    const centerHsl = { 
        h: totalH / count, 
        s: totalS / count, 
        l: totalL / count 
    };

    // 2. Uzaklıkları Hesapla
    const rankedColors = categoryColors.map(color => {
        const colorHsl = hexToHsl(color.hex);
        const distance = getHslDistance(centerHsl, colorHsl);
        return {
            ...color,
            hsl: colorHsl,
            distance: distance
        };
    });

    // 3. En Yakın 3 Rengi Bul (En kısa mesafe, en yakın renk)
    rankedColors.sort((a, b) => a.distance - b.distance);

    // İlk 3 benzersiz rengi seç (Aynı isimli renklerin tekrar etmemesi için)
    const uniquePalette = [];
    const names = new Set();

    for (const color of rankedColors) {
        // Renk adının benzersiz olduğundan emin ol
        if (!names.has(color.name)) {
            uniquePalette.push(color);
            names.add(color.name);
        }
        if (uniquePalette.length >= 3) {
            break;
        }
    }
    
    return { palette: uniquePalette };
}

/** Butona basılınca tahmin edilen paleti HTML'de gösterir. */
function showPredictedPalette(category) {
    const result = predictColorForCategory(category);
    const gridElement = document.getElementById('palette-grid');
    const titleElement = document.getElementById('palette-title');
    
    titleElement.innerHTML = `${category.charAt(0).toUpperCase() + category.slice(1)} Giyim İçin 2026 Tahmini Palet Önerisi`;

    gridElement.innerHTML = '';
    
    if (result.palette.length === 0) {
        gridElement.innerHTML = `<p>Bu kategori için yeterli veri bulunamadı.</p>`;
        return;
    }

    // Yeni paleti (3 rengi) ekle
    result.palette.forEach((color, index) => {
        const card = document.createElement('div');
        card.className = 'palette-color-card';
        const hslString = hslToCssString(color.hsl.h, color.hsl.s, color.hsl.l);
        
        card.innerHTML = `
            <div class="palette-swatch" style="background-color: ${hslString};"></div>
            <p><strong>Öneri ${index + 1}</strong></p>
            <p>${color.name} (Yakın Geçmiş)</p>
            <p>HSL: H:${color.hsl.h}° S:${color.hsl.s}% L:${color.hsl.l}%</p>
        `;
        gridElement.appendChild(card);
    });

    // Tahmin bölümünü görünür yap
    document.getElementById('prediction').style.display = 'block';
}

/** Kategori butonlarına tıklama olaylarını bağlar. */
function setupCategoryButtons() {
    const categories = ["kadın", "erkek", "çocuk"];
    
    categories.forEach(category => {
        const button = document.getElementById(`btn-${category}`);
        button.addEventListener('click', () => {
            showPredictedPalette(category);
            
            // Aktif butonu vurgula
            document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

/** Geçmiş renk kartlarını HTML'e ekler. */
function displayPastColors() {
    const container = document.getElementById('color-list');
    
    pantoneColorsCategorized.forEach(color => {
        const hsl = hexToHsl(color.hex);
        const hslString = hslToCssString(hsl.h, hsl.s, hsl.l);
        
        const card = document.createElement('div');
        card.className = 'color-card';
        card.innerHTML = `
            <div class="color-swatch" style="background-color: ${hslString};"></div>
            <p><strong>Yıl:</strong> ${color.year}</p>
            <p><strong>Kategori:</strong> ${color.category.charAt(0).toUpperCase() + color.category.slice(1)}</p>
            <p>${color.name}</p>
        `;
        container.appendChild(card);
    });
}

// --- BAŞLANGIÇ ---
document.addEventListener('DOMContentLoaded', () => {
    displayPastColors();
    setupCategoryButtons();
    
    // Varsayılan olarak Kadın Giyim tahminini göster
    showPredictedPalette('kadın');
    const defaultButton = document.getElementById('btn-kadın');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
});
