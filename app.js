// local reviews data
// modification
const reviews = [
  {
    id: 1,
    name: 'sonam bajwa',
    job: 'actress',
    img: 'https://i.tribune.com.pk/media/images/sonam-bajwa1694590947-0/sonam-bajwa1694590947-0.jpg',
    text: "Sonampreet Bajwa (born 16 August 1989), popularly known as Sonam Bajwa, is an Indian actress who predominantly works in Punjabi films. After participating in the 2012 Femina Miss India contest, Bajwa made her acting debut with the Punjabi film Best Of Luck (2013) and made her Tamil film debut with Kappal. Bajwa is a recipient of one PTC Punjabi Film Award.",
  },
  {
    id: 2,
    name: 'nirmal rishi',
    job: 'actress',
    img: 'https://i.ytimg.com/vi/KUN_ekY9auU/hq720.jpg?sqp=-oaymwEYCJUDENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLBZdcKnZY9Lxwwz-8jz3E6xzMdRlQ',
    text: 'Nirmal Rishi is an Indian Punjabi film and television actress. She is most remembered for her role as Gulabo Maasi in her first movie Long Da Lishkara (1983). She is best known for appearing in Punjabi movies like Nikka Zaildar, Nikka Zaildar 2, Long Da Lishkara and The Great Sardar.',
  },
  {
    id: 3,
    name: 'ammy virk',
    job: 'actor and singer',
    img: 'https://i.scdn.co/image/ab6761610000e5eb02711e80d568eae38449febb',
    text: 'Amrinderpal Singh Virk, better known as Ammy Virk, is an Indian singer, actor and producer associated with Punjabi Music and subsequently in Punjabi and Hindi films. He started the production house Villagers Film Studio and a distribution company In House Group. He is best known for playing the role of Nikka in Nikka Zaildar series, Shivjit in Qismat & Qismat 2, Harjeet Singh in Harjeeta, and Haakam in Angrej.',
  },
  {
    id: 4,
    name: 'binnu dhillon',
    job: 'comedian/actor',
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/542533_v9_aa.jpg',
    text: 'Binnu Dhillon (born 29 August 1975) is an Indian actor who is known for his roles in Punjabi cinema and Hindi films. He began his career as a Bhangra performer and had an opportunity to perform at the Indian Festivals in Germany and the UK, he appeared in television and serials before he entered the acting field.',
  },
  {
    id: 5,
    name: 'gurpreet ghuggi',
    job: 'actor and comedian',
    img: 'https://publicbiography.com/public/uploads/news-3979.webp',
    text: "Gurpreet Singh Waraich (born 19 June 1971), commonly known as Gurpreet Ghuggi, is an Indian actor, comedian and politician. He is known for his works in Punjabi and Hindi films. Ghuggi began his career by acting in theatre in the early 1990s, after which he had recurring roles in television series such as Ronak Mela and the soap opera Parchhaven.",
  },
  {
    id: 6,
    name: 'neeru bajwa',
    job: 'actress and director',
    img: 'https://www.koimoi.com/wp-content/new-galleries/2023/01/neeru-bajwa-never-wanted-to-get-married-thought-she-would-stay-single-forever-001.jpg',
    text: "Neeru Bajwa (born 26 August 1980) is a Canadian actress, director and producer who has mainly worked in Punjabi and Hindi films. She started her career in 1998 with Dev Anand's Bollywood film Main Solah Baras Ki and then moved on to working in Hindi soap operas and Punjabi-language films. Bajwa married Harry Jawandha on 8 February 2015.",
  },
  {
    id: 7,
    name: 'amrinder gill',
    job: 'actor and singer',
    img: 'https://yt3.googleusercontent.com/ytc/AIf8zZRTvSPkWDmz-aAVKtQ0TfJ8VkmuwDDIIKXZUgElzA=s900-c-k-c0x00ffffff-no-rj',
    text: "Amrinder Singh Gill (born 11 May 1976) is an Indian actor, singer, songwriter, and film producer who makes Punjabi-language films and music. He has been nominated for twenty-four PTC Punjabi Film Awards, winning seven including three for Best Actor, and two for Best Playback singer and has been nominated for five Filmfare Awards, winning two for Best Actor and Best Playback singer.",
  },
  {
    id: 8,
    name: 'simmi chahal',
    job: 'actress',
    img: 'https://i.ytimg.com/vi/rq7WRQij_KU/maxresdefault.jpg',
    text: "Born Simarpreet Kaur Chahal and hailing from Ambala, she first stepped into the entertainment industry in 2014 where she appeared in some Punjabi music videos.[2] After being discovered by talent scouts, she then went on to make her Punjabi film debut with the 2016 film Bambukat directed by Pankaj Batra and starred alongside Ammy Virk which was a success.",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const firstBtn = document.querySelector('.first-btn');
const lastBtn = document.querySelector('.last-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(); 
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
// show random person
randomBtn.addEventListener('click', function () {

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
// show first person
firstBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson();
});
// show last person
lastBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson();
});