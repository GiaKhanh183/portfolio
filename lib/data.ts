/* ============================================================
   EDIT ME. All your content lives in this one file.
   - Real image: put it in public/assets/<universe>/ and set
       image: "/assets/design/my-poster.jpg"
   - Leave image out to keep the colored placeholder.
   - hue (0-360) only changes the placeholder color.
   ============================================================ */
export interface Owner { name: string; initials: string; avatar?: string; tagline: string; intro: string; bio: string; email: string; resume: string; links: { label: string; url: string }[] }
export interface DesignProject { title: string; type: string; tools: string[]; blurb: string; problem: string; role: string; result: string; hue: number; image?: string; alt?: string; images?: string[]; instagram?: string }
export interface WebProject { name: string; title: string; summary: string; stack: string[]; demo: string; github: string }
export interface Photo { title: string; series: string; place?: string; ratio: string; hue: number; image?: string; alt?: string }
export interface Portfolio { owner: Owner; design: DesignProject[]; webdev: WebProject[]; photo: Photo[] }

export const portfolio: Portfolio = {
  owner: {
    name: "Gia Khanh Huynh",
    initials: "GK",
    avatar: "/assets/avatar.jpg",
    tagline: "Designer · Web Developer · Photographer",
    intro: "Three crafts, three universes. Every one of them is me.",
    bio: "I'm a USF Sophomore, Computer Science Major, who designs posters and social content, builds websites, and photographs campus events. I joined VISA at USF as a photographer, but when the team needed design work I didn't have those skills yet, so I learned Photoshop, Illustrator and Canva on the job. I'm coachable and I work hard to get better at whatever a role needs. I'm also currently learning InDesign, which I understand is mostly for text-heavy, multi-page layouts like newsletters, and I'm confident I'll pick it up quickly.",
    email: "giakhanhh@usf.edu",
    resume: "/assets/resume.pdf",         // put your PDF in public/assets/resume.pdf
    links: [
      { label: "LinkedIn",  url: "https://www.linkedin.com/in/gia-khanh-huynh-4b3834318/" },
      { label: "GitHub",    url: "https://github.com/GiaKhanh183" },
      { label: "Instagram", url: "https://www.instagram.com/h.gikaaa/" }
    ]
  },

  /* ---------- UNIVERSE 1 · DESIGN ---------- */
  design: [
    {
      title: "Land Your Internship with VISA",
      type: "Social media",
      tools: ["Photoshop", "Illustrator"],
      blurb: "Instagram carousel promoting two career events (Business Day and Engineering Day), styled as a browser window.",
      problem: "Students needed one clear, scannable post covering dates, speakers, sponsors and tabling orgs for two events.",
      role: "Concept, layout, typography, final artwork.",
      result: "A consistent carousel system: announcement, speakers and orgs, then an event recap with photos.",
      hue: 8,
      image: "/design/design1/slide-1.jpg",
      images: [1, 2, 3, 4, 5, 6].map(n => `/design/design1/slide-${n}.jpg`),
      instagram: "https://www.instagram.com/p/DeaZSySxUp9/",
      alt: "Instagram post titled Land Your Internship with VISA, with event dates for Business Day and Engineering Day"
    },
    {
      title: "Hop on the Plane",
      type: "Social media",
      tools: ["Canva"],
      blurb: "A 5-slide Instagram photo-dump carousel from a trip to Vietnam, built as a scrapbook collage with cut-out lettering, torn paper and photo strips.",
      problem: "Turn a pile of travel photos into a story that people keep swiping through.",
      role: "Concept, collage layout, typography, final artwork.",
      result: "A consistent scrapbook style across all five slides, with a clear opening slide and a personal closing slide.",
      hue: 30,
      image: "/design/design2/slide-2.jpg",
      images: [1, 2, 3, 4, 5].map(n => `/design/design2/slide-${n}.jpg`),
      alt: "Scrapbook-style Instagram slide with a night view of Ho Chi Minh City hall, food photos and fireworks",
      instagram: "https://www.instagram.com/p/Da4D05vEeNv/?img_index=1"
    },
    {
      title: "Tet Fair: Mãtopia",
      type: "Event poster",
      tools: ["Illustrator", "Photoshop"],
      blurb: "Poster for the Vietnamese Lunar New Year fair at USF (Year of the Horse), plus a matching set for the Beyond the Board fundraiser: event poster, drinks and snacks menu, and tarot reading prices. All share one game-board world of dice and chess pieces.",
      problem: "Make a cultural event stand out on campus while keeping date, venue and organizer clear.",
      role: "Concept, vector illustration, textures and color, typography.",
      result: "A bold, cohesive poster with one clear focal point and event details readable at a glance.",
      hue: 330,
      image: "/design/design3/poster-tet.jpg",
      images: ["/design/design3/poster-tet.jpg", ...[1, 2, 3].map(n => `/design/design3/fund-${n}.jpg`)],
      instagram: "https://www.instagram.com/p/DTys83aD23v/",
      alt: "Tet Fair Mãtopia poster with a horse outline, dice and a chess knight, MSC Ballroom"
    },
    {
      title: "Executives: The Compass",
      type: "Photo editing & typography",
      tools: ["Photoshop"],
      blurb: "A six-part team feature series for VISA (Executives, Human Resources, Professional Development, Marketing, Finance, Event). Each pairs a poolside photo with elegant script typography and a team nickname.",
      problem: "Introduce the executive team with a graphic that feels personal and stylish, not like a standard team photo.",
      role: "Photo retouching, color grading, typography and layout.",
      result: "A moody, editorial graphic where the title and the photo work together, ready for social media.",
      hue: 280,
      image: "/design/design4/slide-1.jpg",
      images: [1, 2, 3, 4, 5, 6].map(n => `/design/design4/slide-${n}.jpg`),
      instagram: "https://www.instagram.com/p/DZXpJfjkQiV/?img_index=1",
      alt: "Three VISA executives posing by a pool at golden hour, with the title Executives: The Compass in script type"
    },
    {
      title: "Shadow Program",
      type: "Recruitment poster",
      tools: ["Photoshop", "Illustrator"],
      blurb: "Recruitment graphic for the VISA Shadow Program, with glossy 3D-style balloon lettering on a grass and daisy background.",
      problem: "Get students to notice the call for applications and the deadline in a crowded feed.",
      role: "Concept, 3D-style typography, photo compositing, layout.",
      result: "A playful, high-contrast poster where the title pops and the deadline stays easy to find.",
      hue: 150,
      image: "/design/design5/design5.jpg",
      alt: "Shadow Program poster with yellow balloon-style lettering on grass with daisies, applications open until 30 August",
      instagram: "https://www.instagram.com/p/Db2ALSrzUrx/"
    }
  ],

  /* ---------- UNIVERSE 2 · WEB DEV ---------- */
  webdev: [
    {
      name: "visa-innovators",
      title: "VISA Innovators Website",
      summary: "Website for a Tampa community connecting Vietnamese students and professionals. I designed the UI/UX and built the frontend: events, membership, sponsors and RSVP links.",
      stack: ["Next.js", "UI/UX Design", "Responsive CSS"],
      demo: "https://visainnovators.org/",
      github: "https://github.com/Visa-at-USF"
    },
    {
      name: "tien-len-tournament",
      title: "Tien Len Tournament Event Page",
      summary: "A themed invitation page for a campus card-game tournament (MSC Ballroom, Nov 8), with an Oracle card draw and an RSVP button.",
      stack: ["Next.js", "Vercel", "Event page"],
      demo: "https://tlt5.vercel.app/",
      github: "https://github.com/GiaKhanh183/tienlentournament"
    }
  ],

  /* ---------- UNIVERSE 3 · PHOTOGRAPHY ---------- */
  photo: [
    ...[
      // [file, title, place, ratio]
      ["img-4330", "Live Performance", "", "3/2"],
      ["img-4346", "Solo Singer", "", "3/2"],
      ["img-4565-1", "On Stage", "", "3/2"],
      ["pmt07216", "Fishing Game", "", "16/9"],
      ["tlt-420", "Duet in Red", "Tien Len Tournament IV", "3/2"],
      ["tlt-421", "Two Voices", "Tien Len Tournament IV", "3/2"],
      ["tlt-425", "Showtime", "Tien Len Tournament IV", "2/3"],
      ["tlt-426", "Center Stage", "Tien Len Tournament IV", "2/3"],
      ["tlt-464", "Laughing Together", "Tien Len Tournament IV", "3/2"],
      ["tlt-466", "Host Moment", "Tien Len Tournament IV", "3/2"],
      ["tlt-467", "The Mic Is Yours", "Tien Len Tournament IV", "3/2"],
      ["tlt-468", "Final Three", "Tien Len Tournament IV", "3/2"],
      ["tlt-469", "Celebration", "Tien Len Tournament IV", "3/2"],
      ["tlt-476", "Applause", "Tien Len Tournament IV", "3/2"],
      ["tlt-477", "Prize Time", "Tien Len Tournament IV", "3/2"],
      ["tlt-478", "Thank You", "Tien Len Tournament IV", "3/2"]
    ].map(([f, title, place, ratio], i) => ({ title, series: "In Event", place, ratio, hue: 10 + i * 8, image: `/assets/photo/web/inevent-${f}.jpg`, alt: `${title}${place ? `, ${place}` : ""}` })),
    ...[
      ["dsc08251", "Moon Over the Library", "Library", "9/16"],
      ["engineering-71", "College of Education", "College of Education", "16/9"],
      ["engineering-72", "Marshall Student Center", "Marshall Student Center", "16/9"]
    ].map(([f, title, place, ratio], i) => ({ title, series: "On Campus", place, ratio, hue: 210 + i * 12, image: `/assets/photo/web/oncampus-${f}.jpg`, alt: `${title}, USF campus` })),
    ...[
      ["engineering-73", "Manhattan Skyline", "New York City", "16/9"],
      ["engineering-74", "Statue of Liberty", "New York City", "16/9"],
      ["engineering-75", "Cardozo Hotel", "Miami Beach", "16/9"],
      ["engineering-76", "Freedom Tower", "Miami", "9/16"],
      ["engineering-77", "Palm Walkway", "", "16/9"],
      ["engineering-78", "Palm Walkway, Vertical", "", "9/16"],
      ["img-1370", "Puppies", "", "3/2"],
      ["img-1413", "Mountain View", "", "3/2"],
      ["img-1532-2", "Night Sky", "", "3/2"],
      ["img-1542", "Waterfall", "", "2/3"],
      ["img-1579", "Bonfire", "", "3/2"]
    ].map(([f, title, place, ratio], i) => ({ title, series: "Off Campus", place, ratio, hue: 150 + i * 10, image: `/assets/photo/web/offcampus-${f}.jpg`, alt: `${title}${place ? `, ${place}` : ""}` }))
  ]
};
