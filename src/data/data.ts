import type { Project } from '../types/projects';
import type { Experience } from '../types/experiences';

export const galleryImages: string[] = [
  '/images/gallery/dummy-image1.jpg',
  '/images/gallery/dummy-image2.jpg',
  '/images/gallery/dummy-image3.jpg',
  '/images/gallery/dummy-image4.jpg',
];

export const avoids: string[] = [
  '🧹 Vacuum Cleaner',
  '💦 Wet Surfaces',
  '👗 Wearing Costumes',
  '🚪 Closed Doors',
  '🌍 Unfamiliar Places',
  '🏥 Vet Visits',
  '🚗 Car Drives',
  '🛁 Bath',
  '🔊 Noise',
  '🎉 Parties',
  '🎵 Loud Music',
  '🌪️ Windy Weather',
  '🏠 Strange Homes',
  '🌧️ Rain',
  '🚿 Showers',
  '🐕 Other Pets',
];

export const hobbies: string[] = [
  '🍮 Food',
  '💤 Sleep',
  '🧸 Toys',
  '☀️ Sunbathing',
  '😺 Shouting (sometimes)',
  '🌞 Napping on the balcony',
  '🐾 Going for walks',
  '🍽️ Food Critic',
  '🌱 Rolling in the mud in the garden',
  '📦 Exploring New Boxes',
  '🥯 Making biscuits',
  '🏎️ Racing Through the Apartment',
  '🎣 Fishing for compliments',
  '🎨 Cat Artistry (Paw Prints Everywhere)',
  '🛋️ Lounging on the Couch',
  '🕶️ Posing for Instagram',
  '🧹 Chasing the Broom',
  '🧗 Climbing on Shelves',
  '🛏️ Stealing Your Spot in Bed',
  '🐦 Watching Birds from the Window',
  '👁️ Observing Humans Quietly',
  '🥋 Practicing Martial Arts (Sneak Attacks)',
  '🚪 Trying to Open Closed Doors',
  '🎭 Mastering the "Sad Eyes" Look',
];

export const projects: Project[] = [
  {
    title: 'Cat Costume Fashion Show',
    description:
      'A showcase of stylish cat costumes with runway walks and photo posing.',
    image: '/images/rafi1.JPG',
    status: 'active',
    slug: 'one',
  },
  {
    title: 'Cat Tech Product Reviews',
    description: 'Testing and reviewing the latest in cat tech products.',
    image: '/images/rafi3.JPG',
    status: 'completed',
    slug: 'two',
  },
  {
    title: 'Bird Watching Vlogs',
    description:
      "Stalking birds from a safe distance while pretending that I'm not interested.",
    image: '/images/rafi2.JPG',
    status: 'active',
    slug: 'three',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Professional Cat Poser 🐱',
    description:
      'Seeking more clients to advertise expensive kitty items. If you have premium products for the pampered feline, I’m your cat! 💼',
  },
  {
    title: 'Expert Cuddler 🤗',
    description:
      'I know how to make humans think I like them! 😉 My purring skills are unmatched, and I have perfected the art of finding the coziest spots on laps for maximum cuddle efficiency. 🐾',
  },
  {
    title: 'Full-time Home Sitting Diva 🏠',
    description:
      'I have been living the high life as a home-sitting diva, receiving the best care and plenty of luxury kitty products. 💅',
  },
  {
    title: 'Cat Tech Product Tester 🖥️',
    description:
      'Testing the latest and greatest in cat tech products like automatic litter boxes, water fountains, and smart feeders. 🧪',
  },
  {
    title: 'Fashion Model 👗',
    description:
      "Runway walking for my humans to appreciate my beauty demonstrating some cat costumes (didn't particularly enjoy wearing them). 📸",
  },
  {
    title: 'Professional Bird Stalker 🐦',
    description:
      'Expertly stalking birds from a safe distance, plotting my next move while maintaining a cute and innocent appearance. (Don’t let the humans know it’s just a hobby!) 🕵️‍♂️',
  },
];
