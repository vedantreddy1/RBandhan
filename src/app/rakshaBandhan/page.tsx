
// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// type Sister = {
//   name: string;
//   emoji: string;
//   nickname: string;
//   message: string;
//   photo?: string;
// };

// const sisters: Sister[] = [
//   {
//     name: "Milli",
//     emoji: "🌸",
//     nickname: "My Partner in Crime",
//     message:
//       "No matter how much we fight, tease each other, or disagree about absolutely nothing, you will always have a special place in my heart. I'm lucky to have you as my sister.",
//   },
//   {
//     name: "Chunnnnu",
//     emoji: "🌷",
//     nickname: "The One Who Knows Too Much 😂",
//     message:
//       "You've seen so many versions of me and somehow you're still here. Thank you for the laughs, advice, arguments, and all the memories we've collected together.",
//   },
//   {
//     name: "Drashtiii",
//     emoji: "🌺",
//     nickname: "Our Little Chaos Creator",
//     message:
//       "Life would honestly be much more boring without you. Thank you for being exactly who you are and for making our family a little crazier and a lot happier.",
//   },
// ];

// const memories = [
//   {
//     emoji: "📸",
//     title: "The Old Days",
//     text: "Before we knew how quickly time would fly.",
//   },
//   {
//     emoji: "😂",
//     title: "The Crazy Days",
//     text: "The stories we probably shouldn't tell anyone.",
//   },
//   {
//     emoji: "❤️",
//     title: "The Best Days",
//     text: "The moments I'll always remember.",
//   },
// ];

// const floatingItems = ["🌸", "✨", "🪷", "💗", "🌺", "✨"];

// export default function RakshaBandhanPage() {
//   const [started, setStarted] = useState(false);
//   const [selectedSister, setSelectedSister] = useState<Sister | null>(null);
//   const [surprise, setSurprise] = useState(false);
//   const [musicOn, setMusicOn] = useState(false);

//   /*
//    * Replace this with your own hosted audio file later.
//    *
//    * Example:
//    * const MUSIC_URL = "/music/raksha-bandhan.mp3";
//    */
//   const MUSIC_URL = "";

//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     if (!MUSIC_URL || typeof window === "undefined") return;

//     const newAudio = new Audio(MUSIC_URL);
//     newAudio.loop = true;
//     newAudio.volume = 0.35;

//     setAudio(newAudio);

//     return () => {
//       newAudio.pause();
//     };
//   }, []);

//   const toggleMusic = async () => {
//     if (!audio) {
//       setMusicOn((prev) => !prev);
//       return;
//     }

//     if (musicOn) {
//       audio.pause();
//       setMusicOn(false);
//     } else {
//       try {
//         await audio.play();
//         setMusicOn(true);
//       } catch {
//         console.log("Music could not be played.");
//       }
//     }
//   };

//   const openGift = () => {
//     setStarted(true);

//     setTimeout(() => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }, 100);
//   };

//   return (
//     <main className="min-h-screen w-full overflow-x-hidden bg-[#fff9f6] text-[#3d2930]">
//       {/* =====================================================
//           MUSIC BUTTON
//       ====================================================== */}

//       {started && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           onClick={toggleMusic}
//           aria-label="Toggle music"
//           className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/80 text-lg shadow-lg backdrop-blur-md"
//         >
//           {musicOn ? "🎵" : "🔇"}
//         </motion.button>
//       )}

//       {/* =====================================================
//           FLOATING DECORATIONS
//       ====================================================== */}

//       <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
//         {floatingItems.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{
//               opacity: 0,
//               y: 50,
//             }}
//             animate={{
//               opacity: [0, 0.45, 0],
//               y: [-20, -120, -220],
//               x: index % 2 === 0 ? [0, 15, -10] : [0, -15, 10],
//             }}
//             transition={{
//               duration: 8 + index,
//               repeat: Infinity,
//               delay: index * 1.2,
//               ease: "easeInOut",
//             }}
//             className="absolute bottom-0 text-xl"
//             style={{
//               left: `${10 + index * 16}%`,
//             }}
//           >
//             {item}
//           </motion.div>
//         ))}
//       </div>

