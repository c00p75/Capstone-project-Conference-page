// Dynamically generate speakers
const speakers = [
  {
    name: 'Barack Obama',
    link: 'https://en.wikipedia.org/wiki/Barack_Obama',
    image: 'Images/speaker_01.png',
    title: 'American Politician in the Democratic Party',
    description: 'An American politician who served as the 44th president of the United States from 2009 to 2017.',
  },

  {
    name: 'Mizinga Melu',
    link: 'https://en.wikipedia.org/wiki/Mizinga_Melu',
    image: 'Images/speaker_07.png',
    title: 'Zambian businesswoman, accountant, and bank executive',
    description: 'industry expert who has been at the helm of top banking organizations having worked in six (6) African countries.',
  },

  {
    name: 'Lawrence Page',
    link: 'https://en.wikipedia.org/wiki/Larry_Page',
    image: 'Images/speaker_02.png',
    title: 'Co-founder of Google',
    description: 'American business magnate, computer scientist and internet entrepreneur.',
  },

  {
    name: 'Oprah Winfrey',
    link: 'https://en.wikipedia.org/wiki/Oprah_Winfrey',
    image: 'Images/speaker_04.png',
    title: 'American television personality',
    description: 'American talk show host, television producer, actress, author, and philanthropist.',
  },

  {
    name: 'Mark Nkowani',
    link: '#',
    image: 'Images/speaker_05.png',
    title: 'Investor and CEO',
    description: 'Zambian billionaire and founder of 12 of the top 40 most profitable businesses in Africa',
  },

  {
    name: 'Joe Rogan',
    link: 'https://www.joerogan.com/',
    image: 'Images/speaker_09.png',
    title: 'American UFC color commentator, podcaster, and more',
    description: 'Hosts The Joe Rogan Experience, a podcast in which he discusses current events, politics, philosophy, and science',
  },

  {
    name: 'Isaac Phiri',
    link: '#',
    image: 'Images/speaker_03.png',
    title: 'Most recognized real estate lawyer in Zambia',
    description: 'Focuses on the restructuring and liquidation of companies in a wide array of industries.',
  },

  {
    name: 'Margaret Phiri',
    link: '#',
    image: 'Images/speaker_10.png',
    title: 'Entrepreneur, educator, and business woman',
    description: "Multi-industry business owner and major share holder of the world's most popular beauty brand",
  },

  {
    name: "Chizaso M'sapenda",
    link: '#',
    image: 'Images/speaker_06.png',
    title: 'Founder of one the leading law firms in Zambia',
    description: 'Renowned for work across disciplines, including both transactional and disputes work',
  },

  {
    name: 'Mia Mottley',
    link: 'https://en.wikipedia.org/wiki/Mia_Mottley',
    image: 'Images/speaker_08.png',
    title: 'Barbadian politician and attorney',
    description: 'Barbadian politician and attorney who has served as prime minister of Barbados since 2018',
  },
];

function addSpeaker(speaker, display = false) {
  const speakerHTML = document.createElement('div');
  speakerHTML.classList.add('row');
  speakerHTML.classList.add('speaker-card');
  speakerHTML.classList.add('col-md-6');
  speakerHTML.classList.add('py-4');
  speakerHTML.classList.add('w3-animate-top');

  if (display === false) { speakerHTML.classList.add('d-none'); }
  speakerHTML.innerHTML = `  
    <div class="col-6">
      <img src="${speaker.image}" alt="${speaker.name}" class="img-fluid">
    </div>
    
    <div class="col-6  text-start container">
        <a href="${speaker.link}" class="text-decoration-none text-dark fw-bold">${speaker.name}</a>
        <p class="speaker-description mb-2 fst-italic">${speaker.title}</p>
        <div class='line2'></div>
        <div class="col-12 speaker-description text-dark text-start">
          <p>${speaker.description}</p>
        </div>
    </div>
  `;
  document.querySelector('#speaker-container').appendChild(speakerHTML);
}

for (let i = 0; i < speakers.length; i += 1) {
  if (i < 4) {
    addSpeaker(speakers[i], true);
  } else {
    addSpeaker(speakers[i]);
  }
}

// See more & See less
const seeMore = document.querySelectorAll('.see-more');
const seeLess = document.querySelectorAll('.see-less');
const hiddenSpeakers = document.querySelectorAll('.speakers .d-none');

function toggleHide(index, Nodelist) {
  seeMore[index].classList.toggle('d-none');
  for (let i = 0; i < Nodelist.length; i += 1) {
    Nodelist[i].classList.toggle('d-none');
  }
}

seeMore[0].addEventListener('click', () => {
  toggleHide(0, hiddenSpeakers);
});

seeLess[0].addEventListener('click', () => {
  toggleHide(0, hiddenSpeakers);
});
