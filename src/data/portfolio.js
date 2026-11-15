import travelCover from '../assets/leisurelink-travel-tour/China Dragon Dream Tour-01.jpg'
import travelDetail from '../assets/leisurelink-travel-tour/FLYER China Tour-01.jpg'
import travelFlyer from '../assets/leisurelink-travel-tour/FLYER Chile-01.jpg'

export const profile = {
  name: 'Zoelkiflie Ahmadhani',
  email: 'zoelkiflie580@gmail.com',
  github: 'https://github.com/zoelkfle',
  location: 'Jakarta, Indonesia',
}

export const projects = [
  {
    id: 'leisurelink-travel-tour',
    kind: 'travel',
    label: 'Travel / 01',
    type: 'Brand collateral',
    title: ['Leisurelink', 'Travel Tour'],
    description: 'Menerjemahkan berbagai destinasi perjalanan menjadi rangkaian materi promosi yang informatif, berani, dan konsisten.',
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
  },
]

export const skills = ['React', 'JavaScript', 'HTML / CSS', 'Firebase', 'Responsive design']