//       <AnimatePresence mode="wait">
//         {!started ? (
//           /* =====================================================
//              INTRO SCREEN
//           ====================================================== */

//           <motion.section
//             key="intro"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 0.98,
//             }}
//             className="relative flex min-h-[100svh] items-center justify-center px-5"
//           >
//             <div className="relative z-10 w-full max-w-md text-center">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.5,
//                   rotate: -15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   rotate: 0,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 150,
//                   damping: 12,
//                 }}
//                 className="mb-8 text-7xl"
//               >
//                 🪢
//               </motion.div>

//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b76d77]"
//               >
//                 A Little Something For You Three
//               </motion.p>

//               <motion.h1
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{ delay: 0.45 }}
//                 className="mt-5 text-[42px] font-bold leading-[1.05] tracking-tight"
//               >
//                 I Could Have Just Said
//                 <span className="mt-2 block text-[#b76d77]">
//                   Happy Raksha Bandhan
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{ delay: 0.65 }}
//                 className="mx-auto mt-7 max-w-[320px] text-[16px] leading-7 text-[#80676d]"
//               >
//                 But three amazing sisters deserve something a little more
//                 special.
//               </motion.p>

//               <motion.button
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{ delay: 0.9 }}
//                 whileTap={{ scale: 0.96 }}
//                 onClick={openGift}
//                 className="mt-9 min-h-[54px] w-full rounded-full bg-[#b76d77] px-7 text-[16px] font-semibold text-white shadow-xl shadow-[#b76d77]/20"
//               >
//                 Open Your Gift
//                 <span className="ml-2">✨</span>
//               </motion.button>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2 }}
//                 className="mt-6 text-xs text-[#aa9195]"
//               >
//                 Made with love, from your brother ❤️
//               </motion.p>
//             </div>
//           </motion.section>
//         ) : (
//           /* =====================================================
//              MAIN EXPERIENCE
//           ====================================================== */

//           <motion.div
//             key="experience"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="relative z-10"
//           >
//             {/* =================================================
//                 HERO
//             ================================================== */}

//             <section className="flex min-h-[100svh] items-center px-5 py-20">
//               <div className="mx-auto w-full max-w-md text-center">
//                 <motion.div
//                   initial={{
//                     scale: 0,
//                     rotate: -20,
//                   }}
//                   animate={{
//                     scale: 1,
//                     rotate: 0,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 140,
//                   }}
//                   className="text-6xl"
//                 >
//                   ❤️
//                 </motion.div>

//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.25 }}
//                   className="mt-7 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b76d77]"
//                 >
//                   Raksha Bandhan • 2026
//                 </motion.p>

//                 <motion.h2
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{ delay: 0.4 }}
//                   className="mt-4 text-[44px] font-bold leading-[1.05] tracking-tight"
//                 >
//                   For My
//                   <span className="block text-[#b76d77]">
//                     Three Sisters
//                   </span>
//                 </motion.h2>

//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="mx-auto mt-7 max-w-[330px] text-[16px] leading-7 text-[#80676d]"
//                 >
//                   Three different personalities.
//                   <br />
//                   Three different kinds of madness.
//                   <br />
//                   One very lucky brother.
//                 </motion.p>

//                 <motion.div
//                   animate={{
//                     y: [0, 7, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                   className="mt-10 text-sm text-[#bda8ac]"
//                 >
//                   ↓
//                 </motion.div>
//               </div>
//             </section>

//             {/* =================================================
//                 SISTERS
//             ================================================== */}

//             <section className="px-5 pb-24">
//               <div className="mx-auto w-full max-w-md">
//                 <div className="mb-8">
//                   <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b76d77]">
//                     One by one
//                   </p>

//                   <h2 className="mt-3 text-3xl font-bold">
//                     This part is for you.
//                   </h2>
//                 </div>

