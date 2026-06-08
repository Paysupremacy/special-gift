// ========== DATA KENANGAN (GANTI DENGAN FILE PRIBADI ANDA) ==========
// Foto: isi properti src (url gambar asli) dan thumbnail
// Video: isi videoSrc (url file .mp4) dan thumbnail
// Letakkan aset di folder ./assets/ atau gunakan link online

const photoMemories = [
  { title: "aku sayang kamu", src: "assets/fot1.jpg", thumbnail: "assets/fot1.jpg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot2.jpg", thumbnail: "assets/fot2.jpg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot3.jpg", thumbnail: "assets/fot3.jpg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot4.jpeg", thumbnail: "assets/fot4.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot5.jpeg", thumbnail: "assets/fot5.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot6.png", thumbnail: "assets/fot6.png", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot7.png", thumbnail: "assets/fot7.png", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot8.png", thumbnail: "assets/fot8.png", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot9.jpeg", thumbnail: "assets/fot9.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot10.jpeg", thumbnail: "assets/fot10.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot11.jpeg", thumbnail: "assets/fot11.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot12.jpeg", thumbnail: "assets/fot12.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot13.jpeg", thumbnail: "assets/fot13.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot14.jpeg", thumbnail: "assets/fot14.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot15.jpeg", thumbnail: "assets/fot15.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot16.jpeg", thumbnail: "assets/fot16.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot17.jpeg", thumbnail: "assets/fot17.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot18.jpeg", thumbnail: "assets/fot18.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot19.jpeg", thumbnail: "assets/fot19.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot20.jpeg", thumbnail: "assets/fot20.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot21.png", thumbnail: "assets/fot21.png", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot22.jpeg", thumbnail: "assets/fot22.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot23.jpeg", thumbnail: "assets/fot23.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot24.jpeg", thumbnail: "assets/fot24.jpeg", date: "2026" },
  { title: "aku sayang kamu", src: "assets/fot25.jpeg", thumbnail: "assets/fot25.jpeg", date: "2026" }
];

const videoMemories = [
  { title: "aku sayang kamu", videoSrc: "assets/vid1.mp4", preview: "assets/vid1.mp4"},
  { title: "aku sayang kamu", videoSrc: "assets/vid2.mp4", thumbnail: "assets/vid2.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid4.mp4", thumbnail: "assets/vid4.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid5.mp4", thumbnail: "assets/vid5.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid6.mp4", thumbnail: "assets/vid6.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid7.mp4", thumbnail: "assets/vid7.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid8.mp4", thumbnail: "assets/vid8.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid9.mp4", thumbnail: "assets/vid9.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid10.mp4", thumbnail: "assets/vid10.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid11.mp4", thumbnail: "assets/vid11.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid13.mp4", thumbnail: "assets/vid13.jpg"},
  { title: "aku sayang kamu", videoSrc: "assets/vid14.mp4", thumbnail: "assets/vid14.jpg"}
];

// ========== RENDER ==========
function renderRow(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  items.forEach((item) => {
    const isVideo = item.videoSrc !== undefined;

    const card = document.createElement('div');
    card.className = 'netflix-card';

    card.innerHTML = `
      <div class="card-image">

        ${isVideo ? `
          <video class="card-video" autoplay muted loop playsinline>
            <source src="${item.videoSrc}" type="video/mp4">
          </video>
        ` : `
          <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
        `}

        <div class="card-overlay">
          <div class="play-circle">
            <i class="fas ${isVideo ? 'fa-play' : 'fa-expand'}"></i>
          </div>
        </div>
      </div>

      <div class="card-info">
        <h4>${item.title}</h4>
        <div class="card-meta">
          ${isVideo 
            ? `<span class="badge-video"><i class="fas fa-video"></i> Video</span>` 
            : `<span><i class="fas fa-image"></i> Foto</span>`}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (isVideo) openModalVideo(item.videoSrc, item.title);
      else openModalPhoto(item.src, item.title);
    });

    container.appendChild(card);
  });
}

// ========== MODAL ==========
const modal = document.getElementById('mediaModal');
const modalMedia = document.getElementById('modalMediaContainer');
const modalTitleSpan = document.getElementById('modalTitle');
let currentVideoElement = null;

function openModalPhoto(src, title) {
  modalMedia.innerHTML = `<img src="${src}" style="max-height:65vh;">`;
  modalTitleSpan.innerText = title;
  modal.classList.add('active');
}

function openModalVideo(videoSrc, title) {
  modalMedia.innerHTML = `
    <video controls autoplay style="width:100%; max-height:65vh;">
      <source src="${videoSrc}" type="video/mp4">
    </video>
  `;
  modalTitleSpan.innerText = title;
  modal.classList.add('active');

  const vid = modalMedia.querySelector('video');
  currentVideoElement = vid;
}

function closeModal() {
  modal.classList.remove('active');
  if (currentVideoElement) currentVideoElement.pause();
  modalMedia.innerHTML = '';
}

// EVENT
document.getElementById('closeModalBtn').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// INIT
renderRow('photoRow', photoMemories);
renderRow('videoRow', videoMemories);