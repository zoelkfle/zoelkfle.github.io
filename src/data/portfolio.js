import travelCover from '../assets/leisurelink-travel-tour/China Dragon Dream Tour-01.jpg'
import travelDetail from '../assets/leisurelink-travel-tour/FLYER China Tour-01.jpg'
import travelFlyer from '../assets/leisurelink-travel-tour/FLYER Chile-01.jpg'
import invitationScreenshot from '../assets/undangan-digital/_C__Users_ZOEL_Downloads_Undangan_index.html(Samsung Galaxy A55).png'

export const profile = {
  name: 'Zoelkiflie Ahmadhani',
  email: 'zoelkiflie580@gmail.com',
  role: 'Frontend developer & visual designer',
  education: 'Mahasiswa semester 5 Teknik Informatika',
  university: 'Universitas Muhammadiyah Jakarta',
  expectedGraduation: 'Target lulus 2028',
  github: 'https://github.com/zoelkfle',
  linkedin: 'https://www.linkedin.com/in/zoelkiflie-ahmadhani-209a44426',
  instagram: 'https://www.instagram.com/zoelkie',
  location: 'Jakarta, Indonesia',
}

export const projects = [
  {
    id: 'leisurelink-travel-tour',
    kind: 'travel',
    label: 'Travel / 01',
    type: 'Brand collateral',
    title: ['Leisurelink', 'Travel Tour'],
    description: 'Menangani kebutuhan desain Leisurelink Travel Tour secara menyeluruh, dari materi cetak seperti brosur hingga kebutuhan digital seperti flyer dan aset web yang informatif, berani, dan konsisten.',
    contribution: 'Mengembangkan arah visual dan menyiapkan materi komunikasi untuk kebutuhan print dan digital.',
    tools: ['Adobe Illustrator', 'Layout design', 'Visual system'],
    deliverables: 'Brosur, flyer, dan aset promosi web',
    images: [
      { src: travelCover, alt: 'Materi visual China Dragon Dream Tour' },
      { src: travelDetail, alt: 'Flyer China Tour' },
      { src: travelFlyer, alt: 'Flyer Chile Tour' },
    ],
  },
  {
    id: 'undangan-digital',
    kind: 'invitation',
    label: 'Web / 02',
    type: 'Interactive website',
    title: ['Undangan', 'Digital'],
    description: 'Single-page wedding invitation dengan RSVP real-time, countdown, musik, dan detail acara yang dirancang mobile-first.',
    contribution: 'Merancang dan membangun pengalaman undangan digital yang interaktif, responsif, dan mudah digunakan.',
    tools: ['React', 'JavaScript', 'Firebase'],
    deliverables: 'Landing page, RSVP real-time, dan detail acara',
    image: invitationScreenshot,
  },
]

export const skills = ['React', 'JavaScript', 'HTML / CSS', 'Firebase', 'Responsive design']

export const process = [
  { number: '01', title: 'Memahami konteks', description: 'Membaca kebutuhan, audiens, dan cerita yang ingin disampaikan.' },
  { number: '02', title: 'Menyusun arah', description: 'Menerjemahkan ide menjadi struktur visual, layout, dan pengalaman yang jelas.' },
  { number: '03', title: 'Membangun detail', description: 'Mengerjakan desain atau interface dengan perhatian pada konsistensi dan responsivitas.' },
  { number: '04', title: 'Merapikan pengalaman', description: 'Menguji kembali setiap bagian agar hasil akhirnya terasa siap digunakan.' },
]

export const exploring = ['UI/UX untuk produk digital', 'Design system', 'Real-time web application', 'Creative technology']