//                 <div className="space-y-5">
//                   {sisters.map((sister, index) => (
//                     <motion.button
//                       key={sister.name}
//                       initial={{
//                         opacity: 0,
//                         y: 35,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                         amount: 0.2,
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         delay: index * 0.1,
//                       }}
//                       whileTap={{
//                         scale: 0.98,
//                       }}
//                       onClick={() => setSelectedSister(sister)}
//                       className="w-full rounded-[28px] border border-[#eadbd7] bg-white p-6 text-left shadow-[0_15px_50px_rgba(100,60,60,0.06)]"
//                     >
//                       <div className="flex items-center gap-5">
//                         <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-[#fff0ed] text-4xl">
//                           {sister.emoji}
//                         </div>

//                         <div className="min-w-0 flex-1">
//                           <p className="text-xl font-bold">
//                             {sister.name}
//                           </p>

//                           <p className="mt-1 text-sm text-[#b76d77]">
//                             {sister.nickname}
//                           </p>

//                           <p className="mt-2 text-xs text-[#927b80]">
//                             Tap to open your message →
//                           </p>
//                         </div>
//                       </div>
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* =================================================
//                 MEMORIES
//             ================================================== */}

//             <section className="bg-[#3d2930] px-5 py-24 text-white">
//               <div className="mx-auto w-full max-w-md">
//                 <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#e8b9b7]">
//                   Our Story
//                 </p>

//                 <h2 className="mt-4 text-4xl font-bold leading-tight">
//                   A lifetime of
//                   <span className="block text-[#e8b9b7]">
//                     memories.
//                   </span>
//                 </h2>

//                 <p className="mt-6 text-[15px] leading-7 text-white/60">
//                   From childhood fights to ridiculous family moments, we've
//                   collected a lot of stories together.
//                 </p>

//                 <div className="mt-10 space-y-5">
//                   {memories.map((memory, index) => (
//                     <motion.div
//                       key={memory.title}
//                       initial={{
//                         opacity: 0,
//                         x: index % 2 === 0 ? -25 : 25,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                         amount: 0.2,
//                       }}
//                       className="overflow-hidden rounded-[26px] border border-white/10 bg-white/5"
//                     >
//                       {/* Photo placeholder */}
//                       <div className="flex h-[220px] items-center justify-center bg-white/10 text-7xl">
//                         {memory.emoji}
//                       </div>

//                       <div className="p-6">
//                         <h3 className="text-xl font-bold">
//                           {memory.title}
//                         </h3>

//                         <p className="mt-2 text-sm leading-6 text-white/60">
//                           {memory.text}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <p className="mt-7 text-center text-xs text-white/30">
//                   Replace these with your actual photos 📸
//                 </p>
//               </div>
//             </section>

//             {/* =================================================
//                 LETTER
//             ================================================== */}

//             <section className="px-5 py-24">
//               <div className="mx-auto w-full max-w-md">
//                 <div className="text-center">
//                   <div className="text-5xl">💌</div>

//                   <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.25em] text-[#b76d77]">
//                     From Me To You
//                   </p>

//                   <h2 className="mt-4 text-3xl font-bold">
//                     Something I don't say enough.
//                   </h2>
//                 </div>

//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     y: 30,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   className="relative mt-10 rounded-[28px] border border-[#eadbd7] bg-white p-7 shadow-[0_20px_60px_rgba(100,60,60,0.07)]"
//                 >
//                   <div className="absolute right-5 top-5 text-2xl opacity-40">
//                     🌸
//                   </div>

//                   <p className="font-serif text-lg text-[#5e484e]">
//                     Dear you three,
//                   </p>

//                   <p className="mt-6 font-serif text-[17px] leading-8 text-[#80676d]">
//                     We may annoy each other, argue over the smallest things,
//                     steal food and make fun of each other way too much...
//                   </p>

//                   <p className="mt-5 font-serif text-[17px] leading-8 text-[#80676d]">
//                     But underneath all of that, I hope you know how much you
//                     mean to me.
//                   </p>

//                   <p className="mt-5 font-serif text-[17px] leading-8 text-[#80676d]">
//                     Having three sisters means having three people who will
//                     always be part of my story.
//                   </p>

//                   <p className="mt-5 font-serif text-[17px] leading-8 text-[#80676d]">
//                     And honestly...
//                     <br />
//                     I wouldn't change that for anything.
//                   </p>

