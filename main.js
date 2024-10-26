const testimonials = [
  {
    text: `"I have been studying Japanese with Miyuki sensei now for over 7 years and improved immensely. I have passed JLPT tests and have reached upper intermediate level with her help. She is patient and very knowledgeable. Be prepared to work hard and you too will be very satisfied with your advancement in a very difficult language. She also makes it fun. Highly recommended!"`,
    author: "Raymond G",
  },
  {
    text: `"Miyuki is a conscientious, flexible, and confidence-building Japanese teacher. I have been getting lessons from Miyuki roughly every Saturday since January 2019, and my Japanese has improved to roughly fluent as a result. As a native Japanese speaker, her Japanese is perfect, but her English is also quite good, and she will happily explain concepts in English if I'm not understanding the Japanese. I would recommend Miyuki if you are looking for an affordable but still native-quality Japanese teacher."`,
    author: "James R",
  },
  {
    text: `"Miyuki-san is a great Japanese conversation partner! I had studied with her for an extended period of time and am happy to say we’ve also become friends since then and continue to stay in touch. It’s great to have your tutor be someone who has a great sense of humor and can gear the study towards your interests. I highly recommend Miyuki-san!"`,
    author: "Hannah H",
  },
  {
    text: `"I have been taking classes with Miyuki for a few years now. She is a fantastic teacher, who is patient, knowledgeable, and very effective at explaining complicated grammar points. Japanese is a tough language, and there is no substitute for an experienced native speaker instructor. Miyuki's classes helped me dramatically improve my listening comprehension skills as well as the overall understanding of Japanese grammar."`,
    author: "Mykola K",
  },
  {
    text: `"I took beginner Japanese lessons from Miyuki. Since she is native to Japan, her language and communication skills are excellent. I also found her to be very patient and willing to teach. She always answered my questions with a smile and has such a great, positive personality. I highly recommend her to anyone wishing to improve their Nihongo."`,
    author: "Chris G",
  },
  {
    text: `"I began working with Miyuki a year ago -- back then I knew a few words of Japanese and could form basic sentences, but couldn't really understand conversation. Now after a year of weekly lessons, I can understand like 95% of her Japanese conversation, and can make myself understood in return. There is no substitute for these kinds of immersion lessons, and when the teacher is engaging, interesting and fun the way Miyuki is, you can't help but look forward to your weekly hour of Japanese. I really appreciate how there's no stressful pressure (switching to English is always fine), and learning about Japanese people and culture makes it about more than just the language. Very chill teacher, very organized, professional but relaxed, and a cozy learning environment. Highly recommended!"`,
    author: "Eric W",
  },
  {
    text: `"Miyuki is well prepared, thoughtful and creative in teaching Japanese lessons. Her teaching is patient, welcoming and willing to adapt to my learning style."`,
    author: "Craig A",
  },
  {
    text: `"Miyuki is an excellent instructor, both patient and thorough. She does a great job of breaking down and explaining the nuances of the Japanese language so that you fully understand what it is that you're saying, rather than just repeating phrases. Reviewing sections, when necessary, was never an issue, and I really felt like I was able to learn at my own pace."`,
    author: "James M",
  },
  {
    text: `"I really appreciated having a relaxed way to practice using some Japanese conversationally. It really helped me remember things for my class. Also, it was rather fun!"`,
    author: "Heather L",
  },
  {
    text: `"When I first met Miyuki, I could only talk about my family and the weather. Now, a few years later, I can talk about many subjects and read books in Japanese. I think Miyuki is a kind and very good teacher. I recommend her! 初めてみゆきに会った時は家族と天気についてしか話せませんでした。何年か後の今は多くの話題について話せて、日本語で本を読めることになりました。みゆきは優しくてとても良い先生だと思います。おすすめです！"`,
    author: "Patrick C",
  },
  {
    text: `"I highly recommend Miyuki Motomura as a Japanese teacher/tutor. She is engaging and committed to helping her students build a deeper understanding of Japanese. Despite the ongoing pandemic, I have been taking lessons from her every week and she is able to teach via Zoom very easily and effectively. Miyuki's teaching approach is both fun and innovative, keeping the student's interest and making Japanese comprehension the focus of the enjoyable lesson. One of the standout qualities is her ability to teach various dialects from different regions, adding an extra element of excitement to learning Japanese. If you're in need of a Japanese teacher/tutor, Miyuki is the one I recommend."`,
    author: "Anthony D",
  },
  {
    text: `"I’ve been taking lessons with Miyuki for about a year now, and I can definitely say that my Japanese improved! She is easy to talk to, flexible with scheduling, and can answer all my questions about Japanese grammar. I highly recommend Miyuki-san! I am VERY happy that I have met Miyuki. Miyuki-san is a kind teacher! Thank you! みゆきに出会えたのはとてもうれしかった。みゆきさんはとても優しい先生！ありがとう！"`,
    author: "Alice H",
  },
  {
    text: `"Miyuki is an excellent teacher. We studied remotely using Zoom and a textbook for two years during the COVID pandemic. She really helped me, especially with pronunciation and vocabulary."`,
    author: "Danielle",
  },
];

let testimonialsPerPage = 3; 
let currentIndex = 0;

function renderTestimonials() {
  const testimonialList = document.getElementById("testimonial-list");

  const nextTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  nextTestimonials.forEach((testimonial) => {
    const div = document.createElement("div");
    div.className = "testimonial";
    div.innerHTML = `
      <p>${testimonial.text}</p>
      <p><b>- ${testimonial.author}</b></p>
    `;
    testimonialList.appendChild(div);
  });

  currentIndex += testimonialsPerPage;

  if (currentIndex >= testimonials.length) {
    document.getElementById("load-more").style.display = "none";
  }
}

document.getElementById("load-more").addEventListener("click", () => {
  renderTestimonials();
});

// Initial render
renderTestimonials();
