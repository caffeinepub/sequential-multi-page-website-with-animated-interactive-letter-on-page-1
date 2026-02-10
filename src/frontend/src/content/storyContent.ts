/**
 * Centralized story content for all pages
 * Edit this file to change any text displayed in the application
 */

export const storyContent = {
  page1: {
    prompt: '📬 Tap the letter to open it',
  },
  
  letter: {
    closedAriaLabel: 'Click to open the letter',
    closedAlt: 'Closed letter',
    paragraphs: [
      'Hii… 👋🥺',
      `Socha tha nahi karunga is baar…
Fir socha 12 baje to bilkul nahi karunga 😌
Fir socha sirf ek fika sa Happy Birthday ek cake wali emoji 🎂 aur white heart 🤍 bhej dunga…😴`,
      `Lekin sochte–sochte…
abhi kuch-kuch to kar liya hai 😶‍🌫️`,
      'to ab tu isko dekh le 💌✨',
    ],
    nextButton: 'Next Page',
  },
  
  page2: {
    gating: {
      title: 'Hold on! 🌿',
      description: 'Please start your journey from the beginning to experience the full story.',
      buttonLabel: 'Go to Page 1',
    },
    heading: '🎉 Wishing you a HAPPY HAPPY HAPPY WALA 21st BIRTHDAY 🎂💖',
    paragraphs: [
      `Pure 2 saal 10 mahine 28 din ho gaye jab pehli baar tujhe dekha tha…
aur tab bilkul nahi socha tha ki
ye ladki mere se kya-kya karwane wali hai next 2–3 saalon mein 😭💫`,
      `Padhai se leke ladai tak — sab kar liya humne 😅📚⚡
kuch din bahut khush the tab humne bahoot baate Kari 🌸
to kuch not so happy bhi the aur  un dino ko silence ne dominate kia…
but ek cheez hamesha common thi…
you know what? 2 and 1 🤣🤣🤣`,
      `Logical baatoon ki umeed  aur wo bhi ek gadhe se 🫏 😌
agar logic batane laga tu saar phodne pe aa jayegi 😏
to Aaj logic nahi…`,
      'thoda magic dikhaata hoon ✨😉',
    ],
    nextButton: 'Next',
    footer: '© 2026. Built with ❤️ using caffeine.ai',
  },
  
  page3: {
    gating: {
      title: 'Hold on! 🌿',
      description: 'Please continue your journey in order to experience the full story.',
      buttonLabelPage1: 'Go to Page 1',
      buttonLabelPage2: 'Go to Page 2',
    },
    title: '✨ The Magic Show ✨',
    castButton: 'Cast Spell',
    castingButton: 'Casting Spell...',
    magicInProgress: '🌟 Magic in progress... 🌟',
    finalMessage: `चाँदी सोना एक तरफ़,   
तेरा होना एक तरफ़,   
एक तरफ़ तेरी आँखें,  
जादू टोना एक तरफ़।। 
Bass fir iske baad Mai is jaddu me khoo gaya to itna hi kar paya
HAPPY BIRTHDAY 🎂❤️`,
    footer: '© 2026. Built with ❤️ using caffeine.ai',
  },
} as const;