//                   <div className="my-7 h-px bg-[#eadbd7]" />

//                   <p className="font-serif text-xl font-semibold text-[#b76d77]">
//                     Love you three.
//                     <br />
//                     Always. ❤️
//                   </p>
//                 </motion.div>
//               </div>
//             </section>

//             {/* =================================================
//                 FINAL SURPRISE
//             ================================================== */}

//             <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#fff0ed] px-5 py-24">
//               <div className="relative z-20 w-full max-w-md text-center">
//                 {!surprise ? (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: 30,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                   >
//                     <div className="text-7xl">🎀</div>

//                     <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b76d77]">
//                       Before You Go
//                     </p>

//                     <h2 className="mt-4 text-4xl font-bold leading-tight">
//                       One last thing...
//                     </h2>

//                     <p className="mt-5 text-[15px] leading-7 text-[#80676d]">
//                       Okay.
//                       <br />
//                       This is officially the cheesy part.
//                     </p>

//                     <motion.button
//                       whileTap={{
//                         scale: 0.95,
//                       }}
//                       onClick={() => setSurprise(true)}
//                       className="mt-9 min-h-[56px] w-full rounded-full bg-[#b76d77] px-8 text-[16px] font-semibold text-white shadow-xl shadow-[#b76d77]/20"
//                     >
//                       Don't Click This 👀
//                     </motion.button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.7,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 100,
//                       damping: 12,
//                     }}
//                   >
//                     {/* Celebration particles */}
//                     <div className="pointer-events-none fixed inset-0 z-10">
//                       {Array.from({ length: 25 }).map((_, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{
//                             opacity: 0,
//                             x: 0,
//                             y: 0,
//                           }}
//                           animate={{
//                             opacity: [0, 1, 0],
//                             x:
//                               (Math.random() - 0.5) *
//                               window.innerWidth,
//                             y:
//                               -Math.random() *
//                                 window.innerHeight *
//                                 0.7 -
//                               100,
//                             rotate: Math.random() * 360,
//                           }}
//                           transition={{
//                             duration: 3,
//                             delay: Math.random() * 1.5,
//                             ease: "easeOut",
//                           }}
//                           className="absolute left-1/2 top-[65%] text-xl"
//                         >
//                           {["❤️", "🌸", "✨", "💗", "🪷"][
//                             index % 5
//                           ]}
//                         </motion.div>
//                       ))}
//                     </div>

//                     <motion.div
//                       animate={{
//                         scale: [1, 1.1, 1],
//                       }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                       }}
//                       className="relative z-20 text-7xl"
//                     >
//                       ❤️
//                     </motion.div>

//                     <h2 className="relative z-20 mt-8 text-[46px] font-bold leading-[1.05]">
//                       Happy Raksha
//                       <span className="block text-[#b76d77]">
//                         Bandhan!
//                       </span>
//                     </h2>

//                     <p className="relative z-20 mx-auto mt-7 max-w-[330px] text-[16px] leading-7 text-[#80676d]">
//                       No matter how old we get, how far we go, or how much we
//                       fight...
//                     </p>

//                     <p className="relative z-20 mt-5 text-xl font-semibold">
//                       I'll always be your brother. 🫶
//                     </p>

//                     <div className="relative z-20 mt-10 text-3xl">
//                       🌸 🪷 🌸 🪷 🌸
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </section>

//             {/* =================================================
//                 FOOTER
//             ================================================== */}

//             <footer className="bg-[#3d2930] px-5 py-10 text-center">
//               <p className="text-sm text-white/50">
//                 Made with ❤️
//               </p>

//               <p className="mt-2 text-xs text-white/30">
//                 For the three people who make life better.
//               </p>
//             </footer>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* =====================================================
//           SISTER MESSAGE MODAL
//       ====================================================== */}

//       <AnimatePresence>
//         {selectedSister && (
//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm sm:items-center"
//             onClick={() => setSelectedSister(null)}
//           >
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 100,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: 100,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 28,
//               }}
//               onClick={(event) => event.stopPropagation()}
//               className="relative w-full max-w-md rounded-[30px] bg-[#fffaf8] p-7 shadow-2xl"
//             >
//               {/* Close */}
//               <button
//                 onClick={() => setSelectedSister(null)}
//                 aria-label="Close message"
//                 className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e9e6] text-xl text-[#80676d]"
//               >
//                 ×
//               </button>

//               <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#fff0ed] text-5xl">
//                 {selectedSister.emoji}
//               </div>

//               <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#b76d77]">
//                 Just For You
//               </p>

//               <h3 className="mt-2 pr-10 text-3xl font-bold">
//                 Hey, {selectedSister.name} ❤️
//               </h3>

//               <p className="mt-2 text-sm font-medium text-[#b76d77]">
//                 {selectedSister.nickname}
//               </p>

//               <p className="mt-7 text-[16px] leading-8 text-[#80676d]">
//                 {selectedSister.message}
//               </p>

//               <div className="mt-8 rounded-2xl bg-[#fff0ed] p-5 text-center">
//                 <p className="text-xs font-bold uppercase tracking-wider text-[#b76d77]">
//                   Official Sister Rating
//                 </p>

//                 <p className="mt-2 text-2xl">
//                   ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
//                 </p>

//                 <p className="mt-2 text-xs text-[#927b80]">
//                   No refunds. No exchanges. 😂
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedSister(null)}
//                 className="mt-5 min-h-[52px] w-full rounded-full bg-[#3d2930] font-semibold text-white"
//               >
//                 Keep This Secret 🤫
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }


"use client";


import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Sister = {
  name: string;
  emoji: string;
  nickname: string;
  message: string;
  photo?: string;
};

const sisters: Sister[] = [
  {
    name: "Milli",
    emoji: "🌸",
    nickname: "My Partner in Crime",
    photo: "/Mili.jpeg",
    message:
      "No matter how much we fight, tease each other, or disagree about absolutely nothing, you will always have a special place in my heart. I'm lucky to have you as my sister.",
  },
  {
    name: "Chunnnnu",
    emoji: "🌷",
    nickname: "The One Who Knows Too Much 😂",
    photo: "/Chunnu.jpeg",
    message:
      "You've seen so many versions of me and somehow you're still here. Thank you for the laughs, advice, arguments, and all the memories we've collected together.",
  },
  {
    name: "Drashtiii",
    emoji: "🌺",
    nickname: "Our Little Chaos Creator",
    photo: "/Drashti.jpeg",
    message:
      "Life would honestly be much more boring without you. Thank you for being exactly who you are and for making our family a little crazier and a lot happier.",
  },
];

const memories = [
  {
    emoji: "📸",
    title: "The Old Days",
    text: "Before we knew how quickly time would fly.",
    photo: "/miliDrashti.jpeg",
  },
  {
    emoji: "😂",
    title: "The Crazy Days",
    text: "The stories we probably shouldn't tell anyone.",
    photo: "/SoumyaDrashti.jpeg",
  },
  {
    emoji: "❤️",
    title: "The Best Days",
    text: "The moments I'll always remember.",
    photo: "/Chunnu2.jpeg",
  },
];

const floatingItems = ["🌸", "✨", "🪷", "💗", "🌺", "✨"];

export default function RakshaBandhanPage() {
  const [started, setStarted] = useState(false);
  const [selectedSister, setSelectedSister] = useState<Sister | null>(null);
  const [surprise, setSurprise] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  /*
   * Replace this with your own hosted audio file later.
   *
   * Example:
   * const MUSIC_URL = "/music/raksha-bandhan.mp3";
   */
  const MUSIC_URL = "YoMusic.mpeg";

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!MUSIC_URL || typeof window === "undefined") return;

    const newAudio = new Audio(MUSIC_URL);
    newAudio.loop = true;
    newAudio.volume = 0.35;

    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    if (!audio) {
      setMusicOn((prev) => !prev);
      return;
    }

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
    } else {
      try {
        await audio.play();
        setMusicOn(true);
      } catch {
        console.log("Music could not be played.");
      }
    }
  };

  const openGift =async () => {
    setStarted(true);
  if (audio) {
    try {
      await audio.play();
      setMusicOn(true);
    } catch {
      setMusicOn(false);
      console.log("Music could not be started automatically.");
    }
  }
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#fff9f6] text-[#3d2930]">
      {/* =====================================================
          MUSIC BUTTON
      ====================================================== */}

      {started && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={toggleMusic}
          aria-label="Toggle music"
          className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/80 text-lg shadow-lg backdrop-blur-md"
        >
          {musicOn ? "🎵" : "🔇"}
        </motion.button>
      )}

      {/* =====================================================
          FLOATING DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: [0, 0.45, 0],
              y: [-20, -120, -220],
              x: index % 2 === 0 ? [0, 15, -10] : [0, -15, 10],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              delay: index * 1.2,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 text-xl"
            style={{
              left: `${10 + index * 16}%`,
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!started ? (
          /* =====================================================
             INTRO SCREEN
          ====================================================== */

          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            className="relative flex min-h-[100svh] items-center justify-center px-5"
          >
            <div className="relative z-10 w-full max-w-md text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
                className="mb-8 text-7xl"
              >
                🪢
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.3 }}
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b76d77]"
              >
                A Little Something For You Three
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.45 }}
                className="mt-5 text-[42px] font-bold leading-[1.05] tracking-tight"
              >
                I Could Have Just Said
                <span className="mt-2 block text-[#b76d77]">
                  Happy Raksha Bandhan
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.65 }}
                className="mx-auto mt-7 max-w-[320px] text-[16px] leading-7 text-[#80676d]"
              >
                But three amazing sisters deserve something a little more
                special.
              </motion.p>

              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.9 }}
                whileTap={{ scale: 0.96 }}
                onClick={openGift}
                className="mt-9 min-h-[54px] w-full rounded-full bg-[#b76d77] px-7 text-[16px] font-semibold text-white shadow-xl shadow-[#b76d77]/20"
              >
                Open Your Gift
                <span className="ml-2">✨</span>
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 text-xs text-[#aa9195]"
              >
                Made with love, from your brother ❤️
              </motion.p>
            </div>
          </motion.section>
        ) : (
          /* =====================================================
             MAIN EXPERIENCE
          ====================================================== */

          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            {/* =================================================
                HERO
            ================================================== */}

            <section className="flex min-h-[100svh] items-center px-5 py-20">
              <div className="mx-auto w-full max-w-md text-center">
                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -20,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                  }}
                  className="text-6xl"
                >
                  ❤️
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="mt-7 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b76d77]"
                >
                  Raksha Bandhan • 2026
                </motion.p>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-[44px] font-bold leading-[1.05] tracking-tight"
                >
                  For My
                  <span className="block text-[#b76d77]">Three Sisters</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mx-auto mt-7 max-w-[330px] text-[16px] leading-7 text-[#80676d]"
                >
                  Three different personalities.
                  <br />
                  Three different kinds of madness.
                  <br />
                  One very lucky brother.
                </motion.p>

                <motion.div
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="mt-10 text-sm text-[#bda8ac]"
                >
                  ↓
                </motion.div>
              </div>
            </section>

            {/* =================================================
                SISTERS
            ================================================== */}

            <section className="px-5 pb-24">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b76d77]">
                    One by one
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    This part is for you.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#927b80]">
                    Three photos. Three memories. One very special family.
                  </p>
                </div>

                <div className="space-y-7">
                  {sisters.map((sister, index) => (
                    <motion.button
                      key={sister.name}
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() => setSelectedSister(sister)}
                      className="w-full overflow-hidden rounded-[30px] border border-[#eadbd7] bg-white text-left shadow-[0_15px_50px_rgba(100,60,60,0.08)]"
                    >
                      {/* SISTER PHOTO HOLDER */}
                      <div className="relative h-[300px] w-full overflow-hidden bg-[#fff0ed]">
                        {sister.photo ? (
                          <img
                            src={sister.photo}
                            alt={`${sister.name}'s photo`}
                            className="h-full w-full object-contain transition-transform duration-700 hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center text-[#b76d77]">
                            <span className="text-7xl">{sister.emoji}</span>
                            <span className="mt-3 text-sm font-medium">
                              Add {sister.name}'s photo
                            </span>
                          </div>
                        )}

                        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-[#b76d77] shadow-lg">
                          {index + 1}
                        </div>

                        <div className="absolute bottom-5 left-5 right-5">
                          <p className="text-2xl font-bold text-white drop-shadow-md">
                            {sister.name}
                          </p>
                        </div>
                      </div>

                      {/* SISTER CARD CONTENT */}
                      <div className="p-6">
                        <p className="text-sm font-semibold text-[#b76d77]">
                          {sister.nickname}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-[#927b80]">
                          A little message is waiting especially for you...
                        </p>

                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-xs font-medium text-[#aa9195]">
                            Tap to open your message
                          </span>

                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0ed] text-lg text-[#b76d77]">
                            →
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </section>

            {/* =================================================
                MEMORIES
            ================================================== */}

            <section className="bg-[#3d2930] px-5 py-24 text-white">
              <div className="mx-auto w-full max-w-md">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#e8b9b7]">
                  Our Story
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight">
                  A lifetime of
                  <span className="block text-[#e8b9b7]">memories.</span>
                </h2>

                <p className="mt-6 text-[15px] leading-7 text-white/60">
                  From childhood fights to ridiculous family moments, we've
                  collected a lot of stories together.
                </p>

                <div className="mt-10 space-y-7">
                  {memories.map((memory, index) => (
                    <motion.div
                      key={memory.title}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -25 : 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      className="overflow-hidden rounded-[26px] border border-white/10 bg-white/5"
                    >
                      {/* MEMORY PHOTO HOLDER */}
                      <div className="relative h-[240px] w-full overflow-hidden bg-white/10">
                        {memory.photo ? (
                          <img
                            src={memory.photo}
                            alt={memory.title}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center">
                            <span className="text-7xl">{memory.emoji}</span>
                            <span className="mt-3 text-sm text-white/50">
                              Add a memory photo
                            </span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/10" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold">{memory.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-white/60">
                          {memory.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-7 text-center text-xs text-white/30">
                  Replace these with your actual photos 📸
                </p>
              </div>
            </section>

            {/* =================================================
                LETTER
            ================================================== */}

            <section className="px-5 py-24">
              <div className="mx-auto w-full max-w-md">
                <div className="text-center">
                  <div className="text-5xl">💌</div>

                  <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.25em] text-[#b76d77]">
                    From Me To You
                  </p>

                  <h2 className="mt-4 text-3xl font-bold">
                    Something I don't say enough.
                  </h2>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="relative mt-10 rounded-[28px] border border-[#eadbd7] bg-white p-7 shadow-[0_20px_60px_rgba(100,60,60,0.07)]"
                >
                  <div className="absolute right-5 top-5 text-2xl opacity-40">
                    🌸
                  </div>

                  <p className="font-serif text-lg text-[#5e484e]">
                    Dear you three,
                  </p>

                  <p className="mt-6 font-serif text-[17px] leading-8 text-[#80676d]">
                    We may annoy each other, argue over the smallest things,
                    steal food and make fun of each other way too much...
                  </p>

                  <p className="mt-5 font-serif text-[17px] leading-8 text-[#80676d]">
                    But underneath all of that, I hope you know how much you
                    mean to me.
                  </p>

                  <p className="mt-5 font-serif text-[17px] leading-8 text-[#80676d]">
                    Having three sisters means having three people who will
                    always be part of my story.
                  </p>

                  <p className="mt-5 font-serif text-[17px] leading-8 text-[#80676d]">
                    And honestly...
                    <br />I wouldn't change that for anything.
                  </p>

                  <div className="my-7 h-px bg-[#eadbd7]" />

                  <p className="font-serif text-xl font-semibold text-[#b76d77]">
                    Love you three.
                    <br />
                    Always. ❤️
                  </p>
                </motion.div>
              </div>
            </section>

            {/* =================================================
                FINAL SURPRISE
            ================================================== */}

            <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#fff0ed] px-5 py-24">
              <div className="relative z-20 w-full max-w-md text-center">
                {!surprise ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="text-7xl">🎀</div>

                    <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b76d77]">
                      Before You Go
                    </p>

                    <h2 className="mt-4 text-4xl font-bold leading-tight">
                      One last thing...
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#80676d]">
                      Okay.
                      <br />
                      This is officially the cheesy part.
                    </p>

                    <motion.button
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() => setSurprise(true)}
                      className="mt-9 min-h-[56px] w-full rounded-full bg-[#b76d77] px-8 text-[16px] font-semibold text-white shadow-xl shadow-[#b76d77]/20"
                    >
                      Don't Click This 👀
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                    }}
                  >
                    {/* Celebration particles */}
                    <div className="pointer-events-none fixed inset-0 z-10">
                      {Array.from({ length: 25 }).map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            x: (Math.random() - 0.5) * window.innerWidth,
                            y: -Math.random() * window.innerHeight * 0.7 - 100,
                            rotate: Math.random() * 360,
                          }}
                          transition={{
                            duration: 3,
                            delay: Math.random() * 1.5,
                            ease: "easeOut",
                          }}
                          className="absolute left-1/2 top-[65%] text-xl"
                        >
                          {["❤️", "🌸", "✨", "💗", "🪷"][index % 5]}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="relative z-20 text-7xl"
                    >
                      ❤️
                    </motion.div>

                    <h2 className="relative z-20 mt-8 text-[46px] font-bold leading-[1.05]">
                      Happy Raksha
                      <span className="block text-[#b76d77]">Bandhan!</span>
                    </h2>

                    <p className="relative z-20 mx-auto mt-7 max-w-[330px] text-[16px] leading-7 text-[#80676d]">
                      No matter how old we get, how far we go, or how much we
                      fight...
                    </p>

                    <p className="relative z-20 mt-5 text-xl font-semibold">
                      I'll always be your brother. 🫶
                    </p>

                    <div className="relative z-20 mt-10 text-3xl">
                      🌸 🪷 🌸 🪷 🌸
                    </div>
                  </motion.div>
                )}
              </div>
            </section>

            {/* =================================================
                FOOTER
            ================================================== */}

            <footer className="bg-[#3d2930] px-5 py-10 text-center">
              <p className="text-sm text-white/50">Made with ❤️</p>

              <p className="mt-2 text-xs text-white/30">
                For the three people who make life better.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          SISTER MESSAGE MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedSister && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm sm:items-center"
            onClick={() => setSelectedSister(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 100,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90svh] w-full max-w-md overflow-y-auto rounded-[30px] bg-[#fffaf8] p-7 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedSister(null)}
                aria-label="Close message"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e9e6] text-xl text-[#80676d]"
              >
                ×
              </button>

              {/* Modal photo */}
              <div className="relative h-[220px] w-full overflow-hidden rounded-[24px] bg-[#fff0ed]">
                {selectedSister.photo ? (
                  <img
                    src={selectedSister.photo}
                    alt={`${selectedSister.name}'s photo`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-7xl">
                    {selectedSister.emoji}
                  </div>
                )}
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#b76d77]">
                Just For You
              </p>

              <h3 className="mt-2 pr-10 text-3xl font-bold">
                Hey, {selectedSister.name} ❤️
              </h3>

              <p className="mt-2 text-sm font-medium text-[#b76d77]">
                {selectedSister.nickname}
              </p>

              <p className="mt-7 text-[16px] leading-8 text-[#80676d]">
                {selectedSister.message}
              </p>

              <div className="mt-8 rounded-2xl bg-[#fff0ed] p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-[#b76d77]">
                  Official Sister Rating
                </p>

                <p className="mt-2 text-2xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

                <p className="mt-2 text-xs text-[#927b80]">
                  No refunds. No exchanges. 😂
                </p>
              </div>

              <button
                onClick={() => setSelectedSister(null)}
                className="mt-5 min-h-[52px] w-full rounded-full bg-[#3d2930] font-semibold text-white"
              >
                Keep This Secret 🤫
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
